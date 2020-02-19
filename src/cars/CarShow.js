import React, {Component} from 'react';
import {show} from './api'
import { Link } from 'react-router-dom'


class CarShow extends Component{
    state = {
        car:{}
    }

    componentDidMount(){
        const user = this.props.user;
        const carId = this.props.carid;

        show(user,carId)
        .then((response) => {
            const carShow = response.data.car;
            
            this.setState({
                car:carShow
            })
        })
        .catch((error) => console.log(error))
    }



    render(){
        
        return(
            <div className="card d-flex align-items-center back-card " >
            
                <div class="card col-md-6  col-sm-12  align-items-center " style={{background:"rgba(255,255,255,0.5)"}}>
  
                {this.state.car && 
               <div class="card-body">
                <h1 class="card-title"> model :  {this.state.car.model}</h1><hr></hr>
                <h2 class="card-text"> year   :  {this.state.car.year}</h2><hr></hr>
                <h2 class="card-text"> seets   :  {this.state.car.seets}</h2><hr></hr>

                    <span style={{ fontSize:"30px" , marginBottom:"5px"}}>color : 
                        <span style={{"color":`${this.state.car.color}` ,fontSize:"30px", marginBottom:"0"}} >
                       {this.state.car.color}
                      </span>
                    </span><hr></hr>
                
                <br></br>
                <button class="btn btn-primary btn-block" ><Link to={`/cars/${this.state.car._id}/edit`}  style={{color:"white"}} >Edit</Link></button>
                </div>

                }
            </div>
            </div>
        )
    }
}



export default CarShow