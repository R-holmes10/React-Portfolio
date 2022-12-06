import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FullStack from "./FullStack.component";
import FrontendAndBackend from "./FrontendAndBackend.component";

const Projects = () => {
  return (
    <div id="projects">
      <Tabs>
        <TabList>
          <h2>Projects</h2>
          <div>
            <Tab style={{ fontWeight: "bold" }} default={true}>
              Page 1/2{" "}
            </Tab>
            <Tab style={{ fontWeight: "bold" }}>Page 2/2</Tab>
          </div>
        </TabList>

        <TabPanel>
          <FrontendAndBackend />
        </TabPanel>
        <TabPanel>
          <FullStack />
        </TabPanel>
      </Tabs>

      <h2>Certificates</h2>
      <div>
        <div>
          <h3>
            <b>➢ </b>Introduction to Web Development with HTML, CSS, JavaScript{" "}
          </h3>
          <p>
            An online course authorised by IBM and offered through Coursera.
            <br></br>
            "I Learnt application development ecosystem and created basic,
            interactive web pages using HTML, CSS and JavaScript."
          </p>
          <a
            href="
            https://www.coursera.org/account/accomplishments/certificate/RZ2CVB7MQYSW"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="skillbutton">Verify Credentials</button>
          </a>
        </div>
        <div>
          <div></div>
          <h3>
            <b>➢ </b>Front-End Web Development with React
          </h3>
          <p>
            An online course authorised by The Hong University and offered
            through Coursera.<br></br>
            "Familiarised with client-side Javascript application development
            and the React library. I can implement single page functional
            front-end application using React."
          </p>
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/G5P5BSZ48P2P"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="skillbutton">Verify Credentials</button>
          </a>
        </div>
        <div>
          <div></div>
          <h3>
            <b>➢ </b>Introduction to Cloud Computing
          </h3>
          <p>
            An online course authorised by IBM and offered through Coursera.
            <br></br>
            "I learnt cloud service & deployment models. Created IBM Cloud
            account and provision an instance of cloud object storage service to
            host a static webpage. "
          </p>
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/YX8TTMCMM6TY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="skillbutton">Verify Credentials</button>
          </a>
        </div>
        <div>
          <h3>
            <b>➢ </b>Server-side Development with NodeJS, Express and MongoDB
          </h3>
          <p>
            An online course authorised by The Hong Kong University and offered
            through Coursera.<br></br>
            "It started with a brief overview of the Web protocols: HTTP and
            HTTPS. We examined NodeJS and it's modules: Express for building web
            servers. On the database side, we reviewed basic CRUD operations,SQL
            and NoSQL databases, in particular MySQL ,MongoDB and Mongoose."
          </p>
          <a
            href="
            https://www.coursera.org/account/accomplishments/certificate/XRNRSEHS8887"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="skillbutton">Verify Credentials</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
