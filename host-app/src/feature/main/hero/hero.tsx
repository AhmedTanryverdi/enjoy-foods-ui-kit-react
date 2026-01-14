import React from  "react";
import {Banner} from "@/host-app/src/feature/main/hero/banner/banner";

const styles = require("./styles.module.scss");

export const Hero: React.FC = ()=>{

    return <>
        <section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.title_block}>
                    <p className={styles.up}>OVER 1000 USERS</p>
                    <h2 className={styles.title}>
                        <p className={styles.title}>Enjoy Foods All</p>
                        <p>Over The <span>World</span></p>
                    </h2>
                </div>
                <p className={styles.description}>EatLy help you set saving goals,
                    earn cash back offers, Go to disclaimer for more details
                    and get paychecks up to two days early. Get a <span>$20 bonus</span>.
                </p>
                <div className={styles.btns}>
                    <button>Get Started</button>
                    <button>Go Pro</button>
                </div>
            </div>
        </section>
        <Banner />
    </>

}

export default Hero;