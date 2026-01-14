import React from "react";
import Header from "../../feature/header/header";
import Footer from "../../feature/footer/footer";
import Main from "@/host-app/src/feature/main/main";

const styles = require("./styles.module.scss");

const AppWrapper: React.FC = ()=>{
    return <div className={styles.app}>
        <Header />
        <Main />
        <Footer />
    </div>
}

export default AppWrapper;