const search = (ev) => {
    console.log(document.querySelector('input').value);
    let url = 'https://www.apitutor.org/spotify/simple/v1/search?q=' + String(document.querySelector('#search-text').value) + '&type=track';
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
    document.querySelector('#output').innerHTML = "";
    for (item of data) {
      const template = `
        <div class="card">
            <img src="${item.album.image_url}">
            <audio controls>
                <source src="${item.preview_url}">
            </audio>
            <p>Song: ${item.name}</p>
            <p>Album: ${item.album.name}</p>
            <p>Artist: ${item.artist.name}</p>
        </div>
        `;
      document.querySelector('#output').innerHTML += template;
    }
};

document.querySelector('#search').onclick = search;
