import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import {FormGroup, Form, Button} from "react-bootstrap";
import List from "./components/List";
import uuid from "uuid";

class App extends Component {
    state = {
        items: [],
        id:uuid(),
        item:""
    };

    onChange = (e) => {
        this.setState({
            item: e.target.value
        });
    }

    addItem = (e) => {
        e.preventDefault();
        const newItem = {
            id:this.state.id,
            title:this.state.item
        }
        const updatedItems = [...this.state.items, newItem];
        this.setState({
            item:"",
            items: updatedItems,
            id:uuid()
        });
    }

    onDelete = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <FormGroup className={"App-body"}>
                        <h1>to do List</h1>
                        <div className={"input-group mt-3"}>
                            <Form.Control name="text" type="text" onChange={this.onChange} placeholder="Add to do something"/>
                            <div className={"input-group-append"}>
                                <Button variant="warning" onClick={this.addItem}>
                                    <FontAwesomeIcon icon={faPlus}/>
                                </Button>
                            </div>
                        </div>
                        <div className={"list-group mt-3"}>
                            <List items={this.state.items} onDelete={this.onDelete}/>
                        </div>
                    </FormGroup>
                </header>
            </div>
        );
    }
}

export default App;


