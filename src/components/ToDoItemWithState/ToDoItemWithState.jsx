import { Component } from "react";

export class ToDoItemWithState extends Component {
    state = {
        nrOfClick: 0,
    };

    handleIncreaseClicks = () => {
        console.log("click on item");
        this.setState({nrOfClick: 1 });
    };

    render() {
        return (
            <div className="to-do-item" onClick={this.handleIncreaseClicks}>
                <input type="checkbox" defaultChecked={this.props.checkValue} />
                <p>{this.props.label}</p>
                <img 
            src="https://www.flaticon.com/svg/vstatic/svg/860/860829.svg?token=exp=1618938220~hmac=5b8070ff77fe028afa52f0b132687157" 
            alt="trash"/>
            <p>{this.state.nrOfClick}</p>
            </div>
        );
    }
}