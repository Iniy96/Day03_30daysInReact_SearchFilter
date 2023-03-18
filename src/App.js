import "./App.css";
import names from "./MOCK_DATA.json";
import { useState } from "react";

function App() {
  const [searchName, setsearchName] = useState("");

  return (
    <div className="App">
      <div className="container mt-5 w-75">
        <input
          className="form-control w-50 mx-auto"
          type="text"
          placeholder="Search Name"
          aria-label="default input example"
          onChange={(e) => setsearchName(e.target.value)}
        />
        <div className="my-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {names
                .filter((item) => {
                  if(!searchName){
                    return item;
                  }else if(item.first_name.toLowerCase().includes(searchName.toLowerCase()) || item.last_name.toLowerCase().includes(searchName.toLowerCase())){
                    return item;
                  }
                })
                .map((item) => {
                  return (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone_number}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
