import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SimpleLookup from './SimpleLookup';
import CourseFinder from './CourseFinder'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class AppTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: 'a',
            selectedCourse: null,
        };
    }

    handleChange = (value) => {
        this.setState({
            currentTab: value,
        });
    };

    onShowInTimeTable = (course) => {
        this.setState({
            currentTab: 'a',
            selectedCourse : course,
        });
    }

    render() {
        return (
            <div>
                <Tabs 
                    value={this.state.currentTab}
                    onChange={this.handleChange}
                >
                    <Tab label="Simple Lookup" value="a">
                        <SimpleLookup selectedCourse={this.state.selectedCourse} />
                    </Tab>
                    <Tab label="Course Finder" value="b">
                        <CourseFinder onShowInTimeTable={this.onShowInTimeTable} />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}