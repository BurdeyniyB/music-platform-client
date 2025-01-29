import NavBar from '@/component/NavBar';
import React, { ReactNode } from 'react';
import styles from '../style/Main.module.scss';
import Player from '@/component/Player';
import Head from 'next/head';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title || "music platform"}</title>
        <meta
          name="description"
          content={`Music platform. Here you can find the best music. ${description || ''}`}
        />
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content={keywords || 'Music, track, artist'}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <div className={styles.container}>
        {children}
      </div>
      <Player />
    </>
  );
};


export default MainLayout;
