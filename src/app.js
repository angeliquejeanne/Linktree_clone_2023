const shareButtons = document.querySelectorAll('.tile_share_button')

async function copyText(e) {
    //prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))