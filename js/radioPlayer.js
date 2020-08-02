export const radioPlayer = {
    init: () => {
        const audio = new Audio();
        audio.type = 'audio/acc';
        audio.src = 'http://online.radioroks.ua/RadioROKS';
        audio.play();
    }
};