function memberHTML(i) {
    return /*HTML*/` 
    <button id="member-box${i}" onclick="showMemberInfo(${i})" class="member-box">
    <div id="shortcut-name${i}" class="shortcut-name">AM</div>
                <div class="shortcut-name-email-container">
                    <div class="fontsice-21 overflow-hidden">${contact[i]['name']}</div>
                    <div class="email overflow-hidden">${contact[i]['email']}</div>
                </div>
                </button>
                `;
}


function abcHTML(letter) {
    return /*HTML*/`
    <button onclick="newConatct()" class="new-contact-responsiv">
                <span>New contact</span>
                <img src="../img/new-contact-icon.png">
            </button>
    <div class="member-container" id="member-container${letter}">
    <div id="abc${letter}" class="abc"><b>${letter}</b></div>
            </div>
            `;
}


function addFirstLetters(letters) {
    return /*HTML*/ `${letters}`
}


function memberInfoHtml(i, letters) {
    return /*HTML*/`
    <div class="member">
                    <div id="shortcut-name-info${i}" class="shortcut-name-info">${letters}</div>
                    <div>
                        <div class="name-info">${contact[i]['name']}</div>
                        <a href="add_task.html" class="email"><img class="plus" src="../img/blue-plus.png">Add Task</a>
                    </div>
                </div>

                <div class="contact-info-edit">
                    <div class="fontsice-21">Contact Information</div>
                    <div onclick="editContact(${i})" class="edit-contact-pencil"><img src="../img/pencil.png"> Contact</div>
                </div>
                <div onclick="editContact(${i})" class="edit-contact-icon"><img class="edit-contact-icon-img" src="../img/edit-icon.png"></div>
                <div>
                    <b>Email</b>
                    <div class="email">${contact[i]['email']}</div>
                </div>
                <div>
                    <b>Phone</b>
                    <div>+${contact[i]['phone']}</div>
                </div>

                <button onclick="newConatct()" class="new-contact">
                    <span>New contact</span>
                    <img src="../img/new-contact-icon.png">
                </button>
                `;
}


function editContactHTML(i, letters) {
    return /*HTML*/`
    <div class="cancel-button-responsiv"><img onclick="closeEdit(${i})" class="close-withe"
                    src="../img/plus-icon.png  "></div>
    <div class="edit-contact-left">
    <img class="logo" src="../img/logo.png">
    <div class="header-edit-contact">Edit contact</div>
    <div class="blue-border"></div>
</div>
<div class="edit-contact-right">
    <div>
        <div id="member-firstLetter-container${i}" class="member-firstLetter-container">
        ${letters}
        </div>
    </div>
    <form onsubmit="save(${i}); return false;" class="edit-contact-input">
        <input id="name${i}" required class="inputs-name" type="text" value="${contact[i]['name']}">
        <input id="email${i}" required class="inputs-email" type="email" value="${contact[i]['email']}">
        <input id="phone${i}" required class="inputs-phone" type="number" value="${contact[i]['phone']}">
        <div class="button-box">
            <div onclick="closeEdit(${i})" class="cancel-button">Cancel<img src="../img/close-icon.png"></div>
            <button class="creat-button">Save<img src="../img/checkmark.png"></button>
        </div>
    </form>
    <button onclick="deleteContact(${i})" class="delete-contact">Delete Contact</button>
</div>
`;
}


function memberInfoClear() {
    document.getElementById('member-info').innerHTML = ``;
    document.getElementById('member-info').innerHTML = /*HTML*/`
    <button onclick="newConatct()" class="new-contact">
    <span>New contact</span>
    <img src="../img/new-contact-icon.png">
</button>`;
}