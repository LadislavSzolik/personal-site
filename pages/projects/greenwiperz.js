import Image from "next/image";
import Link from "next/link";
import StandardLayout from "@/layouts/StandardWidthLayout";

export default function Greenwiperz() {
  return (
    <StandardLayout>
      <div className="prose pb-10">
        <h1>Greenwiperz <span className="block text-gray-600">The mobile car wash in Zurich</span></h1>
        
        <figure >          
              <div className="ring-1 ring-gray-100 rounded">
                  <Image
                    src="/projects/greenwiperz/landing-page.jpg"
                    alt="Greenwiperz landing page"
                    width={1000}
                    height={631}
                  
                  />
              </div>        
          <figcaption>Greenwiperz landing page</figcaption>
        </figure>
        <h2>Table of content</h2>
        <ul>
          <li>
            <a href="#goal">The goal of the web app</a>
          </li>
          <li>
            <a href="#role">My role</a>
          </li>
          <li>
            <a href="#techstack">Tech stack I used</a>
          </li>
          <li>
            <a href="#responsive">Responsive design</a>
          </li>
          <li>User authentication</li>
          <li>Handle credit card payment</li>
          <li>Invoice generation</li>
          <li>Internationalization (German and English) </li>
          <li>Mailing</li>
          <li>Timeslot management</li>
          <li>Other features</li>
        </ul>

        <a id="goal">
          <h3>The goal of the web app</h3>
        </a>
        <p>
          A startup called Greenwiperz provides an eco friendly, mobile car
          washing service in Zürich city. They needed a website where prospects
          can learn about their services and prices. Apart from a static landing
          page they wanted to provide an easy way to book and pay for this
          service.
        </p>
        <p>
          A customer can enter the car to be washed, the location where and
          select a timeslot. Right after the booking comes the online payment
          and confirmation mail.
        </p>
        <a id="role">
          <h3>My role</h3>
        </a>
        <p>
          I had the pleasure to wear multiple hats on this project. Strating
          from the logo design, researching the hosting service, finding the
          right payment provider and developing the application.
        </p>

        <a id="techstack">
          <h3>Tech stack I used</h3>
        </a>
        <ul>
          <li>
            <a href="https://laravel.com/" target="_blank">
              Laravel
            </a>
          </li>
          <li>
            <a href="https://laravel-livewire.com/" target="_blank">
              Livewire
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com/" target="_blank">
              Tailwind CSS
            </a>
          </li>
          <li>SQL DB</li>
          <li>
            Hosted on{" "}
            <a href="https://www.hostpoint.ch/" target="_blank">
              hostpoint.ch
            </a>
          </li>
        </ul>

        <a id="responsive">
          <h3>Responsive design</h3>
        </a>
        <p>
          The entire web app was designed for desktop and mobile. For example
          the booking entry adapts based on the form factor.
        </p>
        <div className="flex space-x-4">
          <div className="shadow-md" >
              <Image
                src="/projects/greenwiperz/create-booking.jpg"
                alt="Greenwiperz landing page"
                width={1332}
                height={1229}                
              />
          </div>
          <div className="shadow-md">
              <Image
                src="/projects/greenwiperz/create-booking-mobile.jpg"
                alt="Greenwiperz landing page"
                width={382}
                height={1229}
              />
          </div>
        </div>
        <a id="other">
          <h3>Other features</h3>
        </a>

      </div>
    </StandardLayout>
  );
}
