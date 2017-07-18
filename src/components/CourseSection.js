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
                maxWidth: "30em"
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
                        <th>Section</th>
                        <td>A</td>
                        <th>Professor</th>
                        <td>Fadi Malek</td>
                    </tr>
                    <tr style={styles.row}>
                        <th rowSpan={1}>Lectures</th>
                        <td style={{textAlign:"right"}}>Thursday</td>
                        <td style={{textAlign:"center"}}>10:00-11:30</td>
                        <td></td>
                    </tr>
                    <tr style={styles.row1}>
                        <th rowSpan={2}>Lectures</th>
                        <td style={{textAlign:"right"}}>Thursday</td>
                        <td style={{textAlign:"center"}}>10:00-11:30</td>
                        <td></td>
                    </tr>
                    <tr style={styles.row2}>
                        <td style={{textAlign:"right"}}>Thursday</td>
                        <td style={{textAlign:"center"}}>10:00-11:30</td>
                    </tr>
                </table>
            </Paper>
        );
    }
}