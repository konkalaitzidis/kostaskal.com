import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact me",
};

export default function Contact() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Contact</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          You can reach me via email at {" "} kon.kalaitzidis @ gmail.com {" "} or on {" "} 
          <a href="https://www.linkedin.com/in/konstantinoskalaitzidis" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </section>
  );
}
