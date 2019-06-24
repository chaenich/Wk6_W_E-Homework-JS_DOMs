document.addEventListener('DOMContentLoaded', () => {
  const newRoomForm = document.querySelector('#new-room-form');
  newRoomForm.addEventListener('submit', handleNewRoomFormSubmit);

  const deleteAllBtn = document.querySelector('#delete-all');
  deleteAllBtn.addEventListener('click', handleDeleteAllClick)
})

const handleNewRoomFormSubmit = function (evt) {

  evt.preventDefault();

  const form = evt.target;

  const roomListRoom = document.createElement('li');
  roomListRoom.classList.add('room-list-room');

  const name = document.createElement('h3');
  name.textContent = form.name.value;
  roomListRoom.appendChild(name);

  const description = document.createElement('p');
  description.textContent = form.description.value;
  roomListRoom.appendChild(description);

  const colour = document.createElement('p');
  colour.textContent = form.colour.value;
  roomListRoom.appendChild(colour);

  const bestFor = document.createElement ('p');
  bestFor.textContent = form.bestFor.value
  roomListRoom.appendChild(bestFor);

  const roomList = document.querySelector('#room-list');
  roomList.appendChild(roomListRoom);

  form.reset();
}

const handleDeleteAllClick = function () {
  const roomList = document.querySelector('#room-list');
  roomList.innerHTML = " ";
}
