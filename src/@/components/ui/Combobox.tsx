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
import { isEmpty } from "ramda"
import * as React from "react"

export type SelectsType = {
  value: string
  label: string
}
type ComboboxProps = {
  addQuery: (tag: string, value: string) => void
  removeQuery: (tag: string) => void
  selects: SelectsType[]
  selectName: string
}

export function Combobox(props: ComboboxProps) {
  const { addQuery, removeQuery, selects, selectName } = props
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-auto p-5 justify-between border-gray-200 rounded-full"
        >
          {value
            ? selects.find((select) =>
              select.value.toLocaleLowerCase() === value.toLocaleLowerCase()
            )?.label
            : `Select ${selectName}...`}
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
                  addQuery(selectName, currentValue)
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
                  removeQuery(selectName)
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
