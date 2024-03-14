import React from "react";
import bookClubBlogImage from "../../assets/small/Book_Club_Blog.png";
import codingQuizImage from "../../assets/small/Coding_Quiz.png";
import movieProjectImage from "../../assets/small/Movie_Project1.png";
import noteTakerImage from "../../assets/small/Note_Taker.png";
import weatherDashImage from "../../assets/small/Weather_Dashboard.png";
import workdaySchedulerImage from "../../assets/small/Workday_Scheduler.png";
import crystalClarityImage from "../../assets/small/Crystal_Clarity.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://crystal-clarity.onrender.com/">
                {" "}
                <img
                  src={crystalClarityImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Crystal_Clarity"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Crystal Clarity</h4>
              <p>
              Crystal Clarity is the premier destination for cultivating positivity and self-improvement! This app offers the mystical insights of a Magic Crystal Ball. Users can create personalized profiles to curate their favorite affirmations and enjoy the transformative power of positive thinking. With intuitive features for updating profiles and managing collections, Crystal Clarity empowers individuals to embark on a journey of self-discovery and enlightenment!
              </p>
            </div>
          </div>
        </div>
        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://vast-meadow-74622-4ff6339ad674.herokuapp.com/">
                {" "}
                <img
                  src={bookClubBlogImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Book_Club_Blog"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Book Club Blog</h4>
              <p>
              This project shows my collaborative skills and coding abilities as a fullstack developer. Book club blog posting project used Node.js, Express.js to create RESTful API, Handlebars.js as the templating engine, MYSQL and Sequelize ORM for database connection, espress-session and cookies for authentication, GET and POST routes for data retrieve and update, Bootstrap for the frontend and Heroku deployment for the user.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://sav-the-sag.github.io/coding_quiz/">
                {" "}
                <img
                  src={codingQuizImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Coding_Quiz"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Coding Quiz</h4>
              <p>
              An online quiz about coding that has a timer. When "start quiz" is clicked by the user the user is redirected to another html page and the timer begins.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://sav-the-sag.github.io/movie_project/">
                {" "}
                <img
                  src={movieProjectImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Movie_Project1"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Movie Project</h4>
              <p>
              A web application for a movie journal where users can search and log movies they have watched. Users can add comments and view the trailer for the movie too! Made using HTML, CSS, and javascript.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://savs-note-taker-app-6dac344c661c.herokuapp.com/">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note_Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
              A web application that allows users to document notes, save them, and delete them. Created using an express.js back-end.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://sav-the-sag.github.io/weather_dashboard/">
                {" "}
                <img
                  src={weatherDashImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather_Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                A website that allows the user see the weather outlook for
                multiple cities. The user can enter a city and see a 5-Day
                Forecast. The user can see the temperature, humidity levels,
                wind speed as well as the UV index.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://sav-the-sag.github.io/workday_schedule/">
                {" "}
                <img
                  src={workdaySchedulerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Workday_Scheduler"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Workday Scheduler</h4>
              <p>
              A calendar application that allows a user to save events for each hour of a typical working day 9am to 5pm. This app runs in the browser and features HTML and CSS powered by jQuery.

{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;