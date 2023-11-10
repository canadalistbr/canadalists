'use client'
import { CityModel } from "@core/domain/models";
import { useDisclosure } from "@nextui-org/react";
import { useCompareCities } from "context/ComparisonContext";
import { isEmpty } from "ramda";
import { ComparisonButton } from "./ComparisonButton";
import { ComparisonModal } from "./ComparisonModal";


function getLabel(cities: string[]) {
  if (cities.length === 1) {
    return `Select one more city to compare`
  }
  if (cities.length === 2) {
    return `Compare ${cities.join(' and ')}`
  }
}

type ComparisonDialogProps = {
  cities: CityModel[]
}

export function ComparisonDialog(props: ComparisonDialogProps) {
  const { selectedCities, removeAllCities } = useCompareCities()

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const hasCitiesToCompare = !isEmpty(selectedCities)

  // Required 2 selected cities to enable comparison
  const isButtonDisabled = selectedCities.length === 1

  return (
    <>
      {hasCitiesToCompare ?
        <ComparisonButton
          isDisabled={isButtonDisabled}
          onClick={onOpen}
          onCancel={removeAllCities}
        >
          {getLabel(selectedCities)}
        </ComparisonButton>
        : null}
      <ComparisonModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        // TODO: fix this prop drilling (state managemnt or compose component)
        {...props}
      />
    </>
  );
}
