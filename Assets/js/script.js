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
        blogForm.addEventListener('submit', function(event)) {
            event.preventDefault();

            // fetch form data
            const username = document.querySelector('#username').value.trim();
            const title = document.querySelector('#title').value.trim();
            const content = document.querySelector('#content').value.trim();
        }
    }





});
