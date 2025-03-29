function App() {
  const logo = "/images/logo.png";

  return (
    <main className='flex-1 w-screen min-h-screen flex-col items-center justify-between p-24'>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <img src={logo} className="mr-3 h-12" alt="Selfwe Logo" />
              <span className="self-center text-3xl font-extrabold whitespace-nowrap dark:text-white">SELFWE</span>
            </a>

          </div>
        </nav>
      </header>

      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-6 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 border-1 border-gray-200 rounded-xl shadow-lg my-6">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Collages Reimagined</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Selfwe is a collaborative online collage maker that allows you to create and share collages with your friends and family.
            </p>
            
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Learn More
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/images/iso.png" alt="Collage from Selfwe" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App