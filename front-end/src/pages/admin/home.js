import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="row m-4 ">
        <div className="col-md-3">
          <div className="card  mb-3">
            <div className="card-body">
              <h5 className="card-title">
               5 sản phẩm
              </h5>
            </div>
            <div className="card-header text-white bg-danger">Hết hàng</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">
                5 sản phẩm
              </h5>
            </div>
            <div className="card-header text-white bg-warning">Tồn kho ít</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
