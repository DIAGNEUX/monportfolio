import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "../css/pdf.css"
import doctecAP4 from "../Assets/Api-docs/doctecAP4.pdf";

// Configuration de react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Doctech = () => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className='wrap-pdf-container'>
      <div className='pdf-container'>
        <Document file={doctecAP4} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} renderAnnotationLayer={false} renderTextLayer={false} />
          ))}
        </Document>
      </div>
    </div>
  );
};

export default Doctech;
