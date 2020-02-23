import React from "react";

class ShowMasterData extends React.Component {
  getGenres = () => {
    let genres = [];
    if (this.props.data.genres === undefined) {
      return "no data";
    } else {
      this.props.data.genres.map(genre => {
        genres.push(genre);
        return genres[0];
      });
      return genres.join(", ");
    }
  };

  getStyles = () => {
    let styles = [];
    if (this.props.data.styles === undefined) {
      return "no data";
    } else {
      this.props.data.styles.map(style => {
        styles.push(style);
        return styles[0];
      });
      return styles.join(", ");
    }
  };

  render() {
    return (
      <div>
        <div className="other-data">
          <h4>Year: </h4>
          <p>{this.props.data.year}</p>
          <h4>Genres: </h4>
          <p>{this.getGenres()}</p>
          <h4>Styles: </h4>
          <p>{this.getStyles()}</p>
          <h4>Tracklist: </h4>
          <ul>
            {this.props.data.tracklist.map(track => {
              return (
                <li style={{ listStyle: "none" }}>
                  {track.position}. {track.title} ({track.duration})
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ShowMasterData;
