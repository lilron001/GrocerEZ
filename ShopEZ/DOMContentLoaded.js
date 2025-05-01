document.addEventListener('DOMContentLoaded', function () {
    initAuthSidebar({
        apiKey: "YOUR_API_KEY",
        authDomain: "your-project.firebaseapp.com",
        projectId: "your-project-id",
        storageBucket: "your-project.appspot.com",
        messagingSenderId: "your-msg-id",
        appId: "your-app-id",
        onSignInSuccess: (user) => console.log("Signed in:", user.email),
        onSignOutSuccess: () => console.log("Signed out")
    });
});

function showAuth() {
    console.log("Showing auth sidebar..."); // Debug log
    const container = document.getElementById("authSidebarContainer");
    container.style.display = "block";
}

function initAuthSidebar(config) {
    const {
        apiKey,
        authDomain,
        projectId,
        storageBucket,
        messagingSenderId,
        appId,
        sidebarContainerId = "authSidebarContainer",
        onSignInSuccess,
        onSignOutSuccess
    } = config;

    const firebaseConfig = { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth(app);

    // Initialize FirebaseUI
    const ui = new firebaseui.auth.AuthUI(auth);
    const container = document.getElementById(sidebarContainerId);

    // Inject Auth UI and sign out button
    container.innerHTML = `
        <div id="firebaseui-auth-container"></div>
        <button id="signOutButton" class="button" style="display:none; margin-top: 10px;">Sign Out</button>
    `;

    // Start the Firebase UI Auth widget
    ui.start('#firebaseui-auth-container', {
        signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                document.getElementById("signOutButton").style.display = "block";
                if (onSignInSuccess) onSignInSuccess(authResult.user);
                return false; // Prevent redirect
            }
        }
    });

    // Sign out button behavior
    document.getElementById("signOutButton").onclick = function () {
        auth.signOut().then(() => {
            document.getElementById("signOutButton").style.display = "none";
            if (onSignOutSuccess) onSignOutSuccess();
        });
    };
}
function showAuth() {
    document.getElementById("authSidebar").classList.add("active");
  }
  
  function hideAuth() {
    document.getElementById("authSidebar").classList.remove("active");
  }
  