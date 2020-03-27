
import React,{Component} from 'react';
import  './counter.css'



export class Counter extends Component {
constructor(props) {
  super(props)

  this.state = {count:0
     
  }
  this.increament=this.increament.bind(this);
}
  render() {
    return (
      <div>
         <div> 
        <button onClick={this.increament}>+1</button>

        <span className="counter">  {this.state.count} </span>
      </div>
      </div>
    );
  }


  increament() {
this.setState({

count:this.state.count+1


});

}

 
}
