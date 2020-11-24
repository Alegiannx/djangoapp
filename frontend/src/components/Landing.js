import React from 'react'
import Typography from '@material-ui/core/Typography'
import styles from './Landing.module.css'
import Button from '@material-ui/core/Button'
import Suggestions from './Suggestions.js'

export default function Landing() {

    let listOfSuggestions = [
        {
            name: "Get Help from People just like You",
            content: "Ask, get answers, solve problems, all with no cost and instant feedback, from people who have been in your place before. Don't hesitate to join the conversation and offer your experience to others too!",
            img: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        },
        {
            name: "Learn Things and Improve Your Daily Life",
            content: "lorem ipsum",
            img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
        }
    ];

    return (
        <div className={styles.root}>
            <section className={styles.top}>
                <header className={styles.titles}>
                    <Typography className={styles.title} variant="h1">
                        Welcome to <span className="text-special">MyBlog</span>!
                    </Typography>
                    <Typography className={styles.subtitle} variant="subtitle1">
                        The best place to read, learn and discuss things. Get started by clicking the button below!
                    </Typography>
                </header>
                <div className={styles.buttons}>
                    <Button className={styles.button + " secondary"} title="See Posts" size="large" variant="contained">
                        DISCOVER NOW
                    </Button>
                </div>
            </section>
            <Suggestions suggestions={listOfSuggestions} />
        </div>
    );
}
