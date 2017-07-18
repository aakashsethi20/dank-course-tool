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

export default class CourseSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {

        const style = {
            width: 700
            // height: 100,
            // margin: 20,
            // textAlign: 'center',
            // display: 'inline-block',
        };

        let lectures = this.props.section.lectures;
        const lectureElems = lectures.map(lecture => (
            <div>{lecture.day}&emsp;{lecture.time}</div>
        ));

        let labs = this.props.section.labs;
        const labElems = labs.map(lab => (
            <div>{lab.day}&emsp;{lab.time}</div>
        ));

        let dgds = this.props.section.dgd;
        const dgdElems = dgds.map(dgd => (
            <div>{dgd.day}&emsp;{dgd.time}</div>
        ));

        return (
           <div>
                <Paper style={style} zDepth={3}>
                    <Table style={{ tableLayout: 'auto' }} selectable={ false }>
                        <TableBody displayRowCheckbox = {false}>
                            <TableRow>
                                <TableRowColumn><strong>Section</strong>&emsp;{this.props.section.letter}</TableRowColumn>
                                <TableRowColumn><strong>Professor: <a target="_blank" href={`http://www.ratemyprofessor.com/ShowRatings.jsp?tid=${this.props.section.prof.rating}`}>{this.props.section.prof.name}</a></strong></TableRowColumn>
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
                                    {labElems}
                                </TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn><strong>DGD</strong></TableRowColumn>
                                <TableRowColumn>
                                    {dgdElems}
                                </TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
           </div>
        );
    }
}