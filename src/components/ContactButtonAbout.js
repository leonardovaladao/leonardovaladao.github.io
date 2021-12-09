import React from "react";
import ProgressBar from "./bar";

const ContactButtonAbout = (props) => {
    const { link, iconURL, text, target } = props;
    return (
        <a href={link} class="col-sm contact-button-about" target={target}>
            <div align="center">
                <p>{text}</p></div>
        </a>
    );
};

export default ContactButtonAbout;