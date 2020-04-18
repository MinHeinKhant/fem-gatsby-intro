import React, { Component } from "react";
import { css } from "@emotion/core";

class Wave extends Component {
  state = {
    waves: 0
  };
  render() {
    const { waves } = this.state;
    const label = ` 👋 ${waves} ${waves === 1 || 0 ? "wave" : "waves"} `;
    return (
      <button
        css={css`
          background: rebeccapurple;
          border: none;
          color: white;
          font-size: 2rem;
          padding: 0.8rem;
        `}
        onClick={() =>
          this.setState(prevState => ({ waves: prevState.waves + 1 }))
        }
      >
        {label}
      </button>
    );
  }
}

export default Wave;
