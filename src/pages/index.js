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
          Nélio Macombo
        </h1>

        <p className="text-xl leading-7 md:leading-9 max-w-2xl font-sans text-gray-800 dark:text-white">
          A product manager passionate about identifying and solving meaningful
          problems through technology with the aim to drive growth in fast-paced
          and ambitious organizations.
        </p>
      </div>
    </Fragment>
  );
}
