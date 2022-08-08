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
      <header className="bg-black py-4">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex flex-row items-center">
             
                
                 <Image
                 height={100}
                 width={100}
                  src={logo}
                  alt=""
                /> 
                 <Link className="flex flex-row" href='/'>
                <h1 className="inline my-auto ml-8 font-regular text-3xl text-white item-center">The <span className="font-semibold">ICP</span> Homepage</h1>
              </Link>
              <div className="hidden mx-auto sm:space-x-16 ">
                {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-sm uppercase font-regular text-white opacity-50 hover:text-indigo-50">
                    {link.name}
                  </a>
                  
                ))}
                
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <div className="inline-block hover:cursor-pointer bg-neutral-100 bg-opacity-50 py-2 px-4 border flex flex-row border-white border-0.5 rounded-md text-base font-medium text-white hover:bg-black">
              <Image className="flex" src={plug} height={40} width={40}/>
              <Link
                href="buy"
                className=""
              >
                  
                <h1 className="my-auto text-xl ml-2 mr-2 item-center">Buy a space<span className="hidden sm:display">pixels</span></h1>
              </Link>
              </div>
            
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-12  border border-0.5 border-white bg-gradient-to-r from-blue-600/50 via-pink-500/50 to-amber-400/50 rounded-lg ">
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-xl font-medium text-white hover:text-indigo-50">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    )
  }
  