import { useState } from "react";
import axios from "axios";
import clsx from 'clsx';
import Header from "../Home/Header";
import "./style.css";

const History = () => {
  const [teams1, setTeams1] = useState([]);
  const [teams2, setTeams2] = useState([]);

  

  const [isActive, setIsActive] = useState(false)

  const handleAddTeam = () => {
    axios
      .get("http://localhost:5000/api/soccer/new-team")
      .then((res) => {
        setTeams1(res.data.team_1);
        setTeams2(res.data.team_2);
      })
      .catch((err) => console.log(err));

    setIsActive(true)


    
  };

  

  return (
    <>
      <Header />
      <main className="app">
        <div className="container-fluid text-center wrapper">
          <h1 className="heading mb-3">Lịch sử</h1>
          <div className="row box-table">
            <div className="col">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Team 1</th>
                    <th scope="col">Team 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">0</th>
                    <td>A Thuận + Việt</td>
                    <td>A Koi + Sáng</td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>A Thanh + Toản</td>
                    <td>A Đạt 93 + Hoàng</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Đức Anh T3</td>
                    <td>Long</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>A Bình + Hoàng (bạn Toản)</td>
                    <td>A Zik + Học</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>A Đức + A Trường</td>
                    <td>Tuấn + A Duy</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Vũ + Đạt</td>
                    <td>Sinh + Thành</td>
                  </tr>
                </tbody>
              </table>
              <h2 className="month">Tháng 6</h2>
            </div>

            <div>
              <div className="col d-flex">
                <div className="col">
                  <div className="row item">#</div>
                  {teams1.map((team1, index) => (
                    <div className="row item" key={index}>
                      {index}
                    </div>
                  ))}
                </div>
                <div className="col">
                  <div className="row item">Team 1</div>
                  {teams1.map((team1, index) => (
                    <div className="row item" key={index}>
                      {team1}
                    </div>
                  ))}
                </div>
                <div className="col">
                  <div className="row item">Team 2</div>
                  {teams2.map((team2, index) => (
                    <div className="row item" key={index}>
                      {team2}
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <h2 className="month">Tháng 7</h2>
                <button
                  type="button"
                  className={clsx("btn", "btn-primary", "ml-1", "add-btn", isActive ? "btn-secondary" : "")}
                  onClick={handleAddTeam}
                >
                  Thêm
                </button>
              </div>
            </div>

            <div className="col">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Team 1</th>
                    <th scope="col">Team 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex justify-content-center">
                <h2 className="month">Tháng 8</h2>
                <button
                  type="button"
                  className="btn btn-primary ml-1 add-btn"
                  // onClick={AddMonth}
                >
                  Thêm
                </button>
              </div>
            </div>

            <div className="w-100"></div>
            <div className="col">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Team 1</th>
                    <th scope="col">Team 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex justify-content-center">
                <h2 className="month">Tháng 9</h2>
                <button
                  type="button"
                  className="btn btn-primary ml-1 add-btn"
                  // onClick={AddMonth}
                >
                  Thêm
                </button>
              </div>
            </div>
            <div className="col">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Team 1</th>
                    <th scope="col">Team 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex justify-content-center">
                <h2 className="month">Tháng 10</h2>
                <button
                  type="button"
                  className="btn btn-primary ml-1 add-btn"
                  // onClick={AddMonth}
                >
                  Thêm
                </button>
              </div>
            </div>
            <div className="col">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Team 1</th>
                    <th scope="col">Team 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex justify-content-center">
                <h2 className="month">Tháng 11</h2>
                <button
                  type="button"
                  className="btn btn-primary ml-1 add-btn"
                  // onClick={AddMonth}
                >
                  Thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default History;
