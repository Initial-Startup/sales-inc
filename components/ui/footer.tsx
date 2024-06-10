import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</a> · <a href="#0" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</a>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Integrations</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#platformIntegrations" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Salesforce</a>
              </li>
              <li className="mb-2">
                <a href="#platformIntegrations" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Dynamics 365</a>
              </li>
              <li className="mb-2">
                <a href="#platformIntegrations" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Hubspot</a>
              </li>
              <li className="mb-2">
                <a href="#platformIntegrations" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Customizable APIs</a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Avtar Creation</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#Avtar" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Custom Trainig</a>
              </li>
              <li className="mb-2">
                <a href="#Avtar" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Template Options</a>
              </li>
              <li className="mb-2">
                <a href="#Avtar" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Personalization</a>
              </li>
              <li className="mb-2">
                <a href="#Avtar" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Ai-Powered</a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Benefits</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Increase Engagement</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Higher Conversion Rates</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Improve Efficiency</a>
              </li>
            </ul>
          </div>


          {/* 5th block  */}

          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Home</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About us</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Company values</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Pricing</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Privacy Policy</a>
              </li>
            </ul>
          </div>

          

          {/* 6th block */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
            <p className="text-sm text-gray-600 mb-4">Get the latest news and articles to your inbox every month.</p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                  <div className="relative flex items-center max-w-xs">
                    <input id="newsletter" type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                      <svg className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </button>
                  </div> */}
          {/* Success message */}
          {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
          {/* </div>
              </div>
            </form>
          </div> */}

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.063 9L16.558 13.475 20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="#0" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </a>
            </li>
            <li className="ml-4">
              <a href="#0" className="mt-2 flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Instagram">
                <svg className="w-7 h-7 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.013-4.947.072-1.473.066-2.782.349-3.873 1.44-1.091 1.091-1.374 2.4-1.44 3.873-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.066 1.473.349 2.782 1.44 3.873 1.091 1.091 2.4 1.374 3.873 1.44 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.473-.066 2.782-.349 3.873-1.44 1.091-1.091 1.374-2.4 1.44-3.873.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.066-1.473-.349-2.782-1.44-3.873-1.091-1.091-2.4-1.374-3.873-1.44-1.28-.059-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.204 0-4-1.796-4-4s1.796-4 4-4 4 1.796 4 4-1.796 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; VideoEmailAi.com. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}
