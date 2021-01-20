import Layout from '../components/Layout';
import Link from 'next/link';


export default function Projects() {
  state = {color: 'blue'};

  return (
    <Layout>
      <div className="prose sm:prose-lg">
        <h1>Playground</h1>

        <h2>Inputs and controls</h2>
        <p >The playtground is where I design and test well crafted, accessible UI inputs and controls. For the style I am using <Link href="https://tailwindcss.com/"><a>Tailwindcss</a></Link> and I am learning to use  <Link href="https://reactjs.org/"><a>ReactJS</a></Link> for interactions.</p>
        <p >Comments</p>
        <ul className="text-gray-500" >
          <li>still missing some ARIA definition</li>
          <li>add a color switcher</li>
        </ul>

        <div className="mt-5">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Email Address</label>
          <div className="mt-1 relative rounded-md shadow-sm" >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" >
              <span className="text-gray-500 sm:text-sm">@</span>
            </div>
            <input type="text" name="email" id="email" autocapitalize="none" className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Other email Address <span className="float-right text-gray-400"> (optional) </span></label>
          <div className="mt-1 relative rounded-md shadow-sm" >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" >
              <span className="text-gray-500 sm:text-sm">@</span>
            </div>
            <input type="text" name="email" id="email" autocapitalize="none" className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button type="button" className="focus:ring-2 focus:ring-blue-500 h-full px-3 text-blue-500 sm:text-sm border-gray-300 border-l  rounded-r-md" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-2" >
          <button type="button" className="inline-flex items-center focus:ring-2 focus:ring-blue-500 text-blue-500 sm:text-sm font-medium hover:text-blue-700" >
            <svg class="-ml-0.5 mr-2 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Add email address</span>
          </button>

        </div>

      </div>



    </Layout>
  );
}

