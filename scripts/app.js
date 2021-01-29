let bar = document.querySelector('.bar-container');
let bar1 = document.querySelector('.bar-1');
let bar2 = document.querySelector('.bar-2');
let bar3 = document.querySelector('.bar-3');
let learnMoreLink = document.querySelector('.learn-more-link')
let educationLink = document.querySelector('.education-link')
let technologyLink = document.querySelector('.technology-link')
let button = document.getElementById('do-it');
let dropdownMenu = document.querySelector('.dropdown-menu');
let dropdownContent = document.querySelectorAll('.dropdown-content');
let barClick = 0;
bar.addEventListener('click', showMenu);
learnMoreLink.addEventListener('click', showAbout);
educationLink.addEventListener('click', showEducation);
technologyLink.addEventListener('click', showTechnology);
function addHiddenClass() {
dropdownMenu.classList.add('hidden');
// for (let i = 0; i < dropdownContent.length; i++) {
// dropdownContent[i].classList.add('hidden');  
// }
}
function removeHiddenClass() {
dropdownMenu.classList.remove('hidden');
// for (let i = 0; i < dropdownContent.length; i++) {
// dropdownContent[i].classList.remove('hidden');  
// }
}
bar.addEventListener('mousedown', shakeBar);
bar.addEventListener('mouseout', steadyBar);
bar.addEventListener('mouseover', steadyBar);

bar.addEventListener('mouseup', steadyBar);
function steadyBar() {
if (barClick === 1) {
bar1.classList.remove('shake');
bar2.classList.remove('shake');
bar3.classList.remove('shake');
barClick = 0;
} 
// bar.removeEventListener('mousedown', shakeBar);

}
function shakeBar() {
bar1.classList.add('shake');
bar2.classList.add('shake');
bar3.classList.add('shake');
barClick = 1;

// bar.removeEventListener('mousedown', shakeBar);
}
function myFunction(x) {
if (x.matches) {
    addHiddenClass();
    console.log('hidden class added');
} else {
    removeHiddenClass();
    console.log('hidden class removed');
}
}
let x = window.matchMedia('(max-width: 500px)');
myFunction(x);
x.addListener(myFunction);
function showTechnology(){
hideMenu();
}
function showEducation(){
hideMenu();
}
function showAbout(){
hideMenu();
}

function showMenu(){
bar.classList.add('change');
dropdownMenu.classList.add('expand');
for (let i = 0; i < dropdownContent.length; i++) {
dropdownContent[i].classList.add('animated');
}
bar.removeEventListener('click', showMenu);
bar.addEventListener('click', hideMenu);
}
function hideMenu() {
bar.classList.remove('change');
dropdownMenu.classList.remove('expand');
for (let i = 0; i < dropdownContent.length; i++) {
dropdownContent[i].classList.remove('animated');
}
bar.removeEventListener('click', hideMenu);
bar.addEventListener('click', showMenu);
}
