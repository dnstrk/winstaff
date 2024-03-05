//маркировка input при незаполненном phone
export function phoneValidationMarker(id, phone) {
    const inpPhone = document.getElementById(`${id}`);
    if (phone.length < 18) {
        inpPhone.style.borderColor = "red";
    } else {
        inpPhone.style.borderColor = "green";
    }
}

//маркировка input при незаполненном email
export function emailValidationMarker(id, email) {
    const inpEmail = document.getElementById(`${id}`);
    const EMAIL_REGEXP =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
    }

    if (isEmailValid(email)) {
        inpEmail.style.borderColor = "green";
    } else {
        inpEmail.style.borderColor = "red";
    }
}

//влидация города на заполненность и маркировка
export function townValidationMarker(id, town) {
    const inpTown = document.getElementById(`${id}`);

    if (town.length == 0) {
        inpTown.style.borderColor = "red";
    } else {
        inpTown.style.borderColor = "green";
    }
}

//проверка на не 0 и заполненность в countBanner и маркировка
export function countValidationMarker(id, count) {
    const inpCount = document.getElementById(`${id}`);

    if (count.length == 0 || Number(count) == 0) {
        inpCount.style.borderColor = "red";
    } else {
        inpCount.style.borderColor = "green";
    }
}

export function scrollDisable(request, town, mess) {
    const body = document.querySelector("body");
    if (request || town || mess) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "";
    }
}
