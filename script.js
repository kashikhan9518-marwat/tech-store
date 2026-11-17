const products = [
  { id: 1, name: 'Sony WH-1000XM5', category: 'audio', price: 349, oldPrice: 399, rating: 4.9, reviews: 342, badge: 'Sale', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80', desc: 'Industry-leading noise cancellation, premium comfort, and crisp wireless audio built for travel, focus, and everyday listening.' },
  { id: 2, name: 'Apple AirPods Pro 2', category: 'audio', price: 249, oldPrice: 279, rating: 4.8, reviews: 1205, badge: 'New', image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=80', desc: 'Adaptive audio, personalized spatial sound, and a compact design that keeps your routine easy and polished.' },
  { id: 3, name: 'iPhone 15 Pro Max', category: 'phones', price: 1199, oldPrice: 1299, rating: 5.0, reviews: 892, badge: 'Hot', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80', desc: 'Titanium finish, sophisticated camera performance, and the kind of speed that makes every task feel instant.' },
  { id: 4, name: 'Samsung S24 Ultra', category: 'phones', price: 1099, oldPrice: 0, rating: 4.7, reviews: 654, badge: 'New', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=80', desc: 'Ultra-wide lens system, intelligent AI features, and a premium display made for serious productivity and creativity.' },
  { id: 5, name: 'MacBook Pro 14" M3', category: 'laptops', price: 1599, oldPrice: 1799, rating: 4.9, reviews: 478, badge: 'Sale', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80', desc: 'The M3 chip, bright display, and exceptional battery life make it ideal for work, design, and everything in between.' },
  { id: 6, name: 'Dell XPS 13 Plus', category: 'laptops', price: 1299, oldPrice: 0, rating: 4.6, reviews: 289, badge: '', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80', desc: 'An ultra-light premium laptop with a minimal aesthetic and the kind of performance that keeps up with demanding schedules.' },
  { id: 7, name: 'Apple Watch Ultra 2', category: 'watches', price: 799, oldPrice: 849, rating: 4.8, reviews: 512, badge: 'Sale', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80', desc: 'A rugged titanium design with advanced health insights, precision GPS, and custom workouts built for active lifestyles.' },
  { id: 8, name: 'Galaxy Watch 6', category: 'watches', price: 299, oldPrice: 0, rating: 4.7, reviews: 398, badge: 'New', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80', desc: 'Fitness tracking, improved sleep insights, and a sleek profile that looks as refined as it feels on the wrist.' },
  { id: 9, name: 'DualSense Wireless Controller', category: 'gaming', price: 69, oldPrice: 89, rating: 4.9, reviews: 856, badge: 'Sale', image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=900&q=80', desc: 'Adaptive triggers, haptics, and precise ergonomics for a deeper, more immersive console experience.' },
  { id: 10, name: 'Logitech G Pro X', category: 'gaming', price: 129, oldPrice: 0, rating: 4.8, reviews: 623, badge: '', image: 'https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=900&q=80', desc: 'A pro-grade headset tuned for clarity, comfort, and detailed audio performance during long sessions.' },
  { id: 11, name: 'Bose QuietComfort Buds', category: 'audio', price: 199, oldPrice: 279, rating: 4.7, reviews: 445, badge: 'Sale', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=80', desc: 'Quiet comfort in a compact form, with rich sound, all-day fit, and a clean, travel-ready design.' },
  { id: 12, name: 'MX Master 3S', category: 'accessories', price: 99, oldPrice: 0, rating: 4.9, reviews: 1203, badge: '', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900&q=80', desc: 'Quiet scrolling, precise tracking, and an adaptable wireless design for faster work and less friction.' }
];

let cart = JSON.parse(localStorage.getItem('technest-cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('technest-wishlist')) || [];

const productGrid = document.getElementById('productGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartBody = document.getElementById('cartBody');
const cartCount = document.getElementById('cartCount');
const wishlistCount = document.getElementById('wishlistCount');
const cartItemsCount = document.getElementById('cartItemsCount');
const cartTotal = document.getElementById('cartTotal');
const productModal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const toast = document.getElementById('toast');
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
const closeCart = document.getElementById('closeCart');
const continueShopping = document.getElementById('continueShopping');
const closeModal = document.getElementById('closeModal');
const newsletterForm = document.getElementById('newsletterForm');

function formatMoney(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

function saveStorage() {
  localStorage.setItem('technest-cart', JSON.stringify(cart));
  localStorage.setItem('technest-wishlist', JSON.stringify(wishlist));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}

function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('visible');
}

function closeCartDrawer() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('visible');
}

function updateSummary() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  cartCount.textContent = totalItems;
  wishlistCount.textContent = wishlist.length;
  cartItemsCount.textContent = totalItems;
  cartTotal.textContent = formatMoney(totalPrice);
}

function renderCart() {
  if (!cart.length) {
    cartBody.innerHTML = '<div class="empty-cart">Your cart is empty. Add a few premium essentials to get started.</div>';
    updateSummary();
    return;
  }

  cartBody.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <span>${formatMoney(item.price)}</span>
        <div class="qty-box">
          <button type="button" aria-label="Decrease quantity" onclick="updateQuantity(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button type="button" aria-label="Increase quantity" onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
      <div class="cart-item-price">
        <strong>${formatMoney(item.price * item.qty)}</strong>
        <button class="remove-item" type="button" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    </div>
  `).join('');

  updateSummary();
}

function updateQuantity(id, change) {
  const target = cart.find(item => item.id === id);
  if (!target) return;

  target.qty += change;

  if (target.qty <= 0) {
    cart = cart.filter(item => item.id !== id);
  }

  saveStorage();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveStorage();
  renderCart();
  showToast('Item removed from cart');
}

function toggleWishlist(id, event) {
  if (event) event.stopPropagation();

  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(item => item !== id);
    showToast('Removed from wishlist');
  } else {
    wishlist.push(id);
    showToast('Added to wishlist');
  }

  saveStorage();
  renderProducts(document.querySelector('.filter-btn.active')?.dataset.filter || 'all');
  updateSummary();
}

function openModal(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;

  modalBody.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="modal-details">
      <span class="product-category">${product.category}</span>
      <h3>${product.name}</h3>
      <div class="product-rating">
        <span class="stars">${'★'.repeat(Math.floor(product.rating))}</span>
        <span>${product.rating} (${product.reviews} reviews)</span>
      </div>
      <div class="modal-price">
        <span class="price-new">${formatMoney(product.price)}</span>
        ${product.oldPrice ? `<span class="price-old">${formatMoney(product.oldPrice)}</span>` : ''}
      </div>
      <p>${product.desc}</p>
      <div class="modal-actions">
        <button class="btn btn-primary" type="button" onclick="addToCart(${product.id})">
          Add to cart <i class="fa-solid fa-bag-shopping"></i>
        </button>
        <button class="btn btn-secondary" type="button" onclick="toggleWishlist(${product.id}, event)">
          ${wishlist.includes(product.id) ? 'Saved' : 'Wishlist'}
        </button>
      </div>
    </div>
  `;

  productModal.classList.add('visible');
  productModal.setAttribute('aria-hidden', 'false');
}

function closeModalDialog() {
  productModal.classList.remove('visible');
  productModal.setAttribute('aria-hidden', 'true');
}

function addToCart(id, event) {
  if (event) event.stopPropagation();

  const item = products.find(product => product.id === id);
  if (!item) return;

  const existing = cart.find(product => product.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  saveStorage();
  renderCart();
  openCart();
  showToast('Added to cart');
}

function renderProducts(filter = 'all') {
  const filtered = filter === 'all' ? products : products.filter(item => item.category === filter);

  productGrid.innerHTML = filtered.map(product => `
    <div class="product-card">
      <div class="product-image">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <button type="button" class="wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}" aria-label="Toggle wishlist" onclick="toggleWishlist(${product.id}, event)">
          <i class="fa-solid fa-heart"></i>
        </button>
        <img src="${product.image}" alt="${product.name}" onclick="openModal(${product.id})" />
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-name" onclick="openModal(${product.id})">${product.name}</h3>
        <div class="product-rating">
          <span class="stars">${'★'.repeat(Math.floor(product.rating))}</span>
          <span>${product.rating} (${product.reviews})</span>
        </div>
        <div class="product-price">
          <span class="price-new">${formatMoney(product.price)}</span>
          ${product.oldPrice ? `<span class="price-old">${formatMoney(product.oldPrice)}</span>` : ''}
        </div>
        <button class="add-to-cart" type="button" onclick="addToCart(${product.id}, event)">
          <i class="fa-solid fa-bag-shopping"></i> Add to cart
        </button>
      </div>
    </div>
  `).join('');
}

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    renderProducts(button.dataset.filter);
  });
});

document.querySelector('.cart-btn')?.addEventListener('click', openCart);
cartCount.addEventListener('click', openCart);
closeCart.addEventListener('click', closeCartDrawer);
continueShopping.addEventListener('click', closeCartDrawer);
cartOverlay.addEventListener('click', closeCartDrawer);
closeModal.addEventListener('click', closeModalDialog);
productModal.addEventListener('click', event => {
  if (event.target === productModal) closeModalDialog();
});

menuBtn.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

newsletterForm.addEventListener('submit', event => {
  event.preventDefault();
  const input = newsletterForm.querySelector('input');
  const value = input.value.trim();

  if (!value) {
    showToast('Please enter a valid email');
    return;
  }

  input.value = '';
  showToast('Thanks for subscribing!');
});

renderProducts();
renderCart();
updateSummary();
