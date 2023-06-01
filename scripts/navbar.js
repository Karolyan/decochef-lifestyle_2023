           // navlist
           $('#hamburger').click(function (e) {
            e.preventDefault();
            $('#hamburger').toggleClass('active');
            $('.dropdown').slideToggle(1000);
            $('.dropdown-search').css("display", "none");
        });

        $('#searchicon').click(function (e) {
            e.preventDefault();
            $('#searchicon').toggleClass('active');
            $('.dropdown-search').slideToggle(500);
            $('.dropdown').css("display", "none");
        });


        function calcCartItems(cartData){
        let count = 0;
        for(let s in cartData){
        const item = cartData[s];
        count += +item.quantity;
        }
        document.querySelector('.cart-num').innerHTML = count;
        }

        fetch(`cart-api.php`)
        .then(r => r.json())
        .then(cart => {
            calcCartItems(cart.data);
        });