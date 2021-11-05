$(function () {
    $('.content__view-btn').on('click', function () {
        $('.content__view-btn').removeClass('content__view-btn--active');
        $(this).addClass('content__view-btn--active')
    });

    $('.button-grid').on('click', function() {
        $('.content__item').addClass('content__item--grid');
    });

    $('.button-list').on('click', function() {
        $('.content__item').removeClass('content__item--grid');
    });

    $('.button-grid').on('click', function() {
        $('.content__img').addClass('content__item--grid');
    });

    $('.button-list').on('click', function() {
        $('.content__img').removeClass('content__item--grid');
    });

    $('.button-grid').on('click', function() {
        $('.content__items').addClass('content__item--grid');
    });

    $('.button-list').on('click', function() {
        $('.content__items').removeClass('content__item--grid');
    });

    $('.button-grid').on('click', function() {
        $('.content__item-info').addClass('content__item--grid');
    });

    $('.button-list').on('click', function() {
        $('.content__item-info').removeClass('content__item--grid');
    });

    $('.button-grid').on('click', function() {
        $('.content__item-info-upload-list').addClass('content__item--grid');
    });

    $('.button-list').on('click', function() {
        $('.content__item-info-upload-list').removeClass('content__item--grid');
    });

    $('.button-grid').on('click', function() {
        $('.content__item-info-upload-grid').addClass('content__item--grid');
    });

    $('.button-list').on('click', function() {
        $('.content__item-info-upload-grid').removeClass('content__item--grid');
    });


});



$(function () {
    var dateFormat = "dd/mm/yy",
        from = $("#from")
            .datepicker({
                dateFormat: "dd/mm/yy",
                minDate: new Date(17, 02, 2016),
                showButtonPanel: true,
                showAnim: "slideDown",
            })
            .on("change", function () {
                to.datepicker("option", "dateFormat", "dd/mm/yy", "minDate", new Date(17, 02, 2016), "showButtonPanel", "showAnim", getDate(this));
            }),
        to = $("#to").datepicker({
            showButtonPanel: true,
            showAnim: "slideDown",
        })
            .on("change", function () {
                from.datepicker("option", "dateFormat", "dd/mm/yy", "showButtonPanel", "showAnim", getDate(this));
            });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }

        return date;
    }
});