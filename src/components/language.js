import React from "react";
import ProgressBar from "./bar";

const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
];

const Language = (props) => {
    const {listening, speaking, reading, writing, languageName, countryIcon, listeningName, speakingName, readingName, writingName} = props;

    const languageIcon = {
        fontSize: "60px",
    }

    const languageText = {
        fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif',
        color: 'white',
        display: 'block',
    }

    const languageSkills = {
        fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif',
        fontSize: '11px',
        color: 'white',
        marginTop: "4px",
        marginBottom: "0px",
    }

    const barColor = "#f8ddc6"

    return (
        <div className="language-tile">
            <div class="row">

                <div class="col-5 iconDiv" >
                        <h1><span
                            className="iconify"
                            data-icon={countryIcon}
                            data-inline="false"
                            style={languageIcon}
                        ></span></h1>

                        <h3 style={languageText}>{languageName}</h3>
                </div>
                <div class="col">

                    <h3 style={languageSkills}>{listeningName}:</h3>
                    <ProgressBar bgcolor={barColor} completed={listening} />

                    <h3 style={languageSkills}>{speakingName}:</h3>
                    <ProgressBar bgcolor={barColor} completed={speaking} />

                    <h3 style={languageSkills}>{readingName}:</h3>
                    <ProgressBar bgcolor={barColor} completed={reading} />

                    <h3 style={languageSkills}>{writingName}:</h3>
                    <ProgressBar bgcolor={barColor} completed={writing} />
                </div>
            </div>


        </div>
    );
};

export default Language;