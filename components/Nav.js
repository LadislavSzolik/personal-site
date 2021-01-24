import Link from "next/link";

const Nav = () => (
  <nav>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="ml-6 flex space-x-4">
            <Link href="/projects">
              <a className="text-gray-700 inline-flex items-center  font-sm hover:underline">
                Projects
              </a>
            </Link>
            <Link href="/articles">
              <a className="text-gray-700 inline-flex items-center  font-sm hover:underline">
                Articles
              </a>
            </Link>
            <Link href="/journal">
              <a className="text-gray-700 inline-flex items-center  font-sm hover:underline">
                Journal
              </a>
            </Link>
            <Link href="/about">
              <a className="text-gray-700 inline-flex items-center  font-sm hover:underline">
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
