import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {Button, ListGroup, ListGroupItem} from "react-bootstrap";
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

class List extends Component {
    render() {
        const {items, onDelete} = this.props;
        return (
            <div>
                <ListGroup as="ul">
                    <FlipMove duration={300} easing="ease-in-out">
                    {
                        items.map(item => {
                            return(
                                <div key={item.id} className={"mt-2"}>
                                    <ListGroupItem as="li" value={item.id}>{item.title}
                                        <Button className="float-right btn-sm" variant="dark" onClick={onDelete.bind(this,item.id)}>
                                            <FontAwesomeIcon icon={faTrash}/>
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
    onDeleted: PropTypes.func
};

export default List;