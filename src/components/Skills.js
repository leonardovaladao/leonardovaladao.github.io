import React, { Component } from "react";
import Language from "./language";


class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var sectionSubname = this.props.resumeBasicInfo.section_name.skillssubtitle;
      var languageName = this.props.resumeBasicInfo.section_name.language;
      var languageSubname = this.props.resumeBasicInfo.section_name.languagesubtitle;

      var listeningName = this.props.resumeBasicInfo.section_name.listening;
      var speakingName = this.props.resumeBasicInfo.section_name.speaking;
      var readingName = this.props.resumeBasicInfo.section_name.reading;
      var writingName = this.props.resumeBasicInfo.section_name.writing;

      var languages2 = this.props.sharedLanguages.icons.map(function (langprops, i) {
        return (
          <div class="col-sm">
            <Language
              listening={langprops.listening}
              speaking={langprops.speaking}
              reading={langprops.reading}
              writing={langprops.writing}
              languageName={langprops.name}
              countryIcon={langprops.class} 
              listeningName={listeningName}
              speakingName={speakingName}
              readingName={readingName}
              writingName={writingName}/>
          </div>
        );
      }
      )

      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", fontWeight: 'bolder', marginTop: "4px", fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif' }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }


    return (
      <section id="skills" >
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>

            <h1 className="section-subtitle">
              <span className="text-white">{sectionSubname}</span>
            </h1>

          </div>

          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>

        {/* Aqui começam as linguagens */}

        <div className="col-md-12" >
          <div className="col-md-12">
            <h1 class="section-title">
              {languageName}
            </h1>
            <h1 className="section-subtitle">
              <span className="text-white">{languageSubname}</span>
            </h1>



            <div class="container">
              <div class="row">
                {languages2}
              </div>
            </div>

          </div>
        </div>
      </section >
    );
  }
}

export default Skills;
