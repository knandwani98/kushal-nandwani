import React from "react";
import "../styles/home.scss";

const Home = ({ theme }) => {
  return (
    <>
      <section className={`hero container flex light-mode ${theme}-mode`}>
        <div className="content">
          <span className="greet">Namastey, </span>
          <h1>I'm Kushal!</h1>
          <br />
          <h2>Welcome to my digital island. 🌴</h2>
          <br />
          <br />
          <p>
            I'm a front end developer based in Delhi, India.
            <br /> I design creative websites and write clean codes,
            <br />I like dance, design, traveling, marvel and gaming.
          </p>
        </div>
        <div className="img">
          <img src={"./namastey.png"} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
