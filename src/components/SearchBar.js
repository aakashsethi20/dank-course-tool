import React from 'react';
<<<<<<< HEAD
import RaisedButton from 'material-ui/RaisedButton';
=======
import AutoComplete from 'material-ui/AutoComplete';
import {MenuItem} from 'material-ui/Menu';
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
>>>>>>> 1e9d3b9... Basic working search

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
            <Paper 
                zDepth={1}
                style={styles.searchBarContainer}
            >
                <SearchIcon style={styles.leftIcon}/>
                <AutoComplete
                    filter={AutoComplete.caseInsensitiveFilter}
                    fullWidth={true}
                    hintText="Search for a course"
                    dataSource={coursesToSearchResults(this.state.courses)}
                />
            </Paper>
        );
    }
}