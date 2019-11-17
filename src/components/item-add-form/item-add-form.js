import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }
    if (label) {

    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className="bottom-panel d-flex"
                    onSubmit={this.onSubmit}>
                <input type="text"
                        className="form-control new-todo-label"
                        onChange={this.onLabelChange}
                        placeholder="What needs to be done?" 
                        value={this.state.label} />
                <button type="submit" disabled={!this.state.label} 
                        className="btn btn-outline-primary ">Add</button>
            </form>
        );
    }
}