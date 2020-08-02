export const radioPlayer = {
    init: () => {
        const button = {
            play: document.querySelector('#playButton'),
            stop: document.querySelector('#stopButton')
        };

        const audio = new Audio();
        audio.type = 'audio/acc';
        audio.src = 'http://online.radioroks.ua/RadioROKS';

        button.play.addEventListener('click', () => audio.play());
        button.stop.addEventListener('click', () => audio.pause());
    }
};