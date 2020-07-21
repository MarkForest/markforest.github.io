$(function () {
   // Click play button
   let video = document.querySelector('.video video');
   $('.video__button, .video__image').on('click', (e)=>{
       video.play();
       $('.video__wrap').fadeOut();
       $(video).attr('controls', 'on');
   });
   $(video).on('pause', () => {
       $('.video__wrap').fadeIn();
   });
    $(video).on('play', () => {
        $('.video__wrap').fadeOut();
    });
});