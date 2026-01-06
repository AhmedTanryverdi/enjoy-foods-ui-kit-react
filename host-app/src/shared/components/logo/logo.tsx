import React from "react";
import { useNavigate } from "react-router-dom";

const styles = require("./styles.module.scss");

export const Logo: React.FC = ()=>{
    const navigate = useNavigate();
    return <div className={styles.logo}>
        <img src={require("@/host-app/src/shared/assets/icons/logo.png")} alt="logo" onClick={()=>navigate("/")}/>
    </div>
}