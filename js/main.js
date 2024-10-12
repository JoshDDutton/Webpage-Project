document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('imageModal');
    var img = document.getElementById('portrait');
    var modalImg = document.getElementById('modalImage');
    var closeBtn = document.getElementsByClassName('close')[0];
    var blurOverlay = document.getElementById('blurOverlay');

    img.onclick = function() {
        modal.style.display = "block";
        blurOverlay.style.display = "block";
        modalImg.src = this.src;
    }

    closeBtn.onclick = closeModal;

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    function closeModal() {
        modal.style.display = "none";
        blurOverlay.style.display = "none";
    }
});
