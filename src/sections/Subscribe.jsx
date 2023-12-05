
const Subscribe = () => {
  return (
    <section
    id='newsletter'
    className='max-container'
  >
    <div className="shadow-3xl rounded-[20px]">
      <div className="mx-auto max-w-screen-2xl px-4 py-4">
        <div className="flex flex-col items-center p-4 sm:p-8 lg:flex-row lg:justify-between">
          <div className="mb-4 sm:mb-8 lg:mb-0">
          <h3 className='text-center text-2xl font-bold font-palanquin sm:text-2xl lg:text-left lg:text-4xl'>
            Sign Up for
            <span className='text-coral-red'> Updates </span>& Newsletter
          </h3>
            {/* <p className="text-center text-slate-gray info-text lg:text-left">Sign up for our newsletter</p> */}
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <form className="mb-3 flex w-full max-w-md gap-2">
              <input placeholder="Email" className="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-slate-gray outline-none ring-coral-red transition duration-100 focus:ring" />

              <button className="inline-block rounded bg-coral-red px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-coral-red focus-visible:ring active:text-coral-red md:text-base">Send</button>
            </form>

            <p className="text-center text-xs text-slate-gray lg:text-right">By signing up to our newsletter you agree to our <a href="#" className="underline transition duration-100 hover:text-coral-red active:text-coral-red">Term of Service</a> and <a href="#" className="underline transition duration-100 hover:text-coral-red active:text-coral-red">Privacy Policy</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Subscribe