import Link from "next/link";
import Image from "next/image";
import BaseLayout from "@/layouts/BaseLayout";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <BaseLayout>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 py-8 sm:py-16 lg:py-24">
        <article className="prose lg:prose-lg">
          <div className="flex flex-col-reverse lg:flex-row">
            <h1 className="mt-4 tracking-tight font-extrabold sm:mt-5 lg:mt-6 ">
              <span className="block">Hi, I am Ladislav </span>{" "}
              <span className="sm:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600 block">
                ux designer and developer
              </span>
            </h1>
            <div className="pb-8 sm:pb-0">
              <Image alt="Home" src="/designer.png" width={300} height={161} />
            </div>
          </div>
          <div className=" text-gray-600 ">
            Currently working for Credit Suisse, Zurich as a Senior User
            Experience Designer. Major part of my work is to design complex web
            and mobile applications... it's fun!
          </div>
        </article>
      </section>

      <section className="bg-gray-50 py-8 sm:py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded bg-teal-100 text-teal-600">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  My work
                </dt>
                <dd className="my-2 text-base text-gray-500">
                  Showcase of my design and developer work. They are mostly
                  about digital solutions, but I had few illustration projects
                  as well.
                </dd>
                <Link href="/projects">
                  <a className="text-base font-semibold text-teal-600 hover:text-teal-500">
                    Learn more
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded bg-teal-100 text-teal-600">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Articles
                </dt>
                <dd className="my-2 text-base text-gray-500">
                  I've learned some interesting lessons on the way. In my
                  articles I captured the ones which I believe stay relevant for
                  some time and share them with you.
                </dd>
                <Link href="/articles">
                  <a className="text-base font-semibold text-teal-600 hover:text-teal-500">
                    Learn more{" "}
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded bg-teal-100 text-teal-600">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  About
                </dt>
                <dd className="my-2 text-base text-gray-500">
                  If you want to know more about me and my professional
                  background, this is the place to go.
                </dd>
                <Link href="/about">
                  <a className="text-base font-semibold text-teal-600 hover:text-teal-500">
                    Learn more{" "}
                  </a>
                </Link>
              </div>
            </div>
          </dl>
        </div>
      </section>

      <section className="mt-24 max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose ">
          <span className="text-gray-500 block">
            This website was born out of the inspiration from the creators of
            the web.
          </span>
          <span className="text-gray-500 block">
            <Link href="/uses">
              <a>Here</a>
            </Link>{" "}
            you can find out my tech stack.
          </span>
        </div>
      </section>
    </BaseLayout>
  );
}
