import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container" style={{ paddingBottom: "50px" }}>
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Why Choose Us</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div 
                  key={`${d.title}-${i}`} 
                  className="col-xs-12 col-sm-6 col-lg-3"
                  style={{ marginBottom: "30px" }}
                >
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
