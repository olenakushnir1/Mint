 $(document).ready(function () {
     if ($(window).width() > 768) {
         function animate2() {
             //             animate for first page on desctop
             $('.phoneDes').addClass('fadeInPhone');
             $('.imgIcon').addClass('fadeIn31');
             $('.imgIcom2').addClass('fadeIn31');
             $('.imgTextFirst').addClass('fadeIn11');
         }
         setTimeout(animate2(), 0);
      
     }
     else {
         function animate3() {
             //             animate for phone on mobile
             $('.center').addClass('fadeInPhone1');
             $('.imgTextFirst').addClass('fadeInPhone');
             $('.phoneDes').addClass('fadeInPhone');
         };
         setTimeout(animate3(), 0);
         $(window).scroll(function () {
             $('.left').each(function (index, value) {
                 // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
                 if ($(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) && $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)) {
                     //                     animate fot rectangle on mobile
                     function animate4() {
                          $('.left .bottom').addClass('fadeInRightTop');
                         $('.left .top').addClass('fadeInLeftTop');
                         $('.right .top').addClass('fadeInLeftBottom');
                         $('.right .bottom').addClass('fadeInRightBottom');
                        
                     }
                     setTimeout(animate4(), 0);
                 }
             });
         }).trigger('scroll');
         $(window).scroll(function () {
             $('.pageTwo').each(function (index, value) {
                 // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
                 if ($(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) && $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)) {
                     //    animate fot third page for mobile                 
                     function animate4() {
                         $('.pageTwo .pageTwo_P').addClass('fadeInOne');
                         $('.cloud').addClass('fadeInTwo');
                         $('.pageTwo input').addClass('fadeInTwo');
                         $('.pageTwo span').addClass('fadeInTwo');
                         $('.iconBox').addClass('fadeInIconBox1');
                         $('.Icon11').addClass('fadeInIconBox1');
                     $('.Icon21').addClass('fadeInIconBox1');
                     $('.Icon31').addClass('fadeInIconBox1');
                     $('.Icon41').addClass('fadeInIconBox1');
                     $('.Icon51').addClass('fadeInIconBox1');
                     $('.Icon6').addClass('fadeInIconBox1');
                     $('.Icon52').addClass('fadeInIconBox1');
                     $('.Icon42').addClass('fadeInIconBox1');
                     $('.Icon32').addClass('fadeInIconBox1');
                     $('.Icon22').addClass('fadeInIconBox1');
                     $('.Icon12').addClass('fadeInIconBox1');
                         //                             
                     }
                     setTimeout(animate4(), 0);
                 }
             });
         }).trigger('scroll');
         $(window).scroll(function () {
             $('.pageThree').each(function (index, value) {
                 // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
                 if ($(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) && $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)) {
                     //                     
                     function animate4() {
                         $('.rightFoter img').addClass('fadeInOne');
                         $('.rightFoter p').addClass('fadeInTwo');
                         $('.rightFoter span').addClass('fadeInIconBox1');
                         $('.leftFoter .getApp').addClass('fadeInIconBox2');
                         $('.leftFoter span').addClass('fadeInIconBox3');
                         //                             
                     }
                     setTimeout(animate4(), 0);
                 }
             });
         }).trigger('scroll');
     }
     $(window).scroll(function () {
         $('.pageTwo .pageTwo_P').each(function (index, value) {
             // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
             if ($(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) && $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)) {
                 function animate1() {
                     $('.Icon11').addClass('fadeIn1');
                     $('.Icon21').addClass('fadeIn2');
                     $('.Icon31').addClass('fadeIn3');
                     $('.Icon41').addClass('fadeIn4');
                     $('.Icon51').addClass('fadeIn5');
                     $('.Icon6').addClass('fadeIn6');
                     $('.Icon52').addClass('fadeIn5');
                     $('.Icon42').addClass('fadeIn4');
                     $('.Icon32').addClass('fadeIn3');
                     $('.Icon22').addClass('fadeIn2');
                     $('.Icon12').addClass('fadeIn1');
                 }
                 setTimeout(animate1(), 0);
             }
         });
     }).trigger('scroll');
 })