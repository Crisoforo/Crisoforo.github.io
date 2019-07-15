import React, { Component } from "react";
import { Row, Col, Card, Button } from 'react-materialize';
import style from '../css/style.css';

window.onload = function any_function_name() {

    //Localizar elemento ul por Id
    var list = document.getElementById('my-list');
    //Localizar elemento button por Id
    var addBtn = document.getElementById('new-li');




    //Función que añade elemento li con texto
    function addItem(listElem, text) {

        //Crear elemento li
        var li = document.createElement('li');

        var ul = document.createElement('ul');


        //Crear texto editable
        var textNode = document.createTextNode(text);

        //Manda los elementos en la función
        listElem.appendChild(li).appendChild(textNode);





        var indented = document.getElementById('indent');
        function indentation() {
            // onclick stuff
            listElem.appendChild(ul).appendChild(li);
        }
        indented.onclick = indentation; // Assigned


    }



    // event listeners
    addBtn.addEventListener('click', function () {
        addItem(list, 'Click here to edit');

    });


}//window.onload


class Lists extends Component {
    state = {
        user: null
    };




    render() {
        return (
            <div className="container">

                <Row><Col m={3} s={12}></Col>
                    <Col m={6} s={12}>
                        <Card
                            className="blue-grey darken-1"
                            textClassName="white-text"
                            title="To do:"
                            >
                            <ol contentEditable="true" id="my-list">
                                <li>Click here to edit</li>

                            </ol>
                            <div class="card-action">
                            <Button floating
                                medium
                                waves="light"
                                icon="add" id='new-li'
                                className="offset-l1 offset-s4 s4 red" tooltip="Add"
                                >Add</Button>
                            <Button id='indent'
                            className="offset-l1 offset-s4 s4" waves="ligth" tooltip="Child list"
                            >-</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>

        );
    }
}


export default Lists;