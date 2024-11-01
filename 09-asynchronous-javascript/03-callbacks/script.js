// function toggle(e) {
//   console.log('callback ran');
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);


const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];


// function getPosts () {
//    setTimeout(() => {posts.forEach((post) =>{
//             console.log(post);
//          })
// }, 2000)
// }


function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 3000);
}


function getPosts() {
  setTimeout(
    () => {
      posts.forEach((post) => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
        document.querySelector('#posts').appendChild(div)
      });
    }, 1000


  )
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
