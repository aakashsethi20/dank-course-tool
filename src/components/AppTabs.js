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
    }

    render() {
        return (
            <div>
                <Tabs>
                    <Tab label="Simple Lookup" >
                        <SimpleLookup />
                    </Tab>
                    <Tab label="Course Finder" >
                        <CourseFinder />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}