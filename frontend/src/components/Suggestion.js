import React from 'react'
import Typography from '@material-ui/core/Typography'
import styles from './Suggestion.module.css'
import Container from '@material-ui/core/Container';

export default function Suggestions(props) {

    return (
        <div className={styles.root}>
            <Container maxWidth="lg">
                <Typography className={styles.title + " text-special"} variant="h2">
                    {props.title}
                </Typography>
            </Container>
            <Container className={styles.container} maxWidth="lg">
                <img className={styles.photo} src={props.img} />
                <p className={styles.content}>{props.content}</p>
            </Container>
        </div>
    );
}
