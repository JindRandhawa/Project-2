//creating an array consisting of all contacts
let contactsArray = Array.from(document.querySelectorAll('.contact-item'));
console.log(contactsArray);

//calculating number of pages needed
let numberOfPages = Math.ceil(contactsArray.length / 10);
console.log(numberOfPages);

//creating required number of buttons in pagination part of html
let pageLinks = document.querySelector('.pagination');
console.log(pageLinks);
for (let i = 1; i <= numberOfPages; i++) {
    pageLinks.innerHTML += '<li><a>' + i + '</a></li>';
}

//storing these buttons in an array
let buttons = Array.from(document.querySelectorAll("a"));




//selecting the whole contactlist and setting it empty
let pageList = document.querySelector(".contact-list");
pageList.innerHTML = "";

//displaying only 10 maximum contacts on first page while also checking whether there are more than 10 contacts or no
if ((contactsArray.length) >= 10) {
    for (let a = 0; a <= 9; a++) {
        pageList.innerHTML += '<li class="contact-item cf">' + contactsArray[a].innerHTML + '</li>';
    }
}

else {
    for (let b = 0; b < (contactsArray.length); b++) {
        pageList.innerHTML += '<li class="contact-item cf">' + contactsArray[b].innerHTML + '</li>';
    }
}


//displaying 10 contacts each as an result of an event fired by clicking of button
buttons.map(buttons => buttons.addEventListener("click", function () {
    let pageNumber = this.innerHTML
    console.log(pageNumber);

    //displaying 10 contacts on each but last page
    if (pageNumber < numberOfPages) {
        pageList.innerHTML = "";
        let rangeTop = (pageNumber * 10) - 1;
        let rangeBottom = ((pageNumber - 1) * 10)
        for (let a = rangeBottom; a <= rangeTop; a++) {
            pageList.innerHTML += '<li class="contact-item cf">' + contactsArray[a].innerHTML + '</li>';
        }
    }

    //displaying remaining less than 10 or equal to 10 contacts on last page
    else {
        pageList.innerHTML = "";
        let remainder = (contactsArray.length) % 10;
        let newrangeBottom = (contactsArray.length) - remainder;
        for (let j = newrangeBottom; j < (contactsArray.length); j++) {
            pageList.innerHTML += '<li class="contact-item cf">' + contactsArray[j].innerHTML + '</li>';
        }
    }
}))
