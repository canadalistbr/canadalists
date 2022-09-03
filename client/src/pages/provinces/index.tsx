import Head from 'next/head'

const Provinces = ({title = "Provinces List"}) => {
  return (
    <div>
      <Head>
        <title>
          {title}
        </title>
      </Head>
      {title}
    </div>
  )
}

export default Provinces
