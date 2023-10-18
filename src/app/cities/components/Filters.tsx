'use client'

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { XCircle } from "lucide-react";
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { isEmpty } from "ramda";
import React from 'react';

const booleanTags = [
  { tag: 'bikeFriendly', label: '🚲 Bike Friendly' },
  { tag: 'nature', label: '🌲 Nature' },
  { tag: 'festivals', label: '🎉 Festivals' }
]



export function Filters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const hasFilters = !isEmpty(searchParams.toString())
  const params = new URLSearchParams(searchParams)


  function addQueryString(name: string, value: string): void {
    params.set(name, value)
    router.push(`${pathname}?${params.toString()}`)
  }

  function removeQueryString(name: string): void {
    params.delete(name)
    router.push(`${pathname}?${params.toString()}`)
  }


  return (
    <div className="flex gap-4">
      {booleanTags.map(({ tag, label }, i) => {
        const isTagFiltered = searchParams.get(tag)
        const variant = isTagFiltered ? 'secondary' : 'outline'
        const className = cn('p-3 cursor-pointer', isTagFiltered && 'bg-slate-100 border-red-400 text-red-400')
        const onClick = !isTagFiltered ? () => addQueryString(tag, 'true') : () => removeQueryString(tag)
        const xCircle = isTagFiltered ? <XCircle size={15} /> : null
        return (
          <Badge
            key={i}
            variant={variant}
            className={className}
            onClick={onClick}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">{label}</span> {xCircle}
            </div>
          </Badge>
        )
      })}
      {hasFilters ?
        <Badge className="bg-slate-100 hover:bg-red-400 hover:text-white transition-all duration-500 border-red-400 text-red-400">
          <Link href={'/cities'}>
            <div className="p-1 cursor-pointer flex items-center gap-2">
              <span className="text-xl">Remove all filters</span> <XCircle size={15} />
            </div>

          </Link>
        </Badge>
        : null
      }
    </div>
  )
}

