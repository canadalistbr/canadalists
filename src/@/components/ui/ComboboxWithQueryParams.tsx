"use client"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from "@/components/ui/command"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Check, ChevronsUpDown, XCircle } from "lucide-react"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { isEmpty } from "ramda"
import * as React from "react"
type ParamsProps = {
  params: URLSearchParams
  router: AppRouterInstance
  pathname: string
}
export type SelectsType = {
  value: string
  label: string
}
type ComboboxProps = {
  addQuery?: (tag: string, value: string, paramsProps: ParamsProps) => void
  removeQuery?: (tag: string, paramsProps: ParamsProps) => void
  selects: SelectsType[]
  selectName: string
}

export function ComboboxWithQueryParams(props: ComboboxProps) {
  const { addQuery, removeQuery, selects, selectName } = props
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const paramsProps: ParamsProps = {
    router,
    params,
    pathname
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-auto p-5 justify-between border-gray-200 rounded-full ${value && 'bg-red-500 text-white'}`}
        >
          <Label className="text-lg">
            {value
              ? selects.find((select) =>
                select.value.toLocaleLowerCase() === value.toLocaleLowerCase()
              )?.label
              : `Select ${selectName}...`}
          </Label>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-white  rounded-xl ">
        <Command >
          <CommandInput placeholder={`Search ${selectName}...`} />
          <CommandEmpty>No {selectName} found.</CommandEmpty>
          <CommandGroup >
            {selects.map((select) => (
              <CommandItem
                key={value}
                onSelect={(currentValue) => {
                  addQuery?.(selectName, currentValue, paramsProps)
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === select.value ? "opacity-100" : "opacity-0"
                  )}
                />
                <Label className="cursor-pointer text-base">{select.label}</Label>
              </CommandItem>
            ))}
            {!isEmpty(value) ?
              <CommandItem
                onSelect={() => {
                  setValue("")
                  removeQuery?.(selectName, paramsProps)
                  setOpen(false)
                }}
                className='flex gap-3'
              >
                <XCircle className="text-red-400" size={12} />
                <Label className="text-red-400 cursor-pointer text-base flex">
                  Deselect
                </Label>
              </CommandItem>
              : null
            }
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover >
  )
}
