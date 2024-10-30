function createPost({title, body}) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify( {
            title,
            body
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json())
        .then((data) => console.log(data))
}

createPost({title: 'My post', body: 'This is my post'})