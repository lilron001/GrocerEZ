// Firebase Authentication State Management
// This script should be included in all pages before other scripts

// Firebase configuration - replace with your actual config
const firebaseConfig = {
    apiKey: "AIzaSyD3N0CojTZNWCCryJk-qjV549LHeUgwwcM",
  authDomain: "shopez-2ae00.firebaseapp.com",
  projectId: "shopez-2ae00",
  storageBucket: "shopez-2ae00.firebasestorage.app",
  messagingSenderId: "496779271582",
  appId: "1:496779271582:web:a6763817ef8093623e8a8f"
  };
  
  // Initialize Firebase if not already initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  // Firebase Auth UI Configuration
  const uiConfig = {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    signInFlow: 'popup',
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // Don't redirect after sign-in
        return false;
      }
    }
  };
  
  // Initialize the FirebaseUI Widget
  let ui;
  
  // Function to initialize Firebase UI
  function initFirebaseUI() {
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start('#firebaseui-auth-container', uiConfig);
  }
  
  // Function to update UI based on authentication state
  function updateAuthUI(user) {
    const signinBtn = document.getElementById('signin-btn');
    
    if (user) {
      // User is signed in
      if (signinBtn) {
        signinBtn.textContent = user.displayName || user.email || 'My Account';
      }
      
      // Update user account info if the container exists
      const userAccountInfo = document.getElementById('userAccountInfo');
      const userDisplayName = document.getElementById('userDisplayName');
      const userEmail = document.getElementById('userEmail');
      
      if (userAccountInfo && userDisplayName && userEmail) {
        userAccountInfo.style.display = 'block';
        userDisplayName.textContent = user.displayName || 'User';
        userEmail.textContent = user.email || '';
        
        // Hide Firebase UI when signed in
        const firebaseUIContainer = document.getElementById('firebaseui-auth-container');
        if (firebaseUIContainer) {
          firebaseUIContainer.style.display = 'none';
        }
      }
    } else {
      // User is signed out
      if (signinBtn) {
        signinBtn.textContent = 'SIGN IN';
      }
      
      // Update UI for signed out state if containers exist
      const userAccountInfo = document.getElementById('userAccountInfo');
      const firebaseUIContainer = document.getElementById('firebaseui-auth-container');
      
      if (userAccountInfo) {
        userAccountInfo.style.display = 'none';
      }
      
      if (firebaseUIContainer) {
        firebaseUIContainer.style.display = 'block';
        initFirebaseUI();
      }
    }
  }
  
  // Listen for authentication state changes
  firebase.auth().onAuthStateChanged(function(user) {
    updateAuthUI(user);
  });
  
  // Handle sign out
  document.addEventListener('DOMContentLoaded', function() {
    const signOutButton = document.getElementById('signOutButton');
    if (signOutButton) {
      signOutButton.addEventListener('click', function() {
        firebase.auth().signOut().then(function() {
          console.log('Signed out successfully');
        }).catch(function(error) {
          console.error('Sign out error:', error);
        });
      });
    }
    
    // Set up modal for sign in
    const signinBtn = document.getElementById('signin-btn');
    const signinModal = document.getElementById('signinModal');
    const closeSigninModal = document.getElementById('closeSigninModal');
    
    if (signinBtn && signinModal) {
      signinBtn.addEventListener('click', function(e) {
        e.preventDefault();
        signinModal.style.display = 'block';
        
        // Check if user is already signed in
        const user = firebase.auth().currentUser;
        if (!user) {
          initFirebaseUI();
        }
      });
    }
    
    if (closeSigninModal && signinModal) {
      closeSigninModal.addEventListener('click', function() {
        signinModal.style.display = 'none';
      });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === signinModal) {
        signinModal.style.display = 'none';
      }
    });
  });