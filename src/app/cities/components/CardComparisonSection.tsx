'use client'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useCompareCities } from "context/ComparisonContext"

type ComparisonSectionProps = {
  label: string
}
export function ComparisonSection({ label }: ComparisonSectionProps) {

  const { addCity, selectedCities, removeCity, maxSelection } = useCompareCities()
  const reachedMaxCitiesSelection = selectedCities.length === maxSelection

  return (
    <div className="flex self-center 
    flex-col justify-center items-center gap-2" >
      <Label className="text-2xl  cursor-pointer text-gray-600">Compare {label}</Label>
      {/* TODO: have background red when switched on */}
      <Switch
        className="cursor-grabbing"
        onClick={(e) => {
          e.stopPropagation()
          !selectedCities.includes(label) && !reachedMaxCitiesSelection ? addCity(label) : removeCity(label)
          return
        }}
        disabled={reachedMaxCitiesSelection && !selectedCities.includes(label)}
        checked={selectedCities.includes(label)}
      />
    </div>
  )
}