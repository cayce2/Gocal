import React from 'react'

const Home = () => {
    return <div className='dark:text-white'>Home</div>
}

export default Home

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yKcGXXG7lXk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-semibold mb-12">Profile</h1>
      <div className="flex flex-col items-center mb-8">
        <div className="bg-green-200 rounded-full p-2 mb-2">
          <CameraIcon className="h-12 w-12 text-gray-700" />
        </div>
        <span className="text-sm font-medium text-gray-700">upload Image</span>
      </div>
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first-name">
              First Name
            </label>
            <Input id="first-name" type="text" placeholder="Jane" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="last-name">
              Last Name
            </label>
            <Input id="last-name" type="text" placeholder="Doe" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
              Email
            </label>
            <Input id="email" type="email" placeholder="jane.doe@example.com" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <Input id="phone" type="tel" placeholder="(555) 555-5555" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-10">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="bio">
              Bio
            </label>
            <Textarea id="bio" placeholder="A short bio..." />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3 text-center">
            <Button className="w-full">Save</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

function CameraIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}