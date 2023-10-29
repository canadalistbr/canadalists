'use client'

import { Badge, BadgeProps } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Language } from "@core/domain/models";
import { XCircle } from "lucide-react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from 'next/link';
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { isEmpty } from "ramda";
import React, { useState } from 'react';
import { ComboboxWithQueryParams as ProvinceSelect, SelectsType } from "../../../@/components/ui/ComboboxWithQueryParams";
import { languagesMap } from "../helpers";
import { CitySize, Winter } from "../__utils__";


const provinces: SelectsType[] = [
  {
    value: "british columbia",
    label: "British Columbia",
  },
  {
    value: "alberta",
    label: "Alberta",
  },
  {
    value: "saskatchewan",
    label: "Saskatchewan",
  },
  {
    value: "manitoba",
    label: "Manitoba",
  },
  {
    value: "ontario",
    label: "Ontario",
  },
  {
    value: "new brunswick",
    label: "New Brunswick",
  },
  {
    value: "nova Scotia",
    label: "Nova Scotia",
  },
  {
    value: "prince Edward Island",
    label: "Prince Edward Island",
  },
  {
    value: "newfoundland and labrador",
    label: "Newfoundland and Labrador",
  },
  {
    value: "quebec",
    label: "Quebec",
  },
]


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
type LanguagesType = {
  tag: "fr" | "en"
  label: 'French' | 'English'
  filterLabel: Language
}
const languages: LanguagesType[] = [
  { tag: 'fr', label: 'French', filterLabel: 'Fr' },
  { tag: 'en', label: 'English', filterLabel: 'En' },
]

type ChekedWinterState = Record<WinterTagsType['label'], boolean>
type ChekedSizeState = Record<CitySizeTagsType['label'], boolean>


type ParamsProps = Partial<{
  params: URLSearchParams
  router: AppRouterInstance
  pathname: string
  searchParams: ReadonlyURLSearchParams
}>

function addQueryString(name: string, value: string, paramsProps: ParamsProps): void {
  const { params, pathname, router } = paramsProps
  params?.set(name, value)
  router?.push(`${pathname}?${params?.toString()}`)
}

function removeQueryString(name: string, paramsProps: ParamsProps): void {
  const { params, pathname, router } = paramsProps
  params?.delete(name)
  router?.push(`${pathname}?${params?.toString()}`)
}

function isRadioButtonChecked(tag: string, label: string, params: URLSearchParams) {
  return params.get(tag) === label
}


function getStyles(tag: string, value: string, paramsProps: ParamsProps) {
  const { searchParams } = paramsProps
  const isTagFiltered = searchParams?.get(tag)
  const variant = isTagFiltered ? 'secondary' : 'outline' as BadgeProps['variant']
  const className = cn('p-2 px-6 cursor-pointer hover:bg-gray-100 transition-all duration-300', isTagFiltered && 'bg-slate-100 border-red-400 text-red-400')

  const onClick = !isTagFiltered ? () => addQueryString(tag, value, paramsProps) : () => removeQueryString(tag, paramsProps)
  const xCircle = isTagFiltered ? <XCircle size={15} /> : null
  return {
    variant,
    className,
    onClick,
    xCircle,
    isTagFiltered
  }
}

export function Filters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const hasFilters = !isEmpty(searchParams.toString())
  const params = new URLSearchParams(searchParams)

  const paramsProps: Partial<ParamsProps> = {
    router,
    params,
    pathname,
    searchParams
  }

  const initialWinterCheckedState: ChekedWinterState = {
    Mild: false,
    Cold: false,
    Freezing: false
  }
  const [checkedWinter, setCheckedWinter] = useState<ChekedWinterState>(initialWinterCheckedState);

  const initialSizeCheckedState: ChekedSizeState = {
    Small: false,
    Medium: false,
    Big: false
  }
  const [checkedSize, setCheckedSize] = useState<ChekedSizeState>(initialSizeCheckedState);


  const labelClassName = "cursor-pointer text-lg flex gap-2 items-center justify-center"

  return (
    // TODO: Add carousel for sm screen sizes
    <div className="flex md:flex-wrap  items-center gap-4">
      {booleanTags.map(({ tag, label }) => {
        const { variant, className, onClick, xCircle } = getStyles(tag, 'true', paramsProps)
        return (
          <Badge
            key={label}
            variant={variant}
            className={className}
            onClick={onClick}
          >
            <div className="flex items-center gap-2">
              <Label className={labelClassName}>{label}</Label> {xCircle}
            </div>
          </Badge>
        )
      })}
      <RadioGroup className="flex" onValueChange={(value: WinterTagsType['label']) => {
        addQueryString('winter', value, paramsProps)
      }
      }>
        {winterTags.map(({ tag, label }) => {
          const { className, xCircle } = getStyles(tag, label, paramsProps)
          const selectedTag = isRadioButtonChecked(tag, label, params)
          return (
            <Badge
              className={selectedTag ? className : 'p-2 px-4 hover:bg-gray-100 transition-all duration-300 '}
              variant={'outline'}
              key={label}
              onClick={() => {
                if (selectedTag) {
                  setCheckedWinter({
                    ...initialWinterCheckedState,
                  })
                  removeQueryString(tag, paramsProps)
                } else {
                  setCheckedWinter({
                    ...checkedWinter,
                    [label]: true
                  })
                  addQueryString(tag, label, paramsProps)
                }
              }}
            >
              <RadioGroupItem className="invisible" checked={checkedWinter[label]} value={label} id={label} />
              <Label className={labelClassName} htmlFor={label}>
                {Winter[label]} {selectedTag ? xCircle : undefined}
              </Label>
            </Badge>
          )
        })}
      </RadioGroup>
      <RadioGroup className="flex" onValueChange={(value: CitySizeTagsType['label']) => {
        addQueryString('size', value, paramsProps)
      }
      }>
        {citySizeTags.map(({ tag, label }) => {
          const { className, xCircle } = getStyles(tag, label, paramsProps)
          const selectedTag = params.get(tag) === label
          return (
            <Badge
              className={selectedTag ? className : 'p-2 px-4 hover:bg-gray-100 transition-all duration-300'}
              variant={'outline'}
              key={label}
              onClick={() => {
                const selectedTag = params.get('size')
                if (selectedTag === label) {
                  setCheckedSize({
                    ...initialSizeCheckedState,
                  })
                  removeQueryString(tag, paramsProps)
                } else {
                  setCheckedSize({
                    ...checkedSize,
                    [label]: true
                  })
                  addQueryString(tag, label, paramsProps)
                }
              }}
            >
              <RadioGroupItem className="invisible" checked={checkedSize[label]} value={label} id={label} />
              <Label className={labelClassName} htmlFor={label}>
                {CitySize[label]} {selectedTag ? xCircle : undefined}
              </Label>
            </Badge>
          )
        })}
      </RadioGroup>
      {languages.map(({ filterLabel, label, tag }) => {
        const { variant, className, onClick, xCircle } = getStyles(tag, "true", paramsProps)
        return (
          <Badge variant={variant}
            className={className}
            onClick={onClick}
          >
            <Label className={labelClassName}>{languagesMap[filterLabel]} {label} {xCircle}</Label>
          </Badge>
        )
      })}
      <ProvinceSelect
        selects={provinces}
        selectName="province"
        addQuery={addQueryString}
        removeQuery={removeQueryString}

      />
      {hasFilters ?
        <Badge className="cursor-pointer  px-4 bg-slate-100 hover:bg-red-400 hover:text-white transition-all duration-500 border-red-400 text-red-400">
          <Link href={'/cities'}>
            <div className="p-1 cursor-pointer flex items-center gap-2">
              <Label className={labelClassName}>Remove all filters</Label> <XCircle size={15} />
            </div>
          </Link>
        </Badge>
        : null
      }
    </div>
  )
}

