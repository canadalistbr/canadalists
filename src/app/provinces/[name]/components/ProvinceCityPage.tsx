'use client'

export function ProvinceCityPage({city}: { city: string }){

  //TODO: fetch city data from `${process.env.BASE_URL}/api/province/${id}`
  return (
    <>
      <div>{city}</div>
      <div>city data</div>
    </>
  )
}