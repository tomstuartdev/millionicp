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
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Select your block size</h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Design your block
            </h2>
            <div className="sm:flex sm:justify-between">
                {/* Size selector */}
                <RadioGroup value={selectedSize} onChange={setSelectedSize}>
                  <RadioGroup.Label className="block text-sm font-medium text-slate-200">1. Select a block size</RadioGroup.Label>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-4">
                    {product.sizes.map((block) => (
                      <RadioGroup.Option
                        as="div"
                        key={block.name}
                        value={block}
                        className={({ active }) =>
                          classNames(
                            active ? 'ring-2 ring-indigo-500' : '',
                            'relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none'
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="p" className="text-2xl font-display font-semibold text-white">
                              {block.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description as="p" className="mt-1 text-sm text-gray-500">
                              {block.description}
                            </RadioGroup.Description>
                            <div
                              className={classNames(
                                active ? 'border' : 'border-2',
                                checked ? 'border-indigo-500' : 'border-transparent',
                                'absolute -inset-px rounded-lg pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
          </section>

          {/* Order summary */}
          
          <section
          
            aria-labelledby="summary-heading"
            className="mt-16 bg-white bg-opacity-20 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
            
          >
              
            <h2 id="summary-heading" className="text-2xl font-medium text-white">
              Price Calculation
            </h2>
            <dl className="mt-6 space-y-4">
                <div key={selectedSize}>
              <div className="flex items-center mb-2 justify-between">
                <dt className="text-xl text-neutral-200">Product</dt>
                <dd className="text-xl font-light text-white">{selectedSize.name}</dd>
              </div>
              <div className="border-t border-gray-500 pt-4 mb-2 flex items-center justify-between">
                <dt className="flex items-center text-xl text-neutral-200">
                  <span>Price</span>
                  {/* <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how shipping is calculated</span>
                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </a> */}
                </dt>
                <dd className="text-xl font-light text-white">{selectedSize.price} ICP</dd>
              </div>
              {/* <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                  {/* <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how tax is calculated</span>
                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </a> 
                </dt>
                <dd className="text-sm font-medium text-gray-900">$8.32</dd>
              </div> */}
              <div className="border-t border-gray-500 pt-4 flex items-center justify-between">
                <dt className="font-semibold text-2xl text-neutral-200">Order total</dt>
                <dd className="font-semibold text-2xl text-white">{selectedSize.price} ICP</dd>
              </div>
              </div>
            </dl>

            <div className="mt-6">
            </div>
          </section>
          <div className="max-w-2xl mx-auto pt-8 pb-72 sm:px-1 lg:max-w-7xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Place your Block</h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Place your Block
            </h2>
            <div className="pt-1 text-sm font-medium text-slate-200">2. Place your block on the ICP Homepage</div>
          <div className="mt-12">
              <button
                type="submit"
                
                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
              >
                  <Link href='buy'>Confirm placement and continue to Checkout</Link>
                
              </button>
            </div>
            </section>
            </form>
            </div>
          <div className="mx-auto pt-8">
            </div>
        </form>
      </div>
    </div>
  )
}
