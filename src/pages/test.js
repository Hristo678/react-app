import React from "react";

class Test extends React.Component {
  navigateToFeature() {
    const { history } = this.props;
    history.push("/");
  }
  render() {
    return (
      <div className="Home-card">
        <h1>Home Page</h1>
        <button
          onClick={() => {
            this.navigateToFeature();
          }}
        >
          Go to Feature(will work)
        </button>
      </div>
    );
  }
}

export default Test;