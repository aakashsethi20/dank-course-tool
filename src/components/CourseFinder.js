import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class CourseFinder extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const subjectItems = [
            "All",
            "Administration",
            "Arabic Language and Culture",
            "Biomedical Engineering",
            "Chemical Engineering",
            "Civil Engineering",
            
        ];
        return (
            <div>
                <div>
                    <h3>Subject</h3>
                    
                </div>
            </div>
        );
    }
}