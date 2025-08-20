let comment = false
let liked = false
// Você pode adicionar interações aqui futuramente
document.querySelector(".login-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "feed.html"; // Redireciona após login
});

function LikePost(postOption) {
  if (!liked) {
    postOption.src = "https://img.icons8.com/nolan/64/filled-like.png"
    liked = true
    return
  }
    postOption.src = "https://img.icons8.com/nolan/64/like.png"
    liked = false
}

function CommentPost(postOption){
    if (!comment) {
    postOption.src = "https://img.icons8.com/pulsar-gradient/50/chat-message.png"
    comment = true
    return
  }
    postOption.src = "https://img.icons8.com/pulsar-gradient/50/chat-message.png"
    comment = false
}