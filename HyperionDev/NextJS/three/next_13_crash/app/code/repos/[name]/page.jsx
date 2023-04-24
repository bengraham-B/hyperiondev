import { Suspense } from 'react'
import React from 'react'
import Link from 'next/link'

import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/repoDirs'

const RepoPage = ({ params: { name } }) => {
  return (
    <div className='card'>
    	<Link href="/code/repos" className='btn btn-back'>Back To Repositories</Link>

		<Suspense fallback={<div>Loading Repos...</div>}>
       		<Repo name={name}/>
		</Suspense>

		<Suspense fallback={<div>Loading Directories...</div>}>
	   		<RepoDirs name={name} />
		</Suspense>

    </div>
  )
}

export default RepoPage