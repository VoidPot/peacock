function UpdateCard() {
  return (
    <div className="relative flex h-full w-full flex-col break-words rounded-2xl border-0 border-solid border-black/12.5 bg-white bg-clip-border shadow-soft-xl">
      <div className="mb-0 rounded-t-2xl border-b-0 border-solid border-black/12.5 bg-white p-6 pb-0">
        <h6>Orders overview</h6>
        <p className="text-sm leading-normal">
          <i className="fa fa-arrow-up text-lime-500"></i>
          <span className="font-semibold">24%</span> this month
        </p>
      </div>
      <div className="flex-auto p-4">
        <div className="before:border-r-solid relative before:absolute before:left-4 before:top-0 before:h-full before:border-r-2 before:border-r-slate-100 before:content-[''] before:lg:-ml-px">
          <div className="relative mb-4 mt-0 after:clear-both after:table after:content-['']">
            <span className="absolute left-4 z-10 inline-flex h-6.5 w-6.5 -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold text-base">
              <i className="ni ni-bell-55 relative z-10 bg-gradient-to-tl from-primary-600 to-lime-400 bg-clip-text fill-transparent leading-none leading-pro text-transparent"></i>
            </span>
            <div className="relative -top-1.5 ml-11.252 w-auto pt-1.4 lg:max-w-120">
              <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-700">
                $2400, Design changes
              </h6>
              <p className="mb-0 mt-1 text-xs font-semibold leading-tight text-slate-400">
                22 DEC 7:20 PM
              </p>
            </div>
          </div>
          <div className="relative mb-4 after:clear-both after:table after:content-['']">
            <span className="absolute left-4 z-10 inline-flex h-6.5 w-6.5 -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold text-base">
              <i className="ni ni-html5 relative z-10 bg-gradient-to-tl from-red-600 to-rose-400 bg-clip-text fill-transparent leading-none leading-pro text-transparent"></i>
            </span>
            <div className="relative -top-1.5 ml-11.252 w-auto pt-1.4 lg:max-w-120">
              <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-700">
                New order #1832412
              </h6>
              <p className="mb-0 mt-1 text-xs font-semibold leading-tight text-slate-400">
                21 DEC 11 PM
              </p>
            </div>
          </div>
          <div className="relative mb-4 after:clear-both after:table after:content-['']">
            <span className="absolute left-4 z-10 inline-flex h-6.5 w-6.5 -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold text-base">
              <i className="ni ni-cart relative z-10 bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text fill-transparent leading-none leading-pro text-transparent"></i>
            </span>
            <div className="relative -top-1.5 ml-11.252 w-auto pt-1.4 lg:max-w-120">
              <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-700">
                Server payments for April
              </h6>
              <p className="mb-0 mt-1 text-xs font-semibold leading-tight text-slate-400">
                21 DEC 9:34 PM
              </p>
            </div>
          </div>
          <div className="relative mb-4 after:clear-both after:table after:content-['']">
            <span className="absolute left-4 z-10 inline-flex h-6.5 w-6.5 -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold text-base">
              <i className="ni ni-credit-card relative z-10 bg-gradient-to-tl from-red-500 to-yellow-400 bg-clip-text fill-transparent leading-none leading-pro text-transparent"></i>
            </span>
            <div className="relative -top-1.5 ml-11.252 w-auto pt-1.4 lg:max-w-120">
              <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-700">
                New card added for order #4395133
              </h6>
              <p className="mb-0 mt-1 text-xs font-semibold leading-tight text-slate-400">
                20 DEC 2:20 AM
              </p>
            </div>
          </div>
          <div className="relative mb-4 after:clear-both after:table after:content-['']">
            <span className="absolute left-4 z-10 inline-flex h-6.5 w-6.5 -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold text-base">
              <i className="ni ni-key-25 relative z-10 bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text fill-transparent leading-none leading-pro text-transparent"></i>
            </span>
            <div className="relative -top-1.5 ml-11.252 w-auto pt-1.4 lg:max-w-120">
              <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-700">
                Unlock packages for development
              </h6>
              <p className="mb-0 mt-1 text-xs font-semibold leading-tight text-slate-400">
                18 DEC 4:54 AM
              </p>
            </div>
          </div>
          <div className="relative mb-0 after:clear-both after:table after:content-['']">
            <span className="absolute left-4 z-10 inline-flex h-6.5 w-6.5 -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold text-base">
              <i className="ni ni-money-coins relative z-10 bg-gradient-to-tl from-gray-900 to-slate-800 bg-clip-text fill-transparent leading-none leading-pro text-transparent"></i>
            </span>
            <div className="relative -top-1.5 ml-11.252 w-auto pt-1.4 lg:max-w-120">
              <h6 className="mb-0 text-sm font-semibold leading-normal text-slate-700">
                New order #9583120
              </h6>
              <p className="mb-0 mt-1 text-xs font-semibold leading-tight text-slate-400">
                17 DEC
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateCard;
