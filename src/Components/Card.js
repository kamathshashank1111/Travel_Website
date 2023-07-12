import { useState } from "react";

function Card({id,image,name,info,price,removeTour}){
    const[readmore, setReadmore]=useState(false);
    let description= readmore?info:`${info.substring(0,200)}...`
    function readmoreHander(){
        setReadmore(!readmore)
    }
                        
    return(<div className="card">
        <img src={image} className="image" alt="The place"></img>
        <div className="tour-details">
            <h4>{price}</h4>
            <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
            {description} 
            <span onClick={readmoreHander}>Read More</span>
        </div>
        <button className="btn-red" onClick={() => removeTour(id)} >
            Not Interested
        </button>
    </div>)

}

export default Card;