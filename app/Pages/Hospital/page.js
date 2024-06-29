import HospitalList from '@/app/components/Hospitals'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
    {/* Header */}
    <header className="bg-blue-500 text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">Hospital Directory</h1>
      </div>
    </header>

    {/* Main Content */}
    <main className="flex-grow container mx-auto px-4 py-8">
      <HospitalList />
    </main>

  </div>
  )
}

export default page
