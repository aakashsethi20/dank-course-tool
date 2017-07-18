import React from 'react';
import fp from 'lodash/fp';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import semesterIcons from '../SemesterIcons';

const SearchResults = (props) => {
    let courses = props.courses;
    let onSelect = props.onSelect;
    if(courses.length === 0) {
        return (<div style={{margin:"2em", textAlign: "center"}}>No courses found.</div>);
    }
    let listItem = courses.map( (course, index) => (
        <div>
            <ListItem onTouchTap={() => onSelect(course)}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>{`${course.code} - ${course.title}`}</div>
                    <div>
                        {
                            fp.flow(
                                fp.map(section => ({term: section.term, year: section.year})),
                                fp.uniqWith(fp.isEqual),
                                fp.map(section => <span title={`This course is offered in ${fp.capitalize(section.term)} ${section.year}.`}>{semesterIcons[section.term]}</span>)
                            )(course.sections)
                        }
                    </div>
                </div>
            </ListItem>
            {index == courses.length-1 ? null : <Divider/>}
        </div>
    ));

    return (
        <List>{listItem}</List>
    );
}

export default SearchResults;