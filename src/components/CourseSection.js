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
import './CourseSection.css'

export default class CourseSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const styles = {
            container: {
                margin: "1em auto",
                width:"auto"
            }
        }

        const activities = {
            lectures: "Lectures",
            labs: "Labs",
            dgd: "Tutorials"
        }
        

        return (
            <Paper style={styles.container} zDepth={2}>
                <Table selectable={false}>
                    <TableBody displayRowCheckbox ={false}>
                    <TableRow style={styles.row}>
                        <TableRowColumn style={{paddingRight: "0"}}>
                            <strong>Section</strong><span style={{marginLeft: "3vw"}}>A</span>
                        </TableRowColumn>
                        <TableRowColumn style={{paddingRight: "0"}}>
                            <strong>Professor</strong>
                        </TableRowColumn>
                        <TableRowColumn style={{width: "35%", paddingLeft: "0"}}>
                            <a 
                                    target="_blank" 
                                    href={`http://www.ratemyprofessor.com/ShowRatings.jsp?tid=${this.props.section.prof.rating}`}
                                    style={{}}
                            >{this.props.section.prof.name}</a>
                        </TableRowColumn>
                    </TableRow>
                    {
                        ["lectures", "labs", "dgd"].map(activity => (
                            !this.props.section[activity] ? null :
                                this.props.section[activity].map((dateTime,index,array) => (
                                    <TableRow displayBorder={index === array.length - 1}>
                                        {
                                            index !== 0 ? null : <TableRowColumn rowSpan={array.length}><strong>{activities[activity]}</strong></TableRowColumn>
                                        }
                                        <TableRowColumn style={{paddingRight: "0"}}>{dateTime.day}</TableRowColumn>
                                        <TableRowColumn style={{paddingLeft: "0"}}>{dateTime.time}</TableRowColumn>
                                    </TableRow>
                                ))
                            )
                        )
                    }
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}