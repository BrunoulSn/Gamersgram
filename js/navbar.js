let navbar = document.createElement("nav")
navbar.classList.add("bottom-nav")
let a = document.createElement("a")
for (let i = 0; i < 5; i++)
    switch (i) {
        case 1:
            a.href = "feed.html"
            navbar.appendChild(a)
        case 2:
            a.href = "search.html"
            navbar.appendChild(a)
        case 3:
            a.href = "#"
            navbar.appendChild(a)
        case 4:
            a.href = "messages.html"
            navbar.appendChild(a)
        case 5:
            a.href = "#"
            navbar.appendChild(a)

    }

<nav class="bottom-nav">
    <a href="feed.html">🏠</a>
    <a href="search.html">🔍</a>
    <a href="#">➕</a>
    <a href="messages.html">💬</a>
    <a href="#">👤</a>
</nav>