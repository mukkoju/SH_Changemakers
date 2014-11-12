           var theForm = document.getElementById('theForm');
            new stepsForm(theForm, {
                onSubmit: function (form) {
                    // hide form
                    classie.addClass(theForm.querySelector('.simform-inner'), 'hide');

                    $.ajax({
                        url: '/evntfrm',
                        type: 'post',
                        data: {
                            "name": $('#name').val(),
                            "email": $('#email').val(),
                            "quries": $('#quries').val(),
                            "ph_no": $('#ph_no').val(),
                            "attend-days": $('#attend-days').val(),
                            "updtes": $('#updtes').val(),
                        },
                        success: function (d) {

                        }

                    });
                    var messageEl = theForm.querySelector('.final-message');
                    $('form').hide();
                    $('.share').show();
                    messageEl.innerHTML = 'Thank you! We\'ll be in touch. ';
                    classie.addClass(messageEl, 'show');
                }
            });

            $(function () {
                $('#to-schedule').on('click', function () {
                    
                   // $('section').css("display", "none");
                    // $('.slide-left').css("display", "block");
                    $('section').hide();
                    $('.slide-left').effect("slide", {
                        direction: "left"
                    }, 1000);        
                    initialize();
                    setTimeout(function(){
               $('body').css("background", "#EE5F5F");
                }, 800);
                $('#day1').find('#day1-table').css("color", "rgb(255, 216, 13)");
                    // $("body").css("background-color", "#EE5F5F");

                });
                                    
                $('.slide-left').on('click', '#backto-scdule', function () {
                    $("body").css("background-color", "#00b67c");
                    $('.slide-left').toggle("slide", {
                        direction: "left"
                    }, 1000);
                    $('section').show();
                }); 

                $('#day1').on('click', '#day2-table', function(){
                $('#day1').hide("explode", { pieces: 16 }, 1000);
                $('#day1').hide();
                $('#day2').show("explode", { pieces: 16 }, 2000);
                $('#day2').find('#day2-table').css("color", "rgb(255, 216, 13)");
                });
                $('#day2').on('click', '#day1-table', function(){
                $('#day2').hide("explode", { pieces: 16 }, 1000);
                $('#day1').show("explode", { pieces: 16 }, 2000);
                $('#day1').show();
                $('#day1').find('#day1-table').css("color", "rgb(255, 216, 13)");
                });
             
             //google map
                function initialize() {
                var myLatlng = new google.maps.LatLng(17.420978, 78.447351);
                    var mapOptions = {
                      zoom: 20,
                      center: myLatlng
                    };
                var image = new google.maps.MarkerImage(
                'https://fbcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/t39.2081-0/p128x128/10574704_340920729397487_1280719106_n.png', //url
                new google.maps.Size(150, 150), //size
                new google.maps.Point(0,0), //origin
                new google.maps.Point(0, 10) //anchor 
                ); 
                var map = new google.maps.Map(document.getElementById('map'),  mapOptions);
                var marker = new google.maps.Marker({
                       position: myLatlng,
                       title:"Hello World!",
                    });
                    marker.setMap(map);
                }
                   $('.a-name').webuiPopover({trigger:'hover', content:"<div style='float: left; width:30%;'  ><img src='/public/images/image4.jpg' alt='Seattle' width='100px';/></div><div class='speaker-dec' style='float: left; width:65%; padding:0 10px 10px 16px;'>Social commentator aspiring social entrepreneur and disruptive-thinker Adnane has committed his life to work in the MENA.</div>"});
                    
                   $('#about').on('click', function(){
                   $('section').hide();
                   // $('#about-div').show();
                   $('#about-div').show("clip",{direction: "vertical"}, 800); 
                   });
                   
                   $('#backto-scdule-abt').on('click', function(){
                       $('#about-div').hide("clip",{direction: "vertical"}, 800); 
                        $('.main-section').show();
                   
                   
                   });
                   
                   $('#contact').on('click', function(){
                       $('section').hide();
                      $('#contact-div').show("fade", 1000);
                   });
                   $('#backto-scdule-contct').on('click', function(){
                          $('#contact-div').hide("fade", 1000);
                          $('.main-section').show();
                      });
            });
