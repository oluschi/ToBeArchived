// const form = document.getElementById('answer-form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // prevent form submission

//   const answer = form.elements['answer'].value;

//   // create a new record in Airtable
//   const url = 'https://api.airtable.com/v0/appQTiIEeEkIBSayl/Archive';
//   const data = { fields: { 'Answer': answer } };
//   const config = {
//     headers: {
//       'Authorization': 'keygEINsXOj57TR6b',
//       'Content-Type': 'application/json'
//     }
//   };

//   axios.post(url, data, config)
//     .then(() => {
//       alert('Answer submitted successfully!');
//       form.reset(); // clear form fields
//     })
//     .catch((error) => {
//       console.error(error);
//       alert('Error submitting answer. Please try again later.');
//     });
// });

var dragItems = document.querySelectorAll(".drag-image1", ".drag-image2" , ".drag-image3");
var container = document.getElementById("drag-container1", "drag-container2","drag-container3");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

container.addEventListener("mousedown", dragStart);
container.addEventListener("mouseup", dragEnd);
container.addEventListener("mousemove", drag);

function dragStart(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  for (var i = 0; i < dragItems.length; i++) {
    if (e.target === dragItems[i]) {
      active = true;
    }
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  active = false;
}

function drag(e) {
  if (active) {
    e.preventDefault();

    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    for (var i = 0; i < dragItems.length; i++) {
      setTranslate(currentX, currentY, dragItems[i]);
    }
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}