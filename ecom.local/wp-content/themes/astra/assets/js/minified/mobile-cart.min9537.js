(()=>{var c=document.getElementById("astra-mobile-cart-drawer"),e=document.getElementById("masthead"),a=astra_cart.responsive_cart_click;if(e){var o,n="",r=e.querySelector("#ast-mobile-header"),d="",i=(void 0!==c&&""!==c&&null!==c&&(n=c.querySelector(".widget_shopping_cart.woocommerce"),d=c.querySelector(".widget_edd_cart_widget")),cartFlyoutOpen=function(e){"redirect"===a&&document.body.classList.contains("ast-header-break-point")||(e.preventDefault(),"woocommerce"===(e=e.currentTarget.cart_type)&&document.body.classList.contains("woocommerce-cart"))||(c.classList.remove("active"),c.classList.remove("woocommerce-active"),c.classList.remove("edd-active"),void 0!==c&&""!==c&&null!==c&&(c.classList.add("active"),document.documentElement.classList.add("ast-mobile-cart-active"),void 0!==d&&""!==d&&null!==d&&(d.style.display="block","woocommerce"===e)&&(d.style.display="none",c.classList.add("woocommerce-active")),void 0!==n)&&""!==n&&null!==n&&(n.style.display="block","edd"===e)&&(n.style.display="none",c.classList.add("edd-active")),document.dispatchEvent(new CustomEvent("astra_on_slide_In_cart_open",{detail:{}})))},cartFlyoutClose=function(e){e.preventDefault(),void 0!==c&&""!==c&&null!==c&&(c.classList.remove("active"),document.documentElement.classList.remove("ast-mobile-cart-active"))},document.querySelector(".ast-slidein-cart")&&document.querySelector(".ast-slidein-cart").addEventListener("click",e=>{document.querySelector("#astra-mobile-cart-drawer").classList.add("active"),document.querySelector("html").classList.add("ast-mobile-cart-active"),e.preventDefault()}),window.innerWidth);window.addEventListener("resize",function(){var e,t=document.querySelector(".astra-cart-drawer-close");void 0!==t&&""!==t&&null!==t&&"INPUT"!==document.activeElement.tagName&&c.classList.contains("active")&&(e=window.innerWidth)!==i&&(i=e,t.click())}),window.addEventListener("load",function(){s()}),document.addEventListener("astLayoutWidthChanged",function(){s()}),document.addEventListener("astPartialContentRendered",function(){s()});let t=window.innerWidth;function s(){var e,t,a;document.addEventListener("keyup",function(e){27===e.keyCode&&(e.preventDefault(),c.classList.remove("active"),document.documentElement.classList.remove("ast-mobile-cart-active"),updateTrigger())}),document.addEventListener("click",function(e){e.target===document.querySelector(".ast-mobile-cart-active .astra-mobile-cart-overlay")&&(c.classList.remove("active"),document.documentElement.classList.remove("ast-mobile-cart-active"))}),void 0!==r&&""!==r&&null!==r&&(e="flyout"==astra_cart.desktop_layout?document.querySelectorAll(".ast-mobile-header-wrap .ast-header-woo-cart, #ast-desktop-header .ast-desktop-cart-flyout"):document.querySelectorAll(".ast-mobile-header-wrap .ast-header-woo-cart"),t=document.querySelector(".ast-mobile-header-wrap .ast-header-edd-cart"),a=document.querySelector(".astra-cart-drawer-close"),0<e.length&&e.forEach(function(e){void 0!==e&&""!==e&&null!==e&&c&&(e.addEventListener("click",cartFlyoutOpen,!1),e.cart_type="woocommerce")}),void 0!==t&&""!==t&&null!==t&&c&&(t.addEventListener("click",cartFlyoutOpen,!1),t.cart_type="edd"),void 0!==a)&&""!==a&&null!==a&&a.addEventListener("click",cartFlyoutClose,!1)}window.addEventListener("resize",function(){let e=window.innerWidth;clearTimeout(o),o=setTimeout(function(){s(),t!==e&&document.dispatchEvent(new CustomEvent("astLayoutWidthChanged",{detail:{response:""}})),t=e},50)})}})();