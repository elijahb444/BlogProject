//kept getting error: TypeError: Cannot read properties of null (reading 'setAttribute') on lines 13 and 16
//looked online to find that the error may have stemmed from the js file running before the document body was fully loaded
//'DOMContentLoaded' watches for that
document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.querySelector('#toggle-theme');
    const form = document.querySelector('#main');
    let theme = 'light';

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
});
