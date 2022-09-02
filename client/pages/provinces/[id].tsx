import Head from 'next/head'
import { useRouter } from 'next/router'

import type { NextPage } from 'next'
const ProvincePage: NextPage = () => {
  const router = useRouter();

  //TODO: fetches an id of router.query.provinceId

  return (
    <div>
      <Head>
        <title>
          Province page
        </title>
      </Head>
      Province page
    </div>
  )
}

export default ProvincePage
