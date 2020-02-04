import React, {Component} from 'react';
import {show,update} from './api';
import {withRouter} from 'react-router-dom';

class CarEdit extends Component{
    state={
        car:{
            model:"",
            year:'',
            color:'',
            seets:0

        }
    }

    componentDidMount(){
        const user = this.props.user;
        const carId = this.props.match.params.carid;
        show(user,carId)
        .then((response) => {
            const carShow = response.data.car;
            let copyCar = {...this.state.car}
            
            copyCar.model = carShow.model
            copyCar.color = carShow.color
            copyCar.seets = carShow.seets
            copyCar.year = carShow.year
            this.setState({
                car:copyCar
            })
        })
        
        .catch(error => console.log(error))
    }

    handleChange = (event) => {
        //get the name of input
        const name = event.target.name;
        // get the value of input
        const value = event.target.value;
        const newcar = Object.assign(this.state.car)
        newcar[name] = value;
        this.setState({
            car:newcar
        })
    }

    push = () => {
        this.props.history.push("/")
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        
        const user = this.props.user;
        const carid = this.props.match.params.carid;
        const updatecar = this.state.car;
        update(user,updatecar,carid)
        // .then()
        .then(() => this.props.history.push(`/cars/${carid}`))
        .catch((error) => console.log(error))
    }


    render(){
        // console.log(this.props)
        return(
            <form onSubmit={this.handleSubmit}>
                <label>model </label>
                <input onChange={this.handleChange} type="text" name="model" value={this.state.car.model}/><br></br>
                <label>year </label>
                <input  onChange={this.handleChange} type="number" name="year" value={this.state.car.year}/><br></br>
                <label>color </label>
                <input  onChange={this.handleChange} type="text" name="color" value={this.state.car.color}/><br></br>
                <label>passenger </label>
                <input  onChange={this.handleChange} type="number" name="passenger" value={this.state.car.seets}/><br></br>

                <button type="submit">Update</button>
        </form>
        )
    }
}



export default withRouter(CarEdit)