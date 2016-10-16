import React, {Component} from "react";

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <h2 className="title">Enter a GitHub URL</h2>
        <div className="form-container shadow">
          <form name="user-content-submission" action="thank-you" netlify>
            <input placeholder="https://github.com/netlify/netlify-cms"/>
            <button>Scrape</button>
            <p className="disclosure">
              We are only looking for open source repos that meet one or more of the following criteria:
            </p>
          </form>
          <ul>
            <li>Existing Documentation</li>
            <li>More than 25+ contributors</li>
            <li>A [Static] Site Generator</li>
            <li>Trending on <a href="https://github.com/trending?since=weekly">GitHub weekly</a> and <a href="https://changelog.com/nightly">Changelog Nightly</a></li>
          </ul>
          <hr />
          <form name="user-content-submission" action="thank-you" netlify>
            <p>
              <label>Name: </label>
              <input className="boxed-input light-shadow" type="text" name="sitename" required />
            </p>
            <p>
              <label>Link: </label>
              <input className="boxed-input light-shadow" type="text" name="contentlink" required />
            </p>
            <p>
              <label>Owner: </label>
              <input className="boxed-input light-shadow" type="email" name="contactemail" required />
            </p>
            <p>
              <label>Contributors: </label>
              <input className="boxed-input light-shadow" type="text" name="contributors" required />
            </p>
            <p>
              <label>Stars: </label>
              <input className="boxed-input light-shadow" type="text" name="stars" required />
            </p>
            <p>
              <label>Forks: </label>
              <input className="boxed-input light-shadow" type="text" name="forks" required />
            </p>
            <p>
              <label>Issues: </label>
              <input className="boxed-input light-shadow" type="text" name="issues" required />
            </p>
            <p>
              <textarea className="boxed-input text-box light-shadow" type="text" placeholder="Note about this repo" name="notes"></textarea>
            </p>
            <p>
              <button className="button-primary">Send</button>
            </p>
          </form>
          <div className="shadow"></div>
        </div>
      </div>
    );
  }
};

export default Form;
