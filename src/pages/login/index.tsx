import  React  from 'react';
import { Form, Input, Button, Space,Toast } from 'antd-mobile'
import styles from "./index.less";
import { LockFill } from 'antd-mobile-icons';
import { getAccess } from "../../utils";
import { history} from "umi";
export default function login() {
   const onFinish = (values: any) => {
     console.log(values)
     let {name} =values
     if (!name) return;
     if (getAccess(name)) {
       localStorage.setItem('name', name);
       history.push('/')
     } else { 
       Toast.show({
          content: '您无权限访问，请联系管理员',
          afterClose: () => {
            console.log('after')
          },
        })
     }
     
  }
  return (
    <div className={styles.loginWrap}>
      <div className={styles.logo}> <LockFill fontSize={108} color='#76c6b8' /></div>
     
      <Form layout='horizontal'
        className={styles.form}
        onFinish={onFinish}
        footer={
          <Button block type='submit' color='primary' size='large'>
            提交
          </Button>
          
        }>
        <Form.Item
          name='name'
          label='用户名'
          rules={[{ required: true, message: '用户名不能为空' }]}
        >
          <Input onChange={console.log} placeholder='请输入姓名' />
        </Form.Item>
      </Form>
    </div>
  );
}
