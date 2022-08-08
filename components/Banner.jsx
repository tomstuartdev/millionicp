/* This example requires Tailwind CSS v2.0+ */
import { XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function Example() {
  return (
    <div className="relative bg-black">
      <div className="max-w-7xl mx-auto pb-8 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden">We announced a new product!</span>
            <span className="hidden md:inline">When IC Homepage is full, every contributor will receive an NFT of the homepage in their wallet to trade on Entrepot!</span>
            {/* <span className="block sm:ml-2 sm:inline-block">
              <Link href="" className="ml-4 text-white font-light underline">
                
                
              </Link>
            </span> */}
          </p>
        </div>
        
      </div>
    </div>
  )
}
