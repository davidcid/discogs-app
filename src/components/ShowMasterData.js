import React from "react";

const ShowMasterData = ({ data }) => {
  const getGenres = () => {
    let genres = [];
    if (data.genres === undefined) {
      return "no data";
    } else {
      data.genres.map(genre => {
        genres.push(genre);
        return genres[0];
      });
      return genres.join(", ");
    }
  };

  const getStyles = () => {
    let styles = [];
    if (data.styles === undefined) {
      return "no data";
    } else {
      data.styles.map(style => {
        styles.push(style);
        return styles[0];
      });
      return styles.join(", ");
    }
  };

  return (
    <div>
      <div className="other-data">
        <h4>Year: </h4>
        <p>{data.year}</p>
        <h4>Genres: </h4>
        <p>{getGenres()}</p>
        <h4>Styles: </h4>
        <p>{getStyles()}</p>
        <h4>Tracklist: </h4>
        <ul>
          {data.tracklist.map(track => {
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
};

export default ShowMasterData;
