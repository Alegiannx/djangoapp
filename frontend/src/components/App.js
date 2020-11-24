import React from "react";
import { StylesProvider } from '@material-ui/core/styles';
import CustomAppBar from "./CustomAppBar"
import CustomFooter from "./CustomFooter"
import Landing from "./Landing"
import "./App.css"

export default function App(props) {
    return (
        <StylesProvider injectFirst>
            <CustomAppBar />
            <Landing />
            <CustomFooter />
        </StylesProvider>
    );
}