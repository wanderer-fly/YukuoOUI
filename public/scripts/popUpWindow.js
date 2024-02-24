function createWindow(title, url, w_width, w_height) {
    var window = document.createElement('div')
    window.id = title
    window.className = "window"
    window.style.width = w_height
    window.style.height = w_height

    var titleBar = document.createElement('div')
    titleBar.className = "titleBar"
    titleBar.innerHTML = title
    window.appendChild(titleBar)

    var closeButton = document.createElement('button')
    closeButton.innerHTML = 'X'
    closeButton.className = 'closeButton'
    titleBar.appendChild(closeButton)

    closeButton.addEventListener('click', function() {
        document.body.removeChild(window)
    })

    var isDragging = false
    var offsetX, offsetY

    titleBar.addEventListener('mousedown', function(e) {
        isDragging = true
        offsetX = e.clientX - window.offsetLeft
        offsetY = e.clientY - window.offsetTop
    })

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            var newX = e.clientX - offsetX
            var newY = e.clientY - offsetY
            window.style.left = newX + 'px'
            window.style.top = newY + 'px'
        }
    })

    document.addEventListener('mouseup', function() {
        isDragging = false
    })

    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            var ejsContent = xhr.responseText
            var contentDiv = document.createElement('div')
            contentDiv.innerHTML = ejsContent
            window.appendChild(contentDiv)
        }
    }
    xhr.send()
    
    document.body.appendChild(window)
}