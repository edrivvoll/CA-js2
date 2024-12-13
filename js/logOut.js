export function logOut() {
    const logOutBtn = document.getElementById('logout');
    
    if (logOutBtn) {
        logOutBtn.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.clear();
            window.location.replace('../index.html');
        });
    } else {
        console.error('Logout button not found!');
    }
}