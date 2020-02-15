import React from "react";

class AlbumsContainer extends React.Component {
  render() {
    const token = "zmGFKJxGYTBPVcnfsJcHazoebOnyRkwHCZXJnunQ";
    const artist = "queen";

    fetch(
      `https://api.discogs.com/database/search?q={year>2010}&artist=${artist}&per_page=30&page=1&token=${token}`
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        myJson.results.map(register => console.log(register));
      });

    return (
      <div>
        <h1>Here will be the album's covers</h1>
      </div>
    );
  }
}

export default AlbumsContainer;
