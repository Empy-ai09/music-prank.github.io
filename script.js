document.addEventListener('DOMContentLoaded', function() {
    const album = document.querySelector('.album');
    
    // Menambahkan animasi saat halaman dimuat
    album.style.opacity = 0;
    setTimeout(() => {
        album.style.transition = 'opacity 1s';
        album.style.opacity = 1;
    }, 100);

    // Menambahkan efek animasi pada hover
    album.addEventListener('mouseover', function() {
        album.style.transform = 'scale(1.1)';
    });

    album.addEventListener('mouseout', function() {
        album.style.transform = 'scale(1)';
    });
});
