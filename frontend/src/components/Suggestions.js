import React from 'react'
import styles from './Suggestions.module.css'
import Container from '@material-ui/core/Container';
import Suggestion from './Suggestion'

export default function Suggestions(props) {

    function renderSuggestions() {
        return props.suggestions.map((s) => (
            <Suggestion
                name={s.name}
                content={s.content}
                img={s.img}
            />
        ))
    }

    return (
        <div className={styles.root}>
            <Container className={styles.container} maxWidth="lg">
                {renderSuggestions()}
            </Container>
        </div>
    );
}
