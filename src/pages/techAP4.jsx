import React from 'react';
import DocumentViewer from '../component/DocumentViewer.js';
import doctecAP4 from "../Assets/Api-docs/doctecAP4.pdf"; 
import "../css/pdf.css"

const TechAP4 = () => {
  return (
    <div className='pdf'>
    <div className="pdf-contain">
      <DocumentViewer src={doctecAP4} />
    </div>
    </div>
  );
};

export default TechAP4;
