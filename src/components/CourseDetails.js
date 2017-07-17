import React from 'react';
import Paper from 'material-ui/Paper';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import CourseSection from './CourseSection';

export default class CourseDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const style = {
            width: 700
            // height: 100,
            // margin: 20,
            // textAlign: 'center',
            // display: 'inline-block',
        };

        // const border_bottom = {
        //     borderBottom: "border-bottom:1pt solid black"
        // };

        const course = this.props.course;
        const section = course.sections[0];

        const sectionElems = this.props.course.sections.map(sec => (
            <CourseSection section = {sec}></CourseSection>
        ));


        return (
            <div>
                {sectionElems}
            </div>
        );
    }
}