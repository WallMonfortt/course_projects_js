let buttonsArr = document.querySelectorAll(".drum")

for (let index = 0; index < buttonsArr.length; index++) {
    const element = buttonsArr[index];
    element.addEventListener('click', function(){
        let btn = this.innerHTML
        makeSound(btn)
        buttonAnimation(btn)
    })
};

document.addEventListener("keydown", (event) => {
    console.log(event.key)
    makeSound(event.key)
    buttonAnimation(event.key)
});

function makeSound(key) {
    let audioName = "tom-1"

    switch (key) {
        case 'a':
            console.log('switch working')
            audioName = 'tom-2'
            break;
        case 's':
            console.log('switch working')
            audioName = 'tom-3'
            break;
        case 'd':
            console.log('switch working')
            audioName = 'tom-4'
            break;
        case 'j':
            console.log('switch working')
            audioName = 'snare'
            break;
        case 'k':
            console.log('switch working')
            audioName = 'crash'
            break;
    
        case 'l':
            console.log('switch working')
            audioName = 'kick-bass'
            break;
    
        default:
            break;
    }

    var audio = new Audio(`./sounds/${audioName}.mp3`);
    audio.play();
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector(`.${currentKey}`)

    activeButton.classList.add("pressed")
    activeButton.disabled = true
    setTimeout(() => {
        activeButton.classList.remove('pressed');
        activeButton.disabled = false
      }, 1000);

}