import React from "react";
import {Navbar} from "@/host-app/src/shared/components/navbar/navbar";
import {Logo} from "@/host-app/src/shared/components/logo/logo";
import {LINKS} from "@/host-app/src/shared/utils/constants";

const styles = require("./styles.module.scss");


const innerWidth = window.innerWidth;
const navbarStyles = innerWidth <= 375 ? {
    display: "flex",
    flexDirection: "column",
    rowGap: "30px",
    marginTop: "53px",
    fontSize: "14px"
}: innerWidth <= 1024 ? {columnGap: "49px"}: {columnGap: "108px"}

const Footer: React.FC = ()=>{

    return <footer className={styles.footer}>
        <div className={styles.content}>
            <Logo />
            <div className={styles.footerNavbarContainer}>
                <Navbar styleProps={navbarStyles}/>
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