import Layout from '@/components/Layout'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export default function HomePage() {
  return (
    <Layout>
      <div className="w-full flex flex-col-reverse sm:flex-row">
      <article className="prose lg:prose-lg">            
            <h1 className="mt-4 tracking-tight font-extrabold sm:mt-5 lg:mt-6 ">
              <span className="block">Hi, I am Ladislav</span>
              <span className="sm:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600 block">ux designer and developer</span>
            </h1>
            <div className="max-w-2xl text-gray-600 ">
              <span className="block">I am currently working in Credit Suisse, Zurich as a Senior UX Designer.</span>
              <span className="block">Big part of my work is to design complex web and mobile applications.</span>             
            </div>          
      </article>
      <div className="pb-8 sm:pt-0 sm:pl-12 flex-shrink-0" >
        <img alt="Home" src="/designer.png" className="h-32 md:h-44 lg:h-60" />
      </div>
      </div>

      <section className="mt-16">
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded bg-teal-100 text-teal-600">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="mt-5">
              <dt className="text-lg leading-6 font-medium text-gray-900">My work</dt>
              <dd className="my-2 text-base text-gray-500">
                Showcase of my design and developer work. They are mostly about digital solutions, but I had few illustration projects as well.
              </dd>
              <Link href="/projects"><a className="text-base font-semibold text-teal-600 hover:text-teal-500" >Learn more</a></Link>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded bg-teal-100 text-teal-600">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>

            </div>
            <div className="mt-5">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Blog
          </dt>
              <dd className="my-2 text-base text-gray-500">
                I am write about today's culture and the tech industry which shapes this culture. Yeah, it is fun.</dd>
              <Link href="/journal"><a className="text-base font-semibold text-teal-600 hover:text-teal-500" >Learn more </a></Link>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded bg-teal-100 text-teal-600">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="mt-5">
              <dt className="text-lg leading-6 font-medium text-gray-900">About</dt>
              <dd className="my-2 text-base text-gray-500">This is about my background, experience and future goals.</dd>
              <Link href="/journal"><a className="text-base font-semibold text-teal-600 hover:text-teal-500">Learn more </a></Link>
            </div>
          </div>
        </dl>
      </section>

      <section className="mt-24 max-w-xl mx-auto items-center ">
        <ContactForm />
      </section>

      <section className="prose mt-24">
      <span className="text-gray-500">This website was born out of the inspiration from the creators of the web. <Link href="/uses"><a>Here</a></Link> you can find out my tech stack.</span>
      </section>
      
    </Layout>
  )
}
