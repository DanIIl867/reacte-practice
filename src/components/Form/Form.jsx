import { Component } from "react";

export class Form extends Component {

    state = {
		// data: paintingData,
		name:'',
		tel:'',
		level: '',
		license: '',
		// whoIs: '',
		// profession: 'Student',
		data: '',
	}

    handleNameChange=(e)=>{
		const {name, value}= e.currentTarget
		this.setState({
			[name]: value
		})
	}

    // getName=(e)=>{
	// 	this.setState({
	// 		whoIs: e.currentTarget.value
	// 	})
	// }

	// handleRadionChange=(e)=>{
	// 	console.log(e.currentTarget.value)
	// 	this.setState({
	// 		profession: e.currentTarget.name
	// 	})
	// }
    handleRadionChange=(e)=>{
		console.log(e.currentTarget.value)
		this.setState({
			level: e.currentTarget.name
		})
	}

	handleCheckboxChange=()=>{
		this.setState(prevState=>({license: !prevState.license}))
	}
    render(){
        return (
            
   <div>
        <form>
          <label>Name
          <input type="text" name='name' value={this.state.name} onChange={this.handleNameChange}/>
          </label>

          <br />

          <label>Phone number
          <input type="tel" name='tel' value={this.state.tel} onChange={this.handleNameChange}/>
          </label>
          <hr />

          <label>
              junior
              <input type="radio" name='junior'  checked={this.state.level === 'junior'} onChange={this.handleRadionChange}/>
          </label>

          <br />
         
          <label>
              middle
              <input type="radio" name='middle'  checked ={this.state.level === 'middle'} onChange={this.handleRadionChange}/>
          </label>

          <br />

          <label>
              senior
              <input type="radio" name='senior'  checked={this.state.level === 'senior'} onChange={this.handleRadionChange}/>
          </label>

          <br />

          <label>
              <input type="checkbox" checked={this.state.license} name='lisince' onChange={this.handleCheckboxChange} />
          Погоджуюсь з умовами договору</label>
      </form>
     </div>
    )
}}       
    

