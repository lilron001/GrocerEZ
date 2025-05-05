// Firebase Cart Management Script
// This script handles adding products to cart and manages cart functionality

// Initialize Firebase Firestore for cart storage
function initFirebaseCart() {
    // Initialize Firestore
    if (!firebase.apps.length) {
        // Your Firebase config should already be in scripts.js
        return;
    }
    
    // Add Firestore if not already loaded
    if (!firebase.firestore) {
        const firestoreScript = document.createElement('script');
        firestoreScript.src = 'https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js';
        firestoreScript.onload = setupCartListeners;
        document.head.appendChild(firestoreScript);
    } else {
        setupCartListeners();
    }
}

// Cart Management Functions
let currentUser = null;
let db = null;
let cart = [];

// Update UI based on authentication state
function updateCartUI(user) {
    const addToCartButtons = document.querySelectorAll('.action-button');
    const cartCounterElement = document.getElementById('cart-counter');
    
    if (user) {
        // User is signed in
        currentUser = user;
        db = firebase.firestore();
        
        // Enable cart buttons
        addToCartButtons.forEach(button => {
            if (button.querySelector('span').textContent.includes('ADD TO CART')) {
                button.classList.remove('disabled');
                button.setAttribute('title', 'Add to your cart');
            }
        });
        
        // Load user's cart
        loadUserCart();
    } else {
        // User is not signed in
        currentUser = null;
        
        // Disable cart buttons
        addToCartButtons.forEach(button => {
            if (button.querySelector('span').textContent.includes('ADD TO CART')) {
                button.classList.add('disabled');
                button.setAttribute('title', 'Please sign in to add to cart');
            }
        });
        
        // Reset cart counter
        if (cartCounterElement) {
            cartCounterElement.textContent = '0';
            cartCounterElement.style.display = 'none';
        }
    }
}

// Load user's cart from Firestore
function loadUserCart() {
    if (!currentUser || !db) return;
    
    db.collection('carts').doc(currentUser.uid)
        .get()
        .then((doc) => {
            if (doc.exists) {
                cart = doc.data().items || [];
                updateCartCounter();
            } else {
                // Create a new cart document for this user
                db.collection('carts').doc(currentUser.uid).set({
                    items: []
                });
                cart = [];
                updateCartCounter();
            }
        })
        .catch((error) => {
            console.error("Error loading cart: ", error);
        });
}

// Update the cart counter in the UI
function updateCartCounter() {
    const cartCounterElement = document.getElementById('cart-counter');
    if (!cartCounterElement) {
        // Create cart counter if it doesn't exist
        const navActions = document.querySelector('.nav-actions');
        const cartCounter = document.createElement('div');
        cartCounter.id = 'cart-counter';
        cartCounter.className = 'cart-counter';
        navActions.appendChild(cartCounter);
    }
    
    const counter = document.getElementById('cart-counter');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    counter.textContent = totalItems;
    counter.style.display = totalItems > 0 ? 'block' : 'none';
}

// Add a product to the cart
function addToCart(productName, productVariant, price, quantity = 1) {
    if (!currentUser) {
        // Prompt user to sign in
        showLoginRequiredModal();
        return;
    }
    
    // Check if product already exists in cart
    const existingItemIndex = cart.findIndex(item => 
        item.name === productName && item.variant === productVariant);
    
    if (existingItemIndex >= 0) {
        // Update quantity of existing item
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item to cart
        cart.push({
            name: productName,
            variant: productVariant,
            price: price,
            quantity: quantity,
            addedAt: new Date().toISOString()
        });
    }
    
    // Save cart to Firestore
    saveCart();
    
    // Show confirmation message
    showAddToCartConfirmation(productName, productVariant);
}

// Save cart to Firestore
function saveCart() {
    if (!currentUser || !db) return;
    
    db.collection('carts').doc(currentUser.uid).set({
        items: cart,
        updatedAt: new Date().toISOString()
    })
    .then(() => {
        updateCartCounter();
    })
    .catch((error) => {
        console.error("Error saving cart: ", error);
    });
}

// Show login required modal
function showLoginRequiredModal() {
    const modal = document.getElementById('signinModal');
    modal.style.display = 'block';
    
    // Add message to the modal
    const messageContainer = document.getElementById('signin-message') || document.createElement('div');
    messageContainer.id = 'signin-message';
    messageContainer.className = 'signin-message';
    messageContainer.textContent = 'Please sign in to add items to your cart';
    
    const authContainer = document.getElementById('firebaseui-auth-container');
    authContainer.parentNode.insertBefore(messageContainer, authContainer);
}

// Show add to cart confirmation
function showAddToCartConfirmation(productName, variant) {
    // Create confirmation toast if it doesn't exist
    let toast = document.getElementById('cart-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'cart-toast';
        toast.className = 'cart-toast';
        document.body.appendChild(toast);
    }
    
    // Set toast content
    toast.innerHTML = `
        <div class="toast-content">
            <span class="toast-check">✓</span>
            <span class="toast-message">${variant} ${productName} added to cart</span>
            <a href="#" class="view-cart-link">View Cart</a>
        </div>
    `;
    
    // Add click handler for view cart link
    toast.querySelector('.view-cart-link').addEventListener('click', (e) => {
        e.preventDefault();
        showCartModal();
    });
    
    // Show the toast
    toast.classList.add('show');
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Show cart modal
function showCartModal() {
    // Create cart modal if it doesn't exist
    let cartModal = document.getElementById('cartModal');
    if (!cartModal) {
        cartModal = document.createElement('div');
        cartModal.id = 'cartModal';
        cartModal.className = 'modal';
        
        cartModal.innerHTML = `
            <div class="modal-content cart-modal-content">
                <span class="close-modal" id="closeCartModal">&times;</span>
                <h2 class="cart-heading">Your Shopping Cart</h2>
                <div id="cartItems" class="cart-items"></div>
                <div class="cart-summary">
                    <div class="cart-total">Total: <span id="cartTotal">₱0.00</span></div>
                    <button id="checkoutButton" class="button checkout-button">Proceed to Checkout</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(cartModal);
        
        // Add close handler
        document.getElementById('closeCartModal').addEventListener('click', () => {
            cartModal.style.display = 'none';
        });
        
        // Add checkout handler
        document.getElementById('checkoutButton').addEventListener('click', () => {
            alert('Checkout functionality will be implemented in the future.');
        });
    }
    
    // Populate cart items
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        document.getElementById('checkoutButton').disabled = true;
    } else {
        let total = 0;
        
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.variant} ${item.name}</div>
                    <div class="cart-item-price">₱${item.price.toFixed(2)} × ${item.quantity}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-item-total">₱${itemTotal.toFixed(2)}</div>
                    <button class="cart-item-remove" data-index="${index}">×</button>
                </div>
            `;
            
            cartItemsContainer.appendChild(itemElement);
        });
        
        // Add remove handlers
        document.querySelectorAll('.cart-item-remove').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                removeFromCart(index);
            });
        });
        
        // Update total
        document.getElementById('cartTotal').textContent = `₱${total.toFixed(2)}`;
        document.getElementById('checkoutButton').disabled = false;
    }
    
    // Show modal
    cartModal.style.display = 'block';
}

// Remove item from cart
function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        saveCart();
        showCartModal(); // Refresh cart modal
    }
}

// Setup cart button listeners
function setupCartListeners() {
    // Add to cart button
    const addToCartButtons = document.querySelectorAll('.action-button');
    
    addToCartButtons.forEach(button => {
        const buttonText = button.querySelector('span:last-child').textContent;
        if (buttonText === 'ADD TO CART') {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get product details
                const productName = document.querySelector('.product-name').textContent;
                const productVariant = document.querySelector('.product-title').textContent.split(' ')[0];
                
                // Get price (remove currency symbol and convert to number)
                const priceText = document.querySelector('.stats div:last-child').textContent;
                const price = parseFloat(priceText.replace(/[^\d.]/g, ''));
                
                // Add to cart
                addToCart(productName, productVariant, price);
            });
        }
    });
    
    // Add cart icon to navigation
    addCartIconToNav();
}

// Add cart icon to navigation
function addCartIconToNav() {
    const navActions = document.querySelector('.nav-actions');
    
    // Check if cart icon already exists
    if (!document.getElementById('cart-icon')) {
        // Create cart link
        const cartLink = document.createElement('a');
        cartLink.href = '#';
        cartLink.id = 'cart-icon';
        cartLink.innerHTML = '🛒';
        cartLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (currentUser) {
                showCartModal();
            } else {
                showLoginRequiredModal();
            }
        });
        
        // Create cart counter
        const cartCounter = document.createElement('div');
        cartCounter.id = 'cart-counter';
        cartCounter.className = 'cart-counter';
        cartCounter.style.display = 'none';
        
        // Add to navigation
        navActions.appendChild(cartLink);
        navActions.appendChild(cartCounter);
    }
}

// Listen for authentication state changes
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Firebase cart system
    initFirebaseCart();
    
    // Set up auth listener if Firebase is loaded
    if (typeof firebase !== 'undefined' && firebase.auth) {
        firebase.auth().onAuthStateChanged(function(user) {
            updateCartUI(user);
        });
    } else {
        console.error('Firebase Auth not loaded');
    }
});
// Initialize Firebase configuration
function initFirebase() {
    // Check if Firebase is already configured
    if (firebase.apps.length === 0) {
        // Firebase configuration
        const firebaseConfig = {
            // Your Firebase config should be in scripts.js
            // This is a fallback in case it's not initialized yet
            apiKey: "YOUR_API_KEY",
            authDomain: "your-project.firebaseapp.com",
            projectId: "your-project",
            storageBucket: "your-project.appspot.com",
            messagingSenderId: "your-messaging-sender-id",
            appId: "your-app-id"
        };
        
        // Check if app is already initialized
        try {
            firebase.initializeApp(firebaseConfig);
        } catch (e) {
            console.log("Firebase already initialized");
        }
    }
    
    return firebase;
}

// Listen for authentication state changes
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Firebase if needed
    initFirebase();
    
    // Initialize Firebase cart system
    initFirebaseCart();
    
    // Set up auth listener if Firebase is loaded
    if (typeof firebase !== 'undefined' && firebase.auth) {
        firebase.auth().onAuthStateChanged(function(user) {
            updateCartUI(user);
        });
    } else {
        console.error('Firebase Auth not loaded');
    }
});