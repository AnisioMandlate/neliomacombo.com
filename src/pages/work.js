import matter from "gray-matter";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import { getAllProjectsData } from "../lib/api";

const Work = ({ projects }) => (
  <Fragment>
    <Head>
      <title>Work - Nélio Macombo | Product Manager</title>
    </Head>

    <section className="my-8 flex flex-col justify-center">
      <header className="pb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#4c7efc] dark:text-white">
          Work
        </h1>

        <p className="text-lg">Here are some of the things I've worked on</p>
      </header>

      <ul>
        {projects.map((project) => (
          <li
            key={project.date}
            className="grid grid-cols-project items-center project"
          >
            <div className="project-content">
              <h2 className="uppercase font-semibold text-[#4c7efc]">
                {project.title}
              </h2>
              <div className="project-content__description bg-white dark:bg-gray-900">
                <p>{project.description}</p>
                <p className="mt-3">
                  Check more: <a href={project.link}>{project.link}</a>
                </p>
              </div>
              <div>
                {project.tags.map((tag, index) => (
                  <span
                    key={`${project.date}-${tag}-${index}`}
                    className="mr-5 text-xs text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  </Fragment>
);

export async function getStaticProps() {
  const projects = getAllProjectsData();

  const allProjects = projects
    .map((project) => {
      const { data } = matter(project.fileContent);
      return data;
    })
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      projects: allProjects,
    },
  };
}

export default Work;
