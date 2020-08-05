import React from 'react';
import './theme.css';
import './index.scss';

// get our fontawesome imports
import {faFileCode, faLink, faStickyNote, faExclamation, faTools} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="main-footer">
                <div id="foot-container">
                    <div id={"small-foot"}>
                        <h3 id={"small-foot-title"}>Links</h3>
                        <div>
                            <FontAwesomeIcon icon={faFileCode}/>
                            <a id="small-footer-module"
                               rel="noopener noreferrer" href="https://blog.ferretninja.com/" target="_blank">Ferret
                                Ninja blog</a></div>
                        <div>
                            <FontAwesomeIcon icon={faStickyNote}/>
                            <a id="small-footer-module"
                               rel="noopener noreferrer" href="http://notes.ferretninja.com/" target="_blank">Ferret
                                Ninja interveiw preparation</a></div>
                        <div>
                            <FontAwesomeIcon icon={faTools}/>
                            <a id="small-footer-module"
                               rel="noopener noreferrer"
                               href="https://medium.com/nerd-for-tech/write-your-own-distributed-job-scheduling-framework-using-etcd-and-spring-boot-83dbdb1a056b"
                               target="_blank">Open source distributed job scheduler Ants Job</a></div>
                    </div>
                    <div id="small-foot-side">
                        <h3 id={"small-foot-title"}>Warning</h3>
                        <div>
                            <FontAwesomeIcon icon={faExclamation}/>
                            <a id="small-footer-module"
                               rel="noopener noreferrer"  target="_blank">Follow the law and upload images responsibly
                                and legally</a></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;