import { Component } from 'react';

class ClassClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            text: "",
            boolForShould: true
        };
        console.log("Constructor sets the time as: "+ this.state.date)

    };

    componentWillMount() {
        //mounting to the screen 
        console.log("componentWillMount set the time as :"+this.state.date);
    }
    componentDidMount() {
        console.log("componentDidMount set the time as :"+this.state.date);
        this.timerID = setInterval(()=>this.tick(),1000)
    }
    componentWillUpdate() {
        console.log("componentWillUpdate set the time as :"+this.state.date);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount set the time as "+ this.state.date);
        clearInterval(this.timerID)
        
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate set the time as :"+this.state.date);
        return this.state.boolForShould;
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate set the time as :"+this.state.date);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    stateHandle = () => {
        console.log("StateHandle sets the time as" + this.state.date);
        this.setState({
            text:"Updated"
        })
    }
    stateHandle2 = () => {
        console.log("StateHandle2 sets the time as" + this.state.date);
        clearInterval(this.timerID)
        this.setState({
            text:"Updated and timer has been stopped"
        })
    }
    shouldHandle = () => {
        console.log("shouldHandle set the time as: "+this.state.date);
        this.setState({
            boolForShould: !this.state.boolForShould
        })
    }

    render() {
        return (
            <div>
                <h1>Hello this is a class</h1>
                <h2>{this.state.text}</h2>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                <button onClick={this.stateHandle}>Change state</button>
                <button onClick={this.stateHandle2}>Change state and stop timer</button>
                <button onClick={this.shouldHandle}>Changes shouldComponent update</button>
            </div>
        );
    }

}

export default ClassClock;
