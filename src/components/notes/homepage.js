

import React, { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import "../../App.css";
import html2pdf from "html2pdf.js";

const Homepage=()=>{

    const [markdown, setMarkdown] = useState("# Markdown Preview");

    const resultRef = useRef(null);

    const handleDownloadPDF = () => {
      html2pdf()
        .from(resultRef.current)
        .save("markdown_preview.pdf");
    };

    return (
      <main>
        <section className="markdown">
          <textarea
            className="input"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          ></textarea>
          <article className="result" ref={resultRef}>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </section>
        <button onClick={handleDownloadPDF}>Download PDF</button>
      </main>
    );
}
export default Homepage;