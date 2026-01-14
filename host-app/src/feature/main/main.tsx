import React from "react";
import Hero from "@/host-app/src/feature/main/hero/hero";
import {DownloadPromo} from "@/host-app/src/feature/main/download-promo/download-promo";
import {TopDishes} from "@/host-app/src/feature/main/top-dishes/top-dishes";

const Main: React.FC = ()=>{
    return <main style={{"width": "100%"}}>
        <Hero />
        <DownloadPromo />
        <TopDishes />
    </main>
}

export default Main;