import React, {useState} from "react";
import {useNavigate}  from "react-router-dom"
import {Logo} from "./view/logo/logo";
import {Navbar} from "./view/navbar/navbar";
import {Auth} from "./view/auth/auth";
import {DropdownMenu} from "./view/dropdown-menu/dropdown-menu";

const styles = require("./styles.module.scss");
const AUTH_ITEMS = ["Login", "Sign up"];

const Header: React.FC = ()=>{
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState<number>(1);
    const [isActiveDropDown, setIsActiveDropdown] = useState<boolean>(false);

    console.log("header")
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