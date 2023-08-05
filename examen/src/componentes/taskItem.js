import React from 'react'


function TaskItem (props) {

return(
    <div className='itemTaskBackground'>
        <div className='itemDescription'>
          <ul >
            <li>{props.task.title}</li>
            <li>{props.task.description}</li>
            <li>{props.task.creationDate}</li>
            <li>{props.task.priority}</li>
          </ul>
          </div>

    </div>
)

}


export default TaskItem