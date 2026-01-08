import React from  "react";
import {Banner} from "@/host-app/src/feature/main/hero/banner/banner";

const styles = require("./styles.module.scss");

export const Hero: React.FC = ()=>{

    return <>
        <section className={styles.hero}>
            <div className={styles.primary_block}>
                <p className={styles.primary_up}>OVER 1000 USERS</p>
                <h2 className={styles.title}>
                    <p>Enjoy Foods All</p>
                    <p>Over The <span>World</span></p>
                </h2>
                <p className={styles.description}>EatLy help you set saving goals,
                    earn cash back offers, Go to disclaimer for more details
                    and get paychecks up to two days early. Get a <span>$20 bonus</span>.
                </p>
                <div className={styles.btns}>
                    <button>Get Started</button>
                    <button>Go Pro</button>
                </div>
            </div>
            <div className={styles.background}>
                <img src={require("@/host-app/src/shared/assets/images/hero/foodImage.png")} alt="food image" className={styles.background_img}/>
                <img src={require("@/host-app/src/shared/assets/images/hero/graph.png")} alt="graph" className={styles.graph}/>
            </div>
        </section>
        <Banner />
    </>

}

export default Hero;