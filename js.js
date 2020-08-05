document.addEventListener("DOMContentLoaded", function () {
    $(function () {
        $('img.img-child').hover(function () {
            let img = $(this).attr('src');
            $('img#img-main').attr('src', img);
        })
    })
    // $(function () {
    //     $('.header__navbar-item--register').click(function () {
    //         $('.header__navbar-register').addClass('header__navbar-register--open');
    //         $('.header__overlay').addClass('header__overlay-open');
    //     })
    //     $('.register__close').click(function () {
    //         $('.header__navbar-register').removeClass('header__navbar-register--open');
    //         $('.header__overlay').removeClass('header__overlay-open');
    //     })
    //     $('.header__navbar-item--logIn').click(function () {
    //         $('.header__navbar-logIn').addClass('header__navbar-logIn--open');
    //         $('.header__overlay').addClass('header__overlay-open');
    //     })
    //     $('.logIn__close').click(function () {
    //         $('.header__navbar-logIn').removeClass('header__navbar-logIn--open');
    //         $('.header__overlay').removeClass('header__overlay-open');
    //     })
    // })

}, false)
$(function (){
    // navbar hiện khi scroll xuống
    $(window).scroll(function () {
        if($(this).scrollTop()>250){
            $('.header__navbar-2').addClass('header__navbar-2-add');
            $('.scrolltotop').addClass('scrolltotop__show');

        }
        else{
            $('.header__navbar-2').removeClass('header__navbar-2-add');
            $('.scrolltotop').removeClass('scrolltotop__show');

         }
    });
    // scroll to top
    $('.scrolltotop').click(function () { 
        $('html,body').animate({scrollTop:0}, 500);
    });

});

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      
      }
      document.getElementById("result").innerHTML = localStorage.clickcount;
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }
  function clickCounterr() {
    if(typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)-1;

      }
      document.getElementById("result").innerHTML = localStorage.clickcount;
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

console.log("alo");



    // Định nghĩa một mảng các phần tử sẽ bỏ vào giỏ hàng
    var shoppingCartItems = [];

    $(document).ready(function () {
        // Kiểm tra nếu đã có sessionStorage["shopping-cart-items"] hay chưa?
        if (sessionStorage["shopping-cart-items"] != null) {
            shoppingCartItems = JSON.parse(sessionStorage["shopping-cart-items"].toString());
        }
        // Hiển thị thông tin từ giỏ hàng
      

        displayShoppingCartItems();
        

    });


    // Sự kiện click các button có class=".add-to-cart"
    $(".add-to-cart").click(function () {
        var button = $(this); // Lấy đối tượng button mà người dùng click
        var id = button.attr("id"); // id của sản phẩm là id của button
        var name = button.attr("data-name"); // name của sản phẩm là thuộc tính data-name của button
        var price =  button.attr("data-price"); // price của sản phẩm là thuộc tính data-price của button
        var img = button.attr("image")
        var quantity = 1; // Số lượng


        var item = {
            id: id,
            name: name,
            price: price,
            quantity: quantity,
            img: img,
        };

        var exists = false;
        if (shoppingCartItems.length > 0) {
            $.each(shoppingCartItems, function (index, value) {
                // Nếu mặt hàng đã tồn tại trong giỏ hàng thì chỉ cần tăng số lượng mặt hàng đó trong giỏ hàng.
                if (value.id == item.id) {
                    value.quantity++;
                    exists = true;
                    return false;
                }
            });
        }

        // Nếu mặt hàng chưa tồn tại trong giỏ hàng thì bổ sung vào mảng
        if (!exists) {
            shoppingCartItems.push(item);
        }

        // Lưu thông tin vào sessionStorage
        sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems); // Chuyển thông tin mảng shoppingCartItems sang JSON trước khi lưu vào sessionStorage
        // Gọi hàm hiển thị giỏ hàng
        displayShoppingCartItems();
    });

    // Xóa hết giỏ hàng shoppingCartItems
    $("#button-clear").click(function () {
        shoppingCartItems = [];
        sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems);
        $("#table-products > tbody").html("");
    });


    // Hiển thị giỏ hàng ra table
    function displayShoppingCartItems() {
        if (sessionStorage["shopping-cart-items"] != null) {
            shoppingCartItems = JSON.parse(sessionStorage["shopping-cart-items"].toString()); // Chuyển thông tin từ JSON trong sessionStorage sang mảng shoppingCartItems.

            $("#table-products > tbody").html("");
            // Duyệt qua mảng shoppingCartItems để append từng item dòng vào table

            $.each(shoppingCartItems, function (index, item) {
                var htmlString = "";
                htmlString += "<tr>";
                htmlString += "<td>" + item.id + "</td>";
                htmlString += "<td>" + item.name + "</td>";
                htmlString += "<td style='text-align: right'>" + item.price + "</td>";
                htmlString += "<td style='text-align: right'>" + item.quantity + "</td>";
                htmlString += "<td style='text-align: right'>" + item.price * item.quantity + "</td>";
                
                
                htmlString += "</tr>";
               
                  
                
                $("#table-products > tbody:last").append(htmlString);
                

            });
        }
    }

    // Tổng giá tiền 
function getvalue(value){
    var x=10;
    x++;
    x+=x;

    var data = Math.random();
    var data1 = value;
    localStorage.setItem(data,data1);
    
        
    
}
function deletelocal(){
    localStorage.clear();
    location.reload();
    return false;

}
for(var i = 0;i<localStorage.length;i++ ){
    document.getElementById("showdata").value += "+" + localStorage.getItem(localStorage.key(i)) ;
    var exp = document.getElementById("showdata").value;

    if(exp){
        document.getElementById("showdata").value = eval(exp) ;
    }  
}

