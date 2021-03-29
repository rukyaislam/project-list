// Dom selection
// event listner
//basic validation
//creating element
//apppend
const title = document.querySelector('#title');
const link = document.querySelector('#link');
const btn = document.querySelector('.btn');
const time = document.querySelector('#time');
const projectList = document.querySelector('#project-list');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  // Basic Validation
  if (title.value == '' && link.value == '' && time.value == '') {
    alert('Please input your information.');
  } else {
    const newRow = document.createElement('tr');

    // Creating new title
    const newTitle = document.createElement('th');
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // Creating new link
    const newLink = document.createElement('th');
    newLink.innerHTML = link.value;
    newRow.appendChild(newLink);

    // Creating new Year
    const newTime = document.createElement('th');
    newTime.innerHTML = time.value;

    newRow.appendChild(newTime);

    // Displaying in UI
    projectList.appendChild(newRow);
  }
});




 