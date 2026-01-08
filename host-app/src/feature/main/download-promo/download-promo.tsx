import React from "react";

const styles = require("./styles.module.scss");

export const DownloadPromo: React.FC = ()=>{
    return <section className={styles.download_promo}>
        <div className={styles.background}>
            <img src={require("@/host-app/src/shared/assets/images/download-promo/mobile.png")} alt="modile"/>
        </div>
        <div className={styles.margin}></div>
        <div className={styles.premium}>
            <h2 className={styles.title}>
                <p>Premium <span>Quality</span></p>
                <p>For Your Health</p>
            </h2>
            <ol className={styles.list}>
                <li className={styles.list_item}>
                    Premium quality food is made with ingredients that are packed with essential vitamins, minerals.
                </li>
                <li className={styles.list_item}>
                    These foods promote overall wellness by support healthy digestion and boosting immunity
                </li>
            </ol>
            <button className={styles.btn}>
                <div>
                    <span>Download</span>
                    <img src={require("@/host-app/src/shared/assets/icons/arrow-right.png")} alt="arrow"/>
                </div>
            </button>
        </div>
    </section>
}