import React from "react";
import "./button.css";

const Button = ({ text, type, onClick }) => {
  type = type || "darkFilled";
  const small = {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    minWidth : 'fit-content',
    width: "70px",
  };

  const styles = {
    small: small,

    darkFilled: {
      color: "var(--light)",
      background: "var(--dark)",
    },

    primary: {
      color: "var(--light)",
      background: "var(--primary)",
      ...small,
    },

    gradientFilled: {
      color: "var(--dark)",
      background: "var(--button-gradient)",
      ...small,
    },

    submit: {
      color: "var(--light)",
      background: "var(--primary)",
      padding: "0.5rem 1rem",
      fontSize: "1.3rem",
      width: '200px'
    },

  };

  const genericStyles = {
    width: "clamp(10rem, 30vw, 10rem)",
    borderRadius: "4px",
    ...styles[type],
  };

  return <button onClick={onClick} style={{ ...genericStyles }}>{text}</button>;
};

export default Button;
