/* This example requires Tailwind CSS v2.0+ */
import logo from '../public/images/logo.svg'
import plug from '../public/images/plug.png'
import Image from 'next/image'
import Link from 'next/link'
const navigation = [
    { name: '1 million pixels', href: 'about' },
    { name: '0.1 ICP / pixel', href: 'about' },
    { name: 'Find out more', href: 'about' },
   
  ]
  
  export default function Example() {
    return (
      <header className="bg-black sm:py-4">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-2 sm:py-6 flex flex-col sm:flex-row items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex flex-row items-center">
             
                
                 <Image
                 height={100}
                 width={100}
                  src={logo}
                  alt=""
                /> 
                 <Link className="flex flex-row" href='/'>
                <h1 className="inline my-auto ml-8 font-regular font-abd text-xl sm:text-5xl text-white item-center">The <span className="font-semibold">ICP</span> Homepage</h1>
              </Link>
              <div className="hidden mx-auto sm:space-x-16 ">
                {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-sm uppercase font-regular text-white opacity-50 hover:text-indigo-50">
                    {link.name}
                  </a>
                  
                ))}
                
              </div>
            </div>
            <div className="sm:ml-10 space-x-4 flex flex-col w-full sm:w-fit ">
              <div className="inline-block px-24 hover:cursor-pointer border items mx-8  bg-neutral-800 bg-opacity-50 py-2 px-4 border-1/2 border-orange-400 flex flex-row shadow-2xl shadow-orange-500 hover:shadow-orange-500 hover:shadow-xl  rounded-md text-base font-medium text-white hover:bg-black">
              <Image className="flex" src={plug} height={40} width={40}/>
              <Link
                href="buytwo"
                className=""
              >
                  
                <h1 className="my-auto text-lg sm:text-xl ml-2 mr-2 item-center font-abd">Buy a space<span className="hidden sm:display">pixels</span></h1>
              </Link>
              </div>
            
            </div>
          </div>
          <div className="py-4 flex cursor-pointer flex-wrap justify-center space-x-4 sm:space-x-12 mx-8 shadow-lg shadow-bg-orange-400 bg-gradient-to-r from-blue-600 via-pink-500 to-orange-500 rounded-lg overflow-hidden">
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-sm sm:text-xl font-abd font-medium text-white hover:text-indigo-50">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    )
  }
  