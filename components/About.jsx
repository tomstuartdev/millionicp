/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, CursorClickIcon, ColorSwatchIcon, PencilIcon  } from '@heroicons/react/outline'

const transferFeatures = [
  {
    id: 1,
    name: 'Pick your block size',
    description:
      'Pixels on the ICP Homepage are available in 100 pixel blocks, with each block measuring 10X10 pixels.',
    icon: CursorClickIcon,
  },
  {
    id: 2,
    name: '1 pixel = 0.1 ICP',
    description:
      'There are three block tiers avaiable: 10x10 (10 ICP) 20x20 (40 ICP) and 40x40 (160 ICP).',
    icon: ColorSwatchIcon,
  },
  {
    id: 3,
    name: 'Get creative',
    description:
      'You can buy as many blocks of pixels as you like, as long as there are some available (see the live stats in the top right corner of the page)',
    icon: PencilIcon,
  },
]
export default function Example() {
    return (
      <div className="relative bg-black">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-3/5"
              src="https://images.unsplash.com/photo-1638414154639-0fbc5bceb80f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="leading-6 text-blue-400 font-semibold tracking-wide uppercase">Buy Pixels</h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400 sm:text-8xl">
                A piece of ICP history.
              </h3>
              <p className="mt-8 text-lg text-gray-500">
                Remember the Million Dollar Homepage? We&apos;re bringing it back and making it better on the Internet Computer. Leave your mark on a timeless piece of community-generated digital art.
              </p>
              <div className="mt-5 prose prose-indigo text-gray-500">
              <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-2xl leading-6 font-medium text-blue-400">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>
            
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-4">
        <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase mt-8">TERMS & CONDITIONS</h2>
                <ul role="list ">
                  <li className="mt-4 text-neutral-400">ICP Homepage is timeless. Once a block is registered it will never be edited.</li>
                  <li className="mt-4 text-neutral-400">Every participant wallet will receive an NFT of the final homepage, once it is finished - this will be tradable on Entrepot.</li>
                  <li className="mt-4 text-neutral-400">To contact the ICP Homepage, please visit our Twitter account @ICPHomepage</li>
                </ul>
                <p className="mt-4 text-neutral-400">
                  The ICP Homepage team does not take responsibility for errors made in the pixel grid selection process. If you wish to connect multiple grids together, that is your choice - but once a pixel grid is places on the ICP Homepage, it cannot be modified to it&apos;s placing changed. Anyone is welcome to submit to the ICP Homepage, and no exceptions will be made to pricing. This means no discounts, promotional freebies or priority will be given. The Homepage is entirely built by the community.
              </p>
        </div>
      </div>
    )
  }
  