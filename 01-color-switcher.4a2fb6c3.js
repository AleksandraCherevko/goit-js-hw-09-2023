const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.disabled=!1,e.disabled=!0;const o=document.querySelector("body");let l=null;function n(){o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){console.log("Call onBtnStartClick every 1000 ms"),l=setInterval(n,1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(l),console.log("Interval has stopped!")}));
//# sourceMappingURL=01-color-switcher.4a2fb6c3.js.map