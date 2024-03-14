import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "../css/pdf.css"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const DocumentViewer = ({ src }) => {
  return (
    <div className="wrap-pdf-container">
      <div className='pdf-container'>
        <Document file={src}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
};

export default DocumentViewer;
