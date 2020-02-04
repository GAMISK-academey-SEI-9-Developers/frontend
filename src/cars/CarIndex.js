import React ,{Component} from 'react'
import { index,destroy } from "./api";
import { Link } from 'react-router-dom'


class CarIndex extends Component {
   
        state = { 
            cars:[]
         }
    componentDidMount(){
        const user =this.props.user
        index(user)
        .then(response =>{
            const cars = response.data.cars
            this.setState({
               cars:cars
            })
        })
        .catch(err=>console.error(err))
    }
    destroyHandler=(id)=>{
        console.log(id)
        const user =this.props.user
        destroy(user,id)
        .then(()=>{alert('Delete')})
        .then(()=>{ 
            const cars = this.state.cars.filter(car=>car._id !== id)
            this.setState({cars:cars})
        })
        
        .catch(err=>console.log(err))

    }
    render() { 
        return ( 
            <div>
                <h1>this is car index</h1>
                {this.state.cars.map((car)=>{
                    return(
                        <div key={car._id}>
                        <h5>modle: <Link to={`/cars/${car._id}`} >{car.model}</Link></h5> 
                        {/* <h5>Model:{car.model}</h5>
                        <h5>color:{car.color}</h5>
                        <h5>passenger:{car.passenger}</h5> */}
                        <button onClick={()=> this.destroyHandler(car._id)}>delete</button>
                        </div>

                    )
                })}
            </div>
         );
    }
}
 
export default CarIndex;
