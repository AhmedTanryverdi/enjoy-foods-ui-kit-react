import React, {ReactNode} from "react";
import Header from "../../feature/header/header";
import Footer from "../../feature/footer/footer";

const styles = require("./styles.module.scss");

const AppWrapper: React.FC<{children: ReactNode}> = ({children})=>{
    return <div className={styles.app}>
        <Header />
        {children}
        <Footer />
    </div>
}

export default AppWrapper;