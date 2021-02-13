import Link from "next/link";

const Nav = () => (
  <nav>
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative flex justify-between h-20">
        <div className="flex-1 flex items-stretch justify-start">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <a>
                <img
                  alt="Home"
                  src="/home-teal-cyan.svg"
                  className=" h-8 w-auto"
                />
              </a>
            </Link>
          </div>
          <div className="ml-6 flex space-x-4 sm:space-x-7">
            <Link href="/projects">
              <a className="text-gray-600 inline-flex items-center font-sm hover:underline hover:text-black">
                Projects
              </a>
            </Link>
            <Link href="/articles">
              <a className="text-gray-600 inline-flex items-center font-sm hover:underline hover:text-black">
                Articles
              </a>
            </Link>
            <Link href="/journal">
              <a className="text-gray-600 inline-flex items-center font-sm hover:underline hover:text-black">
                Journal
              </a>
            </Link>
            <Link href="/about">
              <a className="text-gray-600 inline-flex items-center font-sm hover:underline hover:text-black">
                About
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
