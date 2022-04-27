import React from 'react'

function Story() {
  return (
    <div className="story">
      <h1>our story</h1>
      <h4>2010</h4>
      <div className="idea">
        <div>
          <h3>Idea</h3>
          <p>
            It all started from a single idea. We wanted to create a restaurant
            that would offer its customers their favorite fast food dishes -
            burgers, pizzas, and more.
          </p>
        </div>
        <span className="line"></span>

        <img src={require("../../images/about-03-420x259.jpg").default} alt="" />
      </div>

      <div className="story">
        <h4>2010</h4>
        <div className="idea">
          <img src={require("../../images/about-02-420x259.jpg").default} alt="" />

          <span className="line"></span>
          <div>
            <h3>Opening</h3>
            <p>
              After making necessary preparations, completing our staff with
              experienced chefs and waiters, we were ready to meet new guests
              and visitors.
            </p>
          </div>
        </div>
      </div>

      <div className="story">
        <h4>2010</h4>
        <div className="idea">
          <div>
            <h3>Today</h3>
            <p>
              We are devoted to our customers and to buisness of our life -
              offering fast food dishes. And that is why today we are recognized
              as #1 Fast Food Chain in US.
            </p>
          </div>
          <span className="line"></span>

          <img src={require("../../images/about-01-420x259.jpg").default} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Story