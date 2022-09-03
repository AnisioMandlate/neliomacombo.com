import Head from "next/head";
import { Fragment } from "react";

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Contact - Nélio Macombo | Product Manager</title>
      </Head>

      <section className="my-8 flex flex-row justify-between w-full gap-8">
        <header className="pb-16 w-[50%]">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-title dark:text-white">
            Get in touch
          </h1>

          <p className="text-lg uppercase">
            Let's work together and make the world a better place by bringing
            useful and seamless products. Fill in the form to contact me or send
            an email to{" "}
            <a
              href="mailto:ineliomacombo@gmail.com"
              className="text-custom-dark-green dark:text-[#4c7efc]"
            >
              ineliomacombo@gmail.com
            </a>
          </p>
        </header>

        <section className="text-gray-700 dark:text-white w-[50%]">
          <div className="mt-5 md:col-span-full md:mt-0">
            <form action="#" method="POST">
              <div>
                <div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full border-b bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full border-b bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10"
                      />
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full border-b bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10"
                      />
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="project-details"
                        className="block text-sm font-medium"
                      >
                        Project details*
                      </label>
                      <textarea
                        type="text"
                        name="project-details"
                        id="project-details"
                        className="mt-1 block w-full border-b bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-40"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </section>
    </Fragment>
  );
}
