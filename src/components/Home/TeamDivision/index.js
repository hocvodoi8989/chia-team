import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal"
import "./style.css";

const TeamDivision = () => {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  const [isProcessing, setIsProcessing] = useState(null);
  const inputFocus = useRef();
  const inputMember = useRef();

  const [handleTeam1, setHandleteam1] = useState([]);
  const [handleTeam2, setHandleteam2] = useState([]);

  const [memberSort, setMemberSort] = useState("");

  const [member, setMember] = useState("");

  const [members, setMembers] = useState([]);

  const [checkAddMember, setCheckAddMember] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const maxLength = team1.length > team2.length ? team1.length : team2.length;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/soccer")
      .then((res) => {
        console.log(res.data);
        setMembers(res.data);
      })
      .catch((err) => console.log(err));
  }, [checkAddMember]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/soccer/new-team")
      .then((res) => {
        setHandleteam1(res.data.team_1);
        setHandleteam2(res.data.team_2);
      })
      .catch((err) => console.log(err));
  }, []);

  const AddMember = (e) => {
    axios
      .post("http://localhost:5000/api/soccer", { member })
      .then((response) => {
        // Xử lý kết quả nếu cần thiết
        console.log("Yêu cầu POST thành công:", response.data);
        setCheckAddMember((prev) => prev + 1);
      })
      .catch((error) => {
        // Xử lý lỗi POST nếu có
        console.error("Lỗi khi gửi yêu cầu POST:", error);
      });
  };

  const AddMemberOnKeyPress = (e) => {
    if (e.key === "Enter") {
      axios
        .post("http://localhost:5000/api/soccer", { member })
        .then((response) => {
          // Xử lý kết quả nếu cần thiết
          console.log("Yêu cầu POST thành công:", response.data);
          setCheckAddMember((prev) => prev + 1);
        })
        .catch((error) => {
          // Xử lý lỗi POST nếu có
          console.error("Lỗi khi gửi yêu cầu POST:", error);
        });
    }
  };

  const deleteMember = () => {
    axios
      .delete("http://localhost:5000/api/soccer")
      .then((res) => {
        console.log("Yêu cầu DELETE thành công: ", res.data);
        setCheckAddMember((prev) => prev + 1);
      })
      .catch((err) => console.log("Lỗi khi gửi yêu cầu DELETE: ", err));
  };

  const deleteMemberNewTeam = () => {
    axios
      .delete("http://localhost:5000/api/soccer/new-team")
      .then((res) => {
        console.log("Yêu cầu DELETE thành công: ", res.data);
        setCheckAddMember((prev) => prev + 1);
      })
      .catch((err) => console.log("Lỗi khi gửi yêu cầu DELETE: ", err));

    setHandleteam1([]);
    setHandleteam2([]);
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

    setMember();
  };

  const init = async () => {
    setHandleteam1([]);
    setHandleteam2([]);
    setIsProcessing(false);
    try {
      setIsLoading(true);
      await sleep(2000);
      main();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
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
      setTimeout(() => genTBody(i, i === maxLength - 1), i * 1500);
    }
  };

  const genTBody = (index, isEnd) => {
    team(index);
    if (isEnd) {
      setIsProcessing(true);
    }
  };

  useEffect(() => {
    if (isProcessing == null || isProcessing == false) {
      return;
    }
    axios
      .post("http://localhost:5000/api/soccer/new-team", {
        handleTeam1,
        handleTeam2,
      })
      .then((response) => {
        // Xử lý kết quả nếu cần thiết
        console.log("Yêu cầu POST thành công:", response.data);
        setCheckAddMember((prev) => prev + 1);
      })
      .catch((error) => {
        // Xử lý lỗi POST nếu có
        console.error("Lỗi khi gửi yêu cầu POST:", error);
      });
  }, [isProcessing]);

  const handleConfirm = () => {
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    setShowModal(true);
  };

  return (
    <div className="fuild-container app">
      <div className="wrapper d-flex">
        <div className="member text-center">
          <h3>Thêm thành viên</h3>
          <div className="ip-wrap">
            <input
              ref={inputFocus}
              onChange={(e) => setMember(e.target.value)}
              placeholder="Nhập thành viên..."
              onKeyDown={AddMemberOnKeyPress}
            />
            <button
              type="button"
              className="btn btn-primary ml-1"
              onClick={AddMember}
            >
              Thêm
            </button>
          </div>

          <div className="mt-3">
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
                          value={member.name}
                        >
                          {member.name}
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
                          value={member.name}
                        >
                          {member.name}
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
            onClick={handleDelete}
          >
            Xóa
          </button>
        </div>
        {showModal && (
          <Modal
            message="Bạn có chắc chắn muốn xóa tất cả không?"
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            deleteMember={deleteMember}
          />
        )}
        <div className="member-drag text-center">
          <h3 style={{ marginTop: 6, marginBottom: 56 }}>Chọn thành viên</h3>
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
        {isLoading ? <Loading /> : null}
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

        <button
          type="button"
          className="btn btn-primary"
          onClick={deleteMemberNewTeam}
        >
          Xóa
        </button>
      </div>
    </div>
  );
};

export default TeamDivision 
