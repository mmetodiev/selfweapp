import { 
  MonitorPlay, 
  Image as ImageIcon, 
  Users, 
  Zap, 
  UserCircle, 
  KeyRound 
} from 'lucide-react';

function App() {
  const logo = "/selfweapp/images/logo.png";

  return (
    <main className='flex-1 w-full min-h-screen flex-col items-center justify-between p-4 md:p-8 lg:p-12 max-w-[1200px] mx-auto'>
      <header className="w-full">
        <nav className="bg-white border-gray-200 px-4 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <img src={logo} className="mr-3 h-12" alt="Selfwe Logo" />
              <span className="self-center text-3xl font-extrabold whitespace-nowrap dark:text-white">SELFWE</span>
            </a>

          </div>
        </nav>
      </header>

      <section className="bg-white dark:bg-gray-900 w-full">
        <div className="grid px-4 py-6 mx-auto lg:gap-8 xl:gap-0 lg:py-12 lg:grid-cols-12 border-1 border-gray-200 rounded-xl shadow-lg my-4 md:my-6">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Share Moments, Create Together</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Selfwe brings friends and family closer, no matter the distance. Create beautiful photo collages together in real-time and turn everyday moments into shared masterpieces that everyone can contribute to.
            </p>

            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Start Creating Together
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/selfweapp/images/iso.png" alt="Friends creating a collage together" />
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 w-full">
        <div className="py-6 px-4 mx-auto sm:py-12 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Sharing Photos is Fun. Creating Together is Magical.</h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">Transform how you connect with loved ones by building beautiful memories together, even when you're miles apart.</p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
              <div className="relative flex justify-center items-center mb-6">
                <div className="absolute w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900"></div>
                <div className="relative flex justify-center items-center w-16 h-16">
                  <MonitorPlay size={36} strokeWidth={1.25} className="text-primary-600 dark:text-primary-300" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">Create Together, Live</h3>
              <p className="text-gray-500 dark:text-gray-400">Watch your collage come to life as friends and family add their photos in real-time – it's like being in the same room, crafting memories together.</p>
            </div>
            <div className="p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
              <div className="relative flex justify-center items-center mb-6">
                <div className="absolute w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900"></div>
                <div className="relative flex justify-center items-center w-16 h-16">
                  <ImageIcon size={36} strokeWidth={1.25} className="text-primary-600 dark:text-primary-300" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">Simple, Playful Editing</h3>
              <p className="text-gray-500 dark:text-gray-400">Arrange, resize, and style photos with intuitive tools that make creative collaboration effortless and fun for everyone.</p>
            </div>
            <div className="p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
              <div className="relative flex justify-center items-center mb-6">
                <div className="absolute w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900"></div>
                <div className="relative flex justify-center items-center w-16 h-16">
                  <Users size={36} strokeWidth={1.25} className="text-primary-600 dark:text-primary-300" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">Staying Connected</h3>
              <p className="text-gray-500 dark:text-gray-400">Share moments that matter with the people who matter most – whether they're across town or across the world.</p>
            </div>
            <div className="p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
              <div className="relative flex justify-center items-center mb-6">
                <div className="absolute w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900"></div>
                <div className="relative flex justify-center items-center w-16 h-16">
                  <Zap size={36} strokeWidth={1.25} className="text-primary-600 dark:text-primary-300" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">Instant Collaboration</h3>
              <p className="text-gray-500 dark:text-gray-400">Experience the joy of creating together in real-time – see each addition appear instantly as your shared artwork evolves.</p>
            </div>
            <div className="p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
              <div className="relative flex justify-center items-center mb-6">
                <div className="absolute w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900"></div>
                <div className="relative flex justify-center items-center w-16 h-16">
                  <UserCircle size={36} strokeWidth={1.25} className="text-primary-600 dark:text-primary-300" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">Your Creative Community</h3>
              <p className="text-gray-500 dark:text-gray-400">Build your personal gallery of shared creations and discover inspiration from other collaborative artists in the community.</p>
            </div>
            <div className="p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
              <div className="relative flex justify-center items-center mb-6">
                <div className="absolute w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900"></div>
                <div className="relative flex justify-center items-center w-16 h-16">
                  <KeyRound size={36} strokeWidth={1.25} className="text-primary-600 dark:text-primary-300" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold dark:text-white">Quick Start, More Fun</h3>
              <p className="text-gray-500 dark:text-gray-400">Sign in with a single click and start creating together in seconds – because sharing moments should be simple.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App