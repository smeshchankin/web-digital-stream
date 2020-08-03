import { radioPlayer } from './radioPlayer.js';

(function() {
    const radio = radioPlayer();
    radio.init();
    radio.setSource('http://online.radioroks.ua/RadioROKS');
})();
