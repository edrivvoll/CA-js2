export function goToCreatePost() {
    const goToCreatePostBtn = document.getElementById('go-to-create-post');

    if (goToCreatePostBtn) {
        goToCreatePostBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.replace('/profile/create-post.html');
        })
    }
}