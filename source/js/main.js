(function() {
  const burgerBtn = document.querySelector('.burger-btn');
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-btn--open');
  });

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
  toggleInfo(modelButtons, 'category__product-btn','category__product-btn--active');

  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop: true,
      items: 1,
      margin: 20,
      nav: true,
      dots: false,
    });
  });
})();
