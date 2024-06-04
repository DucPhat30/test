import { useState } from "react";

const Search =({onAddSaerch}) =>{
    const [Min, SetMin] = useState('');
    const [Max , SetMax] = useState('');


const InputMin = (event) =>{
    SetMin(event.target.value);
}

const InputMax =(event) =>{
    SetMax(event.target.value);
}

const handleSubmit = (e) =>{
    e.preventDefault();
   
    const min = Min === '' ? -Infinity : Number(Min);
    const max = Max === '' ? Infinity : Number(Max);
      onAddSaerch(min, max);
   
    // onAddSaerch(Min === ''? null : Number(Min), Max ==='' ? null : Number(Max))
}
    return(
       <form onSubmit={handleSubmit} class="was-validated">
        <div class="d-flex flex-row ">
            <div class="form-group" style={{margin : "10px"}}>
                <label style={{padding : "10px"}}>Lọc Theo Giá:</label>
                <input type="number" value={Min} onChange={InputMin}></input>    
            </div>
            <div class="form-group" style={{margin : "10px"}}> 
            <label style={{padding : "10px"}}></label>
                <input type="number" value={Max} onChange={InputMax}></input>    
            </div>
            <button class="btn btn-outline-secondary"  type="submit" style={{margin : "10px"}}>Tìm</button>
        </div>
       </form>
    );
}
export default Search;