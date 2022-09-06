import { ProvinceProps } from 'types'


export const ProvinceItem = (props: ProvinceProps) => 
{
  const {id, name, capital, languages, minimumWage} = props
  return (
    <li>
      <a href={`/${id}`}>
        <img src="" alt=""/>
        <div>
          <h2>{name}</h2>
          <h3>{capital}</h3>
          <span>Minimum wage: CAD${minimumWage}</span>
          <br/>
          <span>Lang: {languages}</span>
        </div>
      </a>
    </li>
)}