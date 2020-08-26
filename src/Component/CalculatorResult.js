import React from 'react'

class CalculatorResult extends React.Component{

render(){
return(
  <div className="result">
    <p>{this.props.result}</p>
  </div>
)
}

}

export default CalculatorResult