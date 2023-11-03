'use client'
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import cn from "clsx";
import { useCompareCities } from "context/ComparisonContext";
import { XCircle } from "lucide-react";
import { isEmpty } from "ramda";


function getLabel(cities: string[]) {
  if (cities.length === 1) {
    return `Select one or two more cities`
  }
  if (cities.length === 2) {
    return `Compare ${cities.join(' and ')}`
  }
  if (cities.length === 3) {
    const citiesCopy = [...cities]
    citiesCopy.splice(citiesCopy.length - 1, 0, ' and ')
    citiesCopy.splice(1, 0, ' , ')
    return `Compare ${citiesCopy.join(' ')}`
  }
}

export function ComparisonButton() {
  const { selectedCities, removeAllCities } = useCompareCities()
  const hasCitiesToCompare = !isEmpty(selectedCities)
  const isButtonDisabled = selectedCities.length === 1


  return hasCitiesToCompare ? (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn("cursor-pointer fixed bottom-0 left-1/2 -translate-x-1/2 p-10",
            isButtonDisabled && 'opacity-50 pointer-events-none'
          )}
          disabled={isButtonDisabled}
        >
          <div className="flex gap-2 items-center justify-center">
            <Label className={
              cn('cursor-pointer hover:underline text-3xl',
                isButtonDisabled && 'cursor-not-allowed hover:no-underline'
              )
            }>
              {getLabel(selectedCities)}
            </Label>
            {!isButtonDisabled ? <XCircle className={`${isButtonDisabled && 'pointer-events-none'}`} onClick={(e) => {
              e.stopPropagation()
              removeAllCities()
            }} /> : null}
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  ) : null
}

