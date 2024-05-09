import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "../css/pdf.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const DocumentViewer = ({ src }) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(
        <Page key={`page_${i}`} pageNumber={i} />
      );
    }
    return pages;
  };

  return (
    <div className="wrap-pdf-container">
      <div className='pdf-container'>
        <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
          {renderPages()}
        </Document>
      </div>
    </div>
  );
};

export default DocumentViewer;
