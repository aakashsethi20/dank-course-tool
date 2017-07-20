import React from 'react';
import SearchBar from './SearchBar';
import {Card, CardHeader} from 'material-ui/Card';
import CourseDetails from './CourseDetails';
import { Transition } from 'react-transition-group';
import './SimpleLookup.css'

export default class SimpleLookup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Hello world",
            selectedCourse: this.props.selectedCourse,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selectedCourse: nextProps.selectedCourse
        });
    }

    onCourseSelected = (course) => {
        this.setState({
            selectedCourse: course
        });
        this.props.onCourseSelected(course);
    }

    render() {
        console.log(this.props.selectedCourse);
        const duration = 350;
        const defaultStyle = {
            transition: `opacity ${duration}ms ease-in-out`,
            opacity: 0,
        }

        const transitionStyles = {
            entering: { opacity: 1 },
            entered:  { opacity: 1 },
        };

        return (
            <div>
                <SearchBar selectedCourse={this.state.selectedCourse} onCourseSelected={this.onCourseSelected}/>
                <Transition in={!!this.state.selectedCourse} timeout={duration}>
                    {(state) => (
                    <div
                    style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                            {this.state.selectedCourse ? <CourseDetails course={this.state.selectedCourse}/> : null}
                    </div>
    )}
                </Transition>
            </div>
        );
    }
}