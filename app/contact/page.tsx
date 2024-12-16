import { useEffect } from "react";

// useEffect(() => {
//   const script = document.createElement("script");
//   script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//   })(window,document,'script','dataLayer','GTM-N3F59665');`;
//   document.head.appendChild(script);
// }, []);

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
        Reach out to me via email at <span style={{ color: "#0077b5"}}> kon.kalaitzidis-at-gmail.com </span>or connect with me on {" "} 
        <a href="https://www.linkedin.com/in/konstantinoskalaitzidis" target="_blank" rel="noopener noreferrer" style={{ color: "#0077b5", fontWeight: "bold"}}>
          LinkedIn<span style={{ marginLeft: "4px" }}></span>
        </a>🔗.
      </p>
      </div>
    </section>
  );
}
