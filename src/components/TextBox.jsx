import React, { useState } from "react";

function TextBox() {

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
    <div className="container" style={{width:"60%" ,}}>
      <div className="form d-flex justify-content-center">
        <textarea
          onChange={(e) => {handleChange(e)}}
          value={para.sentence}
          name="sentence"
          className="form-control"
          placeholder="Enter a text"
          style={{ height: "100px", width: "100%", margin: "20px 0px" }}
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
          <h2>Your text summary</h2>
          <p className="bg-dark text-white p-2 rounded">{para.numberOfWords} words {para.numberOfChars} characters</p>
          <h2>Preview</h2>
          <p className={para.sentence.length>0 ? "bg-dark text-white p-2 rounded" : ""}>{para.sentence}</p>
      </div>
    </div>
  );
}

export default TextBox;
