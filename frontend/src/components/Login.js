import React, { useState } from 'react'
import Container from '@material-ui/core/Container';
import { FormControl, TextField, FormHelperText } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styles from './Login.module.css'

export default function Landing() {

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    return (
        <Container className={styles.container}>
            <Typography className={styles.title} variant="h2">
                Log In
            </Typography>
            <FormControl className={styles.form}>
                <TextField
                    id="username"
                    label="Username"
                    className={styles.input}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    id="password"
                    label="Password"
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormHelperText className={styles.forgot} id="my-helper-text">Forgot Password?</FormHelperText>
                <Button
                    className={styles.submit + " secondary"}
                    title="Submit"
                    size="large"
                    value="Submit"
                    variant="contained"
                >
                    Submit
                </Button>
            </FormControl>
        </Container>
    );
}
