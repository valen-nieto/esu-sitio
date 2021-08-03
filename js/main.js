document.addEventListener("DOMContentLoaded", function() {

    function navResponsive() {

        const burgerMenuBtn = document.querySelector("#burger-menu-button");
        const menuItems = document.querySelectorAll(".menu-item");

        burgerMenuBtn.addEventListener("click", function() {
            document.body.classList.toggle("mobile-menu-active");
        });

        menuItems.forEach(function(menuItem) {

            menuItem.addEventListener("click", function() {
                document.body.classList.remove("mobile-menu-active");

                let currentItem = document.querySelector(".active");
                currentItem.classList.remove("active");
                this.classList.add("active");
            });
        });
    }

    navResponsive();

});