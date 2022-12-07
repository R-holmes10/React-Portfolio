import csoon from "../../assets/csoon.jpg";

const FullStack = () => {
  return (
    <>
      <div className="gridlayout1">
        <div>
          <img 
    
          src={csoon} alt="Preview of HTML email from LinkedIn." />
        </div>
        <div>
          <h3>Project 4 </h3>
          <p>--- Will be updated soon</p>
          {/* <h4><u>Tech-Stack  :</u> &nbsp; <i>HTML, CSS, JavaScript, NodeJs, MongoDB</i></h4> */}
          <br />
          <div className="gridlayout2">
            <a href="updatedsoon" target="_blank" rel="noopener noreferrer">
              &lt; Live Site /&gt;
            </a>
            <a href="updated soon" target="_blank" rel="noopener noreferrer">
              &lt; Code /&gt;
            </a>
          </div>
        </div>
      </div>
      <div className="gridlayout3">
        <div>
          <h3>Project 5</h3>
          <p>- - - - Updated soon!</p>

          <br />
          <div className="gridlayout2">
            <a href="updatedsoon" target="_blank" rel="noopener noreferrer">
              &lt; Live Site /&gt;
            </a>
            <a href="updated soon" target="_blank" rel="noopener noreferrer">
              &lt; Code /&gt;
            </a>
          </div>
        </div>
        <div>
          <img 
    
          src={csoon} alt="Preview of HTML email from Displate." />
        </div>
      </div>
    </>
  );
};

export default FullStack;
