import React from 'react';
<<<<<<< HEAD
import RaisedButton from 'material-ui/RaisedButton';
=======
import AutoComplete from 'material-ui/AutoComplete';
import {MenuItem, Menu} from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';
import semesterIcons from '../SemesterIcons';


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
                                course.sections
                                    .map(section => section.term)
                                    .filter((v, i, a) => a.indexOf(v) === i) //unique items
                                    .map(term => semesterIcons[term])
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