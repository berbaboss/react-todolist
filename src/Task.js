export const Task = (props) => {
    return (
        <div className="task" style={{backgroundColor: props.completed ? "green" : "white"}}>
                  <h1>{props.taskName}</h1>
                  <button onClick={() => props.deletedTask(props.id)}> X </button>
                  <button onClick={() => props.completedTask(props.id)}> complete </button>
                  <button onClick={() => props.editTask(props.id)}> edit </button>
                  {props.showEdit && <input disabled={props.disabled ? true : false} defaultValue={props.taskName} onChange={props.handleEditChange}/>}
                  {props.showEdit && <button onClick={() => props.saveTask(props.id)}> save </button>}
     </div>
)}