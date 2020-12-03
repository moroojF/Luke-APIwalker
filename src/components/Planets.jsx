import React from 'react'

const Planets = (props) => {
  const conNum = num => {
    if (num === "unknown") {
      return "unknown";
    } else {
      return parseInt(num).toLocaleString();

    }
  }
  return (
    <>
      {props.myResult.name ?
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="card m-5">
              <h3 className="card-header text-center textStyle" style={{ backgroundColor: "#D1E4EC", fontSize: '35px' }}>{props.myResult.name}</h3>
              <div className="card-body text-left" style={{ fontSize: '22px' }}>
                <div className="my-3">
                  <h5 className="card-text d-inline">Climate: </h5>
                  <p className="d-inline">{props.myResult.climate}</p>
                </div>
                <div className="my-3">
                  <h5 className="card-text d-inline">Terrain: </h5>
                  <p className="d-inline">{props.myResult.terrain}</p>
                </div>
                <div className="my-3">
                  <h5 className="card-text d-inline">Surface Water: </h5>
                  <p className="d-inline">{props.myResult.surface_water}</p>
                </div>
                <div className="my-3">
                  <h5 className="card-text d-inline">Population: </h5>
                  <p className="d-inline">{conNum(props.myResult.population)}</p>
                </div>
              </div>
            </div></div>
          <div className="col-3"></div>
        </div>
        :
        ""}
    </>
  )
}

export default Planets
