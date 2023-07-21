import React, { useState, useRef } from "react";
import "./style.css";

const TeamDivision = () => {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  const [handleTeam1, setHandleteam1] = useState([]);
  const [handleTeam2, setHandleteam2] = useState([]);

  const [member, setMember] = useState("");
  const [members, setmembers] = useState(() => {
    const storageMember = JSON.parse(localStorage.getItem("name"));
    return storageMember ?? [];
  });
  // const [editing, setEditing] = useState(false)
  const inputFocus = useRef();
  const inputMember = useRef();
  const genName = useRef();

  const maxLength = team1.length > team2.length ? team1.length : team2.length;

  const [memberSort, setMemberSort] = useState("");

  const AddUser = () => {
    setmembers((prev) => {
      const newMembers = [...prev, member];
      const jsonMembers = JSON.stringify(newMembers);
      localStorage.setItem("name", jsonMembers);
      return newMembers;
    });
    setMember("");
    inputFocus.current.focus();
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setmembers((prev) => {
        const newMembers = [...prev, member];
        const jsonMembers = JSON.stringify(newMembers);
        localStorage.setItem("name", jsonMembers);
        return newMembers;
      });
      setMember("");
      inputFocus.current.focus();
    }
  };

  const deleteLocal = () => {
    localStorage.removeItem("name");
    setmembers([]);
  };

  const dragStart = (e) => {
    const value = e.target.getAttribute("value");
    setMemberSort(value);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const drop = (e) => {
    e.preventDefault();
    e.target.append(memberSort);
    const stt = e.target.previousElementSibling.textContent;
    if (stt % 2 === 0) {
      setTeam2((prev) => [...prev, memberSort]);
    } else {
      setTeam1((prev) => [...prev, memberSort]);
    }
  };

  const init = async () => {
    setHandleteam1([]);
    setHandleteam2([]);
    await sleep(2000);
    main();
  };

  const team = (index) => {
    let random = Math.floor(Math.random() * 2);

    if (random === 0) {
      setHandleteam1((prev) => [...prev, team1[index]]);
      setHandleteam2((prev) => [...prev, team2[index]]);
    }

    if (random === 1) {
      setHandleteam1((prev) => [...prev, team2[index]]);
      setHandleteam2((prev) => [...prev, team1[index]]);
    }
  };

  const sleep = (milisecond) => {
    return new Promise((r) =>
      setTimeout(() => {
        return r();
      }, milisecond)
    );
  };

  const main = async () => {
    for (let i = 0; i < maxLength; i++) {
      setTimeout(() => genTBody(i), i * 1500);
    }
  };

  const genTBody = (index) => {
    team(index);
  };

  return (
    <div className="fuild-container app">
      <div className="wrapper d-flex">
        <div className="member text-center">
          <h3>Thêm thành viên</h3>
          <div className="ip-wrap">
            <input
              ref={inputFocus}
              value={member}
              onChange={(e) => setMember(e.target.value)}
              onKeyDown={onKeyPress}
              placeholder="Nhập thành viên..."
            />
            <button
              type="button"
              className="btn btn-primary ml-1"
              onClick={AddUser}
              onKeyDown={onKeyPress}
            >
              Thêm
            </button>
          </div>
          <div className="mt-2">
            <div className="wrap-tb">
              <div className="col tb-1">
                <div className="row hight-row">
                  <div className="col-4 colBd">#</div>
                  <div className="col-8 colBd">Thành viên</div>
                </div>
                {members.map((member, index) => {
                  if (index % 2 == 0) {
                    return (
                      <div className="row hight-row" key={index}>
                        <div className="col-4 colBd">{index}</div>
                        <div
                          ref={inputMember}
                          draggable="true"
                          className="member-drag col-8 colBd"
                          onDragStart={dragStart}
                          value={member}
                        >
                          {member}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="col tb-2">
                <div className="row hight-row">
                  <div className="col-4 colBd">#</div>
                  <div className="col-8 colBd">Thành viên</div>
                </div>
                {members.map((member, index) => {
                  if (index % 2 !== 0) {
                    return (
                      <div className="row hight-row" key={index}>
                        <div className="col-4 colBd">{index}</div>
                        <div
                          ref={inputMember}
                          draggable="true"
                          className="member-drag col-8 colBd"
                          onDragStart={dragStart}
                          value={member}
                        >
                          {member}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={deleteLocal}
          >
            Xóa
          </button>
        </div>
        <div className="member-drag text-center">
          <h3 style={{ marginTop: 6 }}>Chọn thành viên</h3>
          <table className="table table-bordered text-center mt-5 table-handle">
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
                <td>1</td>
                <td onDragOver={dragOver} onDrop={drop}></td>
                <td>2</td>
                <td onDragOver={dragOver} onDrop={drop}></td>
              </tr>
              <tr>
                <td>3</td>
                <td onDragOver={dragOver} onDrop={drop}></td>
                <td>4</td>
                <td onDragOver={dragOver} onDrop={drop}></td>
              </tr>
              <tr>
                <td>5</td>
                <td onDragOver={dragOver} onDrop={drop}></td>
                <td>6</td>
                <td onDragOver={dragOver} onDrop={drop}></td>
              </tr>
              <tr>
                <td>7</td>
                <td onDragOver={dragOver} onDrop={drop}></td>
                <td>8</td>
                <td onDragOver={dragOver} onDrop={drop}></td>
              </tr>
              <tr>
                <td>9</td>
                <td onDragOver={dragOver} onDrop={drop}></td>
                <td>10</td>
                <td onDragOver={dragOver} onDrop={drop}></td>
              </tr>
              <tr>
                <td>11</td>
                <td onDragOver={dragOver} onDrop={drop}></td>
                <td>12</td>
                <td onDragOver={dragOver} onDrop={drop}></td>
              </tr>
              <tr>
                <td>13</td>
                <td onDragOver={dragOver} onDrop={drop}></td>
                <td>14</td>
                <td onDragOver={dragOver} onDrop={drop}></td>
              </tr>
              <tr>
                <td>15</td>
                <td onDragOver={dragOver} onDrop={drop}></td>
                <td>16</td>
                <td onDragOver={dragOver} onDrop={drop}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="member-handle text-center">
        <button type="button" className="btn btn-primary" onClick={init}>
          Chia
        </button>
        <div className="total-table">
          <table className="table table-bordered text-center mt-5 table-output">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Đội 1</th>
              </tr>
            </thead>
            <tbody>
              {handleTeam1.map((handle1, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{handle1}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="table table-bordered text-center mt-5 ml-5 table-output">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Đội 2</th>
              </tr>
            </thead>
            <tbody>
              {handleTeam2.map((handle2, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{handle2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamDivision;
