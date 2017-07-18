import React from 'react';
import SearchBar from './SearchBar';
import {Card, CardHeader} from 'material-ui/Card';
import CourseDetails from './CourseDetails';

export default class SimpleLookup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Hello world",
            selectedCourse: null
        }
    }

    onCourseSelected = (course) => {
        this.setState({
            selectedCourse: course
        });
    }

    render() {
        return (
            <div>
                <SearchBar onCourseSelected={this.onCourseSelected}/>
                {this.state.selectedCourse ? <CourseDetails course={this.state.selectedCourse}/> : null}
            </div>
        );
    }
}