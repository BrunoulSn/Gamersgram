let comment = false
let liked = false

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
    postOption.src = "https://img.icons8.com/pulsar-line/48/chat-message.png"
    comment = true
    return
  }
    postOption.src = "https://img.icons8.com/pulsar-gradient/50/chat-message.png"
    comment = false
}

function ReadMore(postDescription){
    /*if(postDescription)
    postDescription.classlist.add("No-visible")*/
}