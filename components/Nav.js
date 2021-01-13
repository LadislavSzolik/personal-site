import Link from 'next/link'

const Nav = () => (

  <nav>
    <div className="max-w-5xl mx-auto px-2 sm:px-8 ">
      <div className="relative flex justify-between h-20">
        <div className="flex-1 flex items-stretch justify-start">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/"><a ><img alt="LS" src="/ls.svg" className=" h-8 w-auto"/></a></Link>
            </div>
              <div className="ml-6 flex space-x-4">
                <Link href="/articles"><a className="text-gray-700 inline-flex items-center  font-sm hover:underline">Articles</a></Link>
                <Link href="/journal"><a className="text-gray-700 inline-flex items-center  font-sm hover:underline">Journal</a></Link>                
                <Link href="/projects"><a href="/projects" className="text-gray-700 inline-flex items-center  font-sm hover:underline">Projects</a></Link>
              </div>
            </div>

          </div>
        </div>
  </nav>
);

export default Nav
