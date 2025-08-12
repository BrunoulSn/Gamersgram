// Você pode adicionar interações aqui futuramente
document.querySelector(".login-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "feed.html"; // Redireciona após login
});
