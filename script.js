document.addEventListener('DOMContentLoaded', function() {
document.getElementById('comment-submit').addEventListener('click', function() {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.ariaValueMax.trim();

    if (commentText !== '') {
        const commentList = document.getElementById('comments-list');
        const newComment = document.createElement('li');
        newComment.textContent = commentText;

        commentList.appendChild(newComment);
        commentInput.value = ' ';
    } else {
        alert('Please enter a comment!');
    }
});
});