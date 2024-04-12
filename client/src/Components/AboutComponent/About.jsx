import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div>
        {/* heading & para */}
        <section className="relative overflow-hidden py-28 px-4 bg-gray-900 md:px-8">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
          <div className="max-w-xl mx-auto text-center relative">
            <div className="py-4">
              <h3 className="text-3xl text-gray-200 font-semibold md:text-4xl">
                Udbava
              </h3>
              <p className="text-gray-300 leading-relaxed mt-3">
                Nam erat risus, sodales sit amet lobortis ut, finibus eget
                metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales
                nisi id porta lacinia.
              </p>
            </div>
            {/* end of heading and para */}
            {/* specail note & para */}
            <div className="text-white mt-10">
              <h2 className="text-3xl font-semibold sm: text-center">
                What makes us special
              </h2>

              <p className="text-gray-300 leading-relaxed mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat dolores iure fugit totam iste obcaecati. Consequatur
                ipsa quod ipsum sequi culpa delectus, cumque id tenetur
                quibusdam, quos fuga minima.
              </p>
            </div>
            {/* end of special note and para  */}
          </div>
          {/* components of specialisties */}
          <div>
            <section className=" text-white">
              <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                    </span>

                    <div>
                      <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                      <p className="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error cumque tempore est ab possimus quisquam reiciendis
                        tempora animi! Quaerat, saepe?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                    </span>

                    <div>
                      <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                      <p className="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error cumque tempore est ab possimus quisquam reiciendis
                        tempora animi! Quaerat, saepe?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                    </span>

                    <div>
                      <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                      <p className="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error cumque tempore est ab possimus quisquam reiciendis
                        tempora animi! Quaerat, saepe?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                    </span>

                    <div>
                      <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                      <p className="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error cumque tempore est ab possimus quisquam reiciendis
                        tempora animi! Quaerat, saepe?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                    </span>

                    <div>
                      <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                      <p className="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error cumque tempore est ab possimus quisquam reiciendis
                        tempora animi! Quaerat, saepe?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        ></path>
                      </svg>
                    </span>

                    <div>
                      <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                      <p className="mt-1 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error cumque tempore est ab possimus quisquam reiciendis
                        tempora animi! Quaerat, saepe?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* end of specialities  */}
          {/*    */}
          {/*  */}
          {/* Team Members Only presiident and Vice president */}
          <div>
            <h1 className=" text-sky-500 text-center my-5 font-semibold text-xl ">
              Meet our team
            </h1>
            <div class="grid grid-cols-2 gap-4 ">
              <div className="m-5  ">
                <article className="group flex flex-col items-center">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-60 w-56 rounded-2xl object-cover shadow-xl "
                  />

                  <div className="p-4">
                    <h1 className="text-white text-center py-2">President</h1>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 text-center">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </article>
              </div>

              <div className="m-5">
                <article className="group flex flex-col items-center">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="h-60 w-56 rounded-2xl object-cover shadow-xl "
                  />

                  <div className="p-4">
                    <h1 className="text-white text-center py-2">
                      Vice - President
                    </h1>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 text-center">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="px-5 shadow-2xl">
            {/* end of president and vice president */}
            {/* CTA for other clubs */}
            {/* for club 1  */}
            <div>
              <h1 className=" text-sky-500 text-center my-5 font-semibold text-xl ">
                Club 1
              </h1>
              <div class="grid grid-cols-2 gap-4 ">
                <div className="m-5  ">
                  <article className="group flex flex-col items-center">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      className="h-60 w-56 rounded-2xl object-cover shadow-xl "
                    />

                    <div className="p-4">
                      <h1 className="text-white text-center py-2">Lead</h1>
                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </article>
                </div>

                <div className="m-5">
                  <article className="group flex flex-col items-center">
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      className="h-60 w-56 rounded-2xl object-cover shadow-xl "
                    />

                    <div className="p-4">
                      <h1 className="text-white text-center py-2">Co - Lead</h1>
                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            {/* end of club 1 */}

            {/* end of CTA */}
            {/* Stats */}
            <section>
              <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                <div class="mx-auto max-w-3xl text-center">
                  <h2 class="text-3xl font-bold text-white sm:text-4xl">
                    Lorem ipsum dolor sit amet consectetur
                  </h2>

                  <p class="mt-4 text-gray-500 sm:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione dolores laborum labore provident impedit esse
                    recusandae facere libero harum sequi.
                  </p>
                </div>

                <div class="mt-8 sm:mt-12">
                  <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
                    <div class="flex flex-col px-4 py-8 text-center">
                      <dt class="order-last text-lg font-medium text-gray-500">
                        Events
                      </dt>

                      <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                        150
                      </dd>
                    </div>

                    <div class="flex flex-col px-4 py-8 text-center">
                      <dt class="order-last text-lg font-medium text-gray-500">
                        Official Club's
                      </dt>

                      <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                        10+
                      </dd>
                    </div>

                    <div class="flex flex-col px-4 py-8 text-center">
                      <dt class="order-last text-lg font-medium text-gray-500">
                        Total Students
                      </dt>

                      <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                        500+
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>
            {/* end of stats  */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
