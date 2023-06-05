'use client'
import { City } from '@core/domain/models'
import { Tab } from '@headlessui/react'
import { useState } from 'react'
import { classNames } from '../../../../../utils/classNames'
import { ProvinceCityPage } from './ProvinceCityPage'

export type ProvinceCitiesType = {
  cities: City[],
}

export function ProvinceCities({ cities }: ProvinceCitiesType) {
  const [currentCity, setCurrentCity] = useState(cities[0].name)

  return (
    <Tab.Group
      onChange={(tabIndex: number) => setCurrentCity(cities[tabIndex].name)}
    >
      <Tab.List className="flex flex-col">
          {cities.map((city) => (
            <Tab
              key={city.name}
              className={({ selected }) =>
                classNames(
                  selected
                    ? 'border-red-400 text-red-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-2xl'
                )
              }
              name={city.name}
            >
              {city.name}
            </Tab>
          ))}
      </Tab.List>

      <ProvinceCityPage city={currentCity}/>

    </Tab.Group>
  )
}
