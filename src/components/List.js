import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faCheck} from '@fortawesome/free-solid-svg-icons';
import {Button, ListGroup, ListGroupItem} from "react-bootstrap";
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

class List extends Component {
    render() {
        const {items, onDelete, onCheck} = this.props;
        return (
            <div>
                <ListGroup as="ul">
                    <FlipMove duration={300} easing="ease-in-out">
                    {
                        items.map((item,key )=> {
                            return(
                                <div key={key} className={"mt-2"}>
                                    <ListGroupItem className={ item.check ? 'task-done' : ''} as="li" value={key}>{item.title}
                                        <Button className="float-right btn-sm" variant="dark" onClick={onDelete.bind(this,key)}>
                                            <FontAwesomeIcon icon={faTrash}/>
                                        </Button>
                                        <Button className="float-right btn-sm" variant="success" onClick={onCheck.bind(this,key)}>
                                            <FontAwesomeIcon icon={faCheck}/>
                                        </Button>
                                    </ListGroupItem>
                                </div>
                            )
                        })
                    }
                    </FlipMove>
                </ListGroup>
            </div>
        );
    }
}

List.propTypes = {
    items: PropTypes.array.isRequired,
    onDelete: PropTypes.func
};

export default List;