import NavBar from '@/component/NavBar';
import React, { ReactNode } from 'react';
import styles from "../style/styles.module.css";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
      {children}
      </div>
    </>
  );
};

export default MainLayout;
