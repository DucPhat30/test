import './App.css';
import { useState } from "react";
import { cars as data} from './data.js';
import Carform from './CarForm';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Search from './Search.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [Car , setCar] = useState (data);
  const [a , seta] = useState(0);
  const b = a*5;
  const c = b + 5;
  const d = Math.floor(Car.length/5);
  

  function next(){
    if (a < d)
     seta(a + 1) ;
}

const firts = () =>{  
seta(a - a);
}

function prev() {
    if (a > 0)
        seta(a - 1);
    } 


const last = () =>{  
seta(d);
}

const Delete = (id) => {
  setCar(Car.filter(item => item.id !== id));
};

const AddCar = (values) => {
  setCar([...Car, values]);
  seta(d);
};

const AddSearch = (min,max) => {
 setCar(data.filter(key => key.price >= min && key.price <= max));
  seta(0)
}


  return (
    <div class="container">
      <Search onAddSaerch={AddSearch} />
      <Table striped hover size="sm">
      <tbody>
          {Car.slice(b,c).map((car) => <div key={car.id}>
            <tr class="row"> 
              <th class="col-sm-4"><h4>{ car.name }</h4></th>
              <th class="col-sm-4"> <img src= { car.imageLink }width={150} height={90}/></th>
              <th class="col-sm-3"><h4>{ car.price }</h4></th>
              <th class="col-sm-1"><button  class="btn btn-danger" onClick={() => Delete(car.id)}><i class="fa fa-close"></i></button></th>
              
            </tr>
          </div>
          )}
      </tbody>
    </Table>
    
    <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={firts} >First</Button>
        <Button variant="secondary" onClick={prev} >Prev</Button>
        <Button variant="secondary" width="50"> {(a + 1)}</Button>
        <Button variant="secondary" onClick={next} >Next</Button>
        <Button variant="secondary" onClick={last}>Last</Button>
    </ButtonGroup>
      
      <Carform onAddItem={AddCar} />
      
    </div>
  );
 
}

export default App;
