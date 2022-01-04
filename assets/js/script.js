import { info, menuPricelist } from './bonumData.js';

// change content of alert
const showAlert = () => {
  document.querySelector('.alert span').textContent = info;
};

// create accordion for each food or drink category
const accordion = document.querySelector('.accordion');
menuPricelist.forEach((item, index) => {
  const accordionItem = document.createElement('div');
  accordionItem.classList.add('accordion-item');
  accordionItem.innerHTML = `
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
    data-bs-parent="#accordionFlushExample"
  >
    <div class="accordion-body"></div>
  </div>
`;
  accordion.append(accordionItem);

  // generate accordion item
  const accordionBody = document.querySelectorAll('.accordion-body');
  item.menu.forEach((menuItem) => {
    const menuButton = document.createElement('div');
    menuButton.classList.add('menu-button');
    menuButton.innerHTML = `
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

window.addEventListener('DOMContentLoaded', showAlert);
