import React ,{Component} from 'react'
import { index,destroy } from "./api";
import { Link } from 'react-router-dom'
import "./car.css";


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
            <div className="card d-flex align-items-center big-card" >
               
                <div className="card col-md-6  align-items-center col-sm-12 back-card-child ">
                     CARS
                {this.state.cars.map((car)=>{
                    return(
                        <div className="card  ">
                        <div key={car._id} className=" card-body" >
                        <h5 class="card-title" >model : {car.model}</h5> 
                       <button class="btn btn-info mx-1"> <Link to={`/cars/${car._id}`} style={{color:"white"}} >show</Link></button>
                        <button  class="btn btn-danger mx-1" onClick={()=> this.destroyHandler(car._id)}>delete</button>
                        </div>
                        </div>
                    )
                })}
            </div>
            </div>
         );
    }
}
 
export default CarIndex;
