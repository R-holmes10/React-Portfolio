import cryptodash from "../../assets/cryptodash.jpeg";
import TodoApp from "../../assets/TodoApp.jpeg";
import bms from "../../assets/bms.jpeg";

const FrontendAndBackend = () => {
  return (
    <>
      <div className="gridlayout1">
        <div>
          <img 
          className="imgeffects"
          src={cryptodash} 
          alt="Visual Studio Code Inspired Portfolio" />
        </div>
        <div>
          <h3>Cryptocurrency Dashboard</h3>
          <p>
            The purpose of the project titled “Cryptocurrency Dashboard” is to
            exclusively provide a web application that is user-friendly &
            reliable. This will give the insight to track various
            cryptocurrencies of one’s interest. The project mainly focuses on
            front-end technologies to build this responsive web application,
            that will work seamlessly across all platforms. The Dashboard has
            four modules: Cryptocurrency Graph, Market Cap table, Exchange
            crypto-currency, and Portfolio.
          </p>
          <h4>
            Tech-Stack : &nbsp; <i>Javascript, HTML, CSS</i>{" "}
          </h4>
          <br />

          <div className="gridlayout2">
            <a href="https://spark-cryptocurrency-dashboard.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Live Site /&gt;
            </a>
            <a
              href="https://github.com/R-holmes10/crypto-dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Code /&gt;
            </a>
          </div>
        </div>
      </div>

      <div className="gridlayout3">
        <div>
          <h3>Book-My-Show App</h3>
          <p>
            The purpose of the project titled <i>“BookMyShow”</i> is to provide
            a web application that is user-friendly & reliable. The project
            mainly focuses on the back-end and front-end technologies to build
            web applications. It has four modules: Movie Name, Time Slot, Seat
            Slot, and Last Booking Details.
          </p>
          <h4>
            <u>Tech-Stack :</u> &nbsp;{" "}
            <i>HTML, CSS, JavaScript, NodeJs, MongoDB</i>
          </h4>
          <br />
          <div className="gridlayout2">
            <a
              href="https://bookmyshow-project-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Live Site /&gt;
            </a>
            <a
              href="https://github.com/R-holmes10/BookmyShow-App-Frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Code /&gt;
            </a>
          </div>
        </div>

        <div>
          <img
            className="imgeffects"
            src={bms}
            alt="Real time alternative communication for disabled gamers"
          />
        </div>
      </div>
      <div className="gridlayout1">
        <div>
          <img
            className="imgeffects"
            src={TodoApp}
            alt="Language learning app powered by speech technologies"
          />
        </div>
        <div>
          <h3>Todo App</h3>
          <p>
            This is a simple Todos keeper where users can add tasks.
            Once added, there's also an option to edit the task and update it.
            Upon task completion, there's an option to strike off the task or to
            un-strike if not done. Then, at last, the task can be deleted when finally done.
          </p>
          <h4>
            Tech-Stack : &nbsp; <i>Javascript, HTML, CSS</i>{" "}
          </h4>
          <br />
          <div className="gridlayout2">
            <a
              href="https://todoapp-react-1xo9.onrender.com"
              rel="noopener noreferrer"
            >
              &lt; Live Site /&gt;
            </a>
            <a
              href="https://github.com/R-holmes10/TodoList.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Code /&gt;
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontendAndBackend;
