import React from "react";
import {useNavigate} from "react-router-dom";

const styles = require("./styles.module.scss");
const NAVBAR_ITEMS = ["Menu", "Blog", "Pricing", "Contact"];
const LINKS = ["instagram", "linkedin", "facebook", "twitter"];

const Footer: React.FC = ()=>{

    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent)=>{
        if(e.target instanceof HTMLLIElement){
            const item = e.target.getAttribute("data-item");
            if(item) navigate(item.toLowerCase());
        }
    }

    return <footer className={styles.footer}>
        <div className={styles.content}>
            <img src={require("../../shared/assets/icons/logo.png")} alt="logo"/>
            <ul className={styles.list} onClick={handleClick}>
                {
                    NAVBAR_ITEMS.map((item:string,index: number)=>{
                        return <li key={index} data-item={item}>{item}</li>
                    })
                }
            </ul>
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
                                    <img src={require(`../../shared/assets/icons/social_links/${item}.png`)} alt={`${item}`}/>
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