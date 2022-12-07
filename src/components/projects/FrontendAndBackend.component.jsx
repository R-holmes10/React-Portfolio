import cryptodash from "../../assets/cryptodash.jpeg";
import weather from "../../assets/weather.jpg";
import bms from "../../assets/bms.jpeg";

const FrontendAndBackend = () => {
  return (
    <>
      <div className="gridlayout1">
        <div>
          <img 
          className="imgeffects"
          src={cryptodash} alt="Visual Studio Code Inspired Portfolio" />
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
            src={weather}
            alt="Language learning app powered by speech technologies"
          />
        </div>
        <div>
          <h3>Weather-Tracker</h3>
          <p>
            Weather-Tracker is designed to provide users the daily weather
            report on temperature, precipitation, etc. After choosing any city
            from the dropd own available, one can get the weather data for six
            days , including current day and five future predictions as per
            OpenWeather API data.
          </p>
          <h4>
            Tech-Stack : &nbsp; <i>Javascript, HTML, CSS</i>{" "}
          </h4>
          <br />
          <div className="gridlayout2">
            <a
              href="https://weather-tracker01.herokuapp.com/"
              rel="noopener noreferrer"
            >
              &lt; Live Site /&gt;
            </a>
            <a
              href="https://github.com/R-holmes10/weather-tracker"
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
