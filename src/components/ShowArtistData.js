import React from "react";

class ShowArtistData extends React.Component {
  render() {
    return (
      <div>
        <div className="other-data">
          <h4>Real name: </h4>
          <p>{this.props.data.realname}</p>
          <h4>Profile:</h4>
          <p>{this.props.data.profile}</p>
          <h4>More Information:</h4>
          <ul>
            {this.props.data.urls.map(url => {
              return (
                <li>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ShowArtistData;
