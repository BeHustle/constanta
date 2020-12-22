document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger-btn');
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-btn--open');
  });

  const headerAnimation = document.querySelector('.header__animation-container');
  const ctaAnimation = document.querySelector('.cta__animation-container');

  const showButtons = () => {
    window.setTimeout(() => {
      headerAnimation.classList.add('header__animation-container--visible');
    }, 500);
    window.setTimeout(() => {
      ctaAnimation.classList.add('cta__animation-container--visible');
    }, 1000);
  };

  const models = document.querySelectorAll('.model');
  const topCategoriesButtons = document.querySelectorAll('.categories__button');
  const categoriesButtons = document.querySelectorAll('.category__button');
  const modelButtons = document.querySelectorAll('.category__product-btn');

  const showModel = (model) => {
    const currentModel = document.querySelector(`.model[data-inner="${model}"]`);
    if (currentModel) {
      models.forEach((model) => model.classList.add('d-none'));
      currentModel.classList.remove('d-none');
    }
  };

  const setActive = (dataCategory, className, activeClass) => {
    const nodes = document.querySelectorAll(`.${className}`);
    const activeNode = document.querySelector(`.${className}[data-category="${dataCategory}"]`);
    if (activeNode && nodes) {
      nodes.forEach((node) => node.classList.remove(activeClass));
      activeNode.classList.add(activeClass);
    }
  };

  const toggleInfo = (nodes, classNameToActive, activeClassname) => {
    nodes.forEach((button) => {
      button.addEventListener('click', (evt) => {
        const currentButton = evt.currentTarget;
        showModel(currentButton.dataset.category);
        setActive(currentButton.dataset.category, classNameToActive, activeClassname);
      });
    });
  };

  toggleInfo(topCategoriesButtons, 'categories__button', 'categories__button--active');
  toggleInfo(categoriesButtons, 'category', 'category--active');
  toggleInfo(modelButtons, 'category__product-btn', 'category__product-btn--active');

  $('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    margin: 20,
    nav: true,
    dots: false,
  });

  const elevatorButtons = document.querySelectorAll('.elevator-info__button');
  elevatorButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      const currentData = evt.currentTarget.dataset.item;
      const currentParent = document.querySelector(`.elevator-info__feature-item[data-item="${currentData}"]`);
      if (currentParent) {
        currentParent.classList.add('elevator-info__feature-item--active');
      }
    });
  });

  const modals = document.querySelectorAll('.modal');
  const overlay = document.querySelector('.overlay');
  const imageModal = document.querySelector('.modal--img');
  const modalOpenButtons = document.querySelectorAll('[data-modal]');
  const modalOpenImgButtons = document.querySelectorAll('[data-img]');
  const modalCloseButtons = document.querySelectorAll('.modal__close');

  const hideModals = () => {
    modals.forEach((modal) => modal.classList.add('hidden'));
    overlay.classList.add('hidden');
  };

  modalOpenButtons.forEach((openBtn) => {
    openBtn.addEventListener('click', (evt) => {
      const modalData = evt.currentTarget.dataset.modal;
      const currentModal = document.querySelector(`.modal[data-modal-item="${modalData}"]`);
      if (currentModal) {
        overlay.classList.remove('hidden');
        currentModal.classList.remove('hidden');
      }
    });
  });

  modalOpenImgButtons.forEach((openBtn) => {
    openBtn.addEventListener('click', (evt) => {
      const image = evt.currentTarget.dataset.img;
      console.log(image);
      imageModal.style.background = `url("./img/${image}")`;
      overlay.classList.remove('hidden');
      imageModal.classList.remove('hidden');
    });
  });

  overlay.addEventListener('click', () => {
    hideModals();
  });

  modalCloseButtons.forEach((closeBtn) => {
    closeBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      hideModals();
    });
  });

  hideModals();
  showButtons();
});
