import React, { useState, useRef } from "react";
import "./style.css";

const Division = () => {
  const [team1, setTeam1] = useState([])
  const [team2, setTeam2] = useState([])
  
  const [member, setMember] = useState("");
  const [members, setmembers] = useState([]);
  // const [editing, setEditing] = useState(false)
  const inputFocus = useRef();
  const nodeTarget = useRef()

  const [memberSort, setMemberSort] = useState("");

  const AddUser = () => {
    setmembers((prev) => [...prev, member]);
    setMember("");
    inputFocus.current.focus();
  };

  const dragStart = (e) => {
    const value = e.target.getAttribute("value");
    setMemberSort(value);
  };

  const dragOver = (e, index) => {
    e.preventDefault();

  };


  const drop = (e) => {
    e.preventDefault();
    e.target.append(memberSort);
    const stt = e.target.previousElementSibling.textContent
    if (stt % 2 == 0) {
      setTeam2((prev) => [...prev, memberSort])
    } else {
      setTeam1((prev) => [...prev, memberSort])
    }
    
  };
  
  const handleClick = () => {

  }

  console.log(team1)

  return (
    <div className="fuild-container app">
      <div className="wrapper d-flex">
        <div className="member text-center">
          <h3>Thêm thành viên</h3>
          <input
            ref={inputFocus}
            value={member}
            onChange={(e) => setMember(e.target.value)}
            placeholder="Nhập thành viên..."
          />
          <button onClick={AddUser}>Thêm</button>
          <table className="table table-bordered text-center mt-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Thành viên</th>
                <th scope="col">#</th>
                <th scope="col">Thành viên</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index}>
                  <th>{index}</th>
                  <td
                    draggable="true"
                    className="member-drag"
                    onDragStart={dragStart}
                    value={member}
                  >
                    {member}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="member-drag text-center">
          <h3 style={{ marginTop: 6 }}>Chọn thành viên</h3>
          <table className="table table-bordered text-center mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Đội 1</th>
                <th scope="col">#</th>
                <th scope="col">Đội 2</th>
              </tr>
            </thead>
            <tbody className="table-target">
              <tr>
                <th>1</th>
                <td
                  ref={nodeTarget}
                  onDragOver={dragOver}
                  onDrop={drop}
                >
                </td>
                <td>2</td>
                <td 
                  onDragOver={dragOver}
                  onDrop={drop}></td>
              </tr>
              <tr>
                <th>3</th>
                <td 
                  onDragOver={dragOver}
                  onDrop={drop}></td>
                <td>4</td>
                <td 
                  onDragOver={dragOver}
                  onDrop={drop}></td>
              </tr>
              <tr>
                <th>5</th>
                <td 
                  onDragOver={dragOver}
                  onDrop={drop}></td>
                <td>6</td>
                <td 
                  onDragOver={dragOver}
                  onDrop={drop}></td>
              </tr>
              <tr>
                <th>7</th>
                <td 
                  onDragOver={dragOver}
                  onDrop={drop}></td>
                <td>8</td>
                <td 
                  onDragOver={dragOver}
                  onDrop={drop}></td>
              </tr>
              <tr>
                <th>9</th>
                <td 
                  onDragOver={dragOver}
                  onDrop={drop}></td>
                <td>10</td>
                <td 
                  onDragOver={dragOver}
                  onDrop={drop}></td>
              </tr>
              <tr>
                <th>11</th>
                <td 
                  onDragOver={dragOver}
                  onDrop={drop}></td>
                <td>12</td>
                <td 
                  onDragOver={dragOver}
                  onDrop={drop}></td>
              </tr>
              <tr>
                <th>13</th>
                <td 
                  onDragOver={dragOver}
                  onDrop={drop}></td>
                <td>14</td>
                <td 
                  onDragOver={dragOver}
                  onDrop={drop}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="member-handle text-center">
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={handleClick}
        >
        Chia
        </button>
        
      </div>
    </div>
  );
};

export default Division;
