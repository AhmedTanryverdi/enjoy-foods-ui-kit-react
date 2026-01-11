import React, {useEffect, useState} from "react";
import {ProductCard} from "@/host-app/src/shared/components/product-card/product-card";

const styles = require("./styles.module.scss");

export const TopDishes: React.FC = ()=>{

    const [productData, setProductData] = useState<any>([]);
    useEffect(()=>{
        const getData = async ()=>{
            try {
                const response = await fetch("http://localhost:8080/products");
                if(!response.ok) throw new Error(`Ошибка запроса: ${response.status}`);
                const data = await response.json();
                setProductData(data);

            }catch (err){
                console.log("download products error!");
            }
        }
        getData()
    }, []);

    if(!productData.length) return <div>Loading...</div>

    return <section className={styles.top_dishes}>
        <div className={styles.content}>
            <div className={styles.title_block}>
                <h2 className={styles.title}>Our Top <span>Dishes</span></h2>
            </div>
            <ul className={styles.card_list}>
                {
                    productData.map((item:any, index:number)=>{
                        return <ProductCard key={index}
                                            image={item.imgUrl}
                                            title={item.title}
                                            price={item.price}
                                            status={item.status}
                                            statusBgColor={item.statusBgColor}
                                            statusTextColor={item.statusTextColor}
                        />
                    })
                }
            </ul>
            <div className={styles.btn_block}>
                <button className={styles.btn}>
                    <span>View All</span>
                    <div className={styles.svg}>
                        <svg width="19" height="3" viewBox="0 0 19 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.12891 1.12891H16.933" stroke="#ACADB9" strokeWidth="2.25773" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.12891 1.12891L9.03097 9.03097L1.12891 16.933" stroke="#ACADB9" strokeWidth="2.25773" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    </section>
}