import NavBar from "@/component/NavBar";
import React from "react";
import styles from "../style/Main.module.scss";
import MainLayout from "@/layout/MainLayout";
const Index = () => {
    return (
        <MainLayout>
                <NavBar />
                <h1 className={styles.heading}>Welcome to music platform!</h1>
                <h3 className={styles.subHeading}>Find your favorite music</h3>
        </MainLayout>
    );
};

export default Index;
