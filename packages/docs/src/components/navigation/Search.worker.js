import { Search } from 'js-search';

const search = new Search('id');

let i = 0;
function build(links) {
  links.forEach((link) => {
    if (link.text !== 'API') {
      if (link.items) build(link.items);
      else {
        search.addDocument({
          id: i,
          text: link.text,
          href: link.href,
        });
        i += 1;
      }
    }
  });
}

onmessage = (e) => {
  const [action, data] = e.data;

  if (action === 'search') {
    const res = search.search(data).slice(0, 5);
    postMessage(res);
  } else {
    search.addIndex('text');
    search.addIndex('href');
    build(data);
  }
};
