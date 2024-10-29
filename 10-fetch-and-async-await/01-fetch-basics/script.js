
fetch("./movies.json")
.then((response) => response.json())
.then(data=> console.log(data));


fetch("./test.txt")
.then((response) => response.text())
.then(data=> console.log(data));


fetch("https://api.github.com/users/AndrejaJovanovski")
.then((response) => response.text())
.then(data=> console.log(data));


fetch("https://api.github.com/users/AndrejaJovanovski")
.then((response) => response.json())
.then(data=> {
    console.log(data)
    return data
})
.then(name => console.log(name.login));