import React from "react";
import {StatsCard} from "@/host-app/src/feature/main/hero/banner/stats-card/stats-card";

const styles = require("./styles.module.scss");

const CARD_ITEMS = [
    {
        title: "10K+",
        subtitle: {
            p1: "Satisfied Costumers",
            p2: "All Great Over The World"
        }
    },
    {
        title: "4M",
        subtitle: {
            p1: "Healthy Dishes Sold",
            p2: "Including Milk Shakes Smooth"
        }
    },
    {
        title: "99.99%",
        subtitle: {
            p1: "Reliable Customer Support",
            p2: "We Provide Great Experiences"
        }
    }
]

export const Banner:React.FC = ()=>{
    return <div className={styles.banner}>
        <div className={styles.content}>
            {
                CARD_ITEMS.map((item, index)=>{
                    return <StatsCard key={index} title={item.title} subtitle={item.subtitle} />
                })
            }
        </div>
    </div>
}