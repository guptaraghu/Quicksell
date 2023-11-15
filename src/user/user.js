import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Single from "../single/single";
import './user.css'


const User = () => {
    const [taskDataList, setTaskDataList] = useState([]);
    const [anoopTasks, setAnoopTasks] = useState([]);
    const [yogeshTasks, setYogeshTasks] = useState([]);
    const [shankarTasks, setShankarTasks] = useState([]);
    const [rameshTasks, setRameshTasks] = useState([]);
    const [sureshTasks, setSureshTasks] = useState([]);

    const fetchTaskData = async () => {
        const response = await fetch(
            `https://api.quicksell.co/v1/internal/frontend-assignment`
        );
        const data = await response.json();
        // console.log(data.users);

        setTaskDataList(data.tickets);

        setAnoopTasks(
            taskDataList.filter((task) => {
                return task.id === "CAM-1" || task.id === "CAM-2";
            })
        );

        setYogeshTasks(
            taskDataList.filter((task) => {
                return task.id === "CAM-3" || task.id === "CAM-4";
            })
        );

        setShankarTasks(
            taskDataList.filter((task) => {
                return task.id === "CAM-5";
            })
        );

        setRameshTasks(
            taskDataList.filter((task) => {
                return task.id === "CAM-6" || task.id === "CAM-9";
            })
        );

        setSureshTasks(
            taskDataList.filter((task) => {
                return task.id === "CAM-10";
            })
        );
    };

    useEffect(() => {
        fetchTaskData();
        // AddItems();
    }, [taskDataList]);

    return (
        <>
            <div className="LargeboxContent">
                <div className="smallboxContent">
                    <div className="contentname">
                        <h3>Anoop Sharma</h3>

                    </div>

                    <div className="details">
                        {anoopTasks.map((anoopTask) => {
                            return (
                                <>
                                    <Single
                                        id={anoopTask.id}
                                        title={anoopTask.title}
                                        tag={anoopTask.tag}
                                        userId={anoopTask.userId}
                                        status={anoopTask.status}
                                        priority={anoopTask.priority}
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>

                <div className="smallboxContent">
                    <div className="contentname">
                        <h3>Yogesh</h3>

                    </div>

                    <div className="details">
                        {yogeshTasks.map((yogeshTask) => {
                            return (
                                <>
                                    <Single
                                        id={yogeshTask.id}
                                        title={yogeshTask.title}
                                        tag={yogeshTask.tag}
                                        userId={yogeshTask.userId}
                                        status={yogeshTask.status}
                                        priority={yogeshTask.priority}
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>

                <div className="smallboxContent">
                    <div className="contentname">
                        <h3>Shankar</h3>

                    </div>

                    <div className="details">
                        {shankarTasks.map((anoopTask) => {
                            return (
                                <>
                                    <Single
                                        id={anoopTask.id}
                                        title={anoopTask.title}
                                        tag={anoopTask.tag}
                                        userId={anoopTask.userId}
                                        status={anoopTask.status}
                                        priority={anoopTask.priority}
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>

                <div className="smallboxContent">
                    <div className="contentname">
                        <h3>Ramesh</h3>

                    </div>

                    <div className="details">
                        {rameshTasks.map((anoopTask) => {
                            return (
                                <>
                                    <Single
                                        id={anoopTask.id}
                                        title={anoopTask.title}
                                        tag={anoopTask.tag}
                                        userId={anoopTask.userId}
                                        status={anoopTask.status}
                                        priority={anoopTask.priority}
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>

                <div className="smallboxContent">
                    <div className="contentname">
                        <h3>suresh</h3>

                    </div>

                    <div className="details">
                        {sureshTasks.map((anoopTask) => {
                            return (
                                <>
                                    <Single
                                        id={anoopTask.id}
                                        title={anoopTask.title}
                                        tag={anoopTask.tag}
                                        userId={anoopTask.userId}
                                        status={anoopTask.status}
                                        priority={anoopTask.priority}
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}

export default User;