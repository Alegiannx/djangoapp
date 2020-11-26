import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import styles from './Post.module.css'

export default function Post(props) {

    return (
        <div className={styles.root}>
            <Container maxWidth="lg">
                <Typography className={styles.title + " text-special"} variant="h2">
                    {props.title}
                </Typography>
                <Typography className={styles.author} variant="subtitle2">
                    {"by " + props.author}
                </Typography>
            </Container>
            <Container className={styles.container} maxWidth="lg">
                <img className={styles.photo} src={props.img} />
                <p className={styles.text}>{props.content}</p>
            </Container>
            <Container className={styles.buttons} maxWidth="lg">
                <Button className={styles.like} title="Like" size="medium" variant="contained">
                    LIKE
                </Button>
                <Button className={styles.share} title="Share" size="medium" variant="contained">
                    SHARE
                </Button>
            </Container>
        </div>
    );
}
