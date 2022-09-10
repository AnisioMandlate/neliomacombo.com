import Head from "next/head";
import { Fragment } from "react";

export default function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Contact - Nélio Macombo | Product Manager</title>
      </Head>

      <section className="my-8 flex flex-col md:flex-row justify-between w-full gap-8">
        <header className="pt-2 pb-16 w-full md:w-[50%]">
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

        <section className="py-3 text-gray-700 dark:text-white w-full md:w-[50%]">
          <div className="mt-5 md:col-span-full md:mt-0">
            <form action="#" method="POST">
              <div>
                <div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-full">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium"
                      >
                        Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="mt-1 block w-full border-b border-black dark:border-white bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10"
                      />
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="company-name"
                        className="block text-sm font-medium"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company-name"
                        id="company-name"
                        autoComplete="company-name"
                        className="mt-1 block w-full border-b border-black dark:border-white bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10"
                      />
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium"
                      >
                        Email*
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full border-b border-black dark:border-white bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10"
                      />
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-medium"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="phone-number"
                        className="mt-1 block w-full border-b border-black dark:border-white bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10"
                      />
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="website-url"
                        className="block text-sm font-medium"
                      >
                        Website URL*
                      </label>
                      <input
                        type="text"
                        name="website-url"
                        id="website-url"
                        autoComplete="website"
                        className="mt-1 block w-full border-b border-black dark:border-white bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10"
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
                        className="mt-1 block w-full border-b border-black dark:border-white bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-40"
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
