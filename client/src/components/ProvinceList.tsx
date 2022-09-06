import { ProvinceProps } from 'types'

import { ProvinceItem } from './ProvinceItem'

export type ProvincesProps = {
  provincesData: ProvinceProps[]
}

export const ProvinceList = ({provincesData}: ProvincesProps) => 
{
  return (
    <ul>
      {
        provincesData.map(province => 
          <ProvinceItem 
            id={province.id}
            name={province.name}
            capital={province.capital}
            minimumWage={province.minimumWage}
            languages={province.languages}
            key={province.id}
          />)
      }
    </ul>
)}
