// Main JavaScript for ShopEZ

// Common DOM Elements
let searchInput, searchBtn, compareBtn, comparisonModal, closeModalBtn, aboutBtn, aboutModal;
let closeAboutModalBtn, countrySelect, userFlag, userLocation, downloadBtn;
let viewCounter, ratingFills, mainGauge, recentTests, testItems;
let signInBtn, signInModal, closeSignInModalBtn;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize elements
    initElements();
    
    // Initialize page
    initPage();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize Firebase if available
    if (typeof firebase !== 'undefined') {
        initFirebase();
    }
});

// Initialize DOM Elements
function initElements() {
    searchInput = document.getElementById('search-input');
    searchBtn = document.getElementById('search-btn');
    compareBtn = document.getElementById('compare-btn');
    comparisonModal = document.getElementById('comparisonModal');
    closeModalBtn = document.getElementById('closeModal');
    aboutBtn = document.getElementById('about-btn');
    aboutModal = document.getElementById('aboutModal');
    closeAboutModalBtn = document.getElementById('closeAboutModal');
    countrySelect = document.getElementById('country-select');
    userFlag = document.getElementById('user-flag');
    userLocation = document.getElementById('user-location');
    downloadBtn = document.getElementById('download-btn');
    viewCounter = document.getElementById('view-counter');
    ratingFills = document.querySelectorAll('.rating-fill');
    mainGauge = document.getElementById('main-gauge');
    recentTests = document.getElementById('recent-tests');
    testItems = document.querySelectorAll('.test-item');
    signInBtn = document.getElementById('signin-btn');
    signInModal = document.getElementById('signinModal');
    closeSignInModalBtn = document.getElementById('closeSigninModal');
}

// Initialize the page
function initPage() {
    // Check if we're on the dashboard page
    if (mainGauge) {
        // Animate the gauge on page load
        animateGauge();
        
        // Simulate view counter increasing
        startViewCounter();
        
        // Show recent tests with animation
        showRecentTests();
    }
    
    // Animate the rating bars if they exist
    if (ratingFills.length > 0) {
        animateRatingBars();
    }
}

// Set up event listeners
function setupEventListeners() {
    // Search functionality
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Comparison modal functionality
    if (compareBtn && comparisonModal && closeModalBtn) {
        compareBtn.addEventListener('click', function(e) {
            e.preventDefault();
            comparisonModal.style.display = 'block';
            loadComparison();
        });
        
        closeModalBtn.addEventListener('click', function() {
            comparisonModal.style.display = 'none';
        });
    }
    
    // About modal functionality
    if (aboutBtn && aboutModal && closeAboutModalBtn) {
        aboutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            aboutModal.style.display = 'block';
        });
        
        closeAboutModalBtn.addEventListener('click', function() {
            aboutModal.style.display = 'none';
        });
    }
    
    // Sign-in modal functionality
    if (signInBtn && signInModal && closeSignInModalBtn) {
        signInBtn.addEventListener('click', function(e) {
            e.preventDefault();
            signInModal.style.display = 'flex';
            if (typeof checkAuthState === 'function') {
                checkAuthState();
            }
        });
        
        closeSignInModalBtn.addEventListener('click', function() {
            signInModal.style.display = 'none';
        });
    }
    
    // Country selection functionality
    if (countrySelect) {
        countrySelect.addEventListener('change', function() {
            const selectedCountry = this.value;
            const countryFlags = {
                "PH": "🇵🇭",
                "US": "🇺🇸",
                "UK": "🇬🇧",
                "JP": "🇯🇵"
            };
            
            if (userFlag) userFlag.textContent = countryFlags[selectedCountry];
            if (userLocation) userLocation.textContent = `${selectedCountry}-User`;
            
            // Simulate changing product prices based on country
            alert(`Prices updated to ${selectedCountry} currency`);
        });
    }
    
    // Download button functionality
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            alert('Downloading ShopEZ App...');
            
            // Simulate download
            const downloadProgress = document.createElement('div');
            downloadProgress.style.position = 'fixed';
            downloadProgress.style.bottom = '20px';
            downloadProgress.style.right = '20px';
            downloadProgress.style.backgroundColor = 'white';
            downloadProgress.style.padding = '10px';
            downloadProgress.style.borderRadius = '5px';
            downloadProgress.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
            downloadProgress.textContent = 'Download: 0%';
            
            document.body.appendChild(downloadProgress);
            
            let progress = 0;
            const downloadInterval = setInterval(() => {
                progress += 10;
                downloadProgress.textContent = `Download: ${progress}%`;
                
                if (progress >= 100) {
                    clearInterval(downloadInterval);
                    setTimeout(() => {
                        downloadProgress.textContent = 'Download Complete!';
                        setTimeout(() => {
                            document.body.removeChild(downloadProgress);
                        }, 2000);
                    }, 500);
                }
            }, 300);
        });
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (comparisonModal && e.target === comparisonModal) {
            comparisonModal.style.display = 'none';
        }
        if (aboutModal && e.target === aboutModal) {
            aboutModal.style.display = 'none';
        }
        if (signInModal && e.target === signInModal) {
            signInModal.style.display = 'none';
        }
    });
    
    // Variant buttons functionality
    const variantButtons = document.querySelectorAll('.variant-button');
    variantButtons.forEach(button => {
        button.addEventListener('click', function() {
            variantButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Search functionality
function performSearch() {
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === '') return;
    
    // Simple search implementation - to be expanded
    alert(`Searching for "${searchTerm}"...`);
    // In actual implementation, would query database or filter products
    
    // Clear search field
    searchInput.value = '';
}

// Load comparison iframe
function loadComparison() {
    const compareFrame = document.getElementById('compareFrame');
    if (compareFrame) {
        compareFrame.src = 'new_compare.html';
    }
}

// Animate gauge needle
function animateGauge() {
    if (!mainGauge) return;
    
    let rotation = 45; // Starting position
    
    setInterval(() => {
        rotation = Math.random() * 90; // Random rotation between 0 and 90 degrees
        
        // Apply the rotation directly using JavaScript
        const gaugeStyles = document.createElement('style');
        gaugeStyles.innerHTML = `.gauge:before { transform: translate(-50%, -100%) rotate(${rotation}deg) !important; }`;
        document.head.appendChild(gaugeStyles);
        
        setTimeout(() => {
            document.head.removeChild(gaugeStyles);
        }, 1000);
    }, 3000);
}

// Animate rating bars
function animateRatingBars() {
    if (!ratingFills || ratingFills.length === 0) return;
    
    ratingFills.forEach((fill, index) => {
        // Default percentages that can be customized per page
        const percentages = [75, 80, 60];
        setTimeout(() => {
            fill.style.width = percentages[index % percentages.length] + '%';
        }, 500 + (100 * index));
    });
}

// Show recent tests with animation
function showRecentTests() {
    if (!testItems || testItems.length === 0) return;
    
    testItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, 300 * index);
    });
    
    // Add new test items periodically
    if (recentTests) {
        setInterval(addNewTestItem, 15000);
    }
}

// Add new test item
function addNewTestItem() {
    if (!recentTests) return;
    
    const products = [
        "Tostitos Tortilla Chips",
        "Doritos Nacho Cheese",
        "Cheetos Crunchy",
        "Chippy Barbecue",
        "Mang Juan Chicharon",
        "Roller Coaster Potato Rings"
    ];
    
    const metrics = [
        "Heart healthy",
        "Fiber content",
        "Protein value",
        "Salt content",
        "Overall value",
        "Fat content"
    ];
    
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomMetric = metrics[Math.floor(Math.random() * metrics.length)];
    const randomScore = Math.floor(Math.random() * 100) + 1;
    
    let scoreColor;
    if (randomScore >= 70) scoreColor = "green";
    else if (randomScore >= 50) scoreColor = "orange";
    else scoreColor = "red";
    
    const newTestItem = document.createElement('div');
    newTestItem.className = 'test-item';
    newTestItem.innerHTML = `
        <div class="test-flag">🇵🇭</div>
        <div class="test-time">Just now</div>
        <div class="test-product">${randomProduct}</div>
        <div class="test-score">${randomMetric} <span style="color: ${scoreColor}">${randomScore}%</span></div>
    `;
    
    // Update test item times
    const testItems = document.querySelectorAll('.test-item');
    testItems.forEach(item => {
        const timeElement = item.querySelector('.test-time');
        if (!timeElement) return;
        
        const currentTime = timeElement.textContent;
        
        if (currentTime === 'Just now') {
            timeElement.textContent = '5 secs ago';
        } else if (currentTime === '5 secs ago') {
            timeElement.textContent = '10 secs ago';
        } else if (currentTime === '10 secs ago') {
            timeElement.textContent = '30 secs ago';
        } else if (currentTime === '30 secs ago') {
            timeElement.textContent = '1 min ago';
        } else if (currentTime.includes('min')) {
            const mins = parseInt(currentTime);
            if (mins < 60) {
                timeElement.textContent = (mins + 1) + ' min ago';
            } else {
                const hours = Math.floor(mins / 60);
                timeElement.textContent = hours + ' hour' + (hours > 1 ? 's' : '') + ' ago';
            }
        }
    });
    
    // Add the new item at the top
    recentTests.insertBefore(newTestItem, recentTests.firstChild);
    
    // Remove the oldest item if there are more than 5
    if (recentTests.children.length > 5) {
        recentTests.removeChild(recentTests.lastChild);
    }
    
    // Animate the new item
    setTimeout(() => {
        newTestItem.classList.add('visible');
    }, 100);
}

// Simulate increasing view counter
function startViewCounter() {
    if (!viewCounter) return;
    
    const startCount = parseInt(viewCounter.textContent.replace(/,/g, ''));
    let currentCount = startCount;
    
    setInterval(() => {
        currentCount += Math.floor(Math.random() * 10) + 1;
        viewCounter.textContent = currentCount.toLocaleString();
        viewCounter.classList.add('view-count');
        
        setTimeout(() => {
            viewCounter.classList.remove('view-count');
        }, 1000);
    }, 5000);
}

// Firebase Authentication Integration
function initFirebase() {
    // Check if Firebase auth elements exist
    if (!document.getElementById('firebaseui-auth-container')) return;
    
    let auth, ui, firebaseUiRendered = false;
    
    // Auth UI render function
    function renderAuthUI() {
        const uiContainer = document.getElementById('firebaseui-auth-container');
        if (!uiContainer) return;
        
        // Clear the container first
        uiContainer.innerHTML = '';
        
        // Configure for sign in only
        const uiConfig = {
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID
                // You can add more providers here like Google, Facebook, etc.
            ],
            callbacks: {
                signInSuccessWithAuthResult: function(authResult) {
                    // Update the UI state flag
                    firebaseUiRendered = true;
                    
                    // Handle successful sign-in
                    const user = authResult.user;
                    if (signInBtn) signInBtn.textContent = "MY ACCOUNT";
                    updateUserInfo(user);
                    
                    // Don't redirect after sign-in
                    return false;
                }
            },
            // Don't redirect on failure
            signInFailure: function(error) {
                console.error("Sign in failure:", error);
                return Promise.resolve();
            },
            signInFlow: 'popup',
            credentialHelper: firebaseui.auth.CredentialHelper.NONE,
            autoUpgradeAnonymousUsers: false
        };
        
        // Start the UI
        ui.start('#firebaseui-auth-container', uiConfig);
        
        // Update the UI state flag
        firebaseUiRendered = true;
    }
    
    // Update user info in the account section
    function updateUserInfo(user) {
        // Check if user info elements exist
        const displayName = document.getElementById("userDisplayName");
        const userEmail = document.getElementById("userEmail");
        if (!displayName || !userEmail) return;
        
        displayName.textContent = user.displayName || user.email.split('@')[0];
        userEmail.textContent = user.email;
        
        // Show account info, hide login UI
        document.getElementById("userAccountInfo").style.display = "block";
        document.getElementById("firebaseui-auth-container").style.display = "none";
    }
    
    // Check authentication state
    function checkAuthState() {
        const user = auth.currentUser;
        if (user) {
            // User is signed in, show account info
            updateUserInfo(user);
        } else {
            // No user is signed in, show sign-in UI
            document.getElementById("userAccountInfo").style.display = "none";
            document.getElementById("firebaseui-auth-container").style.display = "block";
            
            // Re-render the FirebaseUI if it's not already rendered
            if (!firebaseUiRendered) {
                renderAuthUI();
            }
        }
    }
    
    // Initialize Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyD3N0CojTZNWCCryJk-qjV549LHeUgwwcM",
        authDomain: "shopez-2ae00.firebaseapp.com",
        projectId: "shopez-2ae00",
        storageBucket: "shopez-2ae00.firebasestorage.app",
        messagingSenderId: "496779271582",
        appId: "1:496779271582:web:a6763817ef8093623e8a8f"
    };
    
    // Check if Firebase is already initialized
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    // Store auth in global variable
    auth = firebase.auth();
    
    // Create FirebaseUI instance
    ui = new firebaseui.auth.AuthUI(auth);
    
    // Check if user is already signed in
    auth.onAuthStateChanged(function(user) {
        if (user) {
            if (signInBtn) signInBtn.textContent = "MY ACCOUNT";
            updateUserInfo(user);
        } else {
            if (signInBtn) signInBtn.textContent = "SIGN IN";
            if (document.getElementById("userAccountInfo")) {
                document.getElementById("userAccountInfo").style.display = "none";
            }
            if (document.getElementById("firebaseui-auth-container")) {
                document.getElementById("firebaseui-auth-container").style.display = "block";
            }
            // Only initialize UI if it hasn't been rendered yet
            if (!firebaseUiRendered) {
                renderAuthUI();
            }
        }
    });
    
    // Set up sign out button
    const signOutButton = document.getElementById("signOutButton");
    if (signOutButton) {
        signOutButton.onclick = function () {
            auth.signOut().then(() => {
                if (signInBtn) signInBtn.textContent = "SIGN IN";
                // Reset the UI state
                firebaseUiRendered = false;
                renderAuthUI();
            }).catch((error) => {
                console.error("Sign out error:", error);
            });
        };
    }
    
    // Initialize FirebaseUI for the first time
    renderAuthUI();
}

// Comparison modal functionality
if (compareBtn && comparisonModal && closeModalBtn) {
    compareBtn.addEventListener('click', function(e) {
        e.preventDefault();
        comparisonModal.style.display = 'flex'; // Use flex for proper centering
        loadComparison();
    });
    
    closeModalBtn.addEventListener('click', function() {
        comparisonModal.style.display = 'none';
    });
}

// About modal functionality
if (aboutBtn && aboutModal && closeAboutModalBtn) {
    aboutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        aboutModal.style.display = 'flex'; // Use flex for proper centering
    });
    
    closeAboutModalBtn.addEventListener('click', function() {
        aboutModal.style.display = 'none';
    });
}

// Sign-in modal functionality
if (signInBtn && signInModal && closeSignInModalBtn) {
    signInBtn.addEventListener('click', function(e) {
        e.preventDefault();
        signInModal.style.display = 'flex'; // Use flex for proper centering
        if (typeof checkAuthState === 'function') {
            checkAuthState();
        }
    });
    
    closeSignInModalBtn.addEventListener('click', function() {
        signInModal.style.display = 'none';
    });
}

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    if (comparisonModal && e.target === comparisonModal) {
        comparisonModal.style.display = 'none';
    }
    if (aboutModal && e.target === aboutModal) {
        aboutModal.style.display = 'none';
    }
    if (signInModal && e.target === signInModal) {
        signInModal.style.display = 'none';
    }
});