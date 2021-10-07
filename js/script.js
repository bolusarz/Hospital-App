// api call will be made here

$( document ).ready(function() {
    let pages = ['js-dashboard'];


    $('.js-dashboard, .nav-page').on('click', function(){
        $('.js-dashboard-page').removeClass('d-none');
        $('.js-dashboard').addClass('active');
        $('.js-review-visits-page').addClass('d-none');
        $('.js-review-visits').removeClass('active');
        
    });

    $('.js-review-visits').on('click', function(){
        $('.js-dashboard-page').addClass('d-none');
        $('.js-dashboard').removeClass('active');
        $('.js-review-visits-page').removeClass('d-none');
        $('.js-review-visits').addClass('active');

        getReviewVisits();
    });


    let baseUrl = 'https://chioma.herokuapp.com/v1';

    let data = {
        
    }

    function getReviewVisits(){
        $.ajax({
            url: `${baseUrl}/visit`,
            type: 'POST',
            dataType: 'json', // added data type
            success: function(res) {
                console.log(res);
                alert(res);
            }
        });
    }
});