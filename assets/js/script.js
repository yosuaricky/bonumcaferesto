import { info, menuPricelist, menuCatering } from './bonumData.js';

// change content of alert
const showAlert = () => {
  document.querySelector('.alert span').textContent = info;
};

// create accordion for each food or drink category
const accordion = document.querySelector('.accordion');
menuPricelist.forEach((item, index) => {
  const accordionItem = document.createElement('div');
  accordionItem.classList.add('accordion-item');
  accordionItem.innerHTML =
    /* HTML */
    `
      <h2 class="accordion-header" id="flush-heading${index}">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#flush-collapse${index}"
          aria-expanded="false"
          aria-controls="flush-collapse${index}"
        >
          ${item.category}
        </button>
      </h2>
      <div
        id="flush-collapse${index}"
        class="accordion-collapse collapse"
        aria-labelledby="flush-heading${index}"
        data-bs-parent="#accordionFlush"
      >
        <div class="accordion-body"><em>*click menu to show details</em></div>
      </div>
    `;
  accordion.append(accordionItem);

  // generate accordion item
  const accordionBody = document.querySelectorAll('.accordion-body');
  item.menu.forEach((menuItem) => {
    const menuButton = document.createElement('div');
    menuButton.classList.add('menu-button');
    menuButton.innerHTML =
      /* HTML */
      `
        <button
          class="btn btn-warning btn-sm"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#modal-1"
        >
          ${menuItem.nama}
        </button>
      `;

    // menuButton handler to show modal
    menuButton.addEventListener('click', () => {
      const modalTitle = document.querySelector('.modal-title');
      const modalImage = document.querySelector('.modal-body img');
      const modalBody = document.querySelector('.modal-body p');
      modalTitle.textContent = menuItem.nama;
      modalImage.src = menuItem.url;
      modalBody.textContent = menuItem.harga;
    });
    accordionBody[index].append(menuButton);
  });
});

const cateringCard = document.querySelector('#cateringCard');
menuCatering.forEach((item) => {
  const cateringItem = document.createElement('div');
  cateringItem.classList.add('col');
  cateringItem.innerHTML =
    /* HTML */
    `
      <div class="card" style="width: 18rem">
        <img src="${item.url}" class="card-img-top" alt="menu catering" />
        <div class="card-body">
          <h5 class="card-title">${item.nama}</h5>
          <p class="card-text">${item.deskripsi}</p>
          <span class="badge bg-warning text-dark">${item.harga}</span>
        </div>
      </div>
    `;

  cateringCard.append(cateringItem);
});

window.addEventListener('DOMContentLoaded', showAlert);
