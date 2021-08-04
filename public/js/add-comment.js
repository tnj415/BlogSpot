var addCommentEl = document.querySelector(".add-comment");
var addCommentFormEl = document.querySelector(".comment-form");
var submitBtnEl = document.querySelector(".butmitBtn");

addCommentEl.addEventListener("click", () => {
    addCommentFormEl.classList.toggle("show")
    addCommentFormEl.classList.toggle("hide")
})

submitBtnEl.addEventListener("submit", addComment)

async function addComment(event) {
    event.preventDefault();
    const username = document.querySelector('username').value;
    const content = document.querySelector('comment-field').value;
    
    const id = window.location.toString().split('/').pop();

    const response = await fetch(`/blog/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            username,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        addCommentFormEl.classList.add("hide")
        addCommentFormEl.classList.remove("show")
        document.location.replace(`/blog/${id}`);
        //document.location.reload()
    }
    else alert('Failed to add comment')
}

