import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import SearchIcon from 'material-ui/svg-icons/action/search';
import SearchResults from './SearchResults';
import courses from '../courses';

const courseToString = (course) => `${course.code} - ${course.title}`;

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchActive: false
        }
    }

    onSearchTextUpdate = (event, newText) => {
        const filteredCourses = courses.filter(course => courseToString(course).toLowerCase().includes(newText.toLowerCase()));
        this.setState({
            searchText: newText,
            searchActive: true,
            searchResults: filteredCourses,
            selectedCourse: undefined
        });
        this.props.onCourseSelected(undefined);
    }

    courseSelected = (course) => {
        this.setState({
            searchText: courseToString(course),
            selectedCourse: course
        })
        this.props.onCourseSelected(course);
    }

    render() {
 

        let hasFall = course => course.somePropery;

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
                <SearchResults courses={this.state.searchResults} onSelect={this.courseSelected} />
            </div>
        );
    }
}