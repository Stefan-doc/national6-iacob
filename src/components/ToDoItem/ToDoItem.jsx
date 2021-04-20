import "./ToDoItem.css";

export function ToDoItem(props) {
    console.log(props);

    return (
    <div className="to-do-item">
        <input type="checkbox" defaultChecked={props.checkValue} />
        <p>{props.label}</p>
        <img 
            src="https://www.flaticon.com/svg/vstatic/svg/860/860829.svg?token=exp=1618938220~hmac=5b8070ff77fe028afa52f0b132687157" 
            alt="trash"/>
    </div>
    );
}