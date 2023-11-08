import { CityPromise } from "@core/main/api/cities"
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import { UseQueryResult } from "@tanstack/react-query"
import { CityOverViewTable } from "./CityOverViewTable"


export type ComparisonModalProps = {
  isOpen: boolean
  onOpenChange: () => void
  citiesToCompare: UseQueryResult<CityPromise, Error>[]
}

export function ComparisonModal(props: ComparisonModalProps) {
  const { citiesToCompare, isOpen, onOpenChange } = props
  return (
    <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="max-w-fit">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Compare these cities</ModalHeader>
            <ModalBody className="flex-row justify-center">
              {citiesToCompare.map(({ data, isLoading, isError }) => {
                // TODO: manager Errors and Loading properly
                isLoading && <div>...loading</div>
                isError && <div>...error</div>
                const city = data?.data
                return (
                  <div key={city?.id} >
                    <CityOverViewTable city={city} />
                  </div>
                )
              })}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )

}