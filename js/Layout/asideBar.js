// 1. Cria o elemento <nav>
const navbar = document.getElementById('navbarAside');

// 2. Define os itens da navbar com seus links e ícones
const navItems = [
    {href: 'feed.html', img: 'https://img.icons8.com/glassmorphism/48/home.png'},
  { href: 'search.html', img: 'https://img.icons8.com/nolan/64/search.png' },
  { href: '#', img: 'https://img.icons8.com/nolan/64/plus.png' },
  { href: 'messages.html', img: 'https://img.icons8.com/nolan/64/messages-mac.png' },
  { href: '#', img: 'https://img.icons8.com/pulsar-gradient/48/person-male.png' }
];

// 3. Cria os elementos <a> e <img> dinamicamente
navItems.forEach(item => {
  const link = document.createElement('a');
  link.href = item.href;

  const img = document.createElement('img');
  img.src = item.img;
  img.alt = '';

  link.appendChild(img);
  navbar.appendChild(link);
});
