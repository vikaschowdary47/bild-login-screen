import React from "react";
import classes from "./DetailContainer.module.css";

const DetailContainer = () => {
  return (
    <div className={classes.detailContainer}>
      <div className={classes.logo}>
        <img src="/images/logo.svg" alt="Oasis" /> Oasis.
      </div>
      <div className={classes.quoteContainer}>
        <div className={classes.quoteInnerContainer}>
          <img
            src="/images/dots.svg"
            alt="dots"
            className={classes.dotsImage}
          />
          <img
            src="/images/quotes.svg"
            alt="quote"
            className={classes.quoteImage}
          />
          <p className={classes.quoteDescription}>
            The passage experienced a surge in popularity during the 1960s when
            Letraset used it on their dry-transfer sheets, and again during the
            90s as desktop publishers bundled the text with their software.
          </p>
          <p className={classes.author}>
            Vincent Obi <img src="/images/checked.svg" alt="check" />
          </p>
          <img
            src="/images/vector.svg"
            alt="vector"
            className={classes.vector}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailContainer;
