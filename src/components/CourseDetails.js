import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

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

        let lectures = course.sections[0].activity[0].lectures;

        const lectureElems = lectures.map(lecture => (
            <div>{lecture.day}&emsp;{lecture.time}</div>
        ));

        return (

           <div>
                <Paper style={style} zDepth={3}>
                    <Table style={{ tableLayout: 'auto' }} selectable={ false }>
                        <TableBody displayRowCheckbox = {false}>
                            <TableRow>
                                <TableRowColumn><strong>Section</strong>&emsp;{course.sections[0].letter}</TableRowColumn>
                                <TableRowColumn><strong>Professor: <a target="_blank" href={`http://www.ratemyprofessor.com/ShowRatings.jsp?tid=${course.sections[0].prof.rating}`}>{course.sections[0].prof.name}</a></strong></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn><strong>Lecture</strong></TableRowColumn>
                                <TableRowColumn>
                                    {lectureElems}
                                </TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn><strong>Lab</strong></TableRowColumn>
                                <TableRowColumn>
                                    <p>
                                        {course.sections[0].activity[1].labs[0].day}&emsp;{course.sections[0].activity[1].labs[0].time}<br></br>
                                        {course.sections[0].activity[1].labs[1].day}&emsp;{course.sections[0].activity[1].labs[1].time}
                                    </p>
                                </TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn><strong>DGD</strong></TableRowColumn>
                                <TableRowColumn>
                                    <p>
                                        {course.sections[0].activity[2].dgd[0].day}&emsp;{course.sections[0].activity[2].dgd[0].time}
                                    </p>
                                </TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
           </div>
        );
    }
}