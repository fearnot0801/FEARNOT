const header = document.querySelector('.header');
const radios = document.querySelectorAll('input[type="radio"]');
const sidebar = document.querySelector('.sidebar');
let index = 0;

setInterval(() => {
    radios[index].checked = false;
    index = (index + 1) % radios.length;
    radios[index].checked = true;

    const color = radios[index].value;
    header.style.backgroundColor = color;
    sidebar.style.backgroundColor = color;
}, 8000);

radios.forEach((radio) => {
    radio.addEventListener('change', () =>{
        if (radio.checked) {
            header.style.backgroundColor = radio.value;
        }
    })
})