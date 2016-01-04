if (Meteor.isClient) {
    Template.Carousel.onRendered(function () {
      this.$('#carousel').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          swipeToSlide: true,
          touchThreshold: 8,
          centerMode: true,
          responsive: [
             {
                  breakpoint: 980,
                  settings: {
                      arrows: false,
                      slidesToShow: 2
                  }
              },
              {
                  breakpoint: 600,
                  settings: {
                      arrows: false,
                      slidesToShow: 1,
                  }
              }
          ]
      });
    });




    // Template.Carousel.onRendered(function () {
    //   this.$('#carousel').slick({
    //     dots: true,
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     responsive: [
    //     {
    //      breakpoint: 1024,
    //      settings: {
    //        slidesToShow: 3,
    //        slidesToScroll: 3,
    //        infinite: true,
    //        dots: true
    //      }
    //     },
    //     {
    //      breakpoint: 600,
    //      settings: {
    //        slidesToShow: 2,
    //        slidesToScroll: 2
    //      }
    //     },
    //     {
    //      breakpoint: 480,
    //      settings: {
    //        slidesToShow: 1,
    //        slidesToScroll: 1
    //      }
    //     }
    //     // You can unslick at a given breakpoint now by adding:
    //     // settings: "unslick"
    //     // instead of a settings object
    //     ]
    //   });
    // });

}

if (Meteor.isServer) {

}
