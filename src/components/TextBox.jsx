import React, { useState } from "react";

function TextBox(props) {

    const [para, setPara] = useState({
      sentence:"",
      numberOfWords:0,
      numberOfChars:0
    });

  function handleChange(e){
    const {value} = e.target;
    setPara((prePara) => {
      return {
        ...prePara,
        sentence:value,
        numberOfWords: value.split(' ').filter(function(str){return str !== ""}).length,
        numberOfChars: value.split("").filter((str) => {return str !== " "}).length
      }
    });
  }

  function handleClickUpper(e){
    let upper = para.sentence.toUpperCase();
    setPara((pre) => {
      return {
        ...pre,
        sentence: upper
      }
    });
  }

  function handleClickLower(e){
    let lower = para.sentence.toLowerCase();
    setPara((pre) => {
      return {
        ...pre,
        sentence: lower
      }
    });
  }


  return (
    <div className={props.mode?"container rounded p-4 bg-secondary": "container rounded p-4"} style={{width:"60%" ,marginTop:"10px" ,background:"#A5D7E8"}}>
      <div className="form d-flex justify-content-center">
        <textarea
          onChange={(e) => {handleChange(e)}}
          value={para.sentence}
          name="sentence"
          className="form-control"
          placeholder="Enter a text"
          style={{ height: "100px", width: "100%", marginBottom:"10px"}}
        ></textarea>
      </div>

      <div className="d-flex justify-content-center">
        <button type="button" onClick={handleClickUpper} name="toUppper" className="btn btn-primary btn-sm mx-1">
          Convert to Upper
        </button>
        <button type="button" onClick={handleClickLower} name="toLower" className="btn btn-primary btn-sm mx-1">
          Convert to Lower
        </button>
      </div>

      <div className="my-3">
          <h2 className={props.mode ? "text-white" : ""}>Your text summary</h2>
          <p className={props.mode ? "bg-white p-2 rounded" : "bg-dark text-white p-2 rounded"}>{para.numberOfWords} words {para.numberOfChars} characters</p>
          <h2 className={props.mode ? "text-white" : ""}>Preview</h2>
          <p className={ props.mode ? "bg-white p-2 rounded" : "bg-black text-white p-2 rounded"}>{para.sentence}</p>
      </div>
    </div>
  );
}

export default TextBox;
