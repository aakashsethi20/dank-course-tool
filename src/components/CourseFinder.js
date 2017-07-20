import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FinderResults from './FinderResults';
import SubjectPicker from './SubjectPicker';

const subjects = [
    {
        name: "Administration",
        code: "ADM"
    },
    {
        name: "Arabic Language and Culture",
        code: "ARB"
    },
    {
        name: "Biomedical Engineering",
        code: "BMG"
    },
    {
        name: "Chemical Engineering",
        code: "CHG"
    },
    {
        name: "Civil Engineering",
        code: "CVG"
    },
    {
        name: "Communications",
        code: "COM"
    },
    {
        name: "Computer Engineering",
        code: "CEG"
    },
    {
        name: "Computer Science",
        code: "CSI"
    },
    {
        name: "Economics",
        code: "ECO"
    },
    {
        name: "Electrical Engineering",
        code: "ELG"
    },
    {
        name: "Science",
        code: "SCI"
    },
    {
        name: "Geology",
        code: "GEO"
    },
    {
        name: "Film Studies",
        code: "CIN"
    },
    {
        name: "Geology",
        code: "GEO"
    },
    {
        name: "Human Kinetics",
        code: "APA"
    },
    {
        name: "Management",
        code: "ADM"
    },
    {
        name: "Physics",
        code: "PHY"
    },
    {
        name: "Software Engineering",
        code: "SEG"
    }
];
        const semesters = [
            "Choose the term",
            "Summer 2017",
            "Fall 2017",
            "Winter 2018"
        ];
        const years = [
            "Any",
            "1",
            "2",
            "3",
            "4"
        ];

        const semesterItems = semesters.map((semester, index) => (
            <MenuItem value={semester} key={index} primaryText={semester}  />
        ));

        const yearItems = years.map((year, index) => (
            <MenuItem value={year} key={index} primaryText={year}  />
        ));

export default class CourseFinder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subjectValue: "Pick a subject",
            semesterValue: "Choose the term",
            yearValue: "Any"
        };
    }

    onValidationChange = (val) => this.setState({
        validation: val
    })

    handleSubjectChange = (event, index, subjectValue) => this.setState({subjectValue});
    handleSemesterChange = (event, index, semesterValue) => this.setState({semesterValue});
    handleYearChange = (event, index, yearValue) => this.setState({yearValue});
    //handleSearch

    render() {

        const style = {
            margin: 12,
        };

        return (
            <div>
                <div>
                    <h3>Subject</h3>
                    <DropDownMenu maxHeight={300} value={this.state.subjectValue} onChange={this.handleSubjectChange}>
                        {subjectItems}
                    </DropDownMenu>
                </div>
                <div style={{display: "flex", marginLeft:"2em", marginTop:"1em"}}>
                <h3>Subjects</h3>
                <SubjectPicker onValidationChange={this.onValidationChange} subjects={subjects}></SubjectPicker>
                <div>
                    <h3>Semester</h3>
                    <DropDownMenu maxHeight={300} value={this.state.semesterValue} onChange={this.handleSemesterChange}>
                        {semesterItems}
                    </DropDownMenu>
                </div>
                <div>
                    <h3>Year</h3>
                    <DropDownMenu maxHeight={300} value={this.state.yearValue} onChange={this.handleYearChange}>
                        {yearItems}
                    </DropDownMenu>
                </div>
                <div>
                    <RaisedButton label="Search" style={style} />
                </div>
                </div>
            </div>
        );
    }
}