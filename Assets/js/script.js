const themeButton = document.getElementById('toggle-theme')
const currentTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', currentTheme)

themeButton.addEventListener('click', function() {
    console.log('hit')
    let theme;
    if (currentTheme === 'light') {
        theme = 'dark';
        document.body.setAttribute('class', 'dark')
    } else {
        theme = 'light';
        document.body.setAttribute('class', 'light')
    }
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
})
