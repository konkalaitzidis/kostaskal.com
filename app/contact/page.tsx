import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact me",
};

export default function Contact() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Want to talk?</h1>
      <div className="prose prose-neutral dark:prose-invert">
      <p>
        Reach out to me via email at <span style={{ color: "#0077b5"}}> kon.kalaitzidis-at-gmail.com </span>or connect with me on {" "} 
        <a href="https://www.linkedin.com/in/konstantinoskalaitzidis" target="_blank" rel="noopener noreferrer" style={{ color: "#0077b5", fontWeight: "bold"}}>
          LinkedIn<span style={{ marginLeft: "4px" }}></span>
        </a>🔗.
      </p>
      </div>
    </section>
  );
}
