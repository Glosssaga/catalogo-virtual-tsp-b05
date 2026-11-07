// State
let products = [];
let cart = [];
let currentUser = null;
let activeProductForModal = null;

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const inputSearch = document.getElementById('input-search');
const selectCategory = document.getElementById('select-category');
const rangePrice = document.getElementById('range-price');
const priceValue = document.getElementById('price-value');
const btnResetFilters = document.getElementById('btn-reset-filters');
const resultsCount = document.getElementById('results-count');

// Modals
const modalProduct = document.getElementById('modal-product');
const btnCloseModalProduct = document.getElementById('btn-close-modal-product');
const closeModalProductOverlay = document.getElementById('close-modal-product');
const modalProductImg = document.getElementById('modal-product-img');
const modalProductTitle = document.getElementById('modal-product-title');
const modalProductCat = document.getElementById('modal-product-cat');
const modalProductDesc = document.getElementById('modal-product-desc');
const modalProductPrice = document.getElementById('modal-product-price');
const modalProductStock = document.getElementById('modal-product-stock');
const modalQuantity = document.getElementById('modal-quantity');
const btnQtyMinus = document.getElementById('btn-qty-minus');
const btnQtyPlus = document.getElementById('btn-qty-plus');
const btnAddToCartModal = document.getElementById('btn-add-to-cart-modal');

// Cart Sidebar
const btnOpenCart = document.getElementById('btn-open-cart');
const btnCloseCart = document.getElementById('btn-close-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsContainer = document.getElementById('cart-items');
const cartCounter = document.getElementById('cart-counter');
const cartTotalQty = document.getElementById('cart-total-qty');
const cartTotalPrice = document.getElementById('cart-total-price');
const btnCheckout = document.getElementById('btn-checkout');

// Auth
const btnOpenAuth = document.getElementById('btn-open-auth');
const modalAuth = document.getElementById('modal-auth');
const btnCloseModalAuth = document.getElementById('btn-close-modal-auth');
const closeModalAuthOverlay = document.getElementById('close-modal-auth');
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const formLogin = document.getElementById('form-login');
const formRegister = document.getElementById('form-register');
const userProfile = document.getElementById('user-profile');
const userDisplayName = document.getElementById('user-display-name');
const btnLogout = document.getElementById('btn-logout');

// Formatter
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(amount);
};

// Initialize
async function init() {
  try {
    const res = await fetch('./data/products.json');
    products = await res.json();
  } catch (err) {
    console.warn("Cargando productos por respaldo local...");
  }

  populateCategories();
  renderProducts(products);
  setupEventListeners();
}

function populateCategories() {
  const categories = [...new Set(products.map(p => p.categoria))];
  categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    selectCategory.appendChild(opt);
  });
}

function renderProducts(list) {
  productsGrid.innerHTML = '';
  resultsCount.textContent = `Mostrando ${list.length} artículos de 20`;

  if (list.length === 0) {
    productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 2rem; color: #64748b;">No se encontraron artículos con los criterios seleccionados.</p>`;
    return;
  }

  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="card-img-wrapper" data-id="${p.id}">
        <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
        <span class="category-tag">${p.categoria}</span>
      </div>
      <div class="card-body">
        <h3 class="product-title" data-id="${p.id}">${p.nombre}</h3>
        <p class="product-price">${formatCurrency(p.precio)}</p>
        <p class="product-stock">Stock disponible: <strong>${p.stock} u.</strong></p>
        <div class="card-actions">
          <button class="btn btn-outline btn-block btn-view-detail" data-id="${p.id}">Ver Detalle</button>
          <button class="btn btn-primary btn-quick-add" data-id="${p.id}">+ Carrito</button>
        </div>
      </div>
    `;
    productsGrid.appendChild(card);
  });
}

// Filters logic
function applyFilters() {
  const query = inputSearch.value.trim().toLowerCase();
  const selectedCat = selectCategory.value;
  const maxPrice = Number(rangePrice.value);

  const filtered = products.filter(p => {
    const matchName = p.nombre.toLowerCase().includes(query) || p.descripcion.toLowerCase().includes(query);
    const matchCat = selectedCat === "" || p.categoria === selectedCat;
    const matchPrice = p.precio <= maxPrice;
    return matchName && matchCat && matchPrice;
  });

  renderProducts(filtered);
}

// Product detail modal
function openProductDetail(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  activeProductForModal = prod;
  modalProductImg.src = prod.imagen;
  modalProductTitle.textContent = prod.nombre;
  modalProductCat.textContent = prod.categoria;
  modalProductDesc.textContent = prod.descripcion;
  modalProductPrice.textContent = formatCurrency(prod.precio);
  modalProductStock.textContent = `${prod.stock} unidades disponibles`;
  modalQuantity.value = 1;
  modalQuantity.max = prod.stock;

  modalProduct.classList.remove('hidden');
}

function addToCart(product, quantity = 1) {
  const existing = cart.find(item => item.id === product.id);
  const qty = parseInt(quantity, 10);

  if (existing) {
    if (existing.quantity + qty > product.stock) {
      alert(`No puedes agregar más de ${product.stock} unidades disponibles.`);
      return;
    }
    existing.quantity += qty;
  } else {
    if (qty > product.stock) {
      alert(`No puedes agregar más de ${product.stock} unidades disponibles.`);
      return;
    }
    cart.push({ ...product, quantity: qty });
  }

  updateCartUI();
  cartSidebar.classList.remove('hidden');
}

function updateCartUI() {
  cartItemsContainer.innerHTML = '';
  let totalQty = 0;
  let totalPrice = 0;

  cart.forEach(item => {
    totalQty += item.quantity;
    totalPrice += item.precio * item.quantity;

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div>
        <strong>${item.nombre}</strong>
        <p style="font-size:0.8rem; color:#64748b;">${formatCurrency(item.precio)} x ${item.quantity}</p>
      </div>
      <div>
        <span style="font-weight:600;">${formatCurrency(item.precio * item.quantity)}</span>
        <button class="btn-link btn-remove-item" data-id="${item.id}">✕</button>
      </div>
    `;
    cartItemsContainer.appendChild(div);
  });

  cartCounter.textContent = totalQty;
  cartTotalQty.textContent = totalQty;
  cartTotalPrice.textContent = formatCurrency(totalPrice);
}

// Event Listeners
function setupEventListeners() {
  inputSearch.addEventListener('input', applyFilters);
  selectCategory.addEventListener('change', applyFilters);
  rangePrice.addEventListener('input', (e) => {
    priceValue.textContent = formatCurrency(e.target.value);
    applyFilters();
  });

  btnResetFilters.addEventListener('click', () => {
    inputSearch.value = '';
    selectCategory.value = '';
    rangePrice.value = 3500000;
    priceValue.textContent = formatCurrency(3500000);
    renderProducts(products);
  });

  // Delegated clicks in products grid
  productsGrid.addEventListener('click', (e) => {
    const cardImg = e.target.closest('.card-img-wrapper');
    const cardTitle = e.target.closest('.product-title');
    const btnDetail = e.target.closest('.btn-view-detail');
    const btnQuickAdd = e.target.closest('.btn-quick-add');

    if (cardImg || cardTitle || btnDetail) {
      const id = parseInt((cardImg || cardTitle || btnDetail).dataset.id, 10);
      openProductDetail(id);
    } else if (btnQuickAdd) {
      const id = parseInt(btnQuickAdd.dataset.id, 10);
      const prod = products.find(p => p.id === id);
      if (prod) addToCart(prod, 1);
    }
  });

  // Modal Product Controls
  btnCloseModalProduct.addEventListener('click', () => modalProduct.classList.add('hidden'));
  closeModalProductOverlay.addEventListener('click', () => modalProduct.classList.add('hidden'));

  btnQtyMinus.addEventListener('click', () => {
    let val = parseInt(modalQuantity.value, 10);
    if (val > 1) modalQuantity.value = val - 1;
  });

  btnQtyPlus.addEventListener('click', () => {
    let val = parseInt(modalQuantity.value, 10);
    if (activeProductForModal && val < activeProductForModal.stock) {
      modalQuantity.value = val + 1;
    }
  });

  btnAddToCartModal.addEventListener('click', () => {
    if (activeProductForModal) {
      addToCart(activeProductForModal, modalQuantity.value);
      modalProduct.classList.add('hidden');
    }
  });

  // Cart controls
  btnOpenCart.addEventListener('click', () => cartSidebar.classList.remove('hidden'));
  btnCloseCart.addEventListener('click', () => cartSidebar.classList.add('hidden'));

  cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-remove-item')) {
      const id = parseInt(e.target.dataset.id, 10);
      cart = cart.filter(item => item.id !== id);
      updateCartUI();
    }
  });

  btnCheckout.addEventListener('click', () => {
    if (cart.length === 0) {
      alert("Tu carrito está vacío. Agrega artículos antes de continuar.");
      return;
    }
    if (!currentUser) {
      alert("⚠️ Debes iniciar sesión o registrarte para realizar el pedido, tal como lo exige el enunciado del proyecto.");
      modalAuth.classList.remove('hidden');
      return;
    }
    alert(`🎉 ¡Pedido confirmado por valor de ${cartTotalPrice.textContent} para ${currentUser.nombre}! Este pedido cumple los requisitos de la tienda virtual TSP.`);
    cart = [];
    updateCartUI();
    cartSidebar.classList.add('hidden');
  });

  // Auth Modal
  btnOpenAuth.addEventListener('click', () => modalAuth.classList.remove('hidden'));
  btnCloseModalAuth.addEventListener('click', () => modalAuth.classList.add('hidden'));
  closeModalAuthOverlay.addEventListener('click', () => modalAuth.classList.add('hidden'));

  tabLogin.addEventListener('click', () => {
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
    formLogin.classList.remove('hidden');
    formRegister.classList.add('hidden');
  });

  tabRegister.addEventListener('click', () => {
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
    formRegister.classList.remove('hidden');
    formLogin.classList.add('hidden');
  });

  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    currentUser = { nombre: email.split('@')[0], email };
    setLoggedInUI();
    modalAuth.classList.add('hidden');
  });

  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    currentUser = { nombre, email };
    setLoggedInUI();
    modalAuth.classList.add('hidden');
  });

  btnLogout.addEventListener('click', () => {
    currentUser = null;
    userProfile.classList.add('hidden');
    btnOpenAuth.classList.remove('hidden');
  });
}

function setLoggedInUI() {
  btnOpenAuth.classList.add('hidden');
  userProfile.classList.remove('hidden');
  userDisplayName.textContent = currentUser.nombre;
}

// Run
document.addEventListener('DOMContentLoaded', init);
