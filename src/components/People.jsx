import React from 'react'

const People = (props) => {
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
                  <h5 className="card-text d-inline">Height: </h5>
                  <p className="d-inline">{props.myResult.height}cm</p>
                </div>
                <div className="my-3">
                  <h5 className="card-text d-inline">Mass: </h5>
                  <p className="d-inline">{props.myResult.mass}kg</p>
                </div>
                <div className="my-3">
                  <h5 className="card-text d-inline">Hair Color: </h5>
                  <p className="d-inline">{props.myResult.hair_color}</p>
                </div>
                <div className="my-3">
                  <h5 className="card-text d-inline">Skin Color: </h5>
                  <p className="d-inline">{props.myResult.skin_color}</p>
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

export default People
