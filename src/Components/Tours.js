import Card from "./Card";
function Tours({tours, removeTour}){
    return(
        <div className='container'>
            <h1 className="title">Plan with Kamath</h1>
            <div className="cards">
                {
                    tours.map( (tour) => {
                        return <Card {...tour} removeTour={removeTour} className="cards"></Card>
                })
                }
            </div>
        </div>

    )
};

export default Tours;