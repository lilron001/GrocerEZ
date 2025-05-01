/**
 * AuthSidebar - A reusable function to create and manage an authentication sidebar
 * @param {Object} config - Configuration object
 * @param {String} config.apiKey - Firebase API key
 * @param {String} config.authDomain - Firebase auth domain
 * @param {String} config.projectId - Firebase project ID
 * @param {String} config.storageBucket - Firebase storage bucket
 * @param {String} config.messagingSenderId - Firebase messaging sender ID
 * @param {String} config.appId - Firebase app ID
 * @param {String} config.triggerButtonId - ID of the button that will trigger the sidebar
 * @param {String} config.sidebarContainerId - ID of the container for the sidebar
 * @param {Function} config.onSignInSuccess - Optional callback function when sign in is successful
 * @param {Function} config.onSignOutSuccess - Optional callback function when sign out is successful
 */
function initAuthSidebar(config) {
    // Validate required configuration
    if (!config.apiKey || !config.authDomain || !config.projectId || 
        !config.storageBucket || !config.messagingSenderId || !config.appId) {
        console.error('Missing required Firebase configuration parameters');
        return;
    }
    
    // Create and append sidebar HTML
    const sidebarHTML = `
        <div class="sidebar-overlay" id="sidebarOverlay"></div>
        <div class="auth-sidebar" id="authSidebar">
            <div class="auth-header">
                <h3>Account</h3>
                <button class="close-button" id="closeSidebar">&times;</button>
            </div>
            
            <div class="auth-content">
                <!-- Sign In Form -->
                <div class="auth-card" id="signInForm">
                    <div class="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                    </div>
                    <h2>Sign In</h2>
                    <div id="signInMessage" class="message"></div>
                    <div class="input-group">
                        <i>✉️</i>
                        <input type="email" id="signInEmail" placeholder="Email">
                    </div>
                    <div class="input-group">
                        <i>🔒</i>
                        <input type="password" id="signInPassword" placeholder="Password">
                    </div>
                    <a href="#" class="recover-link" id="recoverPassword">Recover Password</a>
                    <button class="auth-button" id="signInButton">Sign In</button>
                    <div class="divider">
                        <span>or</span>
                    </div>
                    <div class="social-buttons">
                        <div class="social-button" id="googleSignIn">G</div>
                        <div class="social-button" id="facebookSignIn">f</div>
                    </div>
                    <div class="footer-text">
                        Don't have an account yet? <a href="#" id="showRegister">Sign Up</a>
                    </div>
                </div>

                <!-- Register Form -->
                <div class="auth-card" id="registerForm" style="display: none;">
                    <div class="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                        </svg>
                    </div>
                    <h2>Register</h2>
                    <div id="registerMessage" class="message"></div>
                    <div class="input-group">
                        <i>👤</i>
                        <input type="text" id="firstName" placeholder="First Name">
                    </div>
                    <div class="input-group">
                        <i>👤</i>
                        <input type="text" id="lastName" placeholder="Last Name">
                    </div>
                    <div class="input-group">
                        <i>✉️</i>
                        <input type="email" id="registerEmail" placeholder="Email">
                    </div>
                    <div class="input-group">
                        <i>🔒</i>
                        <input type="password" id="registerPassword" placeholder="Password">
                    </div>
                    <button class="auth-button" id="registerButton">Sign Up</button>
                    <div class="divider">
                        <span>or</span>
                    </div>
                    <div class="social-buttons">
                        <div class="social-button" id="googleRegister">G</div>
                        <div class="social-button" id="facebookRegister">f</div>
                    </div>
                    <div class="footer-text">
                        Already have an account? <a href="#" id="showSignIn">Sign In</a>
                    </div>
                </div>

                <!-- Password Recovery Form -->
                <div class="auth-card" id="recoverForm" style="display: none;">
                    <div class="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                        </svg>
                    </div>
                    <h2>Recover Password</h2>
                    <div id="recoverMessage" class="message"></div>
                    <p>Enter your email address to receive a password reset link.</p>
                    <div class="input-group">
                        <i>✉️</i>
                        <input type="email" id="recoverEmail" placeholder="Email">
                    </div>
                    <button class="auth-button" id="sendRecoveryEmailButton">Send Recovery Email</button>
                    <div class="footer-text">
                        <a href="#" id="backToSignIn">Back to Sign In</a>
                    </div>
                </div>
            </div>

            <!-- User Info (when signed in) -->
            <div class="user-info" id="userInfo">
                <div class="user-avatar" id="userAvatar">U</div>
                <h3 id="userName">User Name</h3>
                <p id="userEmail">user@example.com</p>
                <button class="auth-button" id="signOutButton">Sign Out</button>
            </div>
        </div>
    `;
    
    // Append the sidebar HTML to the container or body
    const container = document.getElementById(config.sidebarContainerId) || document.body;
    const div = document.createElement('div');
    div.innerHTML = sidebarHTML;
    while (div.firstChild) {
        container.appendChild(div.firstChild);
    }
    
    // Add CSS for the sidebar
    const style = document.createElement('style');
    style.textContent = `
        /* Sidebar Authentication */
        .auth-sidebar {
            position: fixed;
            top: 0;
            right: -400px; /* Start off-screen */
            width: 380px;
            height: 100vh;
            background-color: white;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
            transition: right 0.3s ease-in-out;
            z-index: 1000;
            overflow-y: auto;
        }

        .auth-sidebar.active {
            right: 0; /* Slide in */
        }

        .sidebar-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 999;
            display: none;
        }

        .sidebar-overlay.active {
            display: block;
        }

        .auth-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            border-bottom: 1px solid #eee;
        }

        .close-button {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #555;
        }

        .auth-content {
            padding: 20px;
        }

        .auth-card {
            width: 100%;
            text-align: center;
        }

        .logo {
            width: 60px;
            height: 60px;
            background-color: #8BC34A;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto 20px;
        }

        .auth-sidebar h2 {
            margin-bottom: 20px;
            color: #333;
        }

        .input-group {
            margin-bottom: 15px;
            text-align: left;
            position: relative;
        }

        .input-group input {
            width: 100%;
            padding: 10px 30px 10px 30px;
            border: none;
            border-bottom: 1px solid #ddd;
            font-size: 16px;
            box-sizing: border-box;
            outline: none;
        }

        .input-group i {
            position: absolute;
            left: 5px;
            top: 12px;
            color: #555;
        }

        .auth-button {
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 12px;
            width: 100%;
            font-size: 16px;
            margin-top: 10px;
            cursor: pointer;
        }

        .divider {
            display: flex;
            align-items: center;
            margin: 20px 0;
            color: #666;
        }

        .divider::before, .divider::after {
            content: "";
            flex: 1;
            border-bottom: 1px solid #ddd;
        }

        .divider span {
            padding: 0 10px;
        }

        .social-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 20px;
        }

        .social-button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            border-radius: 4px;
            border: 1px solid #ddd;
            font-size: 24px;
            color: #00C853;
            cursor: pointer;
        }

        .footer-text {
            margin-top: 20px;
        }

        .footer-text a {
            color: #4CAF50;
            text-decoration: none;
            font-weight: bold;
        }

        .recover-link {
            display: block;
            text-align: right;
            margin-bottom: 15px;
            color: #4CAF50;
            text-decoration: none;
        }

        .message {
            padding: 10px;
            margin-bottom: 15px;
            border-radius: 4px;
            display: none;
        }

        .error {
            background-color: #ebebeb;
            color: #D32F2F;
        }

        .success {
            background-color: #fdfdfd;
            color: #388E3C;
        }

        /* User Info Display */
        .user-info {
            padding: 20px;
            display: none;
        }

        .user-avatar {
            width: 80px;
            height: 80px;
            background-color: #4CAF50;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto 20px;
            color: white;
            font-size: 36px;
        }
    `;
    document.head.appendChild(style);
  
    // Initialize Firebase
    const firebaseConfig = {
        apiKey: config.apiKey,
        authDomain: config.authDomain,
        projectId: config.projectId,
        storageBucket: config.storageBucket,
        messagingSenderId: config.messagingSenderId,
        appId: config.appId
    };
    
    // Check if Firebase is already initialized
    if (!window.firebase) {
        console.error('Firebase SDK not loaded. Please include Firebase SDK before initializing the auth sidebar.');
        return;
    }
    
    // Initialize Firebase if it's not already initialized
    let firebaseApp;
    try {
        firebaseApp = firebase.app();
    } catch (e) {
        firebaseApp = firebase.initializeApp(firebaseConfig);
    }
    
    const auth = firebase.auth();
    const db = firebase.firestore();
    
    // DOM elements
    const authSidebar = document.getElementById('authSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const triggerButton = document.getElementById(config.triggerButtonId);
    const closeSidebar = document.getElementById('closeSidebar');
    const signOutButton = document.getElementById('signOutButton');
    
    const signInForm = document.getElementById('signInForm');
    const registerForm = document.getElementById('registerForm');
    const recoverForm = document.getElementById('recoverForm');
    const userInfo = document.getElementById('userInfo');
    
    const showRegister = document.getElementById('showRegister');
    const showSignIn = document.getElementById('showSignIn');
    const recoverPassword = document.getElementById('recoverPassword');
    const backToSignIn = document.getElementById('backToSignIn');
    
    const signInButton = document.getElementById('signInButton');
    const registerButton = document.getElementById('registerButton');
    const sendRecoveryEmailButton = document.getElementById('sendRecoveryEmailButton');
    
    const googleSignIn = document.getElementById('googleSignIn');
    const facebookSignIn = document.getElementById('facebookSignIn');
    const googleRegister = document.getElementById('googleRegister');
    const facebookRegister = document.getElementById('facebookRegister');
    
    const signInMessage = document.getElementById('signInMessage');
    const registerMessage = document.getElementById('registerMessage');
    const recoverMessage = document.getElementById('recoverMessage');

    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');
    const userAvatar = document.getElementById('userAvatar');
    
    // Check if user is already logged in
    auth.onAuthStateChanged(user => {
        if (user) {
            // User is signed in
            signInForm.style.display = 'none';
            registerForm.style.display = 'none';
            recoverForm.style.display = 'none';
            userInfo.style.display = 'block';
            
            // Update user info display
            updateUserInfo(user);
            
            // Update trigger button text if it exists
            if (triggerButton) {
                triggerButton.textContent = 'ACCOUNT';
            }
            
            // Call success callback if provided
            if (config.onSignInSuccess && typeof config.onSignInSuccess === 'function') {
                config.onSignInSuccess(user);
            }
        } else {
            // User is signed out
            signInForm.style.display = 'block';
            registerForm.style.display = 'none';
            recoverForm.style.display = 'none';
            userInfo.style.display = 'none';
            
            // Update trigger button text if it exists
            if (triggerButton) {
                triggerButton.textContent = 'SIGN IN';
            }
        }
    });
    
    // Update user info in sidebar
    function updateUserInfo(user) {
        // Get user data from Firestore
        db.collection('users').doc(user.uid).get()
            .then((doc) => {
                if (doc.exists) {
                    const userData = doc.data();
                    userName.textContent = userData.firstName + ' ' + userData.lastName;
                    userAvatar.textContent = userData.firstName.charAt(0).toUpperCase();
                } else {
                    // If no document exists, use data from auth
                    userName.textContent = user.displayName || 'User';
                    userAvatar.textContent = (user.displayName ? user.displayName.charAt(0) : 'U').toUpperCase();
                }
                userEmail.textContent = user.email;
            })
            .catch((error) => {
                console.error("Error getting user data:", error);
                // Fallback to auth data
                userName.textContent = user.displayName || 'User';
                userEmail.textContent = user.email;
                userAvatar.textContent = (user.displayName ? user.displayName.charAt(0) : 'U').toUpperCase();
            });
    }
    
    // Show message function
    function showMessage(element, message, type) {
        element.textContent = message;
        element.className = `message ${type}`;
        element.style.display = 'block';
        setTimeout(() => {
            element.style.display = 'none';
        }, 5000);
    }
    
    // Toggle sidebar function
    function toggleSidebar() {
        authSidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
    }
    
    // Open sidebar
    if (triggerButton) {
        triggerButton.addEventListener('click', toggleSidebar);
    }
    
    // Close sidebar
    closeSidebar.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);
    
    // Form toggle functions
    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        signInForm.style.display = 'none';
        registerForm.style.display = 'block';
        recoverForm.style.display = 'none';
    });
    
    showSignIn.addEventListener('click', (e) => {
        e.preventDefault();
        signInForm.style.display = 'block';
        registerForm.style.display = 'none';
        recoverForm.style.display = 'none';
    });
    
    recoverPassword.addEventListener('click', (e) => {
        e.preventDefault();
        signInForm.style.display = 'none';
        registerForm.style.display = 'none';
        recoverForm.style.display = 'block';
    });
    
    backToSignIn.addEventListener('click', (e) => {
        e.preventDefault();
        signInForm.style.display = 'block';
        registerForm.style.display = 'none';
        recoverForm.style.display = 'none';
    });
    
    // Sign out button
    signOutButton.addEventListener('click', () => {
        auth.signOut().then(() => {
            // Sign-out successful.
            signInForm.style.display = 'block';
            userInfo.style.display = 'none';
            if (triggerButton) {
                triggerButton.textContent = 'SIGN IN';
            }
            
            // Call success callback if provided
            if (config.onSignOutSuccess && typeof config.onSignOutSuccess === 'function') {
                config.onSignOutSuccess();
            }
        }).catch((error) => {
            // An error happened.
            console.error('Sign out error:', error);
        });
    });
    
    // Sign In functionality
    signInButton.addEventListener('click', () => {
        const email = document.getElementById('signInEmail').value;
        const password = document.getElementById('signInPassword').value;
        
        if (!email || !password) {
            showMessage(signInMessage, 'Please fill in all fields', 'error');
            return;
        }
        
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                showMessage(signInMessage, 'Successfully signed in!', 'success');
                setTimeout(() => {
                    toggleSidebar(); // Close the sidebar after successful login
                }, 1000);
            })
            .catch((error) => {
                const errorMessage = error.message;
                showMessage(signInMessage, errorMessage, 'error');
            });
    });
    
    // Register functionality
    registerButton.addEventListener('click', () => {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        
        if (!firstName || !lastName || !email || !password) {
            showMessage(registerMessage, 'Please fill in all fields', 'error');
            return;
        }
        
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                
                // Store additional user info in Firestore
                return db.collection('users').doc(user.uid).set({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    createdAt: new Date()
                }).then(() => {
                    showMessage(registerMessage, 'Account created successfully!', 'success');
                    setTimeout(() => {
                        toggleSidebar(); // Close the sidebar after successful registration
                    }, 1000);
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                showMessage(registerMessage, errorMessage, 'error');
            });
    });
    
    // Password recovery functionality
    sendRecoveryEmailButton.addEventListener('click', () => {
        const email = document.getElementById('recoverEmail').value;
        
        if (!email) {
            showMessage(recoverMessage, 'Please enter an email address', 'error');
            return;
        }
        
        auth.sendPasswordResetEmail(email)
            .then(() => {
                showMessage(recoverMessage, 'Password reset email sent!', 'success');
                setTimeout(() => {
                    signInForm.style.display = 'block';
                    recoverForm.style.display = 'none';
                }, 3000);
            })
            .catch((error) => {
                const errorMessage = error.message;
                showMessage(recoverMessage, errorMessage, 'error');
            });
    });
    
    // Google Sign In
    googleSignIn.addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                // Check if this is a new user
                const isNewUser = result.additionalUserInfo.isNewUser;
                if (isNewUser) {
                    // Store user info in Firestore
                    return db.collection('users').doc(result.user.uid).set({
                        firstName: result.user.displayName.split(' ')[0] || '',
                        lastName: result.user.displayName.split(' ')[1] || '',
                        email: result.user.email,
                        createdAt: new Date()
                    }).then(() => {
                        setTimeout(() => {
                            toggleSidebar(); // Close sidebar
                        }, 1000);
                    });
                } else {
                    setTimeout(() => {
                        toggleSidebar(); // Close sidebar
                    }, 1000);
                }
            })
            .catch((error) => {
                showMessage(signInMessage, error.message, 'error');
            });
    });
    
    // Facebook Sign In
    facebookSignIn.addEventListener('click', () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                // Check if this is a new user
                const isNewUser = result.additionalUserInfo.isNewUser;
                if (isNewUser) {
                    // Store user info in Firestore
                    return db.collection('users').doc(result.user.uid).set({
                        firstName: result.user.displayName.split(' ')[0] || '',
                        lastName: result.user.displayName.split(' ')[1] || '',
                        email: result.user.email,
                        createdAt: new Date()
                    }).then(() => {
                        setTimeout(() => {
                            toggleSidebar(); // Close sidebar
                        }, 1000);
                    });
                } else {
                    setTimeout(() => {
                        toggleSidebar(); // Close sidebar
                    }, 1000);
                }
            })
            .catch((error) => {
                showMessage(signInMessage, error.message, 'error');
            });
    });
    
    // Google Register (same as sign in but clearer UX)
    googleRegister.addEventListener('click', () => {
        googleSignIn.click();
    });
    
    // Facebook Register (same as sign in but clearer UX)
    facebookRegister.addEventListener('click', () => {
        facebookSignIn.click();
    });
    
    // Return public methods
    return {
        open: function() {
            authSidebar.classList.add('active');
            sidebarOverlay.classList.add('active');
        },
        close: function() {
            authSidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        },
        toggle: toggleSidebar
    };
}