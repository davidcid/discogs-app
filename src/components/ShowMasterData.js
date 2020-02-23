import React from "react";

class ShowMasterData extends React.Component {
  getStyles = () => {
    let styles = [];
    this.props.data.styles.map(style => {
      styles.push(style);
      return styles[0];
    });
    console.log(styles.join(", "));
    return styles.join(", ");
  };

  render() {
    return (
      <div>
        <div className="other-data">
          <h4>Genre: </h4>
          <p>{this.props.data.genres[0]}</p>
          <h4>Styles: </h4>
          <p>{this.getStyles()}</p>
        </div>
      </div>
    );
  }
}

export default ShowMasterData;
