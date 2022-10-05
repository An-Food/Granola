function hideElement(target) {
  target.animate({
    opacity: "-=1"
  }, 500, function() {
    target.hide();
  });
}

function showElement(target) {
  target.animate({
    opacity: "+=1"
  }, 500, function() {
    target.show();
  });
}

$(document).ready(function(){
    // Chuyen trang
    $('.product-list-main').hide();
    $('#product-page').on('click', function(){
      $('#home-page').removeClass('focus');
      $('#product-page').addClass('focus');
      hideElement($('.home-main'));
      showElement($('.product-list-main'));
    })

    $('#home-page').on('click', function(){
      $('#product-page').removeClass('focus');
      $('#home-page').addClass('focus');
      hideElement($('.product-list-main'));
      showElement($('.home-main'));
    })

    // Slider
    var count_group = $(".slider .item").length;
    var active = 0;
    var begin= true;
    function Load(){

        if(begin){
            begin = false;
        }else{
            $('#item_'+(active - 2 < -1 ? count_group - 2 : active - 2 < 0 ? count_group -1 : active - 2)).removeClass('hide');
            $('#item_'+(active - 1 < 0 ? count_group - 1 : active - 1)).removeClass('active');
            $('#item_'+(active - 1 < 0 ? count_group - 1 : active - 1)).addClass('hide');
        }

        $('#item_'+active).removeClass('hide');
        $('#item_'+active).addClass('active');
    }
    Load();
    setInterval(function () {        
        active = active + 1 >= count_group ? 0 : active + 1;
        Load();        
    }, 5000);

    // 
    // San pham trang chu
    // 
    var count_group_product = $(".list .item_product").length;
  var active_product = 0;
  function Load_product(){
    var bg =  $('#item_product_'+ active_product).data('bg');

    $('#item_product_'+(active_product - 1 < 0 ? count_group_product - 1 : active_product - 1)).removeClass('item_product_active');
    $('#item_product_'+(active_product - 1 < 0 ? count_group_product - 1 : active_product - 1)).addClass('item_product_none');

    $('#item_product_'+active_product).removeClass('item_product_none');
    $('#item_product_'+active_product).addClass('item_product_active');
    $('.bg-rotate').css('background', bg);

    $('.dot div').removeClass('active_dot');
    $('#dot_'+active_product).addClass('active_dot');

    // content
    $('#content_product_'+active_product).css('opacity',1);
    $('#content_product_'+active_product).css('left',0);
    $('#content_product_'+(active_product-1 < 0 ? count_group_product - 1 : active_product - 1 )).css('left','-100%');
    $('#content_product_'+(active_product-1 < 0 ? count_group_product - 1 : active_product  -1 )).css('opacity','0');
    $('#content_product_'+(active_product - 2 == -1 ? count_group_product - 1 :active_product - 2 == -2 ? count_group_product - 2 : active_product - 2)).css('left','100%');
  }
  
  Load_product();
  $('#next').on('click', function(){
    active_product = active_product + 1 >= count_group_product ? 0 : active_product + 1;
    Load_product();
  })
  $('#prev').on('click', function(){
    active_product = active_product - 1 < 0 ? count_group_product - 1 : active_product - 1;
    Load_product();
  })


  // modal code
  $('.modal').hide();  
  $('.btn-buy').on('click', function(){
    $('.modal').show();
  })

  $('.btn-back').on('click', function(){
    $('.modal').hide();
  })
});
