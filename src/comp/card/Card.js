import React from "react";
import styles from "./card.module.css";
const Card = ({namelist , type}) => {
    const Cards = namelist.map(({name , age , address , phone} , idx) => (
        <div className={styles.cardwrapper} key={idx} style ={{backgroundColor: type === "girl"? "pink" : "lightgreen"}}>
            <div>name: {name}</div>
            <div>age: {age}</div>
            <div>address: {address}</div>
            <div>phone: {phone}</div>
            <div className={styles.dltbtn} >X</div>
        </div>
    ));
    return <div className={styles.card_container}>{Cards}</div>
}
export default Card;