import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import {MenuItem} from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import SearchIcon from 'material-ui/svg-icons/action/search';
import semesterIcons from '../SemesterIcons';
import fp from 'lodash/fp';

const coursesToSearchResults = (courses) => {
    return courses.map(course => {
        return {
            text: `${course.code} - ${course.title}`,
            value: (
                <MenuItem
                    value={course}
                >
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div>{`${course.code} - ${course.title}`}</div>
                        <div>
                            {
                                fp.flow(
                                    fp.map(section => ({term: section.term, year: section.year})),
                                    fp.uniqWith(fp.isEqual),
                                    fp.map(section => <span title={`This course is offered in ${fp.capitalize(section.term)} ${section.year}.`}>{semesterIcons[section.term]}</span>)
                                )(course.sections)
                            }
                        </div>
                    </div>
                </MenuItem>
            )
        }
    });
}

const courseToString = (course) => `${course.code} - ${course.title}`;

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchActive: false,
            courses: [
                {
                    title: "Analysis and Design of User Interfaces",
                    code: "SEG3125",
                    sections: [
                        {
                            term: "summer",
                            year: "2017"
                        }, 
                        {
                            term: "winter",
                            year: "2018"
                        },
                        {
                            term: "winter",
                            year: "2018"
                        }
                    ]
                },
                {
                    title: "Design and Analysis of Algorithms I",
                    code: "CSI3105",
                    sections: [
                        {
                            term: "fall",
                            year: "2017"
                        }
                    ]
                }
            ]
        }
    }

    onSearchTextUpdate = (event, newText) => {
        const filteredCourses = this.state.courses.filter(course => courseToString(course).toLowerCase().includes(newText.toLowerCase()));
        this.setState({
            searchText: newText,
            searchActive: true,
            searchResults: filteredCourses,
            selectedCourse: undefined
        });
    }

    courseSelected = (course) => {
        this.setState({
            searchText: courseToString(course),
            selectedCourse: course
        })
    }

    coursesToSearchResults = (courses) => {
        if(!courses) {
            return (<div>No courses</div>);
        }
        let listItem = courses.map( (course, index) => (
            <div>
                <ListItem onTouchTap={() => this.courseSelected(course)}>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div>{`${course.code} - ${course.title}`}</div>
                        <div>
                            {
                                fp.flow(
                                    fp.map(section => ({term: section.term, year: section.year})),
                                    fp.uniqWith(fp.isEqual),
                                    fp.map(section => <span title={`This course is offered in ${fp.capitalize(section.term)} ${section.year}.`}>{semesterIcons[section.term]}</span>)
                                )(course.sections)
                            }
                        </div>
                    </div>
                </ListItem>
                {index == courses.length-1 ? null : <Divider/>}
            </div>
        ));

        return (
            <List>{listItem}</List>
        );
    }

    render() {
        const styles = {
            searchBarContainer: {
                height: "56px",
                display: "flex",
                alignItems: "center",
                padding: "0 24px"
            },
            leftIcon: {
                marginRight: "20px",
                color: "rgba(0,0,0,0.3)"
            }
        }
        return (
            <div>
                <Paper 
                    zDepth={1}
                    style={styles.searchBarContainer}
                >
                    <SearchIcon style={styles.leftIcon}/>
                    <TextField
                        fullWidth={true}
                        hintText="Search for a course"
                        underlineShow={false}
                        onFocus={() => this.onSearchTextUpdate({}, this.state.searchText || "")}
                        onChange={this.onSearchTextUpdate}
                        value={this.state.searchText}
                    />
                </Paper>
                {this.coursesToSearchResults(this.state.searchResults)}
            </div>
        );
    }
}