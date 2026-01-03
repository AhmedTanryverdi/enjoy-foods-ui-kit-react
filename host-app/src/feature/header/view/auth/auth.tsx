import React from "react";

const styles = require("./styles.module.scss");

export const Auth: React.FC<{label: string, active: string, index: number}> = ({label, active, index})=>{

    return <button className={`${styles.btn} ${active !== '' && styles.active}`} data-index={index}>
        {label}
    </button>
}