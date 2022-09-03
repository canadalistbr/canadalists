import Head from 'next/head'
import { useRouter } from 'next/router'

const ProvincePage = ({title = "Province Page"}) => {
  const router = useRouter();

  //TODO: fetches an id of router.query.provinceId

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

export default ProvincePage
