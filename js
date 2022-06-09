$(document).ready(function () {
    var $imagesCarousel = $(".carouselOfImages").flickity({
        contain: true,
        autoPlay: true,
        wrapAround: true,
        friction: 0.3,
    })
    function resizeCells() {
        var flkty = $imagesCarousel.data("flickity")
        var $current = flkty.selectedIndex
        var $length = flkty.cells.length
        if ($length <= "5") {
            $imagesCarousel.flickity("destroy")
        }
        $(".carouselOfImages .carouselImage").removeClass("nextToSelected")
        $(".carouselOfImages .carouselImage")
            .eq($current - 1)
            .addClass("nextToSelected")
        if ($current + 1 == $length) {
            var $endCell = "0"
        } else {
            var $endCell = $current + 1
        }
        $(".carouselOfImages .carouselImage").eq($endCell).addClass("nextToSelected")
    }
    resizeCells()

    $imagesCarousel.on("scroll.flickity", function () {
        resizeCells()
    })

    $(".carouselImage img").click(function () {
        var $this = $(this)
        var imageID = $this.attr("data-tab")
        var imageSrc = $this.attr("src")

        $("." + imageID).removeClass("hide")
        $("." + imageID + " .product-detail-image img").attr("src", imageSrc)
    })

    $(".product-detail-close,.product-detail").on("click", function () {
        $(".product-detail").addClass("hide")
    })

    $(".modal-video").on("hidden.bs.modal", function (e) {
        $(".modal-video iframe").attr("src", $(".modal-video iframe").attr("src"))
    })

    autoPlayYouTubeModal()

    function autoPlayYouTubeModal() {
        var trigger = $("body").find("[data-the-video]")
        trigger.click(function () {
            var theModal = $(this).data("target"),
                videoSRC = $(this).attr("data-the-video"),
                videoSRCauto = videoSRC + "&autoplay=1"
            $(theModal + " iframe").attr("src", videoSRCauto)
            $(theModal + " button.close").click(function () {
                $(theModal + " iframe").attr("src", videoSRC)
            })
            $(".modal-video").click(function () {
                $(theModal + " iframe").attr("src", videoSRC)
            })
        })
    }

    $(window).on("load resize", function () {
        var $window = $(window)
        $(".modal-fill-vert .modal-body > *").height(function () {
            return $window.height() - 60
        })
    })
})
