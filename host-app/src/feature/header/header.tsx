import React, {useState} from "react";
import {useNavigate}  from "react-router-dom"
import {Logo} from "@/host-app/src/shared/components/logo/logo";
import {Navbar} from "@/host-app/src/shared/components/navbar/navbar";
import {Auth} from "./view/auth/auth";
import {DropdownMenu} from "./view/dropdown-menu/dropdown-menu";
import {AUTH_ITEMS} from "@/host-app/src/shared/utils/constants";

const styles = require("./styles.module.scss");

const Header: React.FC = ()=>{
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState<number>(1);
    const [isActiveDropDown, setIsActiveDropdown] = useState<boolean>(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>)=>{
        if(e.target instanceof HTMLButtonElement){
            const index = e.target.getAttribute('data-index');
            setActiveIndex(Number(index)) ;
            navigate(`/auth/${Number(index)=== 0 ? "login": "register" }`);
        }
    }

    return <header className={styles.background}>
        <div className={styles.content}>
            <Logo />
            <div className={styles.margin}></div>
            <Navbar />
            <div style={{"flex": 1}}></div>
            <div className={styles.btns} onClick={(e: React.MouseEvent<HTMLDivElement>)=>handleClick(e)}>
                {
                    AUTH_ITEMS.map((item, index)=>{
                        return <Auth key={index} index={index} label={item} active={activeIndex === index ? "active" : ''}/>
                    })
                }
            </div>
            <div className={styles.hamburger_menu} onClick={()=>setIsActiveDropdown(!isActiveDropDown)}>
                <div className={styles.level}></div>
                <div className={styles.level}></div>
                <div className={styles.level}></div>
                {
                    isActiveDropDown && <DropdownMenu />
                }
            </div>
        </div>
    </header>
}

export default Header;