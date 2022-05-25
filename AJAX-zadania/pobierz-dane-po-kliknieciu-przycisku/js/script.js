

const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(response => response.json())
        .then((data) => {

        let userID = document.createElement('p');
        userID.innerText = `User ID: ${data.userId}`;
        document.body.appendChild(userID);

        let id = document.createElement('p');
        id.innerText = `Post ID: ${data.id}`;
        document.body.appendChild(id);

        let title = document.createElement('p');
        title.innerText = `Title: ${data.title}`;
        document.body.appendChild(title);

        let bodyTxt = document.createElement('p');
        bodyTxt.innerText = `Body: ${data.body}`;
        document.body.appendChild(bodyTxt);

    })
};

document.querySelector('button').addEventListener('click', getData);




