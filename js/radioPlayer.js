export const radioPlayer = () => {
    const audio = new Audio();
    audio.type = 'audio/acc';

    return {
        init: () => {
            const button = {
                play: document.querySelector('#playButton'),
                stop: document.querySelector('#stopButton')
            };

            button.play.addEventListener('click', () => audio.play());
            button.stop.addEventListener('click', () => audio.pause());
        },
        setSource: (src) => {
            audio.src = src;
        }
    };
};
