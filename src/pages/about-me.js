import Head from "next/head";
import { Fragment } from "react";

export default function About() {
  return (
    <Fragment>
      <Head>
        <title>About Me - Nélio Macombo | Product Manager</title>
      </Head>

      <div className="my-8 flex flex-col justify-center min-h-[100vh]">
        <section className="mt-8">
          <h1 className="text-2xl md:text-3xl font-serif text-title dark:text-white font-bold mb-5 uppercase">
            About Me
          </h1>

          <p className="text-xl leading-[150%] md:leading-9 max-w-[100%] font-sans text-gray-800 dark:text-white">
            I help businesses create awesome products and projects. I manage
            tech teams and facilitate effective communication that ensures
            maximum visibility of the project to all stakeholders using
            Lean-Agile frameworks, such as Kanban and Scrum. I have 07 years of
            experience in the Tech industry and 03 years of experience in
            Product Management working across a wide range of verticals
            including Fintech, Telecom, EdTech, Entrepreneurship.
          </p>

          <ul className="mt-8 pl-8 text-lg leading-[150%] md:leading-9 max-w-[100%] font-sans">
            <li className="mt-6">
              <b>• Product Strategy:</b> I Frame a story starting with the
              problem, quantify it to show the opportunity, then arrive at the
              solution.
            </li>
            <li className="mt-6">
              <b>• Product Development:</b> I solve problems and provide
              solutions using experiments through testing and iterating engaging
              ideas.
            </li>
            <li className="mt-6">
              <b>• Product Marketing:</b> I coordinate with the Brand,
              Marketing, and Design Team to launch whether for a small base or
              big customer base using a customer-centric approach, where I
              influence my team to put themselves in the customer's shoes and
              work backward to plan the unexpected.
            </li>
            <li className="mt-6">
              <b>• Product Team and Stakeholders alignment:</b> The Team is the
              how of every product or project success. I Set early the goals for
              the team and the principles behind them, and then bring everyone
              together through the artifacts, frequent feedback, and
              communication.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h1 className="text-2xl md:text-3xl font-serif text-title dark:text-white font-bold mb-5 uppercase">
            Certifications
          </h1>

          <ul className="mt-8 pl-8 text-lg leading-[150%] md:leading-9 max-w-[100%] font-sans">
            <li className="mt-6">
              <b>• 2021</b> - Product Management Nanodegree Program from Udacity
            </li>
            <li className="mt-6">
              <b>• 2021</b> - Marketing Analytics Nanodegree Program from
              Udacity
            </li>
            <li className="mt-6">
              <b>• 2021</b> - Agile Project Manager Certification from LinkedIn
              Learning
            </li>
            <li className="mt-6">
              <b>• 2018</b> - Web Mobile Specialization from Andela Learning
              Community powered by Google
            </li>
            <li className="mt-6">
              <b>• 2015</b> - Specialization in Software Engineering and Digital
              Business from C.E.S.A.R EDU, Brazil
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h1 className="text-2xl md:text-3xl font-serif text-title dark:text-white font-bold mb-5 uppercase">
            Education
          </h1>

          <ul className="mt-8 pl-8 text-lg leading-[150%] md:leading-9 max-w-[100%] font-sans">
            <li className="mt-6">
              <b>• 2016</b> - Bachelors in Computer Engineering from University
              Eduardo Mondlane
            </li>
          </ul>
        </section>
      </div>
    </Fragment>
  );
}