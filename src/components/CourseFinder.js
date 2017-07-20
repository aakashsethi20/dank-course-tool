import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FinderResults from './FinderResults';

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
            yearValue: "Any",
            searchActive: false
        };
    }

    handleSubjectChange = (event, index, subjectValue) => this.setState({subjectValue});
    handleSemesterChange = (event, index, semesterValue) => this.setState({semesterValue});
    handleYearChange = (event, index, yearValue) => this.setState({yearValue});
    
    handleSearch = (event) => this.setState({searchActive: true});

    render() {

        const style = {
            margin: 12,
        };

        return (
            <div>
                <div style={{display: "flex", marginLeft:"2em", marginTop:"1em"}}>
                    <h3>Subject</h3>
                    <DropDownMenu maxHeight={300} value={this.state.subjectValue} onChange={this.handleSubjectChange}>
                        {subjectItems}
                    </DropDownMenu>
                </div>
                <div style={{display: "flex", marginLeft:"2em", marginTop:"1em"}}>
                    <h3>Semester</h3>
                    <DropDownMenu maxHeight={300} value={this.state.semesterValue} onChange={this.handleSemesterChange}>
                        {semesterItems}
                    </DropDownMenu>
                </div>
                <div style={{display: "flex", marginLeft:"2em", marginTop:"1em"}}>
                    <h3>Year</h3>
                    <DropDownMenu maxHeight={300} value={this.state.yearValue} onChange={this.handleYearChange}>
                        {yearItems}
                    </DropDownMenu>
                </div>
                <div>
                    <RaisedButton label="Search" style={style} onTouchTap={this.handleSearch}/>
                </div>
                {this.state.searchActive ?
                <FinderResults />
                : null
                }
            </div>
        );
    }
}