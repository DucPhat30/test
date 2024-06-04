import { useState } from 'react';
import {cars as data} from './data.js';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Label from 'react-bootstrap/FormLabel';


import 'bootstrap/dist/css/bootstrap.min.css';
const Carform =({ onAddItem }) =>{
    //const [Car , setCar] = useState (data);
    const [Name , SetName] = useState ('');
    const [Img , SetImg] = useState ('');
    const [Price , SetPrice] = useState ('');
    const [Id, SetId] = useState(data.length+1);
    /*const [Add , setAdd] = useState({
        name: Name,
        imageLink: Img,
        price: Price
    });*/
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    

    

    
    const InputName = (event) =>{
        SetName(event.target.value);
       
    }

    const InputImg = (event) =>{
        SetImg(event.target.value);
    }

    const InputPrice = (event) =>{
        SetPrice(event.target.value);
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddItem({
            id: Id ,
            name: Name,
            imageLink: Img,
            price: Price
        });
        SetId(Id + 1);
        
    };
    
    return(
        <form onSubmit={handleSubmit} class="was-validated">
        <>
        <div class="form-group">
            <label>Name: </label> 
            <input  class="form-control" id="name" type="text" value={Name} onChange={InputName} placeholder="Name" required></input>
            <div class="valid-feedback">Đúng rồi đó.</div>
            <div class="invalid-feedback">Vui lòng không để trống.</div>
        </div>
        <div class="form-group">
            <label >ImageLink:</label> 
            <input class="form-control" id="img" type="text" value={Img} onChange={InputImg} placeholder="Image Link" required></input>
            <div class="valid-feedback">Đúng rồi đó.</div>
            <div class="invalid-feedback">Vui lòng không để trống.</div>
        </div>
        <div class="form-group">
            <Label>Price:</Label>
            <input class="form-control" id="price" type="text" value={Price} onChange={InputPrice} placeholder="Price" required></input>
            <div class="valid-feedback">Đúng rồi đó.</div>
            <div class="invalid-feedback">Vui lòng không để trống.</div>
        </div>
        <Button type='submit' class="btn btn-outline-success" data-toggle="modal" data-target="#myModal">Thêm</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
            </Modal>
    
        </>
        </form>
    );
}
export default Carform;
