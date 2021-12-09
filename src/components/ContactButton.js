import React from "react";
import ProgressBar from "./bar";

const ContactButton = (props) => {
    const { link, iconURL, text } = props;


    return (
        <a href={link} class="col-sm contact-button" target="_blank">
            <div align="center">
                <i className={"contactButtonIcon "+iconURL} ></i>
                <p>{text}</p></div>
        </a>
    );
};

export default ContactButton;