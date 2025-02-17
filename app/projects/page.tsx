import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Research Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Research Projects</h1>
      {/* <p>Hold tight! In progess...</p> */}

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {project.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {project.year}
                </span>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3">
                {project.description}
              </p>
              <div className="pt-4"></div>
                <div className="mb-4 flex space-x-2">
                <a
                  href={project.url_1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium"
                >
                  {project.button_1_description}
                </a>
                <a
                  href={project.url_2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-md font-medium"
                >
                  {project.button_2_description}
                </a>
              </div> 
              <div className="flex flex-wrap space-x-1">
                <a
                  // href={project.tags}
                  // target="_blank"
                    className="inline-block px-2 py-1 text-xs text-white bg-gray-900 rounded-full"
                    >
                  {project.tags}
                </a>
              </div>
            </div>
            {/* */}
          </div>
        ))}
      </div>
    </section>
  );
}
