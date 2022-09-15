const items = document.querySelectorAll('img');
const itemsCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

function rollNextItem() {
    items[count].classList.remove('active');
    if (count < itemsCount - 1) {
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active');

}

function rollPreviousItem() {
    items[count].classList.remove('active');
    if (count > 0) {
        count--;
    } else {
        count = itemsCount - 1;
    }

    items[count].classList.add('active');

}


function pressKey(e) {
    e = e || window.event;

    if (e.keyCode == '37') {
        rollPreviousItem();
    } else if (e.keyCode == '39') {
        rollNextItem();
    }

    if (e.deltaY < 0) {
        rollPreviousItem();
    }
    else if (e.deltaY > 0) {
        rollNextItem();
    }
}




nextItem.addEventListener('click', rollNextItem);
previousItem.addEventListener('click', rollPreviousItem);

document.addEventListener('keydown', pressKey)
document.addEventListener('wheel', pressKey)


