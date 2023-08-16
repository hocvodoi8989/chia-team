import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import "./style.css";

const TeamDivision = () => {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  const [isProcessing, setIsProcessing] = useState(null);

  const inputFocus = useRef();

  const genData = useRef();

  const inputMember = useRef();

  const [handleTeam1, setHandleteam1] = useState([]);

  const [handleTeam2, setHandleteam2] = useState([]);

  const [tempList, setTempList] = useState(Array.from({ length: 16 }));

  const [memberSort, setMemberSort] = useState("");

  const [member, setMember] = useState("");

  const [members, setMembers] = useState([]);

  const [checkAddMember, setCheckAddMember] = useState(0);

  const [isDragging, setIsDragging] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const maxLength = team1.length > team2.length ? team1.length : team2.length;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/soccer")
      .then((res) => {
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
        console.log("Yêu cầu POST thành công:", response.data);
        setCheckAddMember((prev) => prev + 1);
      })
      .catch((error) => {
        console.error("Lỗi khi gửi yêu cầu POST:", error);
      });

    setMember("");
    inputFocus.current.focus();
  };

  const AddMemberOnKeyPress = (e) => {
    if (e.key === "Enter") {
      axios
        .post("http://localhost:5000/api/soccer", { member })
        .then((response) => {
          setCheckAddMember((prev) => prev + 1);
        })
        .catch((error) => {
          console.error("Lỗi khi gửi yêu cầu POST:", error);
        });

      setMember("");
      inputFocus.current.focus();
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

  useEffect(() => {
    if (isProcessing == null || isProcessing === false) {
      return;
    }

    axios
      .post("http://localhost:5000/api/soccer/new-team", {
        handleTeam1,
        handleTeam2,
      })
      .then((response) => {
        setCheckAddMember((prev) => prev + 1);
      })
      .catch((error) => {
        console.error("Lỗi khi gửi yêu cầu POST:", error);
      });
  }, [isProcessing]);

  const dragStart = (e) => {
    console.log("dragStart", e)
    const name = e.target.getAttribute("data-name");
    const id = e.target.getAttribute("data-id");
    setMemberSort(name, id);

    // setIsDragging(false);
  };

  const handleDragEnd = (e) => {
    // setIsDragging(true);
  };

  const dragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const drop = (e) => {
    console.log("drop", e)

    e.preventDefault();
    e.target.append(memberSort);
    const stt = e.target.previousElementSibling.textContent;
    if (stt % 2 === 0) {
      setTeam1((prev) => [...prev, memberSort]);
    } else {
      setTeam2((prev) => [...prev, memberSort]);
    }
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
    if (isProcessing == null || isProcessing === false) {
      return;
    }
    axios
      .post("http://localhost:5000/api/soccer/new-team", {
        handleTeam1,
        handleTeam2,
      })
      .then((response) => {
        setCheckAddMember((prev) => prev + 1);
      })
      .catch((error) => {
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

  const deleteOneMember = (id) => {
    axios
      .delete(`http://localhost:5000/api/soccer/members/${id}`)
      .then((res) => {
        setCheckAddMember((prev) => prev + 1);
      })
      .catch((err) => console.log("Lỗi khi gửi yêu cầu DELETE: ", err));
  };

  return (
    <div className="fuild-container app">
      <div className="wrapper d-flex">
        <div className="member text-center">
          <h3>Thêm thành viên</h3>
          <div className="ip-wrap">
            <input
              ref={inputFocus}
              onChange={(e) => {
                setMember(e.target.value);
              }}
              placeholder="Nhập thành viên..."
              value={member}
              onKeyPress={AddMemberOnKeyPress}
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
                  if (index % 2 === 0) {
                    return (
                      <div className="row hight-row" key={index}>
                        <div className="col-4 colBd">{index}</div>
                        <div
                          ref={inputMember}
                          draggable="true"
                          // className={`member-drag col-8 colBd ${isDragging ? 'red-color' : ''}`}
                          className="member-drag col-8 colBd"
                          onDragStart={dragStart}
                          onDragEnd={handleDragEnd}
                          data-name={member.name}
                          data-id={member.id}
                        >
                          {member.name}
                          <span
                            className={`icon-delete ${
                              isDragging ? "hide" : ""
                            }`}
                          >
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              onClick={() => deleteOneMember(member.id)}
                            />
                          </span>
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
                          onDragEnd={handleDragEnd}
                          data-name={member.name}
                          data-id={member.id}
                        >
                          <span>{member.name}</span>
                          <span
                            className={`icon-delete ${
                              isDragging ? "hide" : ""
                            }`}
                          >
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              onClick={() => deleteOneMember(member.id)}
                            />
                          </span>
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
          <div className="mt-3">
            <div className="wrap-tb">
              <div className="col tb-1">
                <div className="row hight-row">
                  <div className="col-4 colBd">#</div>
                  <div className="col-8 colBd">Thành viên</div>
                </div>

                {tempList.map((name, index) => {
                  if (index % 2 === 0) {
                    return (
                      <div className="row hight-row" key={index}>
                        <div className="col-4 colBd">{index}</div>
                        <div
                          onDragOver={dragOver}
                          onDrop={drop}
                          className="colBd"
                        ></div>
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
                {tempList.map((name, index) => {
                  if (index % 2 !== 0) {
                    return (
                      <div className="row hight-row" key={index}>
                        <div className="col-4 colBd">{index}</div>
                        <div
                          onDragOver={dragOver}
                          onDrop={drop}
                          className="colBd"
                        ></div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="member-handle text-center">
        <button type="button" className="btn btn-primary" onClick={init}>
          Chia
        </button>
        {isLoading ? <Loading /> : null}
        <div className="total-table">
          <table className="table table-bordered text-center mt-5 borderless-table">
            <thead>
              <tr style={{ color: "#343a40" }}>
                <th scope="col">#</th>
                <th scope="col">Đội 1</th>
              </tr>
            </thead>
            <tbody>
              {handleTeam1.map((handle1, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td ref={genData}>{handle1}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table className="table table-bordered text-center mt-5 ml-5 borderless-table">
            <thead>
              <tr style={{ color: "#343a40" }}>
                <th scope="col">#</th>
                <th scope="col">Đội 2</th>
              </tr>
            </thead>
            <tbody>
              {handleTeam2.map((handle2, index) => {
                return (
                  <tr key={index}>
                    <td>{index}</td>
                    <td ref={genData}>{handle2}</td>
                  </tr>
                );
              })}
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

export default TeamDivision;
