import React, { PureComponent, PropTypes } from 'react';
import { ExpansionList, ExpansionPanel } from 'react-md/lib/ExpansionPanels';
import icons from '../SemesterIcons'

const algoContent = "The celestial sphere and the heliocentric model. Gravity and motion. Telescopes and detectors. Planets and the origin of the Solar System. The Sun, stars, the Milky Way and other galaxies. Black holes, cosmology, dark matter and dark energy.";
const uiContent = "Psychological principles of human-computer interaction. Evaluation of user interfaces. Usability engineering. Task analysis, user-centered design and prototyping. Conceptual models and metaphors. Software design rationale. Design of windows, menus and commands. Voice and natural language I/O. Response time and feedback. Colour, icons and sound. Internationalization and localization. User interface architectures and A PIs. Case studies and project.";
const assuranceContent = "Quality: how to assure it and verify it, and the need for a culture of quality. Avoidance of errors and other quality problems. Inspections and reviews. Testing, verification and validation techniques. Process assurance vs. Product assurance. Quality process standards. Product and process assurance. Problem analysis and reporting.";

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
                    <ExpansionPanel label="CSI3101 - Design and Analysis of Algorithms I" secondaryLabel="(3 credits)" saveLabel="Show Timetable" cancelLabel={null} closeOnSave={false} closeOnCancel={false}>
                        {algoContent}
                        <br></br>
                        <br></br>
                        <span style={{ color: "grey", fontStyle: "italic" }}>Offered in: </span><span style={{ display: "inline-block", width: "100px" }}>{icons.summer} {icons.fall}</span>
                        <span style={{ color: "grey", fontStyle: "italic" }}>Prerequisites: CSI2110 and CSI2101</span> 
                    </ExpansionPanel>
                    <ExpansionPanel label="SEG3125 - Analysis and Design of User Interfaces" secondaryLabel="(3 credits)" saveLabel="Show Timetable" cancelLabel={null}>
                        {uiContent}
                        <br></br>
                        <br></br>
                        <span style={{ color: "grey", fontStyle: "italic"}}>Offered in: </span><span style={{ display: "inline-block", width: "100px" }}>{icons.summer} {icons.winter}</span>
                        <span style={{ color: "grey", fontStyle: "italic" }}>Prerequisites: SEG2105</span> 
                    </ExpansionPanel>
                    <ExpansionPanel label="SEG3103 - Software Quality Assurance" secondaryLabel="(3 credits)" saveLabel="Show Timetable" cancelLabel={null}>
                        {assuranceContent}
                        <br></br>
                        <br></br>
                        <span style={{ color: "grey", fontStyle: "italic"  }}>Offered in: </span><span style={{ display: "inline-block", width: "100px" }}>{icons.fall}</span>
                        <span style={{ color: "grey", fontStyle: "italic" }}>Prerequisites: SEG2105</span>                         
                    </ExpansionPanel>
                </ExpansionList>
            </div>
        );
    }
}