import React from 'react';
import SearchBar from './SearchBar';
import {Card, CardHeader} from 'material-ui/Card';

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
        let courseDescription = null;
        if(this.state.selectedCourse) {
            courseDescription = (
                <Card>
                    <CardHeader title={this.state.title} />
                    <div>{this.state.selectedCourse.name}</div>
                </Card>
            )
        }
        return (
            <div>
                <SearchBar onCourseSelected={this.onCourseSelected}/>
                {courseDescription}
            </div>
        );
    }
}