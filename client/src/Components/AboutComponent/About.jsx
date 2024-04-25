import React from "react";
import { Link } from "react-router-dom";
const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: " Community Building",
    desc: "Clubs bring people together around a common interest or purpose, fostering a sense of community and belonging. Members can share their passions and interests in a supportive environment, which helps build social connections and friendships.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    title: "Skill Development",
    desc: "Leadership Skills , Organizational Skills, Communication Skills",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    title: "Networking Opportunities",
    desc: "Clubs often serve as excellent platforms for networking. Members meet new people, which can lead to professional opportunities, collaborations, and mentorships. Networking within a club can be particularly beneficial for career-oriented clubs or those linked to specific professions.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
        />
      </svg>
    ),
    title: "Educational Opportunities",
    desc: "Many clubs are educational, focusing on topics like technology, literature, science, or languages. These clubs provide a learning environment outside the formal education system where members can learn at their own pace and according to their interests.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: "Cultural Exchange",
    desc: "Cultural or international clubs offer the chance for cultural exchange and understanding. They allow members from different backgrounds to share their cultures, which promotes diversity and inclusion.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
    title: "Personal Growth",
    desc: "Participating in a club can significantly contribute to personal development. It offers a safe space to explore new ideas, challenge oneself, and gain confidence in public speaking and presenting one’s ideas.",
  },
];
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
                The CSE Club is your central hub for all things computer science
                at Malla Reddy University! Explore a diverse range of clubs
                catering to all skill levels, from beginners to coding wizards.
                Find your perfect club, connect with like-minded peers, and
                collaborate on projects that push the boundaries of technology.
                Showcase your talent at hackathons, stay informed about club
                events, and share your projects to get valuable feedback. Learn
                from industry experts through workshops and talks, and
                contribute to a vibrant and innovative community. It's more than
                a directory - it's your launchpad to a world of tech exploration
                and collaboration!
              </p>
            </div>
            {/* end of heading and para */}
            {/* specail note & para */}

            {/* end of special note and para  */}
          </div>
          {/* components of specialisties */}
          <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                  Why Udhbhava ?
                </h3>
                <p className="mt-3 text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  congue, nisl eget molestie varius, enim ex faucibus purus.
                </p>
              </div>
              <div className="mt-12">
                <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((item, idx) => (
                    <li key={idx} className="space-y-3">
                      <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                      <h4 className="text-lg text-white font-semibold">
                        {item.title}
                      </h4>
                      <p className="text-gray-300">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
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
                    Beyond Boundaries: Expanding Horizons Through Active
                    Participation
                  </h2>

                  <p class="mt-4 text-gray-500 sm:text-xl">
                    Celebrating Diversity and Innovation in Our Thriving Club
                    Ecosystem
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
