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
import Divider from 'material-ui/Divider';

export default class CourseSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {

        const style = {
           
        };

        let lectures = this.props.section.lectures;
        const lectureElems = lectures.map(lecture => (
            <TableRow>
                <TableHeaderColumn>Lecture</TableHeaderColumn>
                <TableRowColumn>{lecture.day}}</TableRowColumn>
                <TableRowColumn>{lecture.time}</TableRowColumn>
            </TableRow>
        ));

        let labs = this.props.section.labs;
        const labElems = labs.map(lab => (
            <div>{lab.day}&emsp;{lab.time}</div>
        ));

        let dgds = this.props.section.dgd;
        const dgdElems = dgds.map(dgd => (
            <div>{dgd.day}&emsp;{dgd.time}</div>
        ));

        const styles = {
            container: {
                margin: "1em auto",
                width:"auto"
            },
            table: {
                borderCollapse: "collapse",
                width: "100%"
            },
            row2: {
                height: "28px",
                borderBottom: "1px solid rgb(224, 224, 224)"
            },
            row1: {
                height: "28px"
            },
            row: {
                height: "48px",
                borderBottom: "1px solid rgb(224, 224, 224)"
            },
            lastRow: {
                color: "rgba(0, 0, 0, 0.87)", 
                height: "48px",
            }
        }

        // let getActivity = activity => {

        // });

        return (
            <Paper style={styles.container} zDepth={2}>
                <table style={styles.table}>
                    <tr style={styles.row}>
                        <th style={{width: "8em"}}>Section</th>
                        <td style={{width: "3em"}}>A</td>
                        <th style={{width: "6em", textAlign: "left", paddingLeft: "1em"}}>Professor</th>
                        <td style={{width: "15em"}}>Fadi Malek</td>
                    </tr>
                    <tr style={styles.row}>
                        <th rowSpan={1}>Lectures</th>
                        <td></td>
                        <td style={{paddingLeft: "1em"}}>Thursday</td>
                        <td>10:00-11:30</td>
                    </tr>
                    {/* <tr style={styles.row1}>
                        <th rowSpan={2}>Lectures</th>
                        <td></td>
                        <td>Thursday</td>
                        <td>10:00-11:30</td>
                    </tr>
                    <tr style={styles.row2}>
                        <td></td>
                        <td>Thursday</td>
                        <td>10:00-11:30</td>
                    </tr> */}
                </table>
            </Paper>
        );
    }
}