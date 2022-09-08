//TODO: get data from backend
import { ProvincesData } from 'components/data'
import { ProvinceList } from 'components/ProvinceList'
import Head from 'next/head'

const Provinces = ({title = "Provinces List"}) => {
  return (
    <div>
      <Head>
        <title>
          {title}
        </title>
      </Head>
      <h1>{title}</h1>
      <ProvinceList provincesData={ProvincesData}/>
    </div>
  )
}

export default Provinces
