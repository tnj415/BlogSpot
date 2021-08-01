async function addCommentHandler(event) {
    event.preventDefault();
    const username = document.querySelector('').value;
    const content = document.querySelector('').value;
    
    const id = window.location.toString().split('/').pop();

    const response = await fetch(`/api.blog/${id}`, {
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
        document.location.replace(`/blog/${id}`);
        //document.location.reload()
    }
    else alert('Failed to add comment')
}

document.querySelector('').addEventListener('submit', addCommentHandler);