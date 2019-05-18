const search = (ev) => {
    console.log(document.querySelector('input').value);
    let url = 'https://www.apitutor.org/youtube/simple/?q=' + String(document.querySelector('#search-text').value) + '&type=video';
    fetch(url)
        .then(response => response.json())
        .then(displayResults);
};

const displayResults = (data) => {
  for (item of data) {
    const template = `
      <div class="card">
          <iframe src="${item.embed_url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p>${item.title}</p>
      </div>
      `;
    document.querySelector('#output').innerHTML += template;
  }
};

document.querySelector('#search').onclick = search;
