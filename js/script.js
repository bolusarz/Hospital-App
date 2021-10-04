// api call will be made here

$( document ).ready(function() {
    $('.js-dashboard').on('click', function(){
        $('.js-dashboard-page').removeClass('d-none');
        $('.js-dashboard').removeClass('active');
        $('.js-review-visits-page').addClass('d-none');
        $('.js-review-visits').addClass('active');
    });

    $('.js-review-visits').on('click', function(){
        $('.js-dashboard-page').addClass('d-none');
        $('.js-dashboard').addClass('active');
        $('.js-review-visits-page').removeClass('d-none');
        $('.js-review-visits').removeClass('active');
    });

});