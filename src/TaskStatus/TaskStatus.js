import React, { useEffect, useState } from 'react';
import Single from '../single/single';
import './taskstatus.css'

const Status = () => {
  const [tasks, setTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [openTasks, setOpenTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [closedTasks, setClosedTasks] = useState([]);
  const [cancelledTasks, setCancelledTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch(
      'https://api.quicksell.co/v1/internal/frontend-assignment'
    );

    const data = await res.json();

    setTasks(data.tickets);

    setPendingTasks(
      tasks.filter((task) => {
        return task.status === 'Backlog';
      })
    );

    setOpenTasks(
      tasks.filter((task) => {
        return task.status === 'Todo';
      })
    );

    setInProgressTasks(
      tasks.filter((task) => {
        return task.status === 'In progress';
      })
    );

    setClosedTasks(
      tasks.filter((task) => {
        return task.status === 'Closed';
      })
    );

    setCancelledTasks(
      tasks.filter((task) => {
        return task.status === 'Cancelled';
      })
    );
  };

  useEffect(() => {
    fetchTasks();
  }, [tasks]);

  return (
    <>
      <div className="LargeboxContent">
        <div className="smallboxContent">
          <div className="heading">
            <h3>Pending</h3>

           
          </div>

          <div className="componentDetails">
            {pendingTasks.map((task) => (
              <Single
                key={task.id}
                title={task.title}
                tag={task.tag}
                userId={task.userId}
                status={task.status}
                priority={task.priority}
              />
            ))}
          </div>
        </div>

        <div className="smallboxContent">
          <div className="contentname">
            <h3>Open</h3>
          
          </div>

          <div className="componentDetails">
            {openTasks.map((task) => (
              <Single
                key={task.id}
                title={task.title}
                tag={task.tag}
                userId={task.userId}
                status={task.status}
                priority={task.priority}
              />
            ))}
          </div>
        </div>

        <div className="smallboxContent">
          <div className="contentname">
            <h3>In Progress</h3>
          
          </div>

          <div className="componentDetails">
            {inProgressTasks.map((task) => (
              <Single
                key={task.id}
                title={task.title}
                tag={task.tag}
                userId={task.userId}
                status={task.status}
                priority={task.priority}
              />
            ))}
          </div>
        </div>

        <div className="smallboxContent">
          <div className="contentname">
            <h3>Done</h3>
          
          </div>

          <div className="componentDetails">
            {closedTasks.map((task) => (
              <Single
                key={task.id}
                title={task.title}
                tag={task.tag}
                userId={task.userId}
                status={task.status}
                priority={task.priority}
              />
            ))}
          </div>
        </div>

        <div className="smallboxContent">
          <div className="contentname">
            <h3>Cancelled</h3>
            
          </div>

          <div className="componentDetails">
            <div className="tasks">
              {/* Display done tasks if available */}
            </div>
          </div>
        </div>

        </div>
        </>
        )
  }

  export default Status;