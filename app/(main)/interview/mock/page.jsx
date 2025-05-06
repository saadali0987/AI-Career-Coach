import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Quiz from '../_components/Quiz'

const MockInterviewPage = () => {
  return (
    <div className='container mx-auto space-y-4 py-6'>
      <div className='flex flex-col space-y-2 mx-2'>
        <Link href="/interview">
            <div className='flex gap-2 items-center cursor-pointer pl-0'>
              <ArrowLeftIcon className='h-4 w-4' />
              Back to interview preparation
            </div>
        </Link>

        <div>
          <h1 className='text-6xl font-bold gradient-title'>Mock Interview</h1>
          <p className='text-muted-foreground'>Test your knowledge with inustry-specific questions</p>
        </div>


        <Quiz />
      </div>
    </div>
  )
}

export default MockInterviewPage