import React from "react";
import type { Metadata } from "next";
// import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "About",
  description: "About me",
};

export default function About() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">About</h1>
      <p>To see what I'm working on now check my <a href="https://github.com/konkalaitzidis" className="text-blue-500 underline">GitHub</a></p>

      <div className="mb-8">
        <a
          href="/content/konstantinos_kalaitzidis_cv.pdf"
          download="konstantinos_kalaitzidis_cv.pdf"
          className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Download My CV
        </a>
      </div>
    
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Work Experience</h2>
        <ul className="list-disc list-inside">
          <li>
        <strong>Software Engineer at XYZ Corp</strong> (Jan 2020 - Present)
        <p>Developed and maintained web applications using React and Node.js.</p>
          </li>
          <li>
        <strong>Frontend Developer at ABC Inc</strong> (Jun 2017 - Dec 2019)
        <p>Worked on improving the user interface and user experience of the company's main product.</p>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Study Experience</h2>
        <ul className="list-disc list-inside">
          <li>
        <strong>Bachelor of Science in Computer Science</strong> - University of Example (2013 - 2017)
        <p>Graduated with honors, focusing on software development and algorithms.</p>
          </li>
          <li>
        <strong>Master of Science in Software Engineering</strong> - Example University (2018 - 2020)
        <p>Specialized in web technologies and cloud computing.</p>
          </li>
        </ul>
      </div>
      {/* <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/photo1.jpg",
            alt: "Roman columns",
            href: "https://unsplash.com/photos/people-walking-near-building-during-daytime-dFLBDQQeffU?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
          },
          {
            src: "/photos/photo2.jpg",
            alt: "Big Ben",
            href: "https://unsplash.com/photos/big-ben-london-MdJq0zFUwrw?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
          },
          {
            src: "/photos/photo3.jpg",
            alt: "Sacré-Cœur Basilica",
            href: "https://unsplash.com/photos/a-view-of-the-inside-of-a-building-through-a-circular-window-Tp-3hrx88J4",
          },
          {
            src: "/photos/photo4.jpg",
            alt: "Eiffel Tower",
            href: "https://unsplash.com/photos/the-eiffel-tower-towering-over-the-city-of-paris-OgPuPvPsHLM?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
          },
          {
            src: "/photos/photo5.jpg",
            alt: "Taj Mahal",
            href: "https://unsplash.com/photos/taj-mahal-india-IPlPkWPJ2fo",
          },
          {
            src: "/photos/photo6.jpg",
            alt: "Colosseum",
            href: "https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-3cyBR1rIJmA?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/photo1.jpg", alt: "Roman columns" },
          { src: "/photos/photo2.jpg", alt: "Big Ben" },
          { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica" },
          { src: "/photos/photo4.jpg", alt: "Eiffel Tower" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/photo1.jpg", alt: "Roman columns" },
          { src: "/photos/photo2.jpg", alt: "Big Ben" },
          { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica" },
          { src: "/photos/photo4.jpg", alt: "Eiffel Tower" },
          { src: "/photos/photo5.jpg", alt: "Taj Mahal" },
          { src: "/photos/photo6.jpg", alt: "Colosseum" },
        ]}
      /> */}
    </section>
  );
}
