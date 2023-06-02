import { Link } from "@remix-run/react";

export default function NoteIndexPage() {
  return (
    <div className="flex flex-col">
      <div
        id="fullWidthTabContent"
        className="border border-gray-200 dark:border-gray-600"
      >
        <div
          className=" rounded-lg bg-white py-4 dark:bg-gray-800 md:p-4"
          id="stats"
          role="tabpanel"
          aria-labelledby="stats-tab"
        >
          <dl className="mx-auto grid max-w-screen-xl grid-cols-2 gap-8 p-4 text-gray-900 dark:text-white sm:grid-cols-3 sm:p-8 xl:grid-cols-6">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
              <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
              <dd className="text-gray-500 dark:text-gray-400">
                Public repositories
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
              <dd className="text-gray-500 dark:text-gray-400">
                Open source projects
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
              <dd className="text-gray-500 dark:text-gray-400">Contributors</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">90+</dt>
              <dd className="text-gray-500 dark:text-gray-400">
                Top Forbes companies
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl font-extrabold">4M+</dt>
              <dd className="text-gray-500 dark:text-gray-400">
                Organizations
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:pr-6 xl:pr-12">
            <p className="text-6xl font-bold leading-10 text-blue-500">
              92%
              <span className="ml-1 inline-flex items-center gap-x-1 rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium leading-4 text-gray-800 dark:bg-gray-800 dark:text-gray-300">
                <svg
                  className="h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                </svg>
                +7% this month
              </span>
            </p>
            <p className="mt-2 text-gray-500 sm:mt-3">
              of U.S. adults have bought from businesses using Space
            </p>
          </div>
        </div>

        <div className="relative lg:col-span-8 lg:before:absolute lg:before:-left-12 lg:before:top-0 lg:before:h-full lg:before:w-px lg:before:bg-gray-200 lg:before:dark:bg-gray-700">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 lg:grid-cols-4">
            <div>
              <p className="text-3xl font-semibold text-blue-500">99.95%</p>
              <p className="mt-1 text-gray-500">in fulfilling orders</p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-blue-500">2,000+</p>
              <p className="mt-1 text-gray-500">partner with Preline</p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-blue-500">85%</p>
              <p className="mt-1 text-gray-500">this year alone</p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-blue-500">85%</p>
              <p className="mt-1 text-gray-500">this year alone</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="m-auto px-6 py-20 xl:container md:px-12 lg:px-20">
        <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            A Tailus Blocks subscription gives you access to our components and
            more.
          </h2>
        </div>
        <div className="m-auto mt-12 items-center justify-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0 xl:w-10/12">
          <div className="group relative z-10 mx-auto sm:w-7/12 lg:w-4/12">
            <div
              aria-hidden="true"
              className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:group-hover:scale-110"
            ></div>
            <div className="relative space-y-8 p-8">
              <div className="flex items-center justify-between">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white">
                  Alpha
                </h5>
                <div className="relative flex justify-around">
                  <div className="flex">
                    <span className="-ml-6 text-xl font-bold text-sky-500">
                      ₹
                    </span>
                    <span className="leading-0 text-4xl font-bold text-gray-800 dark:text-white">
                      1000
                    </span>
                  </div>
                </div>
              </div>
              <img
                src="images/tanzanite.webp"
                width="512"
                height="512"
                className="m-auto w-16"
                alt="tanzanite illustration"
              />
              <p className="text-center text-gray-600 dark:text-gray-300">
                If you only require access for one developer, this may be the
                plan for you.
              </p>
              <button className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-sky-500 before:bg-sky-50 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-600 dark:before:bg-gray-700">
                <span className="relative text-base font-semibold text-sky-600 dark:text-white">
                  Get Started
                </span>
              </button>
            </div>
          </div>

          <div className="group relative m-auto md:w-10/12 lg:w-8/12">
            <div
              aria-hidden="true"
              className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 transition duration-500 group-hover:scale-105 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:group-hover:scale-110"
            ></div>
            <div className="relative sm:flex">
              <div className="space-y-8 p-8 pb-20 sm:w-7/12 sm:pb-8">
                <div className="flex items-center justify-between">
                  <h5 className="text-xl font-semibold text-gray-700 dark:text-white">
                    Complete pack
                  </h5>
                  <div className="relative flex justify-around">
                    <div className="flex">
                      <span className="-ml-6 text-xl font-bold text-sky-500">
                        $
                      </span>
                      <span className="leading-0 text-4xl font-bold text-gray-800 dark:text-white">
                        1900
                      </span>
                    </div>
                  </div>
                </div>
                <img
                  src="images/premium.webp"
                  width="512"
                  height="512"
                  className="m-auto w-16"
                  alt="premium illustration"
                />
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Wire your account to support 5 developers with a year's worth
                  of unlimited access to tailus blocks!
                </p>
                <div className="absolute inset-x-0 bottom-6 w-full px-6 sm:static sm:px-0">
                  <button className="before:bg-primary relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                    <span className="dark:text-dark relative text-base font-semibold text-white">
                      Start plan
                    </span>
                  </button>
                </div>
              </div>

              <div className="-mt-16 pb-20 sm:mt-0 sm:w-5/12 sm:pb-0">
                <div className="relative h-full before:absolute before:left-0 before:top-1 before:my-auto before:h-0.5 before:w-full before:rounded-full before:bg-gray-200 dark:before:bg-gray-700 sm:pt-0 sm:before:inset-y-0 sm:before:h-[85%] sm:before:w-0.5">
                  <div className="relative -mt-1 h-full overflow-x-auto pb-6 pt-7 sm:-ml-1 sm:pl-1">
                    <ul className="flex h-full w-max justify-center space-x-2 px-6 sm:w-full sm:flex-col sm:space-x-0 sm:space-y-6 sm:px-8">
                      <li>
                        <div className="relative">
                          <input
                            checked
                            hidden
                            className="peer"
                            type="radio"
                            name="devs"
                            id="devs20"
                          />
                          <label
                            htmlFor="devs20"
                            className="peer-checked:text-primary peer-checked:ring-primary block w-full cursor-pointer rounded-full bg-sky-50 px-4 py-2 text-center text-sky-800 peer-checked:ring-1 dark:bg-gray-700 dark:text-sky-300"
                          >
                            <span className="mx-auto text-sm font-semibold">
                              20 developers
                            </span>
                          </label>
                          <div
                            aria-hidden="true"
                            className="bg-primary absolute inset-x-0 top-[-2.20rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-white transition peer-checked:scale-100 dark:border-gray-800 sm:inset-y-0 sm:left-[-2.70rem] sm:my-auto sm:ml-0"
                          ></div>
                        </div>
                      </li>
                      <li>
                        <div className="relative">
                          <input
                            hidden
                            className="peer"
                            type="radio"
                            name="devs"
                            id="devs15"
                          />
                          <label
                            htmlFor="devs15"
                            className="peer-checked:text-primary peer-checked:ring-primary block cursor-pointer rounded-full bg-sky-50 px-4 py-2 text-center text-sky-800 peer-checked:ring-1 dark:bg-gray-700 dark:text-sky-300"
                          >
                            <span className="mx-auto block w-max text-sm font-semibold">
                              15 developers
                            </span>
                          </label>
                          <div
                            aria-hidden="true"
                            className="bg-primary absolute inset-x-0 top-[-2.20rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-white transition peer-checked:scale-100 dark:border-gray-800 sm:inset-y-0 sm:left-[-2.70rem] sm:my-auto sm:ml-0"
                          ></div>
                        </div>
                      </li>
                      <li>
                        <div className="relative">
                          <input
                            hidden
                            className="peer"
                            type="radio"
                            name="devs"
                            id="devs10"
                          />
                          <label
                            htmlFor="devs10"
                            className="peer-checked:text-primary peer-checked:ring-primary block cursor-pointer rounded-full bg-sky-50 px-4 py-2 text-center text-sky-800 peer-checked:ring-1 dark:bg-gray-700 dark:text-sky-300"
                          >
                            <span className="mx-auto block w-max text-sm font-semibold">
                              10 developers
                            </span>
                          </label>
                          <div
                            aria-hidden="true"
                            className="bg-primary absolute inset-x-0 top-[-2.20rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-white transition peer-checked:scale-100 dark:border-gray-800 sm:inset-y-0 sm:left-[-2.70rem] sm:my-auto sm:ml-0"
                          ></div>
                        </div>
                      </li>
                      <li>
                        <div className="relative">
                          <input
                            hidden
                            className="peer"
                            type="radio"
                            name="devs"
                            id="devs5"
                          />
                          <label
                            htmlFor="devs5"
                            className="peer-checked:text-primary peer-checked:ring-primary block cursor-pointer rounded-full bg-sky-50 px-4 py-2 text-center text-sky-800 peer-checked:ring-1 dark:bg-gray-700 dark:text-sky-300"
                          >
                            <span className="mx-auto block w-max text-sm font-semibold">
                              5 developers
                            </span>
                          </label>
                          <div
                            aria-hidden="true"
                            className="bg-primary absolute inset-x-0 top-[-2.20rem] z-[1] mx-auto h-6 w-6 scale-0 rounded-full border-8 border-white transition peer-checked:scale-100 dark:border-gray-800 sm:inset-y-0 sm:left-[-2.70rem] sm:my-auto sm:ml-0"
                          ></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
