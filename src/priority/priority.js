import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Single from "../single/single";


const Priority = () => {
  const [tasks, setTasks] = useState([]);
  const [I, setI] = useState([]);
  const [II, setII] = useState([]);
  const [III, setIII] = useState([]);
  const [IV, setIV] = useState([]);
  const [V, setV] = useState([]);


  const fetchData = async () => {
    const response = await fetch(
      `https://api.quicksell.co/v1/internal/frontend-assignment`
    );
    const data = await response.json();
    // console.log(data);
    setTasks(data.tickets);

    setI(
      tasks.filter((Element) => {
        return Element.priority === 0;
      })
    );

    setII(
        tasks.filter((Element) => {
        return Element.priority === 1;
      })
    );

    setIII(
        tasks.filter((Element) => {
        return Element.priority === 2;
      })
    );

    setIV(
        tasks.filter((Element) => {
        return Element.priority === 3;
      })
    );

    setV(
        tasks.filter((Element) => {
        return Element.priority === 4;
      })
    );
  };

  useEffect(() => {
    fetchData();
    // AddItems();
  }, [tasks]);


  return (
    <>
   
      <div className="LargeboxContent">
        <div className="smallboxContent">
          <div className="contentname">
            <h3>No priority</h3>
           
          </div>

          <div className="details">
            {I.map((Element) => {
              return (
                <>
                  <Single
                    id={Element.id}
                    title={Element.title}
                    tag={Element.tag}
                    userId={Element.userId}
                    status={Element.status}
                    priority={Element.priority}
                  />
                </>
              );
            })}
          </div>
        </div>

        <div className="smallboxContent">
          <div className="contentname">
            <h3>Low</h3>
      
          </div>

          <div className="details">
            {II.map((Element) => {
              return (
                <>
                  <Single
                    id={Element.id}
                    title={Element.title}
                    tag={Element.tag}
                    userId={Element.userId}
                    status={Element.status}
                    priority={Element.priority}
                  />
                </>
              );
            })}
          </div>
        </div>

        <div className="smallboxContent">
          <div className="contentname">
            <h3>Medium</h3>
        
          </div>

          <div className="componentdetails">
            {III.map((Element) => {
              return (
                <>
                  <Single
                    id={Element.id}
                    title={Element.title}
                    tag={Element.tag}
                    userId={Element.userId}
                    status={Element.status}
                    priority={Element.priority}
                  />
                </>
              );
            })}
          </div>
        </div>

        <div className="smallboxContent">
          <div className="contentname">
            <h3>High</h3>
  
          </div>

          <div className="details">
            {IV.map((Element) => {
              return (
                <>
                  <Single
                    id={Element.id}
                    title={Element.title}
                    tag={Element.tag}
                    userId={Element.userId}
                    status={Element.status}
                    priority={Element.priority}
                  />
                </>
              );
            })}
          </div>
        </div>

        <div className="smallboxContent">
          <div className="contentname">
            <h3>Urgent</h3>
        
          </div>

          <div className="details">
            {V.map((Element) => {
              return (
                <>
                  <Single
                    id={Element.id}
                    title={Element.title}
                    tag={Element.tag}
                    userId={Element.userId}
                    status={Element.status}
                    priority={Element.priority}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Priority;
