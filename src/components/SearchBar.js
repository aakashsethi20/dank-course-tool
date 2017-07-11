import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <RaisedButton label="Search"></RaisedButton>
        );
    }
}