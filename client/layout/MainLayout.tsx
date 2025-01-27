import NavBar from '@/component/NavBar';
import React, { ReactNode } from 'react';
import styles from '../style/Main.module.scss';
import Player from '@/component/Player';

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
        <Player />
      </>
    );
  };
  

export default MainLayout;
