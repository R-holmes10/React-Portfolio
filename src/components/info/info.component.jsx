import React from "react";
import { headerData } from "../../data/headerdata";

const Info = () => {
  return (
    <div id="info">
      <h4>
        <i>HEY !&nbsp; Myself</i>
      </h4>
      <h2> Ritu Verma</h2>
      <h1>&lt;Full Stack Developer/&gt;</h1>
      <p>
        
       I aim to equip myself with team responsibilities and sharpen my 
        leadership skills. Working with a team will enable me to develop a 
        better skill set and adaptability to group dynamics.
        
        I design and build quality websites, clean user interfaces,
        and rich interactive web applications. I am seeking Javascript, Nodejs and 
        other web development opportunities.
      </p>
     
      <div className="lcr-buttonContainer">
        {headerData.resumePdf && (
          <a
            href={headerData.resumePdf}
            download="RV_CV"
            target="_blank"
            rel="noreferrer"
          >
            <button className={`skillbutton ${Info.resumeBtn}`}>
              Download CV
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Info;
