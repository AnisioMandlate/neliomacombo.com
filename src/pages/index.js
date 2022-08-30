import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Nélio Macombo | Product Manager</title>
      </Head>

      <div className="flex flex-col justify-center h-main">
        <h1 className="text-6xl md:text-7xl font-serif text-title dark:text-white font-bold mb-5">
          Adilson Mandlate
        </h1>

        <p className="text-xl leading-7 md:leading-9 max-w-2xl font-sans text-gray-800 dark:text-white">
          I'm a front end developer who makes things work beautifully, with an
          experience creating bespoke complex systems and products that have
          positive impact on the world.
        </p>
      </div>
    </Fragment>
  );
}
