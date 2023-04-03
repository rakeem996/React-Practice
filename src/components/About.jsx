import React from "react";

function About() {
  return (
    <>
      <div className="rounded" style={{width:"50%" , margin:"auto" , marginTop:"10px" ,background:"#A5D7E8" , padding:"20px"}}>
        <input
        placeholder="Enter e-mail"
          className="form-control form-control-lg mb-3"
          type="text"
          aria-label=".form-control-lg example"
        />
        <input
        placeholder="Enter phone number"
          className="form-control mb-3"
          type="text"
          aria-label="default input example"
        />
        <input
        placeholder="Enter porfolio link"
          className="form-control form-control-sm "
          type="text"
          aria-label=".form-control-sm example"
        />
      </div>
    </>
  );
}

export default About;
