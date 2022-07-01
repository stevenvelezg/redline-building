import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useEffect, useState} from "react"

export default function Home() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    });
  };

  return (
    <div data-theme="business" className={styles.container}>
      <Head>
        <title>Redline Building Services</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Initial Header/Contact Form */}
      <header class="bg-gray-900 pattern">
        <div class="container px-6 mx-auto">
          <div class="flex flex-col items-center py-6 lg:h-[32rem] lg:flex-row">
            <div class="lg:w-1/2">
              <h2 class="text-4xl font-semibold text-gray-100">Redline Building Services</h2>
              <p class="mt-3 text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            </div>

            <div class="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
              <div class="max-w-sm">
                <div class="md:p-5 text-center">
                  <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">Get A Quote</h2>
                        
                    <div class="mt-6 ">
                      <form onSubmit={handleSubmit}>
                        <div class="items-center lg:-mx-2 md:flex">

                          <div class="w-full lg:mx-2">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>
                            <input class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" id="name" type="text" onChange={e => setName(e.target.value)}/>
                          </div>

                          <div class="w-full lg:mx-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">E-mail</label>
                            <input class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" id="email" type="email" onChange={e => setEmail(e.target.value)}/>
                          </div>
                        </div>

                        <div class="w-full mt-4">
                          <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Message</label>
                          <textarea class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" id="message" type="text" rows="4" onChange={e => setMessage(e.target.value)}></textarea>
                        </div>

                        <div class="flex justify-center mt-6">
                          <button type="submit" class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Send Message</button>
                        </div>
                      </form>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section class="bg-white dark:bg-gray-800">
        <div class="container px-6 py-8 mx-auto">
          <div class="items-center lg:flex">
            <div class="lg:w-1/2 lg:h-80">
              <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Our Background</h2>

              <p class="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
              Anthony Milohnic, our founder and president started a Union carpentry company with his brothers in 1995, based on his passion to provide the best customer service possible, he left the family business and started Redline Building Services. <br/> <br/> Redline building services team, lead by Roberto Velez, all share in Anthony’s passion and are committed to the highest levels of quality, budget and innovation to ensure that each project results in both a satisfied customer and a lasting relationship.
              </p>

            </div>

            <div class="mt-8 lg:mt-0 lg:w-1/2">
              <div class="flex items-center justify-center">
                <div class="max-w-lg lg:h-80">
                  <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Our Mission</h2>

                  <p class="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                  We strive to build lasting relationships by delivering the highest quality, fit and finish to each and every project.<br/><br/>
                  We are driven by core values:
                  </p>
                  <ul className='list-disc ml-8 text-gray-500 dark:text-gray-400'>
                    <li>Focus on safety,</li>
                    <li>Provide a family atmosphere,</li>
                    <li>Every team member matters,</li>
                    <li>Unsurpassed customer satisfaction,</li>
                    <li>Make it happen!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section class="bg-gray-100 dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl text-center font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">explore our <br/> services</h1>
                
          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">

            <div class="max-w-300 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img class="object-cover w-full h-56" src="coldForm.jpg"/>
                <div class="p-5 text-center">
                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Cold Form Metal Framing</h1>
                </div>
            </div>
            <div class="max-w-300 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img class="object-cover w-full h-56" src="lightForm.jpg"/>
                <div class="p-5 text-center">
                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Light Metal Framing</h1>
                </div>
            </div>
            <div class="max-w-300 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img class="object-cover w-full h-56" src="ceilingTruss.jpg"/>
                <div class="p-5 text-center">
                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Ceiling Trusses</h1>
                </div>
            </div>

            <div class="max-w-300 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img class="object-cover w-full h-56" src="roughCarpentry.jpg"/>
                <div class="p-5 text-center">
                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Rough Carpentry</h1>
                </div>
            </div>

            <div class="max-w-300 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img class="object-cover w-full h-56" src="finishedCarpentry.jpg"/>
                <div class="p-5 text-center">
                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Finished Carpentry</h1>
                </div>
            </div>

            <div class="max-w-300 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img class="object-cover w-full h-56" src="acousticCeiling.jpg"/>
                <div class="p-5 text-center">
                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Acoustical Ceilings</h1>
                </div>
            </div>

            <div class="max-w-300 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img class="object-cover w-full h-56" src="specialtyCeiling.jpg"/>
                <div class="p-5 text-center">
                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Specialty Ceilings</h1>
                </div>
            </div>

            <div class="max-w-300 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img class="object-cover w-full h-56" src="drywall.jpg"/>
                <div class="p-5 text-center">
                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Drywall Installation</h1>
                </div>
            </div>

            <div class="max-w-300 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img class="object-cover w-full h-56" src="door.jpg"/>
                <div class="p-5 text-center">
                    <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Doors and Hardware</h1>
    
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery */}
      <section class="overflow-hidden text-gray-700 bg-white dark:bg-gray-900">

        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl text-center align-center font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Our Previous <br/>Projects</h1>
        </div>

        
        <div class="lg:flex lg:flex-row">

          <div class="flex flex-col lg:basis-1/3 lg:gap-8 mt-8 mx-8 lg:mx-auto items-center justify-center max-w-sm mx-auto">
            <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: "url("+ 'finishedCarpentry.jpg' + ")"}}></div>
            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 bg-gray-200 dark:bg-gray-700 dark:bg-gray-800">
                <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">BondVet</h3>
            </div>
          </div>

          <div class="flex flex-col lg:basis-1/3 lg:gap-8 mt-8 mx-8 lg:mx-auto items-center justify-center max-w-sm mx-auto">
            <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: "url("+ 'theMillenium.jpg' + ")"}}></div>
            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 bg-gray-200 dark:bg-gray-700 dark:bg-gray-800">
              <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">The Millenium</h3>
            </div>
          </div>

          <div class="flex flex-col lg:basis-1/3 lg:gap-8 mt-8 mx-8 lg:mx-auto items-center justify-center max-w-sm mx-auto">
            <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: "url("+ 'tsc.jpg' + ")"}}></div>
            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 bg-gray-200 dark:bg-gray-700 dark:bg-gray-800">
              <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Tractor Supply Co.</h3>
            </div>
          </div>
        </div>

        <div class="lg:flex lg:flex-row">

          <div class="flex flex-col lg:basis-1/3 lg:gap-8 mt-8 mx-8 lg:mx-auto items-center justify-center max-w-sm mx-auto">
            <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: "url("+ 'finishedCarpentry.jpg' + ")"}}></div>
            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 bg-gray-200 dark:bg-gray-700 dark:bg-gray-800">
                <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">BondVet</h3>
            </div>
          </div>

          <div class="flex flex-col lg:basis-1/3 lg:gap-8 mt-8 mx-8 lg:mx-auto items-center justify-center max-w-sm mx-auto">
            <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: "url("+ 'theMillenium.jpg' + ")"}}></div>
            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 bg-gray-200 dark:bg-gray-700 dark:bg-gray-800">
              <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">The Millenium</h3>
            </div>
          </div>

          <div class="flex flex-col lg:basis-1/3 lg:gap-8 mt-8 mx-8 lg:mx-auto items-center justify-center max-w-sm mx-auto">
            <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: "url("+ 'tsc.jpg' + ")"}}></div>
            <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 bg-gray-200 dark:bg-gray-700 dark:bg-gray-800">
              <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Tractor Supply Co.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-white dark:bg-gray-800">
        <div class="container px-6 py-4 mx-auto">

        <hr class="h-px my-6 bg-gray-300 border-none dark:bg-gray-700"/>  
        <div class="lg:flex">
          <div class="w-full -mx-6 lg:w-2/5">
            <div class="px-6">
              <div>
                <a href="#" class="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Redline Building Services</a>
              </div>
                        
              {/* <p class="max-w-md mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet.</p> */}

            </div>
          </div>

          <div class="mt-6 lg:mt-0 lg:flex-1">
            <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div className="md:col-end-5 md:text-right">
                <h3 class="text-gray-700 uppercase dark:text-white">Contact</h3>
                <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+1 526 654 8965</span>
                <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">info@redline-building.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr class="h-px my-6 bg-gray-300 border-none dark:bg-gray-700"/>
        </div>
      </footer>
    </div>
  )
}
