import React from "react";
import Hero from "@/host-app/src/feature/main/hero/hero";
import {DownloadPromo} from "@/host-app/src/feature/main/download-promo/download-promo";

const Main: React.FC = ()=>{
    return <main>
        <Hero />
        <DownloadPromo />
    </main>
}

export default Main;