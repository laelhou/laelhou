import { Document, Page, pdfjs } from 'react-pdf';
import React, { useState, useEffect } from 'react';
import { history, connect } from 'umi';
import { Button, PageIndicator } from 'antd-mobile';
import styles from './index.less';
export default function previewpdf() {
  // let { url, type } = query;
  // console.log('Preview-----------', query, url, type);
  // const pdfurl = require('./12.pdf');
  // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  let pdfurl = '/laelhou/12.pdf';
  pdfjs.GlobalWorkerOptions.workerSrc = `/laelhou/pdf.worker.js`;
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    document
      .querySelector('meta[name="viewport"]')
      .setAttribute(
        'content',
        'width=device-width, initial-scale=1,maximum-scale=3, minimum-scale=1, user-scalable=yes'
      );
    return () => {
      document
        .querySelector('meta[name="viewport"]')
        .setAttribute(
          'content',
          'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
        );
    };
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    // numPages是总页数
    setTotalPage(numPages);
  };
  const handelOnChange = (pages) => {
    setPage(pages);
  };
  function renderComponent() {
    return (
      <>
        <Document
          className={styles.pdfview}
          loading="加载中..."
          onLoadSuccess={onDocumentLoadSuccess}
          file={pdfurl}
        >
          {Array.from(new Array(totalPage), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              renderTextLayer={false}
              pageNumber={index + 1}
              // width={ 400}
            />
          ))}
        </Document>
      </>
    );
  }
  return <div className={styles.iframeBox}>{renderComponent()}</div>;
}
