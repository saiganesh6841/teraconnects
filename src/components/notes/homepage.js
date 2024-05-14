import React, { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import html2pdf from "html2pdf.js";
import "./homepage.css";

const Homepage = () => {
  const [markdown, setMarkdown] = useState("# Markdown Preview");
  const resultRef = useRef(null);

  const handleDownloadPDF = () => {
    html2pdf()
      .from(resultRef.current)
      .save("markdown_preview.pdf");
  };

  return (
    <main>
      <header>
        <h1>Productivity App</h1>
      </header>
      <section className="markdown">
        <textarea
          className="input"
          placeholder="Enter your Markdown text here..."
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
};

export default Homepage;
