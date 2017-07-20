import React from 'react';
import ChipInput from 'material-ui-chip-input';
import './SubjectPicker.css';
import Chip from 'material-ui/Chip';

export default class SubjectPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chips: [],
            errorText: undefined
        }
        this.subjects = this.props.subjects.map(subject => ({
            text: `${subject.code} - ${subject.name}`,
            value: subject
        }));
    }
    validate = (val) => {
        if(this.state.chips.length == 0 || val ===true) {
            this.setState({
                errorText: "This field is required"
            })
            this.props.onValidationChange(false);
        }
        else {
            this.props.onValidationChange(true);
        }
    }

    handleRequestAdd = (chip) => {
        if(!this.subjects.find(subject => chip.value.code === subject.code)) {
            this.setState({
                chips: [...this.state.chips, chip],
                errorText: undefined
            });
             this.props.onValidationChange(true);
        }
    }

    handleDeleteRequest = (chip) => {
        const chips = this.state.chips.filter((c) => c.value.code !== chip.code)
        this.setState({
            chips
        })
        this.validate(chips.length === 0);
    }

    render() {
        return (
            <div className='picker' style={{maxWidth:"30em"}}>
            <ChipInput 
                floatingLabelText="Subjects (required)"
                allowDuplicates={false}
                onRequestAdd={this.handleRequestAdd}
                onRequestDelete={this.handleDeleteRequest}
                errorText={this.props.showError ? "This field is required" : this.state.errorText}
                onBlur={this.validate}
                value={this.state.chips}
                dataSourceConfig={{ text: 'text', value: 'value'}}
                menuStyle={{height:"50vh", maxWidth:"30em"}}
                chipContainerStyle={{width: 'auto'}} 
                openOnFocus={true} 
                dataSource={this.subjects}
            />
            </div>
        )
    }
}