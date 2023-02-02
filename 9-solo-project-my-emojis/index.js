// Render the updated myEmojis array in the mini-browser.

// One solution: wrap the code for rendering the emojis in a function and make sure it
// clears away old version of the array before it renders the updated one

const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")

function renderEmojis() {
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        emojiContainer.innerHTML = ""
        renderEmojis()
    }
})