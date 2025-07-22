document.querySelector(".navbar-toggler").addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("show");
});

// Autoplay carousel every 4 seconds
$(document).ready(function () {
  $(".carousel").carousel({
    interval: 4000,
    ride: "carousel",
  });
});

// menandai halaman aktif
$(document).ready(function () {
  var currentPage = location.pathname.split("/").slice(-1)[0];
  $('.navbar-nav a[href="' + currentPage + '"]').addClass("active");
});

// looping untuk foto
$(document).ready(function () {
  // Array yang berisi URL foto-foto dalam galeri
  const fotoGaleri = [
    "img/galeri/Doc1.jpg",
    "img/galeri/Doc2.jpg",
    "img/galeri/Doc3.jpg",
    "img/galeri/Doc4.jpg",
    "img/galeri/Doc5.jpg",
    "img/galeri/Doc6.jpg",
    "img/galeri/Doc7.jpg",
    "img/galeri/Doc8.jpg",
    "img/galeri/Doc9.jpg",
    "img/galeri/Doc10.jpg",
  ];

  const galeriContainer = $("#galeriContainer");

  // Loop untuk memasukkan foto-foto ke dalam galeri
  for (let i = 0; i < fotoGaleri.length; i++) {
    const fotoSrc = fotoGaleri[i];

    // Buat elemen <img> untuk foto
    const imgElement = $("<img>").attr({
      src: fotoSrc,
      alt: "Galeri " + (i + 1),
      class: "galeri-img",
      "data-bs-toggle": "modal",
      "data-bs-target": "#modalFoto",
    });

    // Buat elemen <div> untuk galeri item
    const galeriItem = $("<div>").addClass("galeri-item").append(imgElement);

    // Tambahkan galeri item ke dalam galeri container
    galeriContainer.append(galeriItem);
  }
});

$(document).ready(function () {
  $(".galeri-img").click(function () {
    const imgSrc = $(this).attr("src");
    $("#fotoMelayang").attr("src", imgSrc);
    $("#modalFoto").modal("show");
  });
});
