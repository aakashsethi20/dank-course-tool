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
        let sampleCourse = {
            title: "Anal. of User",
            sections: [
                {
                    prof: {
                        name: "Fadi Malek",
                        rating: "1950539"
                    },
                    letter: "A",
                    activity: [
                        {
                            lectures: [
                                {
                                    day: "Tuesday",
                                    time: "11:30 - 13:00"
                                },
                                {
                                    day: "Thursday",
                                    time: "11:30 - 13:00"
                                }
                            ]
                        },
                        {
                            labs: [
                                {
                                    day: "Tuesday",
                                    time: "10:00 - 11:30"
                                },
                                {
                                    day: "Tuesday",
                                    time: "10:00 - 11:30"
                                }
                            ]
                        },
                    ],
                }
            ]
        }
        return (
            <div>
                <SearchBar onCourseSelected={this.onCourseSelected}/>
                <CourseDetails course={sampleCourse}/>
            </div>
        );
    }
}