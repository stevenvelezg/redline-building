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
                        <div class="items-center -mx-2 md:flex">

                          <div class="w-full mx-2">
                            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>
                            <input class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" id="name" type="text" onChange={e => setName(e.target.value)}/>
                          </div>

                          <div class="w-full mx-2 mt-4 md:mt-0">
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
            <div class="lg:w-1/2">
              <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Who We Are</h2>

              <p class="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum in sed non alias, fugiat, commodi nemo ut fugit corrupti dolorem sequi ex veniam consequuntur id, maiores beatae ipsa omnis aliquam?
              </p>

            </div>

            <div class="mt-8 lg:mt-0 lg:w-1/2">
              <div class="flex items-center justify-center lg:justify-end">
                <div class="max-w-lg">
                  <img class="object-cover object-center w-full h-64 rounded-md shadow" src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section class="bg-gray-100 dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">explore our <br/> services</h1>
                
          <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
          </p>
                
          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
              <span class="inline-block text-blue-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </span>

              <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Construction</h1>

              <p class="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>
            </div>

            <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
              <span class="inline-block text-blue-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </span>

              <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Demolition</h1>

              <p class="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>
            </div>

            <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
              <span class="inline-block text-blue-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </span>

              <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Service 3</h1>

              <p class="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section class="overflow-hidden text-gray-700 bg-white dark:bg-gray-900">

        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Our Previous Projects</h1>
                  
          <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
          </p>
        </div>

        <div class="container px-5 pt-2 pb-10 mx-auto lg:pt-12 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"/>
              </div>
            </div>

            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"/>
              </div>
            </div>

            <div class="flex flex-wrap w-1/3">
                <div class="w-full p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"/>
                </div>
              </div>

              <div class="flex flex-wrap w-1/3">
                <div class="w-full p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"/>
                </div>
              </div>

              <div class="flex flex-wrap w-1/3">
                <div class="w-full p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"/>
                </div>
              </div>

              <div class="flex flex-wrap w-1/3">
                <div class="w-full p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
                </div>
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
