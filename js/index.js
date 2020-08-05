import { radioPlayer } from './radioPlayer.js';

(function() {
    const radio = radioPlayer();
    const select = document.querySelector('#radioStation');
    const setRadioSource = (select) => {
        const option = select.options[select.selectedIndex];
        const url = option.value;
        radio.setSource(url);
    };

    radio.init();
    setRadioSource(select);

    select.addEventListener('change', (event) => {
        setRadioSource(event.target);
    });
})();
