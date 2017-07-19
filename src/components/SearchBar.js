import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import SearchIcon from 'material-ui/svg-icons/action/search';
import BackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import SearchResults from './SearchResults';
import Transition from 'react-transition-group/Transition';
import courses from '../courses';
import './SearchBar.css';

const courseToString = (course) => `${course.code} - ${course.title}`;

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchActive: false
        }
    }

    clearSearch = () => {
        this.onSearchTextUpdate(null, "");
        setTimeout(() => {this.textInput.focus()}, 100);
    }

    onCancelSearch = () => {
        this.setState({
            searchActive: false,
            selectedCourse: undefined,
            searchText: ""
        })
        this.props.onCourseSelected(undefined);
    }

    onSearchTextUpdate = (event, newText) => {
        const filteredCourses = newText == "" ? undefined : courses.filter(course => courseToString(course).toLowerCase().includes(newText.toLowerCase()));
        this.setState({
            searchText: newText,
            searchActive: true,
            searchResults: filteredCourses,
            selectedCourse: undefined
        });
        this.props.onCourseSelected(undefined);
    }

    courseSelected = (course) => {
        this.setState({
            searchText: courseToString(course),
            selectedCourse: course
        })
        this.props.onCourseSelected(course);
    }

    render() {
        const speed = 200;
        const transitionStyles = {
            default: {
                transition: `all ${speed}ms ease-in-out`,
                position: "absolute",
                top: "50%",
                left: "15%",
                width: "70%"
            },
            entering: {
                position: "absolute",
                top: "64",
                left: "0",
                width: "100%"
            },
            entered: {
                position: "static",
                width: "100%",
                top: undefined,
                left: undefined
            }
        }
        transitionStyles.exiting = {...transitionStyles.entering}
        const styles = {
            searchBarContainer: {
                height: "56px",
                display: "flex",
                alignItems: "center",
                padding: "0 24px"
            },
            searchIcon: {
                marginRight: "20px",
                color: "rgba(0,0,0,0.3)"
            },
            backIcon: {
                marginRight: "20px",
                padding: "0",
                width: "auto",
                height: "auto"
            },
            message: {
                defaultStyle: {
                    width: "100%",
                    opacity: 0,
                    position: "absolute", 
                    top: "30%", 
                },
                transition: {
                    exiting: { transition: `opacity ${speed}ms ease-in ${speed*2.5}ms` , opacity: 1 },
                    exited:  { transition: `opacity ${speed}ms ease-in ${speed*2.5}ms`, opacity: 1 },
                }
            }
        }
        return (
            <div>
                <Transition in={this.state.searchActive} timeout={speed}>
                    {animationStatus => {
                      return (
                        <div>
                            <div className="tagline" style={{
                                ...styles.message.defaultStyle,
                                ...styles.message.transition[animationStatus]
                            }}>
                                <div style={{fontSize: "45px", textAlign: "center"}}>Dank Course Tool</div>
                                <div style={{ textAlign: "center"}}>A uOttawa course search tool by students, for students.</div>
                            </div>
                        <Paper 
                            zDepth={1}
                            style={{
                                ...styles.searchBarContainer,
                                ...transitionStyles.default,
                                ...transitionStyles[animationStatus]
                            }}
                        >
                        {
                            animationStatus == "exited"
                            ? <SearchIcon style={styles.searchIcon}/>
                            : <IconButton style={styles.backIcon} onTouchTap={this.onCancelSearch}><BackIcon/></IconButton>
                        }
                            <TextField
                                ref={(input) => { this.textInput = input; }}
                                fullWidth={true}
                                hintText="Search for a course"
                                underlineShow={false}
                                onFocus={() => this.onSearchTextUpdate({}, this.state.searchText || "")}
                                onChange={this.onSearchTextUpdate}
                                value={this.state.searchText}
                            />
                        {
                            this.state.searchText && this.state.searchActive && !this.state.selectedCourse
                            ? <IconButton onTouchTap={this.clearSearch}><CloseIcon/></IconButton>
                            : null
                        }
                        </Paper>
                        {
                            animationStatus == "entered" && this.state.searchResults && !this.state.selectedCourse
                            ? <SearchResults key="results" courses={this.state.searchResults} onSelect={this.courseSelected} />
                            : null
                        }
                        </div>
                      )
                    }}
                    </Transition>
            </div>
        );
    }
}