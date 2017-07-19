import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const subjects = [
            "Pick a subject",
            "All",
            "Administration",
            "Arabic Language and Culture",
            "Biomedical Engineering",
            "Chemical Engineering",
            "Civil Engineering",
            "Communications",
            "Computer Engineering",
            "Computer Science",
            "Economics",
            "Electrical Engineering",
            "Études des francophones",
            "Film Studies",
            "Geology",
            "Human Kinetics",
            "Management",
            "Physics",
            "Science",
            "Software Engineering",
            "Translation",
            "Yiddish"
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
        
        const subjectItems = subjects.map((subject, index) => (
            <MenuItem value={subject} key={index} primaryText={subject}  />
        ));

        const semesterItems = semesters.map(semester => (
            <MenuItem value={semesters.toString} key={semesters.toString} primaryText={semesters.toString}  />
        ));

        const yearItems = years.map(year => (
            <MenuItem value={years.toString} key={years.toString} primaryText={years.toString}  />
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

    handleChange = (event, index, subjectValue) => this.setState({subjectValue});

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
                <div>
                    <h3>Semester</h3>
                    <DropDownMenu maxHeight={300} value={this.state.semesterValue} onChange={this.handleChange}>
                        {semesterItems}
                    </DropDownMenu>
                </div>
                <div>
                    <h3>Year</h3>
                    <DropDownMenu maxHeight={300} value={this.state.yearValue} onChange={this.handleChange}>
                        {yearItems}
                    </DropDownMenu>
                </div>
                <div>
                    <RaisedButton label="Search" style={style} />
                </div>
                
            </div>
        );
    }
}