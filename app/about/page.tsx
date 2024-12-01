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
      <div className="mb-8">
        <h1 className="mb-8 text-2xl font-medium tracking-tight">About</h1>
        <p>To see what I'm working on now check my <a href="https://github.com/konkalaitzidis" target="_blank" className="text-blue-500 underline" style={{ color: "#0077b5", fontWeight: "bold"}}>GitHub</a> 🔗.</p>
      </div>

      <div className="mb-8">
        {/* <div className="mb-8">
          <a
            href="/content/konstantinos_kalaitzidis_cv.pdf"
            download="konstantinos_kalaitzidis_cv.pdf"
            className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Download My CV
          </a>
        </div> */}

        <p>
          I'm an educated machine learning engineer with a background in Health Informatics and Computer Science. My interests lie in creating innovative ML pipelines for solving medical problems. 
        </p>
      </div>
    
      <div className="mb-8">
        <h2 className="text-xl font-semibold">Professional Experience</h2>
        <ul className="list-disc list-inside">
          <li>
        <strong>ML Research Intern at Dept. of Neuroscience, Karolinska Institutet</strong> (Feb 2022 - Jul 2023)
        {/* <p>Developed the Behaviour Prediction Neural Network (BPNN), a deep learning toolkit, to interpret animal behaviour
        during cognitive experiments</p> */}
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Education</h2>
        <ul className="list-disc list-inside">
          <li>
        <strong>MMSc & MSc in Health Informatics</strong> - Karolinska Institute (2021 - 2023)
          </li>
          <li>
        <strong>Exchange Studies</strong> - University College Dublin (UCD) (2018 - 2019)
          </li>
          <li>
        <strong>BASc in Computer Science and Engineering</strong> - University of Thessaly (2016 - 2021)
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <p>Want to tell me something? <a href="/contact" className="text-blue-500 underline" style={{ color: "#0077b5", fontWeight: "bold"}}>Contact</a></p>
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
