import React from 'react';
import { Link } from "react-router-dom";
import styles from './SideMenuEntry.module.css'

export default function SideMenuEntry(props) {
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={props.link}>
                <h2 className={styles.entry}>{props.text}</h2>
            </Link>
        </div>
    );
}
