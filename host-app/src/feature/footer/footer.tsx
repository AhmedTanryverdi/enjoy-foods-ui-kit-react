import React from "react";
import {Navbar} from "@/host-app/src/shared/components/navbar/navbar";
import {Logo} from "@/host-app/src/shared/components/logo/logo";
import {LINKS} from "@/host-app/src/shared/utils/constants";

const styles = require("./styles.module.scss");

const Footer: React.FC = ()=>{

    return <footer className={styles.footer}>
        <div className={styles.content}>
            <Logo />
            <div>
                <Navbar styleProps={{columnGap: "108px"}}/>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.copyright}>
                <span>© 2023 EATLY All Rights Reserved.</span>
            </div>
            <div className={styles.social_links}>
                <ul className={styles.list}>
                    {
                        LINKS.map((item, index)=>{
                            return <li key={index}>
                                <a href={`https://www.${item}.com`} target="_blank" rel="noopener noreferrer">
                                    <img src={require(`@/host-app/src/shared/assets/icons/social_links/${item}.png`)} alt={`${item}`}/>
                                </a>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    </footer>
}

export default Footer;