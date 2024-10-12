document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('imageModal');
    var img = document.getElementById('portrait');
    var modalImg = document.getElementById('modalImage');
    var closeBtn = document.getElementsByClassName('close')[0];

    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        document.body.classList.add('modal-open');
    }

    closeBtn.onclick = closeModal;

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.classList.remove('modal-open');
    }
});

