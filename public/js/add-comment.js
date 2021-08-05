var addCommentEl = document.querySelector(".add-comment");
var addCommentFormEl = document.querySelector(".comment-form");
var submitBtnEl = document.querySelector(".submitBtn");
var commentCardEl = document.querySelector(".comment-card");

commentCardEl.addEventListener("click", async (e) => {
    if (e.target.matches(".delete")) {
        const id = e.target.id
        const response = await fetch(`/api/comment/${id}`, {

            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }


        })

          if (response.ok) {
              window.location.reload()
          }

    }

})

addCommentEl.addEventListener("click", () => {
    addCommentFormEl.classList.toggle("show")
    addCommentFormEl.classList.toggle("hide")
})

addCommentFormEl.addEventListener("submit", async (event) => {
    event.preventDefault();

    const content = document.querySelector('.comment-field').value;
    
    const id = window.location.toString().split('/').pop();

    const response = await fetch(`/api/comment`, {
        
        method: 'POST',
        body: JSON.stringify({
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
})


