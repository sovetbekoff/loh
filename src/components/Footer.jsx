import React from "react";
import Footer from "react-footer-bar";
import "../styles/Footer.css";
function Footer1() {
  return (
    <div className="oop">
      <Footer
        textArray={[
          "Copyright@2024",
          "Thanks for visiting",
          "All the best!",
          "Beka Hot",
          "Reklama",
        ]}
        backGroundStyle={{
          backgroundColor: "Highlight",
        }}
        textStyle={{
          fontSize: 24,
        }}
        enableAnimation
      />
    </div>
  );
}

export default Footer1;
