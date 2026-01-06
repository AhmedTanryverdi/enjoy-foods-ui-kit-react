import React from "react";
import {DROPDOWN_MENU} from "@/host-app/src/shared/utils/constants";

const styles = require("./styles.module.scss");

export const DropdownMenu: React.FC = ()=>{

    return <div className={styles.dropdown}>
        <ul className={styles.list}>
            {
                DROPDOWN_MENU.map((item:string, index:number)=>{
                    return <li key={index} className={styles.list_item}>{item}</li>
                })
            }
        </ul>
    </div>
}