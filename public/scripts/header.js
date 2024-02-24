const mainMenu = document.getElementById('mainMenu')

document.getElementById('mainBtn').addEventListener('click', function() {
    if (mainMenu.classList.contains('show')) {
        mainMenu.classList.remove('show')
    } else {
        mainMenu.classList.add('show')
    }
})