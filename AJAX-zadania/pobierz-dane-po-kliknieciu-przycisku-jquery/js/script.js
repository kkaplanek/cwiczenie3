$(document).ready(function() {

    $('button').click(function() {

        // Pierwsza wersja z metodą $.get()
        $.get('https://akademia108.pl/api/ajax/get-post.php', function(data) {

            let userID = (`<p>User ID: ${data.userId}</p>`);
            $('div').append(userID);

            let id = (`<p>Post ID: ${data.id}</p>`);
            $('div').append(id);

            let title = (`<p>Title: ${data.title}</p>`);
            $('div').append(title);

            let postBody = (`<p>Title: ${data.body}</p>`);
            $('div').append(postBody);

            let hr = (`<hr>`);
            $('div').append(hr);

        });

        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data) {
                let userID = (`<p>User ID: ${data.userId}</p>`);
                $('div').append(userID);

                let id = (`<p>Post ID: ${data.id}</p>`);
                $('div').append(id);

                let title = (`<p>Title: ${data.title}</p>`);
                $('div').append(title);

                let postBody = (`<p>Title: ${data.body}</p>`);
                $('div').append(postBody);

                let hr = (`<hr>`);
                $('div').append(hr);         
            })

    })
})