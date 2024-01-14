let drumButtons = document.querySelectorAll('.drum');

for(let i = 0; i < drumButtons.length; i++){
    drumButtons[i].addEventListener('click', function(){
        
        let button = this.innerHTML;
        switch(button){
            case 'w':
                let tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case 'a':
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case 's':
                let tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case 'd':
                let tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case 'j':
                let snare = new Audio('sounds/crash.mp3');
                snare.play();
                break;
            case 'k':
                let kickBass = new Audio('sounds/snare.mp3');
                kickBass.play();
                break;
            case 'l':
                let crash = new Audio('sounds/kick-bass.mp3');
                crash.play();
                break;
            default:
                alert('Invalid input');
        }
        
    })
}