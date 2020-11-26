import React from "react";
import { StylesProvider } from '@material-ui/core/styles';
import { Switch, Route } from "react-router-dom";
import CustomAppBar from "./CustomAppBar"
import CustomFooter from "./CustomFooter"
import Landing from "./Landing"
import "./App.css"
import Posts from "./Posts";

export default function App(props) {
    return (
        <StylesProvider injectFirst>
            <CustomAppBar />
            <Switch>
                <Route path="/post/:id">
                    <h1>alex</h1>
                </Route>
                <Route path="/posts">
                    <Posts />
                </Route>
                <Route path="/login">
                    <h1>alex</h1>
                </Route>
                <Route path="/">
                    <Landing />
                </Route>
            </Switch>
            <CustomFooter />
        </StylesProvider>
    );
}