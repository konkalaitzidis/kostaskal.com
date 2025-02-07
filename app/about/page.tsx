import React from "react";
import type { Metadata } from "next";
// import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "About/CV",
  description: "About me",
};

export default function About() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="mb-8 text-2xl font-medium tracking-tight">About</h1>
        <h2 className="mb-4 text-1xl font-medium tracking-tight"> My interests lie in solving health challenges with AI. 🤖 🩻 </h2>  
        
        <div className="mt-4">
          <a
            href="/konstantinos_kalaitzidis_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium"
          >
            Download my CV
          </a>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl">Professional Experience</h2>
        <ul className="list-disc list-inside">
          <li>
            Machine Learning Intern at Karolinska Institutet (Feb 2022 - Jul 2023)
          </li>
        </ul>
        <ul className="list-disc list-inside">
          <li>
            Data Intern at Kry (Jun 2022 - Aug 2022)
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl">Education</h2>
        <ul className="list-disc list-inside">
          <li>
            MMSc & MSc in Health Informatics - Karolinska Institute (2021 - 2023)
          </li>
          <li>
            Exchange Studies - University College Dublin (UCD) (2018 - 2019)
          </li>
          <li>
            BASc in Computer Science and Engineering - University of Thessaly (2016 - 2021)
          </li>
        </ul>
      </div>

      {/* <div className="mb-8">
        <h2 className="mb-4 text-1xl font-medium tracking-tight"> What I'm doing now:</h2>  
        <p>Article <a href="https://www.annalsofoncology.org/article/S0923-7534(24)02935-1/fulltext" target="_blank" className="text-blue-500 underline" style={{ color: "#0077b5"}}>"The Stereotactic Radiosurgery-Brain Prognostic Index (SRS-BPI): A novel prognostic index for lung cancer patients with brain metastases eligible for SRS</a></p>
        <p>Attending course "<a href="https://github.com/konkalaitzidis" target="_blank" className="text-blue-500 underline" style={{ color: "#0077b5"}}>Applied Artificial Intelligence (AI) in Healthcare</a>" at Karolinska Institutet - 15 Credits</p>
        <p>Attending course "<a href="https://www.kth.se/student/kurser/kurs/CB207V?l=en" target="_blank" className="text-blue-500 underline" style={{ color: "#0077b5"}}>Computational Analyses of mRNA-seq, ChIP-seq and ATAC-seq"</a> at KTH Royal Institute of Technology - 7.5 Credits</p>
        <p></p>
      </div> */}

      <div className="mb-8">
        <p>Want to tell me something? <a href="/contact" className="text-blue-500 underline" style={{ color: "#0077b5", fontWeight: "bold"}}>Contact</a></p>
        <p>To see what I'm working on now check my <a href="https://github.com/konkalaitzidis" target="_blank" className="text-blue-500 underline" style={{ color: "#0077b5", fontWeight: "bold"}}>GitHub</a>.</p>
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
