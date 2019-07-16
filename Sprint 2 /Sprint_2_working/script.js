console.log('hello');

let userNameForm = document.querySelector('.user-comment__info-holder');
let userCommentForm = document.querySelector('.user-comment__info');

function writeName (userNameInput) {

    let newName = document.createElement('div');
    newName.className = '.user-comment__name';
    newName.innerHTML = `${userNameInput}`;
    userNameForm.appendChild(newName);

}

function writeComment (userCommentInput) {
    let newComment = document.createElement('p');
    newComment.className = '.user-comment__submission';
    newComment.innerHTML = `${userCommentInput}`;
    userCommentForm.appendChild(newComment);
}

// let userName = document.querySelector('.firstName');



let submitButton = document.querySelector('.comments-section');
    submitButton.addEventListener('submit', displayName);

function displayName(event) {
    event.preventDefault();

    let userName = event.target.firstname.value;
    let userComment = event.target.subject.value;
    console.log(userComment);

    writeName(userName);
    writeComment(userComment);
}

// let nameList = document.querySelector('.form');
//     nameList.addEventListener('submit', displayName);

// function displayName(event) {
//     event.preventDefault();

//     let userName = event.target.user.value;

//     postName(userName)
// }

