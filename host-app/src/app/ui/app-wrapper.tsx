import React, {ReactNode} from "react";
import Header from "../../feature/header/header";

const styles = require("./styles.module.scss");

const AppWrapper: React.FC<{children: ReactNode}> = ({children})=>{
    return <div className={styles.app}>
        <Header />
        {children}
    </div>
}

export default AppWrapper;