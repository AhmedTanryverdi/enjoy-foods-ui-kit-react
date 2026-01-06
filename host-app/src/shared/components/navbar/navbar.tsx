import React from "react";
import {useNavigate} from "react-router-dom";
import {NAVBAR_ITEMS} from "@/host-app/src/shared/utils/constants";

const styles = require("./styles.module.scss");

export const Navbar: React.FC<{styleProps?: Partial<{}>}> = ({styleProps})=>{
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent)=>{
        if(e.target instanceof HTMLLIElement){
            const item = e.target.getAttribute("data-item");
            if(item) navigate(item.toLowerCase());
        }
    }

    return <ul className={styles.background} style={styleProps} onClick={handleClick}>
        {
            NAVBAR_ITEMS.map((item: string, index: number)=>{
                return <li key={index} className={styles.li_item} data-item={item}>
                    {item}
                </li>
            })
        }
    </ul>
}