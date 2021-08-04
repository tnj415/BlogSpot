var addCommentEl = document.querySelector(".add-comment");
var addCommentFormEl = document.querySelector(".comment-form");
var submitBtnEl = document.querySelector(".submitBtn");

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

console.log("Window.Location = ", window.location)
console.log("ID = ", id)

    const response = await fetch(`/blog/${id}`, {
        
        method: 'PUT',
        body: JSON.stringify({
            username,
            content,
            blog_id: id
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

