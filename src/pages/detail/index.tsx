// const pdfurl = require('../../assets/pdf/二期1#水解池PLC_1.4.pdf') 
import { Document, Page } from 'react-pdf';
import React, { useState } from 'react';
export default function Me() {
  function gopdf(){ 
    window.location.href='https://mp.weixin.qq.com/s/se_rIoDlSpkhzn57U25NEw'
  }
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return (
      <div>
        <h2>详情页</h2>
        <div onClick={gopdf}>二期1#水解池PLC_1.4</div>
         <Document
        file="../../assets/pdf/12.pdf" //PDF文件在此
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
  }