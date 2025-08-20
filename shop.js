// Shopping Cart and E-commerce Functionality

// Product data
const products = [
    {
        id: 1,
        name: "Whole Milk",
        category: "milk",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Rich, creamy whole milk from grass-fed cows",
        badges: ["Organic"],
        sizes: ["1L", "2L", "4L"],
        isNew: false,
        onSale: false
    },
    {
        id: 2,
        name: "Skim Milk",
        category: "milk",
        price: 4.49,
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Fat-free milk with all nutritional benefits",
        badges: ["Low Fat"],
        sizes: ["1L", "2L"],
        isNew: false,
        onSale: true
    },
    {
        id: 3,
        name: "Aged Cheddar",
        category: "cheese",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Sharp, aged cheddar with complex flavors",
        badges: ["Artisan"],
        sizes: ["200g", "500g"],
        isNew: false,
        onSale: false
    },
    {
        id: 4,
        name: "Fresh Mozzarella",
        category: "cheese",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Soft, creamy mozzarella made fresh daily",
        badges: ["Fresh Daily"],
        sizes: ["125g", "250g"],
        isNew: true,
        onSale: false
    },
    {
        id: 5,
        name: "Greek Yogurt",
        category: "yogurt",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1571212515416-fca0ba1e9ba9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Thick, creamy Greek yogurt with live cultures",
        badges: ["High Protein", "Organic"],
        sizes: ["500g", "1kg"],
        isNew: false,
        onSale: false
    },
    {
        id: 6,
        name: "Fruit Yogurt",
        category: "yogurt",
        price: 1.99,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Creamy yogurt with real fruit pieces",
        badges: ["Variety Pack"],
        sizes: ["150g"],
        isNew: false,
        onSale: true
    },
    {
        id: 7,
        name: "Farm Fresh Butter",
        category: "butter",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Rich, creamy butter churned from fresh cream",
        badges: ["Churned Daily", "Organic"],
        sizes: ["250g", "500g"],
        isNew: false,
        onSale: false
    },
    {
        id: 8,
        name: "Heavy Cream",
        category: "butter",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Rich, thick cream perfect for whipping",
        badges: ["Premium"],
        sizes: ["500ml"],
        isNew: false,
        onSale: false
    },
    {
        id: 9,
        name: "Goat Cheese",
        category: "cheese",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1631206853832-8c80bf2a2b8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Creamy, tangy goat cheese with smooth texture",
        badges: ["Specialty"],
        sizes: ["150g"],
        isNew: true,
        onSale: false
    },
    {
        id: 10,
        name: "Chocolate Milk",
        category: "milk",
        price: 5.49,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Rich chocolate milk made with real cocoa",
        badges: ["Kids Favorite"],
        sizes: ["1L"],
        isNew: true,
        onSale: false
    },
    {
        id: 11,
        name: "Vanilla Yogurt",
        category: "yogurt",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1571212515416-fca0ba1e9ba9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Smooth vanilla yogurt with natural flavoring",
        badges: ["Natural"],
        sizes: ["400g"],
        isNew: false,
        onSale: true
    },
    {
        id: 12,
        name: "Blue Cheese",
        category: "cheese",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        description: "Bold, creamy blue cheese with distinctive flavor",
        badges: ["Artisan", "Premium"],
        sizes: ["200g"],
        isNew: false,
        onSale: false
    }
];

// Shopping cart
let cart = [];

// DOM elements
let productsContainer;
let cartCount;
let cartItems;
let cartTotal;
let checkoutBtn;
let productCount;

// Initialize shopping functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    productsContainer = document.getElementById('products-container');
    cartCount = document.getElementById('cart-count');
    cartItems = document.getElementById('cart-items');
    cartTotal = document.getElementById('cart-total');
    checkoutBtn = document.getElementById('checkout-btn');
    productCount = document.getElementById('product-count');

    // Load products
    displayProducts(products);
    
    // Initialize filters
    initializeFilters();
    
    // Initialize sorting
    initializeSorting();
    
    // Initialize price range
    initializePriceRange();
    
    // Load cart from localStorage
    loadCart();
    
    // Update cart display
    updateCartDisplay();
});

// Display products
function displayProducts(productsToShow) {
    if (!productsContainer) return;
    
    productsContainer.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
    
    // Update product count
    if (productCount) {
        productCount.textContent = productsToShow.length;
    }
}

// Create product card
function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6';
    
    const badges = product.badges.map(badge => {
        const badgeClass = getBadgeClass(badge);
        return `<span class="badge ${badgeClass}">${badge}</span>`;
    }).join(' ');
    
    const salePrice = product.onSale ? (product.price * 0.9).toFixed(2) : null;
    const priceDisplay = product.onSale ? 
        `<span class="h5 text-success mb-0">$${salePrice}</span> <small class="text-muted"><s>$${product.price}</s></small>` :
        `<span class="h5 text-success mb-0">$${product.price}</span>`;
    
    col.innerHTML = `
        <div class="card product-card h-100 shadow-sm">
            ${product.isNew ? '<div class="position-absolute top-0 end-0 m-2"><span class="badge bg-warning">New</span></div>' : ''}
            ${product.onSale ? '<div class="position-absolute top-0 start-0 m-2"><span class="badge bg-danger">Sale</span></div>' : ''}
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <h5 class="card-title fw-bold">${product.name}</h5>
                    ${badges}
                </div>
                <p class="card-text">${product.description}</p>
                <div class="mb-3">
                    <small class="text-muted">Available sizes: ${product.sizes.join(', ')}</small>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    ${priceDisplay}
                    <button class="btn btn-success" onclick="addToCart(${product.id})">
                        <i class="bi bi-cart-plus me-1"></i>Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Get badge class based on badge text
function getBadgeClass(badge) {
    const badgeClasses = {
        'Organic': 'bg-success',
        'Low Fat': 'bg-primary',
        'Artisan': 'bg-warning',
        'Fresh Daily': 'bg-info',
        'High Protein': 'bg-success',
        'Variety Pack': 'bg-secondary',
        'Churned Daily': 'bg-success',
        'Premium': 'bg-warning',
        'Specialty': 'bg-info',
        'Kids Favorite': 'bg-primary',
        'Natural': 'bg-success'
    };
    return badgeClasses[badge] || 'bg-secondary';
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1,
            finalPrice: product.onSale ? (product.price * 0.9) : product.price
        });
    }
    
    saveCart();
    updateCartDisplay();
    
    // Show success message
    showToast(`${product.name} added to cart!`, 'success');
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
}

// Update quantity in cart
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            updateCartDisplay();
        }
    }
}

// Update cart display
function updateCartDisplay() {
    if (!cartCount || !cartItems || !cartTotal || !checkoutBtn) return;
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-muted text-center">Your cart is empty</p>';
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="d-flex justify-content-between align-items-center mb-2">
                <div class="flex-grow-1">
                    <small class="fw-bold">${item.name}</small><br>
                    <small class="text-muted">$${item.finalPrice.toFixed(2)} x ${item.quantity}</small>
                </div>
                <div class="btn-group btn-group-sm">
                    <button class="btn btn-outline-secondary" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <button class="btn btn-outline-secondary" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    <button class="btn btn-outline-danger" onclick="removeFromCart(${item.id})">×</button>
                </div>
            </div>
        `).join('');
        checkoutBtn.disabled = false;
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.finalPrice * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Initialize filters
function initializeFilters() {
    const categoryFilters = document.querySelectorAll('input[type="checkbox"][id^="filter-"]');
    const clearFiltersBtn = document.getElementById('clear-filters');
    
    categoryFilters.forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
}

// Apply filters
function applyFilters() {
    const categoryFilters = document.querySelectorAll('input[type="checkbox"][id^="filter-"]:checked');
    const priceRange = document.getElementById('price-range');
    const organicFilter = document.getElementById('filter-organic');
    const newFilter = document.getElementById('filter-new');
    const saleFilter = document.getElementById('filter-sale');
    
    let filteredProducts = products;
    
    // Category filter
    const selectedCategories = Array.from(categoryFilters).map(filter => filter.value);
    if (selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            selectedCategories.includes(product.category)
        );
    }
    
    // Price filter
    if (priceRange) {
        const maxPrice = parseFloat(priceRange.value);
        filteredProducts = filteredProducts.filter(product => 
            (product.onSale ? product.price * 0.9 : product.price) <= maxPrice
        );
    }
    
    // Special filters
    if (organicFilter && organicFilter.checked) {
        filteredProducts = filteredProducts.filter(product => 
            product.badges.includes('Organic')
        );
    }
    
    if (newFilter && newFilter.checked) {
        filteredProducts = filteredProducts.filter(product => product.isNew);
    }
    
    if (saleFilter && saleFilter.checked) {
        filteredProducts = filteredProducts.filter(product => product.onSale);
    }
    
    displayProducts(filteredProducts);
}

// Clear all filters
function clearAllFilters() {
    const allFilters = document.querySelectorAll('input[type="checkbox"][id^="filter-"]');
    const priceRange = document.getElementById('price-range');
    
    allFilters.forEach(filter => {
        filter.checked = filter.id.includes('milk') || filter.id.includes('cheese') || 
                        filter.id.includes('yogurt') || filter.id.includes('butter');
    });
    
    if (priceRange) {
        priceRange.value = 20;
        document.getElementById('price-value').textContent = '$20';
    }
    
    displayProducts(products);
}

// Initialize sorting
function initializeSorting() {
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortValue = this.value;
            let sortedProducts = [...products];
            
            switch (sortValue) {
                case 'name':
                    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'price-low':
                    sortedProducts.sort((a, b) => {
                        const priceA = a.onSale ? a.price * 0.9 : a.price;
                        const priceB = b.onSale ? b.price * 0.9 : b.price;
                        return priceA - priceB;
                    });
                    break;
                case 'price-high':
                    sortedProducts.sort((a, b) => {
                        const priceA = a.onSale ? a.price * 0.9 : a.price;
                        const priceB = b.onSale ? b.price * 0.9 : b.price;
                        return priceB - priceA;
                    });
                    break;
                case 'newest':
                    sortedProducts.sort((a, b) => b.isNew - a.isNew);
                    break;
            }
            
            displayProducts(sortedProducts);
        });
    }
}

// Initialize price range
function initializePriceRange() {
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    
    if (priceRange && priceValue) {
        priceRange.addEventListener('input', function() {
            priceValue.textContent = `$${this.value}`;
            applyFilters();
        });
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('ravineDairiesCart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('ravineDairiesCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Show toast notification
function showToast(message, type = 'info') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-white bg-${type === 'success' ? 'success' : 'primary'} border-0`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${message}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    // Add to page
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'toast-container position-fixed top-0 end-0 p-3';
        toastContainer.style.zIndex = '9999';
        document.body.appendChild(toastContainer);
    }
    
    toastContainer.appendChild(toast);
    
    // Show toast
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    
    // Remove toast element after it's hidden
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
}

// Checkout functionality
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) return;
        
        // Simple checkout simulation
        const total = cart.reduce((sum, item) => sum + (item.finalPrice * item.quantity), 0);
        const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        alert(`Checkout Summary:\n${itemCount} items\nTotal: $${total.toFixed(2)}\n\nThank you for your order! You will be redirected to payment.`);
        
        // Clear cart after "checkout"
        cart = [];
        saveCart();
        updateCartDisplay();
    });
}
