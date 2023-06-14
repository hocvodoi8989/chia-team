import { useState } from "react";
import { createElement } from "react";
import "./style.css";
// import {useEffect} from 'react';

const TeamDivision = () => {
  let Group = {
    0: [
      { STT: 1, Name: "A Koi + Sáng" },
      { STT: 2, Name: "A Thanh + Toản" },
      { STT: 3, Name: "Đức Anh t3" },
      { STT: 4, Name: "A Zik + Học" },
      { STT: 5, Name: "A Đức + A Trường" },
      { STT: 6, Name: "Sinh + Thành" },
      // {STT: 7, Name: 'a7'}
    ],

    1: [
      { STT: 1, Name: "A Thuận + Việt" },
      { STT: 2, Name: "A Đạt 93 + Hoàng" },
      { STT: 3, Name: "Long" },
      { STT: 4, Name: "A Bình + Hoàng (bạn Toản)" },
      { STT: 5, Name: "Tuấn + A Duy" },
      { STT: 6, Name: "Vũ + Đạt" },
      // {STT: 7, Name: 'b7'}
    ],
  };
  const team1 = [];
  const team2 = [];
  function team(index) {
    let item1 = Group[0][index] ?? null;
    let item2 = Group[1][index] ?? null;
    let random = Math.floor(Math.random() * 2);
    if (random === 0) {
      team1.push(item1);
      team2.push(item2);
    }

    if (random === 1) {
      team1.push(item2);
      team2.push(item1);
    }

    console.log(team1);
    console.log(team2);
  }

  const maxLength =
    Group[0].length > Group[1].length ? Group[0].length : Group[1].length;

  // const heading = document.getElementsByClassName("btn-submit")
  const genData = document.getElementsByClassName("genTbody");

  const genTBody = (index) => {
    team(index);
    let tbBody = "";
    for (let i = 0; i < team1.length; i++) {
      tbBody =
        tbBody +
        createElement(
          "tr",
          null,
          createElement("th", { scope: "row" }, "1"),
          createElement("td", null, "hoc"),
          createElement("td", null, "hoc")
        );
    }
    genData.innerHTML = tbBody;
  };

  const main = async () => {
    for (let i = 0; i < maxLength; i++) {
      // await sleep();
      setTimeout(() => genTBody(i), i * 1000);
    }
  };

  const sleep = (milliseconds) => {
    return new Promise((r) =>
      setTimeout(() => {
        return r();
      }, milliseconds)
    );
  };

  const init = async () => {
    await sleep(3000);
    main();
  };

  return (
    <div className="fuild-container text-center wrapper">
      <div className="top-table">
        <div className="list-member">
          <h2 className="heading">Thành viên</h2>
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Member</th>
                <th scope="col">STT</th>
                <th scope="col">Member</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Vũ</td>
                <td>2</td>
                <td>Sáng</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Vũ</td>
                <td>4</td>
                <td>Sáng</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Vũ</td>
                <td>6</td>
                <td>Sáng</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Vũ</td>
                <td>8</td>
                <td>Sáng</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Vũ</td>
                <td>10</td>
                <td>Sáng</td>
              </tr>
              <tr>
                <th scope="row">11</th>
                <td>Vũ</td>
                <td>12</td>
                <td>Sáng</td>
              </tr><tr>
                <th scope="row">13</th>
                <td>Vũ</td>
                <td>14</td>
                
              </tr>
            </tbody>
          </table>
        </div>

        <div className="handle-table">
          <h2 className="heading">Nhập từng thành viên của 2 đội</h2>
          <table className="table table-dark">
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
                <td>
                  <input className="ip-name-1" />
                </td>
                <td>
                  <input className="ip-name-2" />
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  <input className="ip-name-1" />
                </td>
                <td>
                  <input className="ip-name-2" />
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  <input className="ip-name-1" />
                </td>
                <td>
                  <input className="ip-name-2" />
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>
                  <input className="ip-name-1" />
                </td>
                <td>
                  <input className="ip-name-2" />
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>
                  <input className="ip-name-1" />
                </td>
                <td>
                  <input className="ip-name-2" />
                </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>
                  <input className="ip-name-1" />
                </td>
                <td>
                  <input className="ip-name-2" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button onClick={init} className="btn btn-primary btn-submit">
        Chia
      </button>

      <table className="table table-dark bot-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Team 1</th>
            <th scope="col">Team 2</th>
          </tr>
        </thead>
        <tbody className="genData"></tbody>
      </table>
    </div>
  );
};

export default TeamDivision;
