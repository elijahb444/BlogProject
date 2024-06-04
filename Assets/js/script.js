//kept getting error: TypeError: Cannot read properties of null (reading 'setAttribute') on lines 13 and 16 when trying to set attributes
//looked online to find that the error may have stemmed from the js file running before the document body was fully loaded
//'DOMContentLoaded' watches for that and waits to execute until DOM is properly loaded
document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.querySelector('#toggle-theme');
    const form = document.querySelector('#main');
    let theme = 'light';
    //theme switching
    themeButton.addEventListener('click', function() {
        console.log('hit');
        if (theme === 'light') {
            theme = 'dark';
            form.setAttribute('class', 'dark');
        } else {
            theme = 'light';
            form.setAttribute('class', 'light');
        }
    });

    const blogForm = document.querySelector('#blog-form');
    // checks if blogForm exists on page
    if (blogForm) {
        blogForm.addEventListener('submit', function(event)  {
            event.preventDefault();

            // fetch form data
            const username = document.querySelector('#username').value.trim();
            const title = document.querySelector('#title').value.trim();
            const content = document.querySelector('#content').value.trim();

            if (username === '' || title === '' || content === '') {
                window.alert('Inputs cannot be blank.')
            } else {
                const blogPost = {
                    username: username,
                    title: title,
                    content: content,

                }
                // fetch existsing posts, or initialize array if no posts exist
                let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
                // add newest post to the list
                blogPosts.push(blogPost);
                // updates list in local storage
                localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
                // sends user to posts page after submitting
                window.location.href = 'posts.html'
            }
        })
    }

    const postsContainer = document.querySelector('#posts-container');

    //check if postsContainer is on page
    if (postsContainer) {
        const blogPosts = JSON.parse(localStorage.getItem('blogPosts'))
        //iterate through blogPosts array
        for (let i =0; i < blogPosts.length; i++) {
            const post = blogPosts[i];
            
            // creating blog post elements

            //creates div for post class
            const postEl = document.createElement('div');
            postEl.setAttribute('class', 'post');

            //fetches post title
            const titleEl = document.createElement('h2');
            titleEl.textContent = post.title

            //fetches post author
            const authorEl = document.createElement('h3');
            authorEl.textContent = post.username;

            //fetches post content
            const contentEl = document.createElement('p');
            contentEl.textContent = post.content;


            // appends elements to postEl
            postEl.appendChild(authorEl);
            postEl.appendChild(titleEl);
            postEl.appendChild(contentEl);

            // appends postEl to postsContainer
            postsContainer.appendChild(postEl);

        }
    }



});
