document.querySelectorAll('input[name="formtoggle"]').forEach(radio => {
    radio.addEventListener('change', function () {
        document.querySelectorAll('.form-container').forEach(div => div.classList.remove('visible'));
        document.getElementById(this.value).classList.add('visible');
    });
});