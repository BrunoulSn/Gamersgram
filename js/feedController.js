let comment = false
let liked = false
let isExpand = false

function LikePost(postOption) {
  if (!liked) {
    postOption.src = "https://img.icons8.com/nolan/64/filled-like.png"
    liked = true
    return
  }
  postOption.src = "https://img.icons8.com/nolan/64/like.png"
  liked = false
}

function CommentPost(postOption) {
  let commentAccountMessage = postOption.closest(".post-card")
  if (!comment) {
    postOption.src = "https://img.icons8.com/pulsar-line/48/chat-message.png"
    comment = true
    commentAccountMessage.classList.add("post-card-comment-hide")
    return
  }
  postOption.src = "https://img.icons8.com/pulsar-gradient/50/chat-message.png"
  commentAccountMessage.classList.remove("post-card-comment-hide")
  comment = false
}

function ReadMore(button) {
  if (button) {
    const parentDiv = button.closest('.post-description-div');
  console.log(parentDiv); // Verifique se está retornando algo
    if (parentDiv) {
      const isExpand = parentDiv.classList.contains('post-description-div-expand');
      if (!isExpand) {
        parentDiv.classList.add('post-description-div-expand');
        button.textContent = "Ler menos"
        return
      } 
        parentDiv.classList.remove('post-description-div-expand');
        button.textContent = "Ler mais"

    }
  }
}
