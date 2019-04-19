import React, { Component } from "react";
import PeerawasLSQ from "./PeerawasLSQ.jpg";

import "./App.css";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header>
            <div className="avatar">
              <img src={PeerawasLSQ} alt="avatar" />
            </div>
            <div className="name">
              Peerawas
              <br />
              Likitkiatikul
            </div>
            <div className="contact">
              <ul className="contact__items">
                <li className="contact__item">Peerawas.Likit@gmail.com</li>
                <li className="contact__item">+66-96-451-4441</li>
                <li className="contact__item">
                  Khlong Sarn, Bangkok, Thailand
                </li>
                <li className="contact__item">07 December, 1995</li>
              </ul>
            </div>
          </header>
          <div className="container" id="top">
            <div className="left">
              <main>
                <section className="exp">
                  <h2 className="heading__primary">Work Experience</h2>
                  <div className="exp__item">
                    <p>
                      Software Engineer <span>(implementer)</span>
                    </p>
                    <p>Freewill Solutions Company Limited</p>
                    <ul>
                      <li>OnSite @ UOBKayHian Securities</li>
                      <li>OnSite @ Finansia Syrus Securities</li>
                    </ul>
                    <p className="mini">1 Oct 2018 &ndash; 31 Jan 2019</p>
                  </div>
                </section>
              </main>
            </div>
            <div className="right">
              <main>
                <section className="edu">
                  <h2 className="heading__primary">Education</h2>
                  <h3>Bachelor Degree</h3>
                  <p>Business Administration</p>
                  <p>Faculty of Hospitality</p>
                  <p>Majoring in Culinary Arts and Kitchen Management</p>
                  <p>Dusit Thani College</p>
                  <div className="temp">
                    <div className="mini">08/2014 - 07/2018</div>
                    <div>GPA 3.70</div>
                  </div>
                </section>
              </main>
            </div>
          </div>
          <div className="container">
            <div className="left">
              <main>
                <section className="skill">
                  <h2 className="heading__primary">Skills</h2>
                  <div className="skill__items">
                    <h3>NodeJS/Express</h3>
                    <ul />
                  </div>
                  <div className="skill__items">
                    <h3>React</h3>
                    <ul>
                      <li>Router</li>
                      <li>Redux</li>
                      <li>React Hooks</li>
                    </ul>
                  </div>
                  <div className="skill__items">
                    <h3>JavaScript</h3>
                    <ul>
                      <li>ES6 Syntax</li>
                      <li>jQuery</li>
                    </ul>
                  </div>
                  <div className="skill__items">
                    <h3>HTML5/CSS3 (SASS)</h3>
                    <ul>
                      <li>Responsive WebDesign</li>
                    </ul>
                  </div>
                  <div className="skill__items">
                    <h3>SQL/NoSQL</h3>
                    <ul>
                      <li>MySQL/Informix</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                  <div className="skill__items">
                    <h3>GIT</h3>
                    <ul>
                      <li>Basic of Version Control</li>
                    </ul>
                  </div>
                </section>
              </main>
            </div>
            <div className="right">
              <main>
                <section className="language">
                  <h2>Language</h2>
                  <div className="lang-container">
                    <p>Thai</p>
                    <div>
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <div className="lang-container">
                    <p>English</p>
                    <div>
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="lang-container">
                    <p>Japanese</p>
                    <div>
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                </section>
                <section className="interest">
                  <h2>Interests</h2>
                  <div className="interest__items">
                    <div className="interest__item">#Formula1</div>
                    <div className="interest__item">#Cooking</div>
                    <div className="interest__item">#FreshBrewedCoffee</div>
                    <div className="interest__item">#dota2</div>
                    <div className="interest__item">#Stocks&Investment</div>
                    <div className="interest__item">#Burger</div>
                    <div className="interest__item">#BoardGame</div>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
