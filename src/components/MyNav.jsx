import React, { useState } from "react";
import { navigate } from '@reach/router';

function MyNav(props) {

  const [myCategory, setMyCategory] = useState("people");
  const [myId, setMyId] = useState(1);
  const [myError, setMyError] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    setMyError("");
    fetch("https://swapi.dev/api/" + myCategory + "/" + myId)
      .then(response => {
        if (response.status === 404) {
          setMyError("These aren't the droids you're looking for");
        }
        console.log(response.status)
        return response.json();
      }).then(response => {
        props.createResult(response);
      }).catch(err => {
        console.error(err);
      });
    navigate('/' + myCategory + "/" + myId)
  }
  return (<>
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#E8D0BC" }}>
      <div className="container">
        <h2 className="textStyle" style={{ fontSize: '50px' }}> Star Wars API</h2>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div className="col-9 ">
            <form className="form-inline ml-4" onSubmit={formHandler}>
              <select className="form-control mr-sm-2" name="myCategory" id="myCategory" onChange={e => setMyCategory(e.target.value)}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
              </select>
              <input className="form-control mr-sm-2" type="number" value={myId} min="1" name="myId" id="myId" onChange={e => setMyId(e.target.value)} />
              <button className="btn btn-outline-info my-2 my-sm-0" style={{ backgroundColor: "#D1E4EC" }}>Search</button>
            </form></div>
        </div></div>
    </nav>
    {myError == "" ?
      "" : <h5 className="text-center m-5" >
        <span className="p-3 rounded-lg" style={{ color: "#fffea3", backgroundColor: "#D1E4EC" }}>{myError}</span>
      </h5>}
  </>
  )
}

export default MyNav
