import React from 'react';
import Typography from '@material-ui/core/Typography';
import Code from '@material-ui/icons/Code';
import Container from '@material-ui/core/Container';
import styles from './CustomFooter.module.css'

export default function CustomFooter() {

    return (
        <footer className={styles.root + " tertiary"}>
            <Container className={styles.info} maxWidth="lg">
                <div className={styles.logo}>
                    <Typography variant="subtitle1">
                        MyBlog
                    </Typography>
                </div>
                <div className={styles.details + " " + styles.border}>
                    <ul>
                        <li><a>Contact</a></li>
                        <li><a>Support</a></li>
                        <li><a>Lisence</a></li>
                    </ul>
                </div>
                <div className={styles.details}>
                    <ul>
                        <li><a>Report a Bug</a></li>
                        <li><a>Suggest a Feature</a></li>
                        <li><a>Easter Egg</a></li>
                    </ul>
                </div>
            </Container>
            <div className={styles.signature}>
                <Code />
                <Typography variant="subtitle2">
                    made by alegiannx
                </Typography>
            </div>
        </footer>
    );
}
