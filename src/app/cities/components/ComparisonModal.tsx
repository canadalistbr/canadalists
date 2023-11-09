'use client'
import { CityModel } from "@core/domain/models"
import { getCityByPromise } from "@core/main/api/cities"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import { useQueries } from "@tanstack/react-query"
import { useCompareCities } from "context/ComparisonContext"
import { isUndefined } from "ramda-adjunct"
import { CityOverViewTable } from "./CityOverViewTable"


export type ComparisonModalProps = {
  isOpen: boolean
  onOpenChange: () => void
  cities: CityModel[]
}

export function ComparisonModal(props: ComparisonModalProps) {
  const { isOpen, onOpenChange, cities } = props
  const { selectedCities, replaceCityBy } = useCompareCities()

  const allCitiesNames = cities.map(({ name }) => name)
  const citiesToComparePromise = useQueries({
    queries: selectedCities.map((city) => {
      return {
        queryKey: ['city', city],
        queryFn: () => getCityByPromise(city),
      }
    }),
  })

  return (
    <Modal size="5xl" backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent >
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Compare these cities</ModalHeader>
            <ModalBody className="flex-row justify-center">
              {citiesToComparePromise.map(({ data, isLoading, error }) => {
                // TODO: manager Errors and Loading properly
                if (isLoading || isUndefined(data)) {
                  return <h1>Loadings RIGHT HERE MATHERFYCK..........</h1>
                }
                if (error) {
                  return <h1>ERROR HERE MATHERFYCK..........</h1>
                }
                const cityData = data.data
                return (
                  <CityOverViewTable
                    key={cityData.id}
                    replaceCityBy={replaceCityBy}
                    disabledCities={selectedCities}
                    allCitiesNames={allCitiesNames}
                    cityData={cityData} />
                )
              })}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )

}