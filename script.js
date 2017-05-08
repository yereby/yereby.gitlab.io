// Ajoute un permalien après un élément du DOM fourni

function makeLink(el) {
  var link = '<svg class="picto" aria-hidden="true" aria-labelledby="title" aria-describedby="desc" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16">' +
    '<title>Permalien</title>' +
    '<desc>Lien qui référence ce paragraphe en particulier.</desc>' +
    '<path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path>' +
  '</svg>';

  var newLink = document.createElement('a');
  newLink.className = 'permalink';
  newLink.href = '#' + el.id;

  newLink.innerHTML = link;
  if (typeof el.id !== 'undefined' && el.id !== '') {
    el.appendChild(newLink);
  }
};

// Parcourt le tableau fourni pour prendre les éléments du DOM
// correspondants, puis leur ajouter un permalien

function permalink(headers) {
  headers.forEach(function (header) {
    var titles = document.getElementsByTagName(header);

    Array.prototype.forEach.call(titles, function (title) {
      makeLink(title);
    });
  });
};

// Crée les permaliens dans le DOM

permalink(['h2', 'h3', 'h4']);

