// Config & State
const TAX_RATE = 0.19;
let products = [];
let cart = [];
let currentUser = null;
let activeProductForModal = null;
let maxCatalogPrice = 3500000;

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const inputSearch = document.getElementById('input-search');
const selectCategory = document.getElementById('select-category');
const rangePrice = document.getElementById('range-price');
const priceValue = document.getElementById('price-value');
const checkInStock = document.getElementById('check-in-stock');
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
const cartSubtotalPrice = document.getElementById('cart-subtotal-price');
const cartTaxPrice = document.getElementById('cart-tax-price');
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

// Helpers
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(amount);
};

const escapeHTML = (str) => {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

function isValidProduct(item) {
  return (
    item &&
    typeof item.id === 'number' &&
    typeof item.nombre === 'string' &&
    typeof item.categoria === 'string' &&
    typeof item.precio === 'number' && item.precio >= 0 &&
    typeof item.stock === 'number' && item.stock >= 0
  );
}

// Initialize
async function init() {
  try {
    const res = await fetch('./data/products.json');
    if (!res.ok) {
      throw new Error(`Error HTTP ${res.status} al cargar el catálogo.`);
    }
    const rawProducts = await res.json();
    products = Array.isArray(rawProducts) ? rawProducts.filter(isValidProduct) : [];
  } catch (err) {
    console.error('Error cargando productos:', err);
    productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 2rem; color: #dc2626;">No se pudo cargar el catálogo de productos. Verifica que estés ejecutando el proyecto desde un servidor local.</p>`;
    resultsCount.textContent = 'Error al cargar artículos';
    setupEventListeners();
    return;
  }

  configurePriceRange();
  populateCategories();
  renderProducts(products);
  setupEventListeners();
}

function configurePriceRange() {
  if (products.length === 0) return;
  const highest = Math.max(...products.map(p => p.precio));
  maxCatalogPrice = Math.ceil(highest / 50000) * 50000;
  rangePrice.max = maxCatalogPrice;
  rangePrice.value = maxCatalogPrice;
  priceValue.textContent = formatCurrency(maxCatalogPrice);
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
  resultsCount.textContent = `Mostrando ${list.length} artículos de ${products.length}`;

  if (list.length === 0) {
    productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; padding: 2rem; color: #64748b;">No se encontraron artículos con los criterios seleccionados.</p>`;
    return;
  }

  list.forEach(p => {
    const outOfStock = p.stock <= 0;
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="card-img-wrapper" data-id="${p.id}">
        <img src="${escapeHTML(p.imagen)}" alt="${escapeHTML(p.nombre)}" loading="lazy">
        <span class="category-tag">${escapeHTML(p.categoria)}</span>
      </div>
      <div class="card-body">
        <h3 class="product-title" data-id="${p.id}">${escapeHTML(p.nombre)}</h3>
        <p class="product-price">${formatCurrency(p.precio)}</p>
        <p class="product-stock ${outOfStock ? 'stock-empty' : ''}">
          ${outOfStock ? 'Agotado' : `Stock disponible: <strong>${p.stock} u.</strong>`}
        </p>
        <div class="card-actions">
          <button class="btn btn-outline btn-block btn-view-detail" data-id="${p.id}">Ver Detalle</button>
          <button class="btn btn-primary btn-quick-add" data-id="${p.id}" ${outOfStock ? 'disabled' : ''}>
            ${outOfStock ? 'Sin stock' : '+ Carrito'}
          </button>
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
  const onlyInStock = checkInStock.checked;

  const filtered = products.filter(p => {
    const matchName = p.nombre.toLowerCase().includes(query) || p.descripcion.toLowerCase().includes(query);
    const matchCat = selectedCat === "" || p.categoria === selectedCat;
    const matchPrice = p.precio <= maxPrice;
    const matchStock = !onlyInStock || p.stock > 0;
    return matchName && matchCat && matchPrice && matchStock;
  });

  renderProducts(filtered);
}

// Product detail modal
function openProductDetail(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  const outOfStock = prod.stock <= 0;
  activeProductForModal = prod;
  modalProductImg.src = prod.imagen;
  modalProductImg.alt = prod.nombre;
  modalProductTitle.textContent = prod.nombre;
  modalProductCat.textContent = prod.categoria;
  modalProductDesc.textContent = prod.descripcion;
  modalProductPrice.textContent = formatCurrency(prod.precio);
  modalProductStock.textContent = outOfStock ? 'Agotado (0 disponibles)' : `${prod.stock} unidades disponibles`;
  modalQuantity.value = outOfStock ? 0 : 1;
  modalQuantity.min = outOfStock ? 0 : 1;
  modalQuantity.max = prod.stock;
  modalQuantity.disabled = outOfStock;
  btnAddToCartModal.disabled = outOfStock;
  btnAddToCartModal.textContent = outOfStock ? 'Sin stock disponible' : 'Añadir al Carrito';

  modalProduct.classList.remove('hidden');
}

function addToCart(product, quantity = 1) {
  const qty = Number(quantity);
  if (!Number.isInteger(qty) || qty < 1) {
    alert('Por favor ingresa una cantidad válida (mínimo 1 unidad entera).');
    return false;
  }

  if (product.stock <= 0) {
    alert('Este producto está agotado.');
    return false;
  }

  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    if (existing.quantity + qty > product.stock) {
      alert(`No puedes agregar más de ${product.stock} unidades disponibles.`);
      return false;
    }
    existing.quantity += qty;
  } else {
    if (qty > product.stock) {
      alert(`No puedes agregar más de ${product.stock} unidades disponibles.`);
      return false;
    }
    cart.push({ ...product, quantity: qty });
  }

  updateCartUI();
  cartSidebar.classList.remove('hidden');
  return true;
}

function calculateCartTotals() {
  let totalQty = 0;
  let subtotal = 0;

  cart.forEach(item => {
    totalQty += item.quantity;
    subtotal += item.precio * item.quantity;
  });

  const tax = Math.round(subtotal * TAX_RATE);
  const total = subtotal + tax;
  return { totalQty, subtotal, tax, total };
}

function updateCartUI() {
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p style="text-align:center; color:#64748b; padding: 1.5rem 0;">Tu carrito está vacío.</p>`;
  }

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div>
        <strong>${escapeHTML(item.nombre)}</strong>
        <p style="font-size:0.8rem; color:#64748b;">${formatCurrency(item.precio)} x ${item.quantity}</p>
      </div>
      <div class="cart-item-actions">
        <button class="btn-qty-cart btn-cart-minus" data-id="${item.id}" aria-label="Disminuir cantidad">-</button>
        <button class="btn-qty-cart btn-cart-plus" data-id="${item.id}" aria-label="Aumentar cantidad">+</button>
        <span style="font-weight:600; margin-left:0.25rem;">${formatCurrency(item.precio * item.quantity)}</span>
        <button class="btn-link btn-remove-item" data-id="${item.id}" aria-label="Eliminar producto">✕</button>
      </div>
    `;
    cartItemsContainer.appendChild(div);
  });

  const { totalQty, subtotal, tax, total } = calculateCartTotals();
  cartCounter.textContent = totalQty;
  cartTotalQty.textContent = totalQty;
  cartSubtotalPrice.textContent = formatCurrency(subtotal);
  cartTaxPrice.textContent = formatCurrency(tax);
  cartTotalPrice.textContent = formatCurrency(total);
}

// Event Listeners
function setupEventListeners() {
  inputSearch.addEventListener('input', applyFilters);
  selectCategory.addEventListener('change', applyFilters);
  checkInStock.addEventListener('change', applyFilters);
  rangePrice.addEventListener('input', (e) => {
    priceValue.textContent = formatCurrency(e.target.value);
    applyFilters();
  });

  btnResetFilters.addEventListener('click', () => {
    inputSearch.value = '';
    selectCategory.value = '';
    checkInStock.checked = false;
    rangePrice.value = maxCatalogPrice;
    priceValue.textContent = formatCurrency(maxCatalogPrice);
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
      const added = addToCart(activeProductForModal, modalQuantity.value);
      if (added) modalProduct.classList.add('hidden');
    }
  });

  // Cart controls
  btnOpenCart.addEventListener('click', () => cartSidebar.classList.remove('hidden'));
  btnCloseCart.addEventListener('click', () => cartSidebar.classList.add('hidden'));

  cartItemsContainer.addEventListener('click', (e) => {
    const id = parseInt(e.target.dataset.id, 10);
    if (Number.isNaN(id)) return;

    if (e.target.classList.contains('btn-remove-item')) {
      cart = cart.filter(item => item.id !== id);
      updateCartUI();
      return;
    }

    const cartItem = cart.find(item => item.id === id);
    const product = products.find(p => p.id === id);
    if (!cartItem || !product) return;

    if (e.target.classList.contains('btn-cart-plus')) {
      if (cartItem.quantity + 1 > product.stock) {
        alert(`No puedes agregar más de ${product.stock} unidades disponibles.`);
        return;
      }
      cartItem.quantity += 1;
      updateCartUI();
    } else if (e.target.classList.contains('btn-cart-minus')) {
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
      } else {
        cart = cart.filter(item => item.id !== id);
      }
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

    cart.forEach(item => {
      const prod = products.find(p => p.id === item.id);
      if (prod) {
        prod.stock = Math.max(0, prod.stock - item.quantity);
      }
    });

    alert(`🎉 ¡Pedido confirmado por valor de ${cartTotalPrice.textContent} para ${currentUser.nombre}! Este pedido cumple los requisitos de la tienda virtual TSP.`);
    cart = [];
    updateCartUI();
    applyFilters();
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
