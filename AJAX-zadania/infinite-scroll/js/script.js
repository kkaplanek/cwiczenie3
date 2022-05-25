

const showPreloader = () => {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'block';
}

const hidePreloader = () => {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
}



const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(response => response.json())
        .then((data) => {

            for (let user of data) {

                let userID = document.createElement('p');
                userID.innerText = `User ID: ${user.id}`;
                document.body.appendChild(userID);
    

                let userName = document.createElement('p');
                userName.innerText = `User Name: ${user.name}`;
                document.body.appendChild(userName);
            

                let userURL = document.createElement('p');
                userURL.innerHTML = `User URL: ${user.website} <br> --------`;
                document.body.appendChild(userURL);
            }

            hidePreloader();

        })
        
}


const scrollToEndOfPage = () => {
    
    let docEl = document.documentElement;

    let scrollHeight = docEl.scrollHeight;

    let scrollTop = docEl.scrollTop;

    let clientHeight = docEl.clientHeight;

    if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
        showPreloader();
        getData();
    }
    
}

window.addEventListener('scroll', scrollToEndOfPage);