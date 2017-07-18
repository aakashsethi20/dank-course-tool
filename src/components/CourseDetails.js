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
import {Tabs, Tab} from 'material-ui/Tabs';
import CourseSection from './CourseSection';

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
        const courseSections = course.sections;
        const sectionElems = course.sections.map(sec => (
            <CourseSection section = {sec}></CourseSection>
        ));

        let fallSections = sections => {
            return sections.filter(x => x.term === "fall")
        }

        let winterSections = sections => {
            return sections.filter(x => x.term === "winter")
        }

        let summerSections = sections => {
            return sections.filter(x => x.term === "summer")
        }

        let sectionsElems = sections => {
            return sections.map(sec => (
                <CourseSection section = {sec}></CourseSection>
            ));
        }

        const sectionsSummer = summerSections(courseSections);
        const sectionsFall = fallSections(courseSections);
        const sectionsWinter = winterSections(courseSections);

        return (
            <div>
                <Tabs>
                    {sectionsSummer.length != 0 ? 
                        <Tab label="Summer 2017">
                            {sectionsElems(sectionsSummer)}
                        </Tab>
                        : null
                    }
                    {sectionsFall.length != 0 ? 
                        <Tab label="Fall 2017">
                            {sectionsElems(sectionsFall)}
                        </Tab>
                        : null
                    }
                    {sectionsWinter.length != 0 ? 
                        <Tab label="Winter 2018">
                            {sectionsElems(sectionsWinter)}
                        </Tab>
                        : null
                    }
                </Tabs>
            </div>
        );
    }
}