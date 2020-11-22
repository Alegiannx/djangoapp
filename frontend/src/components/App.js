import React from "react";
import CustomAppBar from "./CustomAppBar"
import { StylesProvider } from '@material-ui/core/styles';
import "./App.css"

export default function App(props) {
    return (
        <StylesProvider injectFirst>
            <CustomAppBar />
            <h1>Hello World</h1>
        </StylesProvider>
    );
}