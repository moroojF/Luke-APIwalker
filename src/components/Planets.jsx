import React from 'react'

const Planets = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="card m-5">
            <h3 className="card-header text-center textStyle" style={{backgroundColor: "#D1E4EC", fontSize: '35px'}}>{props.myResult.name}</h3>
            <div className="card-body text-left" style={{fontSize: '22px'}}>
              <div className="my-3">
                <h5 className="card-text d-inline">Climate: </h5>
                <p className="d-inline">{props.myResult.climate}cm</p>
              </div>
              <div className="my-3">
                <h5 className="card-text d-inline">Terrain: </h5>
                <p className="d-inline">{props.myResult.terrain}kg</p>
                </div>
              <div className="my-3">
                <h5 className="card-text d-inline">Surface Water: </h5>
                <p className="d-inline">{props.myResult.surface_water}</p>
                </div>
              <div className="my-3">
                <h5 className="card-text d-inline">Population: </h5>
                <p className="d-inline">{parseInt(props.myResult.population).toLocaleString()}</p>
                </div>
            </div>
          </div></div>
        <div className="col-4"></div>

      </div>
    </>
  )
}

export default Planets
