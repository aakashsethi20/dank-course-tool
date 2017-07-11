import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

export default class CourseDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const style = {
            width: 1000
            // height: 100,
            // margin: 20,
            // textAlign: 'center',
            // display: 'inline-block',
        };

        const course = this.props.course;

        return (

           <div>
                <Paper style={style} zDepth={3}>
                    <table style={{width:1000}}>
                        <tr>
                            <th>Section</th>
                            <td>{course.sections[0].letter}</td>
                            <th>Professor: <a target="_blank" href={`http://www.ratemyprofessor.com/ShowRatings.jsp?tid=${course.sections[0].prof.rating}`}>{course.sections[0].prof.name}</a></th>
                        </tr>
                        <tr colSpan="3"><Divider inset={false} /></tr>
                        <tr>
                            <th>Lectures</th>

                        </tr>
                    </table>
                </Paper>
           </div>
        );
    }
}