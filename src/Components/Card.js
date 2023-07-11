function Card({id,image,name,info,price,removeTour}){
    let description= `${info.substring(0,200)}...`;
    return(<div className="card">
        <img src={image} className="image" alt="The place"></img>
        <div className="tour-details">
            <h4>{price}</h4>
            <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
            {description}
        </div>
        <button className="btn-red" onClick={() => removeTour(id)} >
            Not Interested
        </button>
    </div>)

}

export default Card;