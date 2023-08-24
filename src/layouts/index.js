import React from "react";
import { NavBar, TabBar } from "antd-mobile";
import { Link, Outlet ,history} from "umi";
import {
  Route,
  Switch,
  useNavigate,
  useLocation,
  MemoryRouter as Router,
} from "react-router-dom";
import {getAccess} from "../utils";
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";

import styles from "./index.less";

export default () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const tabs = [
    {
      key: "/",
      title: "首页",
      icon: <AppOutline />,
    },
    {
      key: "/me",
      title: "我的",
      icon: <UserOutline />,
    },
    {
      key: "/login",
      title: "登录",
      icon: <UserOutline />,
    },
  ];
  let name = localStorage.getItem('name')
  if (!name) {
    history.push('/login')
  } else if (!getAccess(name)) { 
    history.push('/login')
  }

  return (
      <div className={styles.app}>
        {/* <div className={styles.top}>
          <NavBar>{tabs.find(({key})=>key ===pathname).title}</NavBar>
        </div> */}
        <div className={styles.body}>
          <Outlet></Outlet>
        </div>
        {/* <div className={styles.bottom}>
          <TabBar activeKey={pathname} onChange={(value) => navigate(value)}>
            {tabs.map((item) => (
              <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
          </TabBar>
        </div> */}
      </div>
  );
};
