function showNotifiction(seconds, type, msg) {
    var noti_div = document.createElement('div')
    noti_div.className = 'noti_div'
    if (type === 'debug') {
        noti_div.style.background = 'rgba(113, 234, 255, 0.5)'
    } else if (type === 'info') {
        noti_div.style.background = 'rgba(115, 255, 220, 0.5)'
    } else if (type === 'warning') {
        noti_div.style.background = 'rgba(245, 255, 135, 0.5)'
    } else if (type === 'error') {
        noti_div.style.background = 'rgba(255, 125, 125, 0.5)'
    } else {
        console.log(`error notification type ${type}`)
    }

    noti_div.innerText = msg

    document.body.appendChild(noti_div)
    noti_div.classList.add('active')

    setTimeout(() => {
        document.body.removeChild(noti_div)
        noti_div.classList.remove('active')
    }, seconds * 1000)
}