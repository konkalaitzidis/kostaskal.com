import Image from "next/image";
import { socialLinks } from "./config";

export interface Project {
  title: string;
  year: number;
  description: string;
  url_1?: string;
  url_2: string;
  url_3?: string;
  button_1_description?: string;
  button_2_description?: string;
  button_3_description?: string;
  tags: any;
}

export default function Page() {
  return (
    <>
      {/* Open Graph Tags */}
      <meta property="og:title" content="Kostas Kalaitzidis - Machine Learning Engineer" />
      <meta property="og:description" content="Passionate about leveraging the latest advancements in AI for impact-driven research in life sciences." />
      <meta property="og:image" content="https://kostaskal.com/me_KI.png" />
      <meta property="og:url" content="https://kostaskal.com" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Kostas Kalaitzidis" />
 
    <section>
        <a>
          <Image
            src="/me_KI.png"
            alt="Profile photo"
            className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5" 
            // grayscale hover:grayscale-0
            unoptimized
            width={160}
            height={160}
            priority />
        </a>

        <h1 className="mb-8 text-2xl font-medium tracking-tight">
          Hi 👋🏼, Kostas here.
        </h1>

        <div className="prose prose-neutral dark:prose-invert">
          <p>
            I'm a Machine Learning Engineer
          </p>
          <p>
            I have a MSc degree in {" "}
            <a
              target="_blank"
              href="https://education.ki.se/programme/5hi17-joint-masters-programme-in-health-informatics"
            >
              Health Informatics from the Karolinska Institute and Stockholm University
            </a> with a background in Machine Learning and Computer Science.
            Passionate about leveraging the latest advancements in AI for impact-driven research in life sciences.
            {/* Motivated, and team-oriented with experience in Sweden, Ireland, the US, and Greece.
    Ex-TEDx Curator with a history of cross-disciplinary collaboration in fast-paced, multicultural settings.
    Completed mandatory military service. */}
          </p>
          <p>Based in Stockholm, Sweden 🇸🇪</p>
          <a
          href="https://www.sciencedirect.com/science/article/pii/S0010482525011412"
          target="_blank"
          rel="noopener noreferrer"
          className="nline-block px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 rounded-md font-medium"
            style={{ textDecoration: "none", color: "white" }}
            >
            View Latest Publication
          </a>
          <p>
            Want to tell me something? {" "}
            <a href="/contact" style={{ color: "#0077b5", fontWeight: "bold" }}>
              Contact
            </a>
          </p>
          {/* <p>
      What I'm working on now: {" "}
      <a
        target="_blank"
        href="">
        Now page
      </a>
    </p> */}
        </div>
      </section></>
  );
}
