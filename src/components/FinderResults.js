import React, { PureComponent, PropTypes } from 'react';
import { ExpansionList, ExpansionPanel } from 'react-md/lib/ExpansionPanels';
import icons from '../SemesterIcons'

const astronomyContent = "The celestial sphere and the heliocentric model. Gravity and motion. Telescopes and detectors. Planets and the origin of the Solar System. The Sun, stars, the Milky Way and other galaxies. Black holes, cosmology, dark matter and dark energy.";
const uiContent = "Psychological principles of human-computer interaction. Evaluation of user interfaces. Usability engineering. Task analysis, user-centered design and prototyping. Conceptual models and metaphors. Software design rationale. Design of windows, menus and commands. Voice and natural language I/O. Response time and feedback. Colour, icons and sound. Internationalization and localization. User interface architectures and A PIs. Case studies and project.";
const assuranceContent = "Qualité: comment s'en assurer et la vérifier, et le besoin d'une culture de la qualité. Évitement d'erreurs et d'autres problèmes de qualité. Inspections et revues. Techniques de test, de vérification et de validation. Assurance de processus vs assurance de produit. Normes de qualité des processus. Rapport et analyse de problèmes.";

export default class FinderResults extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
//var ExpansionPanel = require('material-expansion-panel');

        var aIcons = [{
                    icon: null,
                    callback: null,
                    additionalParams: null
                }];
        var aButtons = [
            {
                buttonText: "Show Schedule",
                callback: null,
                additionalParams: null
            },
            // {
            //     buttonText: "Cancel",
            //     callback: null,
            //     additionalParams: null,
            //     toggleExpand: true
            // }
        ];

        return (
            <div>
                <ExpansionList style={{ padding: 16 }}>
                    <ExpansionPanel label="PHY2390 - Astronomy" secondaryLabel="(3 credits)" defaultExpanded saveLabel="Show Timetable" cancelLabel={null}>
                        {astronomyContent}
                        <br></br>
                        <br></br>
                        <span style={{ color: "grey", fontStyle: "italic" }}>Offered in: </span><span style={{ display: "inline-block", width: "100px" }}>{icons.summer} {icons.fall}</span>
                        <span style={{ color: "grey", fontStyle: "italic" }}>Prerequisites: PHY1124</span> 
                    </ExpansionPanel>
                    <ExpansionPanel label="SEG3125 - Analysis and Design of User Interfaces" secondaryLabel="(3 credits)" saveLabel="Show Timetable" cancelLabel={null}>
                        {uiContent}
                        <br></br>
                        <br></br>
                        <span style={{ color: "grey", fontStyle: "italic"}}>Offered in: </span><span style={{ display: "inline-block", width: "100px" }}>{icons.summer} {icons.winter}</span>
                        <span style={{ color: "grey", fontStyle: "italic" }}>Prerequisites: SEG2105</span> 
                    </ExpansionPanel>
                    <ExpansionPanel label="SEG3503 - Assurance de la qualité logicielle" secondaryLabel="(3 credits)" saveLabel="Show Timetable" cancelLabel={null}>
                        {assuranceContent}
                        <br></br>
                        <br></br>
                        <span style={{ color: "grey", fontStyle: "italic"  }}>Offered in: </span><span style={{ display: "inline-block", width: "100px" }}>{icons.fall}</span>
                        <span style={{ color: "grey", fontStyle: "italic" }}>Prerequisites: SEG2505</span>                         
                    </ExpansionPanel>
                </ExpansionList>
            </div>
        );
    }
}