/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import Link from 'next/link'
import Designer from './Designer'

const product = {
    name: 'Everyday Ruck Snack',
    href: '#',
    price: '$220',
    description:
      "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
    imageAlt: 'Model wearing light green backpack with black canvas straps and front zipper pouch.',
    breadcrumbs: [
      { id: 1, name: 'Travel', href: '#' },
      { id: 2, name: 'Bags', href: '#' },
    ],
    sizes: [
      { name: '10x10', size: 10, description: 'Perfect for a reasonable amount of snacks.', price:10,},
      { name: '20x20', size: 20, description: 'Enough room for a serious amount of snacks.', price: 40 },
      { name: '40x40', size: 40,description: 'Enough room for a serious amount of snacks.', price: 160 },
      { name: '100x100', size: 100, description: 'Enough room for a serious amount of snacks.', price:1000 },
    ],
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Example() {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  
  return (
    <div className="bg-black">
      <div className="max-w-2xl mx-auto pt-8 pb-72 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Design your block</h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Design your block
            </h2>
          </section>
          {/* Order summary */}
          
        </form>

        <div className='mt-10'>
          <Designer size={selectedSize.size}/>
        </div>
        <div className="mt-12">
              <button
                type="submit"
                
                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                  <Link href='buy'>Confirm block and deploy to ICP Homepage</Link>
                
              </button>
            </div>
      </div>
    </div>
  )
}