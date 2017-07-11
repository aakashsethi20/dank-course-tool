import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        const someCourse = {
            name: "Anal. of User Interfaces"
        }
        const onClick = () => this.props.onCourseSelected(someCourse);
        return (
            <RaisedButton label="Search" onTouchTap={onClick}></RaisedButton>
        );
    }
}