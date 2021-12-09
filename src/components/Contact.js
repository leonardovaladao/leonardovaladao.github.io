import React, { Component } from "react";
import ContactButton from "./ContactButton";


class Contact extends Component {


    render() {
        if (this.props.sharedContacts && this.props.resumeBasicInfo) {
            var contactName = this.props.resumeBasicInfo.section_name.contact;
            var contactSubname = this.props.resumeBasicInfo.section_name.contactsubtitle;
            var contacts = this.props.sharedContacts.map(function (contprops, i) {
                return (
                    <ContactButton link={contprops.link} iconURL={contprops.iconURL} text={contprops.text} target={contprops.target} />
                );
            }
            );
        }
        return (
            <section id="skills" >

                <div className="col-md-12">
                    <h1 class="section-title">
                        {contactName}
                    </h1>
                    <h1 className="section-subtitle">
                        <span className="text-white">{contactSubname}</span>
                    </h1>

                    <div class="container">
                        <div class="row">
                            {contacts}
                        </div>
                    </div>

                </div>
            </section >
        );
    }
}

export default Contact;