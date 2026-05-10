// Language System
let currentLanguage = 'uz';

const translations = {
  uz: {
    'Bosh sahifa': 'Bosh sahifa',
    'Ayollar': 'Ayollar',
    'Erkaklar': 'Erkaklar',
    'Brendlar': 'Brendlar',
    'Aksesuarlar': 'Aksesuarlar',
    'Sevimlilар': 'Sevimlilар',
    'Do\'konlar': 'Do\'konlar',
    'Dunyoning Eng Yaxshi Ko\'zoynaklari': 'Dunyoning Eng Yaxshi Ko\'zoynaklari',
    'Sizning stilingiz, sizning identitetingiz': 'Sizning stilingiz, sizning identitetingiz',
    'Xaridni Boshlash': 'Xaridni Boshlash',
    'Barcha Ko\'zoynaklari': 'Barcha Ko\'zoynaklari',
    'Rang:': 'Rang:',
    'Barcha Ranglar': 'Barcha Ranglar',
    'Qora': 'Qora',
    'Qizil': 'Qizil',
    'Koʻk': 'Koʻk',
    'Kumush': 'Kumush',
    'Jigarrang': 'Jigarrang',
    'Brend:': 'Brend:',
    'Barcha Brendlar': 'Barcha Brendlar',
    'Tur:': 'Tur:',
    'Barcha Turlar': 'Barcha Turlar',
    'Quyosh Ko\'zoynaklari': 'Quyosh Ko\'zoynaklari',
    'Retseptli': 'Retseptli',
    'Sport': 'Sport',
    'Ayollar Ko\'zoynaklari': 'Ayollar Ko\'zoynaklari',
    'Erkaklar Ko\'zoynaklari': 'Erkaklar Ko\'zoynaklari',
    'Ko\'zoynak Aksesuarlari': 'Ko\'zoynak Aksesuarlari',
    'Bizning Do\'konlar': 'Bizning Do\'konlar',
    'Savat': 'Savat',
    'Ro\'yxatdan O\'tish': 'Ro\'yxatdan O\'tish',
    'Email:': 'Email:',
    'Telefon Raqami:': 'Telefon Raqami:',
    'Parol:': 'Parol:',
    'Brend:': 'Brend:',
    'Narxi:': 'Narxi:',
    'Material:': 'Material:',
    'O\'lchami:': 'O\'lchami:',
    'Rang Tanlang:': 'Rang Tanlang:',
    'Miqdori:': 'Miqdori:',
    'Savatga Qo\'shish': 'Savatga Qo\'shish',
    'Havolalar': 'Havolalar',
    'Ijtimoiy Tarmoqlar': 'Ijtimoiy Tarmoqlar',
    'Bog\'lanish': 'Bog\'lanish'
  },
  ru: {
    'Bosh sahifa': 'Главная',
    'Ayollar': 'Женские',
    'Erkaklar': 'Мужские',
    'Brendlar': 'Бренды',
    'Aksesuarlar': 'Аксессуары',
    'Sevimlilар': 'Избранные',
    'Do\'konlar': 'Магазины',
    'Dunyoning Eng Yaxshi Ko\'zoynaklari': 'Лучшие очки в мире',
    'Sizning stilingiz, sizning identitetingiz': 'Ваш стиль, ваша личность',
    'Xaridni Boshlash': 'Начать покупки',
    'Barcha Ko\'zoynaklari': 'Все очки',
    'Rang:': 'Цвет:',
    'Barcha Ranglar': 'Все цвета',
    'Qora': 'Чёрный',
    'Qizil': 'Красный',
    'Koʻk': 'Синий',
    'Kumush': 'Золотой',
    'Jigarrang': 'Коричневый',
    'Brend:': 'Бренд:',
    'Barcha Brendlar': 'Все бренды',
    'Tur:': 'Тип:',
    'Barcha Turlar': 'Все типы',
    'Quyosh Ko\'zoynaklari': 'Солнечные очки',
    'Retseptli': 'Рецептные',
    'Sport': 'Спортивные',
    'Ayollar Ko\'zoynaklari': 'Женские очки',
    'Erkaklar Ko\'zoynaklari': 'Мужские очки',
    'Ko\'zoynak Aksesuarlari': 'Аксессуары для очков',
    'Bizning Do\'konlar': 'Наши магазины',
    'Savat': 'Корзина',
    'Ro\'yxatdan O\'tish': 'Регистрация',
    'Email:': 'Email:',
    'Telefon Raqami:': 'Номер телефона:',
    'Parol:': 'Пароль:',
    'Brend:': 'Бренд:',
    'Narxi:': 'Цена:',
    'Material:': 'Материал:',
    'O\'lchami:': 'Размер:',
    'Rang Tanlang:': 'Выберите цвет:',
    'Miqdori:': 'Количество:',
    'Savatga Qo\'shish': 'Добавить в корзину',
    'Havolalar': 'Ссылки',
    'Ijtimoiy Tarmoqlar': 'Социальные сети',
    'Bog\'lanish': 'Контакты'
  }
};

// Products Database
const productsData = [
  // Ray-Ban Products
  {
    id: 1,
    name: 'Ray-Ban Aviator',
    brand: 'Ray-Ban',
    price: 150000,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    description: 'Klassik aviator ko\'zoynak, zamonaviy dizayn',
    category: 'sunglasses',
    gender: 'ayollar',
    colors: ['black', 'blue', 'brown'],
    material: 'Metal',
    size: 'O\'rta',
    specs: 'Premium UV400 shastra'
  },
  {
    id: 2,
    name: 'Ray-Ban Wayfarer',
    brand: 'Ray-Ban',
    price: 145000,
    image: 'https://images.unsplash.com/photo-1559368915-cd4628902d4a?w=400&h=400&fit=crop',
    description: 'Klassik wayfarer stilida erkaklar ko\'zoynak',
    category: 'sunglasses',
    gender: 'erkaklar',
    colors: ['black', 'red', 'brown'],
    material: 'Plastik',
    size: 'Katta',
    specs: 'Polaroid linzalari bilan'
  },
  // Oakley Products
  {
    id: 3,
    name: 'Oakley Sport Pro',
    brand: 'Oakley',
    price: 175000,
    image: 'https://images.unsplash.com/photo-1606933248051-5ce98a8f0da4?w=400&h=400&fit=crop',
    description: 'Sport uchun maxsus ko\'zoynak',
    category: 'sport',
    gender: 'erkaklar',
    colors: ['black', 'blue'],
    material: 'Titanium',
    size: 'O\'rta',
    specs: 'HD optika texnologiyasi'
  },
  {
    id: 4,
    name: 'Oakley Women Sport',
    brand: 'Oakley',
    price: 168000,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    description: 'Ayollar sport ko\'zoynaklari',
    category: 'sport',
    gender: 'ayollar',
    colors: ['pink', 'black', 'purple'],
    material: 'Titanium',
    size: 'Kichik',
    specs: 'Aerogel xotirasi bilan'
  },
  // Gucci Products
  {
    id: 5,
    name: 'Gucci Luxury Edition',
    brand: 'Gucci',
    price: 198000,
    image: 'https://images.unsplash.com/photo-1559368915-cd4628902d4a?w=400&h=400&fit=crop',
    description: 'Gucci luxe brend koleksiyasi',
    category: 'sunglasses',
    gender: 'ayollar',
    colors: ['gold', 'black', 'red'],
    material: 'Logam Mulia',
    size: 'O\'rta',
    specs: 'Original Gucci logotipi'
  },
  {
    id: 6,
    name: 'Gucci Classic',
    brand: 'Gucci',
    price: 185000,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    description: 'Klassik Gucci modellar',
    category: 'sunglasses',
    gender: 'erkaklar',
    colors: ['black', 'brown'],
    material: 'Plastik',
    size: 'Katta',
    specs: 'Gucci sertifikat bilan'
  },
  // Prada Products
  {
    id: 7,
    name: 'Prada Premium',
    brand: 'Prada',
    price: 192000,
    image: 'https://images.unsplash.com/photo-1606933248051-5ce98a8f0da4?w=400&h=400&fit=crop',
    description: 'Prada premium koleksiyasi',
    category: 'prescription',
    gender: 'ayollar',
    colors: ['black', 'gold', 'brown'],
    material: 'Metal',
    size: 'O\'rta',
    specs: 'Retseptli linzalarga mos'
  },
  {
    id: 8,
    name: 'Prada Sport',
    brand: 'Prada',
    price: 180000,
    image: 'https://images.unsplash.com/photo-1559368915-cd4628902d4a?w=400&h=400&fit=crop',
    description: 'Prada sport liniyasi',
    category: 'sport',
    gender: 'erkaklar',
    colors: ['black', 'blue', 'red'],
    material: 'Plastic',
    size: 'Katta',
    specs: 'Sport qobiliyatli'
  },
  // Polaroid Products
  {
    id: 9,
    name: 'Polaroid Vintage',
    brand: 'Polaroid',
    price: 125000,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    description: 'Polaroid vintage uslubi',
    category: 'sunglasses',
    gender: 'ayollar',
    colors: ['brown', 'black', 'gold'],
    material: 'Plastic',
    size: 'O\'rta',
    specs: 'Polaroid filtrli'
  },
  {
    id: 10,
    name: 'Polaroid Retro',
    brand: 'Polaroid',
    price: 130000,
    image: 'https://images.unsplash.com/photo-1606933248051-5ce98a8f0da4?w=400&h=400&fit=crop',
    description: 'Retro dizayn ko\'zoynak',
    category: 'sunglasses',
    gender: 'erkaklar',
    colors: ['black', 'red', 'blue'],
    material: 'Plastic',
    size: 'Katta',
    specs: 'UV 400 shastra'
  },
  // Tom Ford Products
  {
    id: 11,
    name: 'Tom Ford Exclusive',
    brand: 'Tom Ford',
    price: 200000,
    image: 'https://images.unsplash.com/photo-1559368915-cd4628902d4a?w=400&h=400&fit=crop',
    description: 'Tom Ford eksklyuziv koleksiyasi',
    category: 'sunglasses',
    gender: 'ayollar',
    colors: ['black', 'gold', 'red'],
    material: 'Metal',
    size: 'O\'rta',
    specs: 'Tom Ford sertifikat'
  },
  {
    id: 12,
    name: 'Tom Ford Signature',
    brand: 'Tom Ford',
    price: 188000,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    description: 'Tom Ford signature modellar',
    category: 'sunglasses',
    gender: 'erkaklar',
    colors: ['black', 'brown'],
    material: 'Plastic',
    size: 'Katta',
    specs: 'Designer original'
  }
];

// Accessories Data
const accessoriesData = [
  {
    id: 101,
    name: 'Ko\'zoynak Futlyari',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    description: 'Premium ko\'zoynak futlyari',
    category: 'accessories'
  },
  {
    id: 102,
    name: 'Microfiber Tamizlash Pardasi',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop',
    description: 'Egizsiz tamizlash pardasi',
    category: 'accessories'
  },
  {
    id: 103,
    name: 'Ko\'zoynak Zangi',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
    description: 'Elastic ko\'zoynak zangi',
    category: 'accessories'
  },
  {
    id: 104,
    name: 'Lens Cleaner Spray',
    price: 20000,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop',
    description: 'Linza tozalashchi spray',
    category: 'accessories'
  }
];

// Stores Data
const storesData = [
  {
    id: 201,
    name: 'Lux Optika Toshkent (Chilonzor)',
    location: 'Toshkent, Chilonzor tumani, Amir Temur ko\'chasi 45',
    hours: '09:00 - 19:00',
    phone: '+998 71 210-45-67',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    description: 'Asosiy Lux Optika do\'koni, eng katta assortimenti',
    region: 'Toshkent'
  },
  {
    id: 202,
    name: 'Lux Optika Toshkent (Mirzo Ulugbek)',
    location: 'Toshkent, Mirzo Ulugbek tumani, Uzbekistan ko\'chasi 78',
    hours: '10:00 - 20:00',
    phone: '+998 71 255-88-99',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    description: 'Katta do\'kon, barcha brendlar mavjud',
    region: 'Toshkent'
  },
  {
    id: 203,
    name: 'Lux Optika Toshkent (Shayhontohur)',
    location: 'Toshkent, Shayhontohur tumani, Navigatornazir ko\'chasi 25',
    hours: '09:30 - 18:30',
    phone: '+998 71 280-22-33',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    description: 'Markaziy do\'kon, qulay joylashuv',
    region: 'Toshkent'
  },
  {
    id: 204,
    name: 'Lux Optika Toshkent (Yunusobod)',
    location: 'Toshkent, Yunusobod tumani, Bobur ko\'chasi 120',
    hours: '10:00 - 19:00',
    phone: '+998 71 315-44-55',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    description: 'Zamonaviy fitnes mallida joylashgan',
    region: 'Toshkent'
  },
  {
    id: 205,
    name: 'Lux Optika Samarqand',
    location: 'Samarqand, Registori ko\'chasi 55, Shopping Mall',
    hours: '09:00 - 20:00',
    phone: '+998 66 233-66-77',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    description: 'Samarqand ning eng yaxshi ko\'zoynak do\'koni',
    region: 'Samarqand'
  },
  {
    id: 206,
    name: 'Lux Optika Namangan',
    location: 'Namangan, Navoi ko\'chasi 150, City Center',
    hours: '09:00 - 18:00',
    phone: '+998 69 221-55-88',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    description: 'Namangan tumanidagi yagona Lux Optika filiali',
    region: 'Namangan'
  },
  {
    id: 207,
    name: 'Lux Optika Andijan',
    location: 'Andijan, Babur ko\'chasi 80, Business Center',
    hours: '10:00 - 19:00',
    phone: '+998 74 262-33-44',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    description: 'Andijan shahrida professional konsultantsiya',
    region: 'Andijan'
  },
  {
    id: 208,
    name: 'Lux Optika Fargona',
    location: 'Fargona, Shohid Hasanov ko\'chasi 200',
    hours: '08:30 - 18:00',
    phone: '+998 73 265-44-55',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    description: 'Fargona viloyatining markaziy do\'koni',
    region: 'Fargona'
  },
  {
    id: 209,
    name: 'Lux Optika Bukhara',
    location: 'Bukhara, Po\'yi Kalyan ko\'chasi 30',
    hours: '09:00 - 19:00',
    phone: '+998 65 223-77-88',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    description: 'Bukhara turizmining markazida joylashgan',
    region: 'Bukhara'
  },
  {
    id: 210,
    name: 'Lux Optika Nukus',
    location: 'Nukus, Beruni ko\'chasi 120, Central Market',
    hours: '10:00 - 18:00',
    phone: '+998 61 225-66-77',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    description: 'Karakalpakstan o\'zbekiston viloyatida',
    region: 'Nukus'
  }
];

// Cart
let cart = [];
let favorites = [];
let currentUser = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
  setupEventListeners();
  updateUI();
  loadFromLocalStorage();
});

// Load Products to Grid
function loadProducts() {
  // All Products
  const allGlassesGrid = document.getElementById('allGlassesGrid');
  if (allGlassesGrid) {
    allGlassesGrid.innerHTML = productsData.map(product => createProductCard(product)).join('');
  }

  // Women Products
  const womenGlassesGrid = document.getElementById('womenGlassesGrid');
  if (womenGlassesGrid) {
    const womenProducts = productsData.filter(p => p.gender === 'ayollar');
    womenGlassesGrid.innerHTML = womenProducts.map(product => createProductCard(product)).join('');
  }

  // Men Products
  const menGlassesGrid = document.getElementById('menGlassesGrid');
  if (menGlassesGrid) {
    const menProducts = productsData.filter(p => p.gender === 'erkaklar');
    menGlassesGrid.innerHTML = menProducts.map(product => createProductCard(product)).join('');
  }

  // Accessories
  const accessoriesGrid = document.getElementById('accessoriesGrid');
  if (accessoriesGrid) {
    accessoriesGrid.innerHTML = accessoriesData.map(accessory => createAccessoryCard(accessory)).join('');
  }

  // Stores
  const storesGrid = document.getElementById('storesGrid');
  if (storesGrid) {
    storesGrid.innerHTML = storesData.map(store => createStoreCard(store)).join('');
  }

  // Attach Event Listeners
  attachProductListeners();
}

// Create Product Card HTML
function createProductCard(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-price">${formatPrice(product.price)}</div>
        <div class="product-buttons">
          <button class="btn-small btn-view" onclick="openProductModal(${product.id})">Ko'rish</button>
          <button class="btn-small btn-like" data-id="${product.id}" onclick="toggleFavorite(${product.id})"><i class="fas fa-heart"></i></button>
        </div>
      </div>
    </div>
  `;
}

// Create Accessory Card
function createAccessoryCard(accessory) {
  return `
    <div class="product-card">
      <img src="${accessory.image}" alt="${accessory.name}" class="product-image">
      <div class="product-info">
        <div class="product-name">${accessory.name}</div>
        <div class="product-price">${formatPrice(accessory.price)}</div>
        <div class="product-buttons">
          <button class="btn-small btn-view" onclick="addAccessoryToCart(${accessory.id})">Savatga Qo'sh</button>
          <button class="btn-small btn-like" data-id="${accessory.id}" onclick="toggleFavorite(${accessory.id})"><i class="fas fa-heart"></i></button>
        </div>
      </div>
    </div>
  `;
}

// Create Store Card
function createStoreCard(store) {
  return `
    <div class="store-card">
      <img src="${store.image}" alt="${store.name}" class="store-image">
      <div class="store-info">
        <div class="store-name">${store.name}</div>
        <div class="store-location"><i class="fas fa-map-marker-alt"></i> ${store.location}</div>
        <div class="store-hours"><i class="fas fa-clock"></i> ${store.hours}</div>
        <div class="store-contact"><i class="fas fa-phone"></i> ${store.phone}</div>
        <p>${store.description}</p>
        <button class="store-btn" onclick="callStore('${store.phone}')">Bog'lanish</button>
      </div>
    </div>
  `;
}

// Open Product Modal
function openProductModal(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('modalImage').src = product.image;
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalDescription').textContent = product.description;
  document.getElementById('modalBrand').textContent = product.brand;
  document.getElementById('modalPrice').textContent = formatPrice(product.price);
  document.getElementById('modalMaterial').textContent = product.material;
  document.getElementById('modalSize').textContent = product.size;

  // Color Options
  const colorOptions = document.getElementById('colorOptions');
  colorOptions.innerHTML = product.colors.map(color => `
    <div class="color-option" style="background-color: ${getColorValue(color)};" 
         onclick="selectColor(this)" data-color="${color}"></div>
  `).join('');

  document.getElementById('quantityInput').value = 1;
  document.getElementById('addToCartBtn').onclick = () => addToCart(productId);
  document.getElementById('addToFavoritesBtn').onclick = () => toggleFavorite(productId);

  document.getElementById('productModal').classList.add('show');
}

// Format Price
function formatPrice(price) {
  return new Intl.NumberFormat('uz-UZ', {
    style: 'currency',
    currency: 'UZS',
    minimumFractionDigits: 0
  }).format(price);
}

// Get Color Value
function getColorValue(color) {
  const colors = {
    black: '#000000',
    red: '#ff0000',
    blue: '#0000ff',
    gold: '#ffd700',
    brown: '#8b4513',
    pink: '#ffb6c1',
    purple: '#800080'
  };
  return colors[color] || '#000000';
}

// Select Color
function selectColor(element) {
  document.querySelectorAll('.color-option').forEach(el => el.classList.remove('selected'));
  element.classList.add('selected');
}

// Add to Cart
function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const quantity = parseInt(document.getElementById('quantityInput').value);
  const selectedColor = document.querySelector('.color-option.selected')?.dataset.color || product.colors[0];

  const cartItem = {
    id: Date.now(),
    productId: productId,
    name: product.name,
    price: product.price,
    quantity: quantity,
    image: product.image,
    color: selectedColor,
    brand: product.brand
  };

  cart.push(cartItem);
  updateUI();
  document.getElementById('productModal').classList.remove('show');
  showNotification('Savatga qo\'shildi!');
}

// Add Accessory to Cart
function addAccessoryToCart(accessoryId) {
  const accessory = accessoriesData.find(a => a.id === accessoryId);
  if (!accessory) return;

  const cartItem = {
    id: Date.now(),
    productId: accessoryId,
    name: accessory.name,
    price: accessory.price,
    quantity: 1,
    image: accessory.image
  };

  cart.push(cartItem);
  updateUI();
  showNotification('Aksesuarlar savatga qo\'shildi!');
}

// Toggle Favorite
function toggleFavorite(productId) {
  const index = favorites.indexOf(productId);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(productId);
  }
  updateUI();
}

// Update UI
function updateUI() {
  updateCartCount();
  updateFavoritesGrid();
  updateLikeButtons();
  saveToLocalStorage();
}

// Update Cart Count
function updateCartCount() {
  const count = cart.length;
  document.querySelector('.cart-count').textContent = count;
}

// Update Favorites Grid
function updateFavoritesGrid() {
  const favoritesGrid = document.getElementById('favoritesGrid');
  if (!favoritesGrid) return;

  const favoriteProducts = productsData.filter(p => favorites.includes(p.id));
  if (favoriteProducts.length === 0) {
    favoritesGrid.innerHTML = `
      <div style="grid-column: 1/-1;">
        <div class="empty-state">
          <i class="fas fa-heart"></i>
          <h3>Sevimlilар bo'sh</h3>
          <p>Hali hech qanday ko'zoynak qo'shilmagan</p>
        </div>
      </div>
    `;
  } else {
    favoritesGrid.innerHTML = favoriteProducts.map(product => createProductCard(product)).join('');
    attachProductListeners();
  }
}

// Update Like Buttons
function updateLikeButtons() {
  document.querySelectorAll('.btn-like').forEach(btn => {
    const id = parseInt(btn.dataset.id);
    if (favorites.includes(id)) {
      btn.classList.add('liked');
    } else {
      btn.classList.remove('liked');
    }
  });
}

// Show Cart
document.querySelector('.cart-btn')?.addEventListener('click', () => {
  showCart();
  window.location.hash = '#savat';
});

// Show Cart Contents
function showCart() {
  const cartContainer = document.getElementById('cartContainer');
  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-shopping-cart"></i>
        <h3>Savat bo'sh</h3>
        <p>Biror mahsulot tanlab oling va savatga qo'shing</p>
      </div>
    `;
  } else {
    let html = '<div>';
    cart.forEach((item, index) => {
      html += `
        <div class="cart-item">
          <img src="${item.image}" class="cart-item-image">
          <div class="cart-item-details">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${formatPrice(item.price)}</div>
            ${item.color ? `<div>Rang: ${item.color}</div>` : ''}
          </div>
          <div class="cart-item-quantity">
            <label>Miqdori:</label>
            <input type="number" value="${item.quantity}" min="1" 
                   onchange="updateQuantity(${index}, this.value)">
          </div>
          <button class="cart-remove" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button>
        </div>
      `;
    });
    html += '</div>';

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    html += `
      <div class="cart-summary">
        <div class="summary-row">
          <span>Jami:</span>
          <span>${formatPrice(total)}</span>
        </div>
        <button class="checkout-btn" onclick="checkout()">Buyurtmani Rasmiylashtirish</button>
      </div>
    `;

    cartContainer.innerHTML = html;
  }
}

// Update Quantity
function updateQuantity(index, quantity) {
  cart[index].quantity = parseInt(quantity) || 1;
  updateUI();
  showCart();
}

// Remove from Cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateUI();
  showCart();
}

// Checkout
function checkout() {
  if (cart.length === 0) return;
  
  if (!currentUser) {
    showLoginModal();
  } else {
    showCheckoutForm();
  }
}

// Show Login Modal
function showLoginModal() {
  document.getElementById('loginModal').classList.add('show');
  document.getElementById('loginForm').onsubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    const phone = document.getElementById('phoneInput').value;
    currentUser = { email, phone };
    document.getElementById('loginModal').classList.remove('show');
    showCheckoutForm();
  };
}

// Show Checkout Form
function showCheckoutForm() {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const form = `
    <div class="modal show">
      <div class="modal-content" style="max-width: 600px;">
        <span class="close" onclick="this.closest('.modal').classList.remove('show')">&times;</span>
        <h2>Buyurtmani Rasmiylashtirish</h2>
        <form id="checkoutForm">
          <div class="form-group">
            <label>Manzil:</label>
            <input type="text" required placeholder="Manzilni kiriting">
          </div>
          <div class="form-group">
            <label>Telefon Raqami:</label>
            <input type="tel" required value="${currentUser.phone}">
          </div>
          <div class="form-group">
            <label>To'lov Usuli:</label>
            <select required>
              <option value="">Tanlang</option>
              <option value="humo">HUMO</option>
              <option value="uzcard">UZCard</option>
              <option value="visa">Visa</option>
            </select>
          </div>
          <div class="summary-row total" style="margin-bottom: 1rem;">
            <span>Jami:</span>
            <span>${formatPrice(total)}</span>
          </div>
          <button type="submit" class="checkout-btn">Buyurtmani Yuborish</button>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', form);
  document.querySelector('#checkoutForm').onsubmit = (e) => {
    e.preventDefault();
    completeOrder();
  };
}

// Complete Order
function completeOrder() {
  showNotification('Buyurtmangiz qabul qilindi! Tez orada kuryer siz bilan bog\'lanadi.');
  cart = [];
  updateUI();
  document.querySelectorAll('.modal.show').forEach(m => m.remove());
}

// Setup Event Listeners
function setupEventListeners() {
  // Language Switcher
  document.getElementById('langUz')?.addEventListener('click', () => switchLanguage('uz'));
  document.getElementById('langRu')?.addEventListener('click', () => switchLanguage('ru'));

  // Modal Close Buttons
  document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.target.closest('.modal').classList.remove('show');
    });
  });

  // Filter Events
  document.getElementById('colorFilter')?.addEventListener('change', filterProducts);
  document.getElementById('brandFilter')?.addEventListener('change', filterProducts);
  document.getElementById('typeFilter')?.addEventListener('change', filterProducts);

  // User Button
  document.querySelector('.user-btn')?.addEventListener('click', () => {
    if (currentUser) {
      alert(`Salomlashdim, ${currentUser.email}`);
    } else {
      showLoginModal();
    }
  });
}

// Attach Product Listeners
function attachProductListeners() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.product-buttons')) {
        const viewBtn = card.querySelector('.btn-view');
        viewBtn?.click();
      }
    });
  });
}

// Filter Products
function filterProducts() {
  const colorFilter = document.getElementById('colorFilter')?.value || 'all';
  const brandFilter = document.getElementById('brandFilter')?.value || 'all';
  const typeFilter = document.getElementById('typeFilter')?.value || 'all';

  let filtered = productsData.filter(p => {
    return (colorFilter === 'all' || p.colors.includes(colorFilter)) &&
           (brandFilter === 'all' || p.brand.toLowerCase() === brandFilter) &&
           (typeFilter === 'all' || p.category === typeFilter);
  });

  const grid = document.getElementById('allGlassesGrid');
  if (grid) {
    grid.innerHTML = filtered.length > 0 
      ? filtered.map(product => createProductCard(product)).join('')
      : '<div style="grid-column: 1/-1;" class="empty-state"><i class="fas fa-search"></i><h3>Mahsulot topilmadi</h3></div>';
    attachProductListeners();
  }
}

// Switch Language
function switchLanguage(lang) {
  currentLanguage = lang;
  document.getElementById('langUz').classList.toggle('active', lang === 'uz');
  document.getElementById('langRu').classList.toggle('active', lang === 'ru');
  updateLanguage();
}

// Update Language
function updateLanguage() {
  document.querySelectorAll('[data-uz][data-ru]').forEach(el => {
    el.textContent = currentLanguage === 'uz' ? el.dataset.uz : el.dataset.ru;
  });
}

// Call Store
function callStore(phone) {
  window.location.href = `tel:${phone}`;
}

// Show Notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: var(--success-color);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    box-shadow: var(--shadow);
    z-index: 3000;
    animation: slideIn 0.3s ease;
  `;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

// Local Storage
function saveToLocalStorage() {
  localStorage.setItem('lux-optika-cart', JSON.stringify(cart));
  localStorage.setItem('lux-optika-favorites', JSON.stringify(favorites));
  localStorage.setItem('lux-optika-user', JSON.stringify(currentUser));
}

function loadFromLocalStorage() {
  const savedCart = localStorage.getItem('lux-optika-cart');
  const savedFavorites = localStorage.getItem('lux-optika-favorites');
  const savedUser = localStorage.getItem('lux-optika-user');

  if (savedCart) cart = JSON.parse(savedCart);
  if (savedFavorites) favorites = JSON.parse(savedFavorites);
  if (savedUser) currentUser = JSON.parse(savedUser);

  updateUI();
}

// Brand Card Click
document.addEventListener('click', (e) => {
  if (e.target.closest('.brand-card')) {
    const brand = e.target.closest('.brand-card').dataset.brand;
    document.getElementById('brandFilter').value = brand;
    filterProducts();
    document.getElementById('allGlassesGrid').scrollIntoView({ behavior: 'smooth' });
  }
});
