import React, { useEffect, useState } from "react";
import "./Header.css";
import { CaretCircleDown, CaretCircleUp } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState(false);
  const [caretValue, setcaretValue] = useState(true);
  const [Option, setOption] = useState();

  const navigate = useNavigate();

  useEffect(()=>{
    if(Option === "status"){
      navigate(``);
    }
    else if(Option === "user"){
      navigate(`User`);
    }
    else if(Option === "grouping"){
      navigate(`Priority`);
    }

  },[Option])

  const OpenClose = () => {
    setcaretValue(!caretValue);
    setValue(!value);
  };

  const handlechange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div className="header">
      <div className="button">
        <span>Display</span>
        {caretValue ? (
          <CaretCircleDown size={20} onClick={() => OpenClose()} />
        ) : (
          <CaretCircleUp size={20} onClick={() => OpenClose()} />
        )}
      </div>

      {value && (
        <div className="options">
          <div className="grouping">
            <span>Grouping</span>
            <div>

              <select
                onChange={handlechange}
                value={Option}
                className="buttons"
              >
                <option value="status">
                 Status
                </option>

                <option value="user">
                User
                </option>

                <option value="grouping">
                  Priority
                </option>
              </select>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Header;