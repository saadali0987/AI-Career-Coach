import React from 'react'
import OnBoardingForm from './_components/OnBoardingForm'
import { getUserOnBoardingStatus } from '@/actions/user'
import { redirect } from 'next/navigation'
import { industries } from '@/data/industries'

const OnBoardingPage =async () => {
  const {isOnboarded} = await getUserOnBoardingStatus()
  if (isOnboarded){
    redirect("/dashboard")
  }
  return (
    <main>
        <OnBoardingForm industries={industries} />
    </main>
  )
}

export default OnBoardingPage