import React from "react";

const styles = require("./styles.module.scss");

const MENU = ["Login", "Sign up", "Menu", "Blog", "Pricing", "Contact"];

export const DropdownMenu: React.FC = ()=>{

    return <div className={styles.dropdown}>
        <ul className={styles.list}>
            {
                MENU.map((item, index)=>{
                    return <li key={index} className={styles.list_item}>{item}</li>
                })
            }
        </ul>
    </div>
}