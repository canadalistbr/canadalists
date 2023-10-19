'use client'

import { Badge, BadgeProps } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { XCircle } from "lucide-react";
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { isEmpty } from "ramda";
import React, { useState } from 'react';
import { CitySize, Winter } from "../__utils__";

type BooleanTagsType = {
  tag: 'bikeFriendly' | 'nature' | 'festivals'
  label: "🚲 Bike Friendly" | "🌲 Nature" | "🎉 Festivals"
}
const booleanTags: BooleanTagsType[] = [
  { tag: 'bikeFriendly', label: '🚲 Bike Friendly' },
  { tag: 'nature', label: '🌲 Nature' },
  { tag: 'festivals', label: '🎉 Festivals' }
]

type WinterTagsType = {
  tag: string
  label: "Mild" | "Cold" | "Freezing"
}
const winterTags: WinterTagsType[] = [
  { tag: 'winter', label: 'Cold' },
  { tag: 'winter', label: 'Freezing' },
  { tag: 'winter', label: 'Mild' },
]

type CitySizeTagsType = {
  tag: 'size'
  label: "Small" | "Medium" | "Big"
}
const citySizeTags: CitySizeTagsType[] = [
  { tag: 'size', label: 'Small' },
  { tag: 'size', label: 'Medium' },
  { tag: 'size', label: 'Big' },
]
export function Filters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const hasFilters = !isEmpty(searchParams.toString())
  const params = new URLSearchParams(searchParams)

  type ChekedWinterState = Record<WinterTagsType['label'], boolean>
  const initialWinterCheckedState: ChekedWinterState = {
    Mild: false,
    Cold: false,
    Freezing: false
  }
  const [checkedWinter, setCheckedWinter] = useState<ChekedWinterState>(initialWinterCheckedState);


  type ChekedSizeState = Record<CitySizeTagsType['label'], boolean>
  const initialSizeCheckedState: ChekedSizeState = {
    Small: false,
    Medium: false,
    Big: false
  }
  const [checkedSize, setCheckedSize] = useState<ChekedSizeState>(initialSizeCheckedState);

  function addQueryString(name: string, value: string): void {
    params.set(name, value)
    router.push(`${pathname}?${params.toString()}`)
  }

  function removeQueryString(name: string): void {
    params.delete(name)
    router.push(`${pathname}?${params.toString()}`)
  }

  function isRadioButtonChecked(tag: string, label: string) {
    return params.get(tag) === label
  }

  function getStyles(tag: string, value: string) {
    const isTagFiltered = searchParams.get(tag)
    const variant = isTagFiltered ? 'secondary' : 'outline' as BadgeProps['variant']
    const className = cn('p-3 cursor-pointer', isTagFiltered && 'bg-slate-100 border-red-400 text-red-400')
    const onClick = !isTagFiltered ? () => addQueryString(tag, value) : () => removeQueryString(tag)
    const xCircle = isTagFiltered ? <XCircle size={15} /> : null
    return {
      variant,
      className,
      onClick,
      xCircle,
      isTagFiltered
    }
  }

  return (
    <div className="flex flex-wrap gap-4">
      {booleanTags.map(({ tag, label }) => {
        const { variant, className, onClick, xCircle } = getStyles(tag, 'true')
        return (
          <Badge
            key={label}
            variant={variant}
            className={className}
            onClick={onClick}
          >
            <div className="flex items-center gap-2">
              <Label className="text-base cursor-pointer ">{label}</Label> {xCircle}
            </div>
          </Badge>
        )
      })}

      <RadioGroup className="flex" onValueChange={(value: WinterTagsType['label']) => {
        addQueryString('winter', value)
      }
      }>
        {winterTags.map(({ tag, label }) => {
          const { className, xCircle } = getStyles(tag, label)
          const selectedTag = isRadioButtonChecked(tag, label)
          return (
            <Badge
              className={selectedTag ? className : 'p-3 '}
              variant={'outline'}
              key={label}
              onClick={() => {
                if (selectedTag) {
                  setCheckedWinter({
                    ...initialWinterCheckedState,
                  })
                  removeQueryString(tag)
                } else {
                  setCheckedWinter({
                    ...checkedWinter,
                    [label]: true
                  })
                  addQueryString(tag, label)
                }
              }}
            >
              <RadioGroupItem className="invisible" checked={checkedWinter[label]} value={label} id={label} />
              <Label className="cursor-pointer text-base flex gap-2 items-center justify-center" htmlFor={label}>
                {Winter[label]} {selectedTag ? xCircle : undefined}
              </Label>
            </Badge>
          )
        })}
      </RadioGroup>
      <RadioGroup className="flex" onValueChange={(value: CitySizeTagsType['label']) => {
        addQueryString('size', value)
      }
      }>
        {citySizeTags.map(({ tag, label }) => {
          const { className, xCircle } = getStyles(tag, label)
          const selectedTag = params.get(tag) === label
          return (
            <Badge
              className={selectedTag ? className : 'p-3 '}
              variant={'outline'}
              key={label}
              onClick={() => {
                const selectedTag = params.get('size')
                if (selectedTag === label) {
                  setCheckedSize({
                    ...initialSizeCheckedState,
                  })
                  removeQueryString(tag)
                } else {
                  setCheckedSize({
                    ...checkedSize,
                    [label]: true
                  })
                  addQueryString(tag, label)
                }
              }}
            >
              <RadioGroupItem className="invisible" checked={checkedSize[label]} value={label} id={label} />
              <Label className="cursor-pointer text-base flex gap-2 items-center justify-center" htmlFor={label}>
                {CitySize[label]} {selectedTag ? xCircle : undefined}
              </Label>
            </Badge>
          )
        })}
      </RadioGroup>

      {hasFilters ?
        <Badge className="bg-slate-100 hover:bg-red-400 hover:text-white transition-all duration-500 border-red-400 text-red-400">
          <Link href={'/cities'}>
            <div className="p-1 cursor-pointer flex items-center gap-2">
              <Label className="text-base">Remove all filters</Label> <XCircle size={15} />
            </div>
          </Link>
        </Badge>
        : null
      }
    </div>
  )
}

