'use strict'

const headerBtn = document.querySelectorAll('.callback__btn',);
headerBtn.forEach(elem => elem.addEventListener('click',showModalWindow));

const crossModalWindow = document.querySelector('.form-header__cross');
crossModalWindow.addEventListener('click',closeModalWindow);

const menuBlock = document.querySelectorAll(".menu-label");
menuBlock.forEach(elem => elem.addEventListener('click',scrollToElement))



/*Functions */

function showModalWindow() {
    document.querySelector('.bg').style.display = 'flex';
    document.querySelector('.form').style.display = 'flex';
}

function closeModalWindow() {
    document.querySelector('.bg').style.display = 'none';
    document.querySelector('.form').style.display = 'none';

}

function scrollToElement() {
    const elem = document.querySelector(`#${this.htmlFor}`);
    elem.scrollIntoView({block:"start",behavior:"smooth"});
}