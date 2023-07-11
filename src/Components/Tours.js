import Card from "./Card";
function Tours({tours, removeTour}){
    return(
        <div>
            <h1>Plan with Kamath</h1>
            <div>
                {
                    tours.map( (tour) => {
                        return <Card {...tour} removeTour={removeTour}></Card>
                })
                }
            </div>
        </div>

    )
};

export default Tours;