import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import {FormGroup, Form, Button} from "react-bootstrap";
import List from "./components/List";

class App extends Component {
    state = {
        items: []
    };

    onChange = (e) => {
        this.setState({
            item: e.target.value
        });
    }

    addItem = (e) => {
        e.preventDefault();
        const newItem = {
            title:this.state.item,
            check:false
        }
        const updatedItems = [...this.state.items, newItem];
        this.setState({
            items: updatedItems
        });
    }

    onDelete = (id) => {
        this.state.items.splice(id,1)
        this.setState({
            items: this.state.items
        });
    }

    onCheck = (id) => {
        this.state.items[id].check=!this.state.items[id].check;
        this.setState({
            items:this.state.items
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <FormGroup className={"App-body"}>
                        <h1 className={"title"}>to do List</h1>
                        <div className={"input-group mt-3"}>
                            <Form.Control name="text" type="text" onChange={this.onChange} placeholder="Add to do something"/>
                            <div className={"input-group-append"}>
                                <Button variant="warning" onClick={this.addItem}>
                                    <FontAwesomeIcon icon={faPlus}/>
                                </Button>
                            </div>
                        </div>
                        <div className={"list-group mt-3"}>
                            <List items={this.state.items} onDelete={this.onDelete} onCheck={this.onCheck}/>
                        </div>
                    </FormGroup>
                </header>
            </div>
        );
    }
}

export default App;


