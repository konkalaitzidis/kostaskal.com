import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a>
        <Image
          src="/me_KI.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Greetings, stranger 👋🏼
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        {/* <p>
          AI for Health 🤖 🩻
        </p> */}
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
        <p>
          Want to tell me something? {" "}
          <a 
            target="_blank"
            href="contact page link">
            Contact
          </a>
        </p>
        <p>
          What I'm working on now: {" "} 
          {/* past or current research */}
          <a
            target="_blank"
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio">
            Now page
          </a>
        </p>
      </div>
    </section>
  );
}
