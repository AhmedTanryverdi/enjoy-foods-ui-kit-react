import React from "react";

const styles = require("./styles.module.scss");

export const StatsCard: React.FC<{title: string, subtitle: {p1: string, p2: string}}> = ({title, subtitle})=>{
    return <div className={styles.background}>
        <div className={styles.title}>
            <h2>{title}</h2>
        </div>
        <div className={styles.subtitle}>
            <p>{subtitle.p1}</p>
            <p>{subtitle.p2}</p>
        </div>
    </div>
}