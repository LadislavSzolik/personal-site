import StandardLayout from "@/layouts/StandardWidthLayout";

export default function HomePage() {
  return (
    <StandardLayout>
      <main >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">About me</h1>
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:space-x-16 my-8">
            <div>
              <h2 className="py-3 text-3xl font-extrabold tracking-tight text-gray-900">Intro</h2>
              <p className="prose" >
                I am coming from a small village in Slovakia called Kamenicna
                (Keszegfalva). It is located at the border of Slovakia and
                Hungary, therefore I speak both languages, plus German and of
                course, English.
                </p>
                <p className="prose">
                  I consider myself a technologist and phylospher. It means I
                  like to learn new technologies and I believe they can improve
                  our lifes. But on the other hand, I know it is not all
                  sunshine and happiness. The question what keeps me thinking,
                  what is the right balance and where we are heading right now.
                </p>
            </div>
            <img
              alt="Portrait"
              src="/portrait.png"
              className="mb-8 sm:mb-0 w-44 rounded-xl shadow-md sm:shadow-2xl"
            />
          </div>

          <h2 className="py-4 text-3xl font-extrabold tracking-tight text-gray-900" >Professional experience</h2>
       

        <div className="py-4 sm:py-8">
          <ul>
            <li>
              <div className="relative pb-8">
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex items-start space-x-3">
                  <div className="relative">
                    <svg
                      className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="160"
                      height="160"
                      viewBox="0 0 160 160"
                    >
                      <rect width="160" height="160" fill="#000" />
                      <path
                        fill="#FFF"
                        fill-rule="nonzero"
                        d="M109.615753,97.6612645 C114.032262,99.0734332 118.44877,100.956325 123.330175,103.780662 C111.475335,84.0103008 90.555031,62.5924095 69.8671742,48.7060843 C75.2134743,54.1193975 83.8140439,65.8874697 86.1385222,78.3616262 C94.506644,84.4810237 102.40987,91.0711441 109.615753,97.6612645 Z"
                      />
                      <path
                        fill="#FFF"
                        fill-rule="nonzero"
                        d="M109.615753,97.6612645 C99.3880484,94.3662043 90.7874788,94.1308429 84.5113874,94.8369272 C86.8358657,89.423614 87.0683135,83.7749394 86.1385222,78.3616262 C70.5645177,67.0642769 53.1309306,57.1790963 36.6271348,49.8828915 C48.7144219,58.1205421 62.1963959,82.3627707 67.7751438,108.252529 C79.8624309,104.722108 98.2258093,102.133132 122.167936,110.370782 C118.216323,106.134276 114.032262,101.89777 109.615753,97.6612645 Z"
                      />
                      <path d="M85.9060744,78.3616262 C86.8358657,83.7749394 86.6034179,89.423614 84.5113874,94.8369272 C91.0199266,94.1308429 99.6204963,94.3662043 109.615753,97.6612645 C102.40987,91.0711441 94.506644,84.4810237 85.9060744,78.3616262 Z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-sm">
                        <a href="#" className="font-medium text-gray-900">
                          UX Designer at Credit Suisse AG in Zurich
                        </a>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Jan 2018 - present
                      </p>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <p>
                        <ul className="list-inside list-disc">
                          <li>High level user journeys for new projects</li>
                          <li>
                            Interactive prototyping using Origami Studio and
                            invision
                          </li>
                          <li>Usability testing - in person and remote</li>
                          <li>
                            Creating and maintaining the design system used by
                            online and mobile banking
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="relative pb-8">
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex items-start space-x-3">
                  <div className="relative">
                    <svg
                      className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-2 ring-gray-50"
                      xmlns="http://www.w3.org/2000/svg"
                      width="160"
                      height="160"
                      viewBox="0 0 160 160"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <rect width="160" height="160" fill="#FFF" />
                        <polygon
                          fill="#F51500"
                          points="40.734 115.587 120.075 115.587 115.869 43.639 51.642 47.781 42.017 66.647"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Java Developer at ELCA Informatik AG in Zurich
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Jun 2016 - Dec 2017
                      </p>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <p>
                        <ul className="list-inside list-disc">
                          <li>
                            Clarification and implementation of new features
                          </li>
                          <li>
                            Plan and deliver Sprints using Agile Methologies
                          </li>
                          <li>
                            Perform 2nd and 3rd Level Support of new system
                          </li>
                          <li>
                            Participated in a 7x24h support team to solve
                            potential critical production issues
                          </li>
                          <li>Project planning and estimation</li>
                          <li>Design user interface and user flows</li>
                          <li>Perform user test sessions</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="relative pb-8">
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex items-start space-x-3">
                  <div>
                    <div className="relative px-1">
                      <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                        <svg
                          className="h-5 w-5 text-gray-500"
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
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-1.5">
                    <div className="text-sm text-gray-500">
                      <p className="font-medium text-gray-900">
                        Tablet app to improve event management
                      </p>
                      Developed a solution to replace the standard paper based
                      event hostess tool.
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="relative pb-8">
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex items-start space-x-3">
                  <div>
                    <div className="relative px-1">
                      <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                        <svg
                          className="h-5 w-5 text-gray-500"
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
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-1.5">
                    <div className="text-sm text-gray-500">
                      <p className="font-medium text-gray-900">
                        Software to secure payment transactions
                      </p>
                      Developed new features for the system responsible to
                      encrypt/decrypt payment data.
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="relative pb-8">
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex items-start space-x-3">
                  <div className="relative">
                    <svg
                      className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-2 ring-gray-50"
                      xmlns="http://www.w3.org/2000/svg"
                      width="160"
                      height="160"
                      viewBox="0 0 160 160"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <rect width="160" height="160" fill="#FFF" />
                        <polygon
                          fill="#CE00FF"
                          points="46 41 115 72.535 115 89.592 46 120 46 97.722 85.007 80.5 46 64.242"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Software Engineer at Accenture AG in Zurich
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Jul 2012 - May 2016
                      </p>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <p>
                        <ul className="list-inside list-disc">
                          <li>
                            Analyze, develop and test Backend (Java) and
                            frontend (JSF)
                          </li>
                          <li>
                            2nd and 3rd level application support (Splunk)
                          </li>
                          <li>Architecting backend and frontend</li>
                          <li>Support production deployment</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="relative pb-8">
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex items-start space-x-3">
                  <div>
                    <div className="relative px-1">
                      <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                        <svg
                          className="h-5 w-5 text-gray-500"
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
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-1.5">
                    <div className="text-sm text-gray-500">
                      <p className="font-medium text-gray-900">
                        Enhance banking software for trade management
                      </p>
                      <ul>
                        <li>
                          Delivered new replication features to ensure secure
                          data replication from other systems.
                        </li>
                        <li>Analyzed and developed new frontend features</li>
                        <li>Maintained database schema</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="relative pb-8">
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex items-start space-x-3">
                  <div className="relative">
                    <svg
                      className="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-2 ring-gray-50"
                      xmlns="http://www.w3.org/2000/svg"
                      width="160"
                      height="160"
                      viewBox="0 0 160 160"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <rect width="160" height="160" fill="#FFF" />
                        <polygon
                          fill="#CE00FF"
                          points="46 41 115 72.535 115 89.592 46 120 46 97.722 85.007 80.5 46 64.242"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Engineer at Accenture AG in Bratislava
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Aug 2011 - Jun 2012
                      </p>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <p>
                        <ul className="list-inside list-disc">                    
                          <li>
                          Clarification and implementation of new features
                          </li>
                          <li>Architecting backend</li>                        
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="relative pb-8">
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div className="relative flex items-start space-x-3">
                  <div>
                    <div className="relative px-1">
                      <div className="h-8 w-8 bg-gray-100 rounded-full ring-8 ring-white flex items-center justify-center">
                        <svg
                          className="h-5 w-5 text-gray-500"
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
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-1.5">
                    <div className="text-sm text-gray-500">
                      <p className="font-medium text-gray-900">
                        Develop electronic tax return system
                      </p>
                      <ul>
                        <li>
                          Developed globel information provider component
                        </li>
                        <li>Analyzed and developed new frontend features</li>                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="relative pb-8">
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 "
                  aria-hidden="true"
                ></span>
                <div className="relative flex items-start space-x-3">
                  <div className="relative">
                    <img
                      className="h-10 w-10 rounded-full bg-white p-2 flex items-center justify-center ring-2 ring-gray-50"
                     src="/stiefel-icon.png"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        Adobe Flash developer at Stiefel eurocart s.r.o in Bratislava
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Jun 2007 - Jul 2011
                      </p>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <p>
                        <ul className="list-inside list-disc">                    
                          <li>
                          Released 6 standalone desktop applications for education. Each app supported 5 different languages.
                          </li>                                               
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </main>
    </StandardLayout>
  );
}
