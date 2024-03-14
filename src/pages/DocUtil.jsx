import React from 'react';
import DocumentViewer from '../component/DocumentViewer.js';
import docUtAP4 from "../Assets/Api-docs/docUtAP4.pdf"; 
import "../css/pdf.css"

const DocUtil = () => {
  return (
    <div className='pdf'>
    <div className="pdf-contain">
      <DocumentViewer src={docUtAP4} />
    </div>
    </div>
  );
};

export default DocUtil;
