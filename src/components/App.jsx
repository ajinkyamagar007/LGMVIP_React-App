import "./App.css";
import React, { useState } from "react";


function App() {
  const [users, setUsers] = useState([]);


  const getUsers = async () => {

    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setUsers(data.data);
  };

  return (
    <div>

        <button className="btn" onClick={getUsers}>
          Get Users
        </button>

      <div className="row">
        {users?.map((current, index) => {

          return (
            <div className="container" key={index}>
              <div className="card">
                <img src={current.avatar} className="card-img-top" alt="..." />
                <h3 className="card-title">
                   {current.first_name} {current.last_name}
                </h3>
                <h4 className="card-text">E-mail: {current.email}</h4><br></br>
                <button class="info">Info</button><br></br><br></br>
                <div class="social">
                  <ul>
                    <li><a href=""><i class="facebook fa fa-facebook-square"></i></a></li>
                    <li><a href=""><i class="instagram fa fa-instagram"></i></a></li>
                    <li><a href=""><i class="twitter fa fa-twitter-square"></i></a></li>
                    <li><a href=""><i class="linkedin fa fa-linkedin-square"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="Specialization">
              <hr></hr><h1>specialization</h1><hr></hr>
              <p>The acquisition of advanced technical skills requires specific education or training, often with a hands-on learning component and many advanced topical elements. Technical skill requirements are listed for the majority of career fields, with the highest concentrations being employment in areas involving scientific, technological, engineering, computational, and mathematical capabilities.
              </p>
              <p>Identifying your career goals is critical in determining what technical skills you need. If not in your desired career, your goals will likely differ from those established in their careers. Professionals who seek to stay in the same career might have goals of securing promotions or enhancing their performance.
              </p>
              </div>
            </div>

          );

        })}
      </div>
    </div>
  );
}



export default App;
