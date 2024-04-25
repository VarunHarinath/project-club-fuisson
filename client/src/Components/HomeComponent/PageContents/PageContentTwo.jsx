import React from "react";

const PageContentTwo = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">CSE CLUBS</h2>

              <p className="mt-4 text-gray-600">
                Calling all tech wizards and aspiring innovators! Are you
                fascinated by the ever-evolving world of computer science? Do
                you dream of crafting groundbreaking software or diving into the
                intricacies of artificial intelligence? The CSE Club is your
                launchpad into a dynamic community at MallaReddy University.
                Here, you'll discover a multitude of clubs tailored to every
                tech enthusiast, from seasoned programmers wielding their coding
                expertise to curious beginners eager to take their first steps.
                Whether you crave in-depth workshops to hone your skills,
                workshops led by industry leaders to gain invaluable insights,
                or collaborative project opportunities to put your knowledge
                into action, the CSE Club has it all.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageContentTwo;
