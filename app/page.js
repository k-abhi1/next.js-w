import React from 'react'

export default function page() {
  return (
    <>
   <section class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap">
    <div class="lg:w-full mx-auto">
      <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        {/* <img alt="gallery" class="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://dummyimage.com/820x340"> */}
        <div class="text-center relative z-10 w-full">
          <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
          <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      </div>
      </div>
     </section>
    </>
  )
}
