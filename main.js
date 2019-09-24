
let elements = document.querySelectorAll('button');

for (const element of elements) {
element.addEventListener('click', function pop(e) {
    console.log("pop");
    element.classList.add('animated', 'bounce');
}
);
}