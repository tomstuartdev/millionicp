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
            <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase mt-8">TERMS & CONDITIONS</h2>
                <ul role="list ">
                  <li>Quis elit egestas venenatis mattis dignissim.</li>
                  <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                  <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                </ul>
                <p>
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet
                  velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus
                  egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
                </p>
                <h3>How we’re different</h3>
                <p>
                  Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                  Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa,
                  lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.
                </p>
                <p>
                  Mauris ullamcorper imperdiet nec egestas mi quis quam ante vulputate. Vel faucibus adipiscing lacus,
                  eget. Nunc fermentum id tellus donec. Ut metus odio sit sit varius non nunc orci. Eu, mi neque, ornare
                  suspendisse amet, nibh. Facilisi volutpat lectus id sapien dis mauris rhoncus. Est rhoncus, interdum
                  imperdiet ac eros, diam mauris, tortor. Risus id sit molestie magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  