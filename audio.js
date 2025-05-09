$('.audio-image-one').on('click', function () {
    $(this).addClass('d-none');
    $('.audio-image-two').removeClass('d-none');
    document.getElementById('audio').pause();
});

$('.audio-image-two').on('click', function () {
    $(this).addClass('d-none');
    $('.audio-image-one').removeClass('d-none');
    document.getElementById('audio').play();
});