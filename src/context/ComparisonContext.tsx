'use client'
import { noop } from 'ramda-adjunct'
import * as React from 'react'
type ComparisonContextType = {
  selectedCities: string[]
  addCity: (name: string) => void
  removeCity: (name: string) => void
  removeAllCities: () => void
  maxSelection: number
}
const ComparisonContext = React.createContext<ComparisonContextType>({
  selectedCities: [],
  addCity: noop,
  removeCity: noop,
  removeAllCities: noop,
  maxSelection: 2
})

export type ComparisonProviderProps = React.PropsWithChildren<{}>

export function ComparisonProvider({ children }: ComparisonProviderProps) {
  const [selectedCities, setSelectedCitiesNames] = React.useState<string[]>([])
  function addCity(name: string) {
    setSelectedCitiesNames([...selectedCities, name])
  }
  function removeCity(name: string) {
    const newArr = selectedCities.filter(city => city !== name)
    setSelectedCitiesNames(newArr)
  }

  function removeAllCities() {
    setSelectedCitiesNames([])
  }

  return <ComparisonContext.Provider value={{
    selectedCities,
    addCity,
    removeCity,
    removeAllCities,
    maxSelection: 2
  }}>
    {children}
  </ComparisonContext.Provider>
}


export function useCompareCities() {
  const context = React.useContext(ComparisonContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

