import React from "react";
import {useNavigate} from "react-router-dom";

const styles = require("./styles.module.scss");
const NAVBAR_ITEMS = ["Menu", "Blog", "Pricing", "Contact"];

export const Navbar: React.FC = ()=>{
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent)=>{
        if(e.target instanceof HTMLLIElement){
            const item = e.target.getAttribute("data-item");
            if(item) navigate(item.toLowerCase());
        }
    }

    return <ul className={styles.background} onClick={handleClick}>
        {
            NAVBAR_ITEMS.map((item, index)=>{
                return <li key={index} className={styles.li_item} data-item={item}>
                    {item}
                </li>
            })
        }
    </ul>
}