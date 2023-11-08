'use client'
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { getCityByPromise } from "@core/main/api/cities";
import { useDisclosure } from "@nextui-org/react";
import { useQueries } from "@tanstack/react-query";
import cn from "clsx";
import { useCompareCities } from "context/ComparisonContext";
import { XCircle } from "lucide-react";
import { isEmpty } from "ramda";
import { ComparisonModal } from "./ComparisonModal";


function getLabel(cities: string[]) {
  if (cities.length === 1) {
    return `Select one more city to compare`
  }
  if (cities.length === 2) {
    return `Compare ${cities.join(' and ')}`
  }
}

export function ComparisonDialog() {
  const { selectedCities, removeAllCities } = useCompareCities()
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const hasCitiesToCompare = !isEmpty(selectedCities)
  const isButtonDisabled = selectedCities.length === 1

  const citiesToCompare = useQueries({
    queries: selectedCities.map((city) => {
      return {
        queryKey: ['city', city],
        queryFn: () => getCityByPromise(city),
      }
    }),
  })

  return (
    <>
      {hasCitiesToCompare ?
        <Button
          className={cn("cursor-pointer fixed bottom-0 left-1/2 -translate-x-1/2 p-10",
            isButtonDisabled && 'opacity-50 pointer-events-none'
          )}
          onClick={onOpen}
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
        </Button> : null}
      <ComparisonModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        citiesToCompare={citiesToCompare}
      />

    </>
  );
}
