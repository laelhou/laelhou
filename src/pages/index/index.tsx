import { React } from 'react';
import { Button, Space, Collapse } from 'antd-mobile';
import { history } from 'umi';
import styles from './index.less';
export default function HomePage() {
  function goDetail() {
    history.push('/detail');
  }
  function goPdf() {
    history.push('/previewpdf');
  }
  return (
    <div>
      <Collapse defaultActiveKey={['1']}>
        <Collapse.Panel key="1" title="螺杆压缩机1" onClick={goDetail}>
          <div className={styles.item}>
            <span className={styles.left}>设备编号：</span>
            <span className={styles.right}>123123</span>
          </div>
          <div className={styles.item}>
            <span className={styles.left}>规格型号：</span>
            <span className={styles.right}>123123</span>
          </div>
          <div className={styles.item}>
            <span className={styles.left}>生产厂家：</span>
            <span className={styles.right}>上海XXX有限公司</span>
          </div>
          <div className={styles.item}>
            <span className={styles.left}>负责人：</span>
            <span className={styles.right}>张三</span>
          </div>
          <div className={styles.item}>
            <span className={styles.left}>联系方式：</span>
            <span className={styles.right}>15125894546</span>
          </div>
        </Collapse.Panel>
        <Collapse.Panel key="2" title="螺杆压缩机2" onClick={goPdf}>
          <div className={styles.item}>
            <span className={styles.left}>设备编号：</span>
            <span className={styles.right}>123123</span>
          </div>
          <div className={styles.item}>
            <span className={styles.left}>规格型号：</span>
            <span className={styles.right}>123123</span>
          </div>
          <div className={styles.item}>
            <span className={styles.left}>生产厂家：</span>
            <span className={styles.right}>上海XXX有限公司</span>
          </div>
          <div className={styles.item}>
            <span className={styles.left}>负责人：</span>
            <span className={styles.right}>张三</span>
          </div>
          <div className={styles.item}>
            <span className={styles.left}>联系方式：</span>
            <span className={styles.right}>15125894546</span>
          </div>
        </Collapse.Panel>
        <Collapse.Panel key="3" title="螺杆压缩机3">
          <div className={styles.item}>
            <span className={styles.left}>设备编号：</span>
            <span className={styles.right}>123123</span>
          </div>
          <div className={styles.item}>
            <span className={styles.left}>规格型号：</span>
            <span className={styles.right}>123123</span>
          </div>
          <div className={styles.item}>
            <span className={styles.left}>生产厂家：</span>
            <span className={styles.right}>上海XXX有限公司</span>
          </div>
          <div className={styles.item}>
            <span className={styles.left}>负责人：</span>
            <span className={styles.right}>张三</span>
          </div>
          <div className={styles.item}>
            <span className={styles.left}>联系方式：</span>
            <span className={styles.right}>15125894546</span>
          </div>
        </Collapse.Panel>
      </Collapse>
    </div>
  );
}
