import "./style.css";

const TeamDivision = () => {
  
  const team1 = []
  const team2 = []
  return (
    <div className="container text-center">
      {/* <h1 className="text-center">Chĩa Team V2.0</h1>
      <h2 className="text-center" id="status">
        Đang chĩa nhé...
      </h2>
      <div className="text-center">
        <button onclick={init()} id="btnStart">
          Start
        </button>
        <table id="chiateam">
          <tr>
            <th>Team 1</th>
            <th>Team 2</th>
          </tr>
          <tbody id="tbodyTb"></tbody>
        </table>
        <div>
          <h2 id="status_congrast">
            Chúc mừng các đội, chúc các bạn đá bóng vui vẽ!
          </h2>
        </div>
      </div> */}

      <h2 className="heading">Nhập từng thành viên của 2 đội</h2>
      
      <table class="table table-striped table-dark">
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
              <input className="ip-name-1"/>
            </td>
            <td>
              <input className="ip-name-2"/>
            </td>
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>
              <input className="ip-name-1"/>
            </td>
            <td>
              <input className="ip-name-2"/>
            </td>
            
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>
              <input className="ip-name-1"/>
            </td>
            <td>
              <input className="ip-name-2"/>
            </td>
            
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>
              <input className="ip-name-1"/>
            </td>
            <td>
              <input className="ip-name-2"/>
            </td>
            
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>
              <input className="ip-name-1"/>
            </td>
            <td>
              <input className="ip-name-2"/>
            </td>
            
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>
              <input className="ip-name-1"/>
            </td>
            <td>
              <input className="ip-name-2"/>
            </td>
            
          </tr>
        </tbody>
      </table>
      <button className="btn btn-primary btn-chia">
        Chia
      </button>

      <table class="table table-striped table-dark">
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
              sdfsdf
            </td>
            <td>
              fsdfsdf
            </td>
            
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default TeamDivision;
