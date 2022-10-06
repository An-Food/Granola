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
      $("html, body").animate({
        scrollTop: 0
    }, 600);
    })

    $('#home-page').on('click', function(){
      $('#product-page').removeClass('focus');
      $('#home-page').addClass('focus');
      hideElement($('.product-list-main'));
      showElement($('.home-main'));
      $("html, body").animate({
        scrollTop: 0
    }, 600);
    })

    $('.btn-sale').on('click', function(){
      $('#home-page').removeClass('focus');
      $('#product-page').addClass('focus');
      hideElement($('.home-main'));
      showElement($('.product-list-main'));
      $("html, body").animate({
        scrollTop: 0
    }, 600);
    })

    $('.banner_img').on('click', function(){
      $('#home-page').removeClass('focus');
      $('#product-page').addClass('focus');
      hideElement($('.home-main'));
      showElement($('.product-list-main'));
      $("html, body").animate({
        scrollTop: 0
    }, 600);
    })

    // Thả tim
    
    $('.btn-heart_0').click(function(){
      $('.btn-heart_0').toggleClass('btn-hearted');
    })

    $('.btn-heart_1').click(function(){
      $('.btn-heart_1').toggleClass('btn-hearted');
    })

    $('.btn-heart_2').click(function(){
      $('.btn-heart_2').toggleClass('btn-hearted');
    })

    $('.like_0').click(function(){
      $('.like_0').toggleClass('home-product-item__liked');
    })

    $('.like_1').click(function(){
      $('.like_1').toggleClass('home-product-item__liked');
    })

    $('.like_2').click(function(){
      $('.like_2').toggleClass('home-product-item__liked');
    })

    $('.like_3').click(function(){
      $('.like_3').toggleClass('home-product-item__liked');
    })

    $('.like_4').click(function(){
      $('.like_4').toggleClass('home-product-item__liked');
    })

    $('.like_5').click(function(){
      $('.like_5').toggleClass('home-product-item__liked');
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
  $('.btn-login_signup').on('click', function(){
    $('.auth-form__input').val('');
    $('.modal-container').css("display", "block");
  })

  $('.btn-close').on('click', function(){
    $('.modal-container').css("display", "none");
    $('.password_forgot').css("display", "none");
    $('.auth-form__help--forgot').css("display", "block");
  })

  $('.modal__overlay').click(function(){
    $('.modal-container').css("display", "none");
    $('.password_forgot').css("display", "none");
    $('.auth-form__help--forgot').css("display", "block");
  }) 

  // quên password
  $('.auth-form__help--forgot').click(function(){
    $('.password_forgot').css("display", "block");
    $('.auth-form__help--forgot').css("display", "none");
  })

  // Tạo tài khoản
  var m = 0;
  const user_name = [];
  const password = [];
  const email = [];
  $('.btn-signup').click(function(){
    var F = 0;       
        if(!$('.auth-form__input-username').val()){
            $('.auth-form__input-username').addClass("empty_field");
            $('.auth-form__input-username').attr("placeholder", "Không được để trống!");        
            F = 1;    
        }    

        if(!$('.auth-form__input-email').val()){
            $('.auth-form__input-email').addClass("empty_field");
            $('.auth-form__input-email').attr("placeholder", "Không được để trống!");
            F = 1;
            
        }

        if(!$('.auth-form__input-password').val()){
            $('.auth-form__input-password').addClass("empty_field");
            $('.auth-form__input-password').attr("placeholder", "Không được để trống!");        
            F = 1;    
        }

        if(!$('.auth-form__input-repassword').val()){
            $('.auth-form__input-repassword').addClass("empty_field");
            $('.auth-form__input-repassword').attr("placeholder", "Không được để trống!");     
            F = 1;       
        }
        
        if(m >0){
            for(let i=0; i<m; i++){
                if($('.auth-form__input-email').val() == user_name[i]){
                    $('.auth-form__input-email').addClass("empty_field");
                    $('.auth-form__input-email').val('');
                    $('.auth-form__input-email').attr("placeholder", "Tên tài khoản này đã được sử dụng!");
                    F = 1;
                }
                if($('.auth-form__input-email').val() == email[i]){
                  $('.auth-form__input-email').addClass("empty_field");
                  $('.auth-form__input-email').val('');
                  $('.auth-form__input-email').attr("placeholder", "Email này đã được sử dụng!");
                  F = 1;
                }
            }
        }

        if($('.auth-form__input-repassword').val() != $('.auth-form__input-password').val()){
            $('.auth-form__input-repassword').addClass("empty_field");
            $('.auth-form__input-repassword').val('');
            $('.auth-form__input-repassword').attr("placeholder", "Mật khẩu nhập lại không giống!");  
            F = 1;   
        }

        if(F == 0){
            user_name[m] = $('.auth-form__input-username').val();
            password[m] = $('.auth-form__input-password').val(); 
            email[m] = $('.auth-form__input-emmail').val(); 
            m++;
            alert("Đăng ký thành công!");  
            $('.modal-container').css("display", "none");
            $('.password_forgot').css("display", "none");
            $('.auth-form__help--forgot').css("display", "block");
        }
  })

});
