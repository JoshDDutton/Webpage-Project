document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('imageModal');
    var img = document.getElementById('portrait');
    var modalImg = document.getElementById('modalImage');
    var closeBtn = document.getElementsByClassName('close')[0];
    var contentWrapper = document.querySelector('.content-wrapper');

    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        contentWrapper.style.filter = 'blur(5px)';
    }

    closeBtn.onclick = closeModal;

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    function closeModal() {
        modal.style.display = "none";
        contentWrapper.style.filter = 'none';
    }
});
