import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css'
import '../src/css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all.min';

$(function() {

    $('[data-toggle="tooltip"]').tooltip();
    $('.add-to-cart-btn').on( "click",function() {
        alert('أضيف المُنتج إلى عربة الشراء');
    });
    $('#copyright').text("جميع الحقوق محفوظة للمتجر سنة " + new Date().getFullYear());

});