import React, {Component} from "react";

class Form extends Component {
  render() {
    return (
      <div class="container">
        <h2 class="title">Enter a GitHub URL</h2>
        <div class="form-container shadow">
          <form name="user-content-submission" action="thank-you" netlify>
            <input placerholder="https://github.com/netlify/netlify-cms"/>
            <button>Scrape</button>
            <p class="disclosure">
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
              <input class="boxed-input light-shadow" type="text" name="sitename" required />
            </p>
            <p>
              <label>Link: </label>
              <input class="boxed-input light-shadow" type="text" name="contentlink" required />
            </p>
            <p>
              <label>Owner: </label>
              <input class="boxed-input light-shadow" type="email" name="contactemail" required />
            </p>
            <p>
              <label>Contributors: </label>
              <input class="boxed-input light-shadow" type="text" name="contributors" required />
            </p>
            <p>
              <label>Stars: </label>
              <input class="boxed-input light-shadow" type="text" name="stars" required />
            </p>
            <p>
              <label>Forks: </label>
              <input class="boxed-input light-shadow" type="text" name="forks" required />
            </p>
            <p>
              <label>Issues: </label>
              <input class="boxed-input light-shadow" type="text" name="issues" required />
            </p>
            <p>
              <textarea class="boxed-input text-box light-shadow" type="text" placeholder="Note about this repo" name="notes" autofocus></textarea>
            </p>
            <p>
              <button>Send</button>
            </p>
          </form>
          <div class="shadow"></div>
        </div>
      </div>
    );
  }
};

export default Form;
