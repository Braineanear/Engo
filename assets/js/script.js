$(document).ready(function () {
    $(".open-menu").on("click", function () {
        $(".overlay").addClass("open");
        $(".overlay ul li").css("display","inline-block");
        $(".overlay ul li a").css("opacity","1");
    });
    $(".close-menu").on("click", function () {
        $(".overlay").removeClass("open");
        $(".overlay ul li").css("display","none");
    });
    var e = 0;
    $(window).scroll(function () {
        (e = $(window).scrollTop()) >= 100 ? $(".navbar").addClass("scrolling") : e < 100 && $(".navbar").removeClass("scrolling")
    });
    document.querySelectorAll(".blog").forEach(e => {
        const l = e.querySelector(".blog-head"),
            o = e.querySelector(".blog-image"),
            n = e.querySelector(".blog-author"),
            r = e.querySelector(".blog-body"),
            t = e.querySelector(".blog-footer");
        e.onmouseenter = (() => {
            e.classList.add("hover");
            const a = 1 + ((e, l, o) => {
                const n = e.getBoundingClientRect()[o];
                return l.getBoundingClientRect()[o] / n
            })(l, r, "height");
            o.style.transform = `scale(${a})`;
            const c = -1 * (e => e.getBoundingClientRect().height)(t);
            r.style.transform = `translateY(${c}px)`;
            const s = ((e, l, o) => {
                const n = e.getBoundingClientRect()[o];
                return l.getBoundingClientRect()[o] - n
            })(l, n, "height");
            n.style.transform = `translateY(${s}px)`
        }), e.onmouseleave = (() => {
            e.classList.remove("hover"), o.style.transform = "none", r.style.transform = "none", n.style.transform = "none"
        })
    });
    ScrollReveal().reveal(".spliter", {
        distance: "0px"
    });
    ScrollReveal().reveal("a", {
        distance: "0px"
    });
    ScrollReveal().reveal("p", {
        distance: "0px"
    });
    ScrollReveal().reveal("img", {
        distance: "0px"
    });
    ScrollReveal().reveal("h1", {
        distance: "0px"
    });
    ScrollReveal().reveal("h3", {
        distance: "0px"
    });
    ScrollReveal().reveal("h4", {
        distance: "0px"
    });
    ScrollReveal().reveal("hr", {
        distance: "0px"
    });
    ScrollReveal().reveal(".rating", {
        distance: "0px"
    });
    ScrollReveal().reveal("small", {
        distance: "0px"
    });
      
})