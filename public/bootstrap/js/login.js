/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
  var api = $('body').data('api');
  
   $("#lgn-btn").click(function() {
    var trgt = $(this).siblings("#lgn-bx");
    if (trgt.hasClass("in"))
      trgt.addClass("hideElement").removeClass("in");
    else
      trgt.removeClass("hideElement").addClass("in");
  });
  $("#sgn-btn").click(function() {
    $.ajax({
      url: api + '/gtf',
      type: 'post',
      data: {
        'id': 'reg'
      },
      success: function(data) {
        data = JSON.parse(data);
        $('#pop-prw').html(data['frm']).showPopup(1);
        $('#pop-prw').addClass("medium");
        $('#pop-prw').find(".pop-cls").after("<a href='#' id='prw-close' class=' btn-small ad-mrgn'><i class='icon-remove-circle'></i></a>");
        $('#pop-prw').find(".pop-cls").remove();
        $('#pop-prw').find(".control-group").addClass("span14");
      }
    });
  });
  /*
   * Showing page content once the background-image is fully loaded
   */
  if ($('#right-bar').hasClass('prw-pg'))
  {
    updateBackground();
    setInterval(function() {
      updateBackground();
    }, 15000);
  }
  function updateBackground()
  {
    if ($('body').data('api') == 'http://localhost')
    {
//      var topstrylst = ['1-287', 'palace', 'tmobile-wants-to-give-you-an-iphone-970', 'testing-model-runs', 'experimen-continues-microsoft-devices-launches-nokia-x2-at-euro-99'];
      var topstrylst = ['how-to-check-if-event-suggestions-are-working'];
    }
    else
    {
      var topstrylst = ['if-one-meal-can-really-change-a-person-would-you-skip-a-meal', 'is-hindu-our-national-identity-643', 'independence-day-reliving-indias-defining-sporting-moments', 'telangana-boxing-is-a-shortage-of-jobs-killing-the-sport', 'commercialising-stereotypes-bollywoods-movie-on-mary-kom', 'breaking-good-news', 'dissecting-the-juvenile-crime-rate-in-india', 'he-has-died-but-his-ideas-live-on', '10-pictures-to-capture-the-mood-of-hyderabad-on-the-eve-of-ramzan', 'ambili-menon-social-media-is-a-blessing-for-upcoming-artists', 'somethings-cooking-in-tihar-jail-and-it-tastes-like-freedom-and-hope', 'who-bunks-rajya-sabha-sessions-the-most', 'the-uphill-task-that-faces-narendra-modis-ganga-rejuvenation-ministry', 'the-last-ten-months-at-the-hindu-have-been-traumatic', 'when-jihadist-parents-initiate-their-children-into-war-graphic-images', 'phogat-i-have-just-one-focus-right-now-gold-medal-in-the-upcoming-asian-games', 'change-polavaram', 'rape-cases-in-india-beyond-the-toilet-debate', 'iranian-cinema-artists-prevailing-within-and-beyond-a-totalitarian-state', 'wanting-mor-a-riveting-novel-capturing-a-young-girls-voice', 'children-in-my-class-told-me-that-i-am-brown-because-i-was-dirty-rukhsana-khan', 'reliance-knows-the-net-worth-of-network18', 'sandeep-sharma-vohra-is-an-asset-to-kingsxi-197', '512-million-refugees-worldwide-unhcr', 'child-soldiers-victims-or-perpetrators', 'is-sunni-shia-and-kurdish-zones-answer-to-iraqs-problems', 'bosnia-and-football-unity-in-diversity', '10-unknown-entities-who-might-impress-at-the-2014-fifa-world-cup', 'from-rags-to-riches-indias-pro-kabaddi-league', 'different-place-different-naxal', 'tax-on-energy-consumed', 'being-a-comrade-in-tami-nadu', 'headline-482', 'modis-rise-a-left-perspective', 'ten-things-modi-can-do-to-sustain-enormous-societal-expectations', 'heres-what-the-hyderabad-startup-ecosystem-needs-mr-ktr', 'decoding-the-most-watched-tv-interview-of-2014-modispeakstoarnab', 'what-ails-the-indian-railways-a-case-for-revamping-its-it-system', 'an-open-letter-to-the-smriti-irani-minister-for-hrd-by-an-nit-alumnus', 'article-370-conversation-with-an-informed-indian', 'open-letter-to-jana-senas-pawan-kalyan', 'other-side-of-pm-s-visit-to-kashmir', 'from-kashmir-to-kanyakumari-we-are-one', 'olympic-swimmer-rehan-ponchas-open-letter-to-narendra-modi', 'the-past-the-present-and-future', 'civic-issues-in-hyderabad--here-is-what-you-can-do', 'this-is-why-you-dont-want-to-look-like-hrithik-roshan', 'agneepath-and-other-remakes-which-outdid-their-orignal-versions', 'strategies-during-a-penalty-shootouts-how-goal-keepers-prepare-for-them'];
    }
    $.post('/ajax/hp', {"tid": topstrylst[Math.floor(Math.random() * topstrylst.length)]}, function(art) {
      art = JSON.parse(art);
      $('#landing').css('background-image', 'url("https://saddahaq.blob.core.windows.net/multimedia/' + art.fimg + '")');
      $('#top-stry').find('.hdng').attr('href', art.url).html($(this).buildTxt(art.ttl, 0));
      var img = new Image();
      img.onload = function() {
        $('#top-stry').find('.byln').html('<img align="absmiddle" src="https://saddahaq.blob.core.windows.net/multimedia/P_Pic_' + art.authUN +
                '" class="thumb-holder" />' + art.authFN);
      };
      img.onerror = function() {
        $('#top-stry').find('.byln').html('<i class="icon-profile"></i> ' + art.authFN);
      };
      img.src = 'https://saddahaq.blob.core.windows.net/multimedia/P_Pic_' + art.authUN;
    });
  }
  function imageExists(image_url) {



    return http.status != 404;

  }
  $('#main-loader').fadeOut(100, function() {
    if (!$('#user-nav').find('.usrname').length)
    {
      $('#news-bar').loadNews({
        'cgry': 'All',
        'usr': '',
        'tl_tp': 'L'
      });
      $('#right-bar #tab-content-holder').find('#context').addClass('active').siblings('.tab-pane').removeClass('active');
      $('#right-bar').find('h2:first').css({
        'opacity': '1',
        'left': '0px'
      });
      var frame = $('#stream > .frame');
      frame.enableSlider();
      frame.loadData({
        'tab': 'context',
        'tp': 'L'
      });
    }
  });
  $(window).scroll(function() {
    if ($('#right-bar').hasClass('prw-pg'))
    {
      var prw = $('#preview');
      if ($(window).scrollTop() <= prw.offset().top)
      {
        prw.find('#left-bar .left-container').removeClass('fix').addClass('scrl');
        prw.find('#right-bar .right-container').addClass('scrl').removeClass('fix');
        prw.find('#navigation-bar').removeClass('fix');
      }
      else
      {
        prw.find('#left-bar .left-container').removeClass('scrl').addClass('fix').css('top', '56px');
        prw.find('#right-bar .right-container').addClass('fix').removeClass('scrl').css('top', '56px');
        prw.find('#navigation-bar').addClass('fix');
      }
    }
  });
  $("#seconddiv-Username").on('change', function()
  {
    var username = $.trim($("#seconddiv-Username").val());
    if (username.length > 2)
    {
      $("#seconddiv-availability").html('<img src="/public/images/loader.gif" align="absmiddle">&nbsp;Checking availability...');
      $.post('/ajax/chkusrreg', {
        username: username
      }, function(available) {
        if (available == 0)
        {
          $('.alert').printError('');
          $("#seconddiv-Username").removeClass('error');
        }
        else if (available == 1)
        {
          $("#seconddiv-Username").addClass('error').val('');
          $('.alert').printError("Username already taken!");
        }
      });
    }
    else
    {
      $("#seconddiv-availability").html('<font color="#cc0000">Username too short</font>');
    }
  });

  //API, Auth call
  var api = $('body').data('api');
  var auth = $('body').data('auth');

  //Activate submit button when user checks the terms and conditions checkbox
  $('#pop-prw').on('change', '#tc_accept', function() {
    if ($(this).is(':checked'))
      $('#reg-form-sbmt').removeClass('disabled').removeAttr('disabled');
    else
      $('#reg-form-sbmt').addClass('disabled').attr('disabled', 'disabled');
  });

  // Registration form submission
  $('#pop-prw').on('submit', '#reg-form', function(e) {
    e.preventDefault();
    var $this = $(this);
    var err = $this.find('.err-msg');
    var elements = $this.find("input[type='text'],input[type='password']");
    var reg = null;
    var error = 'First/Last name cannot be empty';
    var flag = 0;
    var element = null;
    elements.each(function() {
      element = $(this).attr('id');
      switch (element)
      {
        case 'FName':
          error = 'First Name should contain only alphabets, numerals and space';
          reg = /^[a-zA-Z0-9 ]+$/;
          break;
        case 'LName':
          if ($.trim($(this).val()) != '') {
            error = 'Last Name should contain only alphabets, numerals and space';
            reg = /^[a-zA-Z0-9 ]+$/;
          }
          break;  
        case 'Username':
          error = 'Username should be between 6 and 16 characters and can contain letters, number and period';
          reg = /^[A-z0-9.]{5,16}$/;
          break;
        case 'Email':
          error = 'Invalid email format';
          reg = /^[a-z0-9_\+-]+(\.[a-z0-9_\+-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*\.([a-z]{2,4})$/;
          break;
        case 'Password':
          error = 'Password should be atleast 6 characters';
          reg = /^(?=.*[A-z0-9]).{6,}$/;
          break;
      }
      if (reg)
      {
        if (!reg.test($(this).val().toLowerCase()))
        {
          flag = 1;
          return false;
        }
        else
        {
          err.text('');
          $(this).removeClass('error');
        }
      }
    });
    if (flag == 1)
    {
      $('#' + element).addClass('error').val('').focus();
      $('#reg-form').effect('shake', {
        times: 3,
        distance: 5
      }, 300);
      err.text(error);
      return false;
    }
    else
    {
      $.ajax({
        url: auth + '/api/rg',
        type: 'post',
        data: {
          "FName": $this.find('#FName').val(),
          "LName": $this.find('#LName').val(),
          "Username": $this.find('#Username').val(),
          "Email": $this.find('#Email').val(),
          "Password": $this.find('#Password').val()
        },
        success: function(d) {
          var t = JSON.parse(d);
          switch (parseInt(t.success)) {
            case 0:
              err.text(t.msg);
              break;
            case 1:
              $('#pop-prw').removeClass('view');
              $('#sts-msg').showStatus('Hurrah! Welcome to the SaddaHaq family. Please wait while we create your account...', 'scs', function() {
                setTimeout(function() {
                  window.location = auth + '/ssst/' + t.msg + '?return=' + urlencode(document.URL);
                }, 1500);
              });
              break;
          }
        }
      });
    }
  });

  $('#Registration input').on('click', function() {
    $(this).removeClass('error');
  });

  $(document).on('click', '.register', function(e) {
    e.preventDefault();
    $.ajax({
      url: api + '/gtf',
      type: 'post',
      data: {
        'id': 'reg'
      },
      success: function(data) {
        data = JSON.parse(data);
        $('#pop-prw > section').html(data['frm']).showPopup(1);
      }
    });
  });
  $('.lgn').on('click', function(e) {
    $(this).showLgnPopup();
  });

  $('.sts-bx').on('click', function() {
    $('#lgn-bx').removeClass('in');
    $('#pop-prw').removeClass('in');
    if ($('#pop-prw').hasClass('scrl'))
      $('#pop-prw').removeClass('scrl').css('top', '-100%');
    $(this).fadeOut(200);
  });
  /* Reset password form submission */
  $('#pop-prw').on('submit','#resetpwd-form',function() {
    var $this = $(this);
    var email = $('#resetpwd-form #Email');
    var reg = /^[a-z0-9_\+-]+(\.[a-z0-9_\+-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*\.([a-z]{2,4})$/;
    if (email.val() == '' || !reg.test(email.val()))
    {
      $this.find('.err-msg').removeClass('scs').text('Looks like the email is empty or invalid!', 'err');
      email.val('').focus();
      return false;
    }
    else
    {
      $('#resetpwd-form #submit').attr('disabled', 'disabled');
      $.post(api + '/rpw', {
        'Email': email.val()
      }, function(d) {
        t = JSON.parse(d);
        if (t.success == 1)
          $this.find('.err-msg').addClass('scs').text(t.msg, 'err');
        else
          $this.find('.err-msg').removeClass('scs').text(t.msg, 'err');
        $('#resetpwd-form #submit').removeAttr('disabled');
      });
    }
    return false;
  });
  $("#lgn-bx, #pop-prw").on("click", ".glgn,.google", function() {
    var OAUTHURL = 'https://accounts.google.com/o/oauth2/auth?';
    var VALIDURL = 'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=';
    var SCOPE = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
    var CLIENTID = $('body').data('cid');
    var REDIRECT = $('body').data('rd');
    var LOGOUT = 'http://accounts.google.com/Logout';
    var TYPE = 'token';
    var _url = OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT +"/"+ '&response_type=' + TYPE;
    var acToken;
    var tokenType;
    var expiresIn;
    var user;

    var win = window.open(_url, "windowname1", 'width=800, height=600');
    var pollTimer = window.setInterval(function() {
      try {
        if (win.document.URL.indexOf(REDIRECT) != -1) {
          window.clearInterval(pollTimer);
          var url = win.document.URL;
          acToken = gup(url, 'access_token');
          tokenType = gup(url, 'token_type');
          expiresIn = gup(url, 'expires_in');
          win.close();

          validateToken(acToken);
        }
      } catch (e) {
      }
    }, 500);

    function validateToken(token) {
      $.ajax({
        url: VALIDURL + token,
        data: null,
        success: function(responseText) {
          getUserInfo();
        },
        dataType: "jsonp"
      });
    }

    function gup(url, name) {
      name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      var regexS = "[\\#&]" + name + "=([^&#]*)";
      var regex = new RegExp(regexS);
      var results = regex.exec(url);
      if (results == null)
        return "";
      else
        return results[1];
    }

    function getUserInfo() {
      $.ajax({
        url: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + acToken,
        data: null,
        dataType: "jsonp",
        success: function(resp) {
          var usrdt = {
            "fnme": resp.given_name,
            "lnme": resp.family_name,
            "eml": resp.email,
            "unme": resp.email.split("@")[0],
            "tp": "G"
          };
          $.post(auth + '/api/sidty', {
            'usrdt': usrdt
          }, function(tkn) {
            if (tkn.length == 128) {
              window.location = auth + '/ssst/' + tkn + '?return=' + urlencode(document.URL);
            }
            else {
              if (tkn == -2) {
                $('#sts-msg').showStatus('We did not receive any email id from the source you logged in', 'err');
              }
              else if (tkn == 2) {
                $('#sts-msg').showStatus('Looks like the email id we received is an invalid one', 'err');
              }
              else {
                $('#sts-msg').showStatus('Bummer, Something has seriously gone wrong while logging in. Please try again', 'err');
              }
            }
          });
        }

      });
    }
  });

  function urlencode(str) {
    str = (str + '').toString();
    return encodeURIComponent(str)
            .replace(/!/g, '%21')
            .replace(/'/g, '%27')
            .replace(/\(/g, '%28')
            .replace(/\)/g, '%29')
            .replace(/\*/g, '%2A')
            .replace(/%20/g, '+');
  }
  $("#lgn-bx, #pop-prw").on("click", ".flgn,.facebook", function() {

    FB.login(function(response) {
      if (response.authResponse) {
        FB.api('/me', function(resp) {
          //console.log(resp);
          var usrdt = {
            "fnme": resp.first_name,
            "lnme": resp.last_name,
            "eml": resp.email,
            "unme": resp.username,
            "id": resp.id,
            "tp": "F",
            "etp": "F"
          };
          fbLgnPost(usrdt);
          function fbLgnPost(usrdt) {
            $.post(auth + '/api/sidty', {
              'usrdt': usrdt
            }, function(tkn) {
              if (tkn.length == 128) {
                window.location = auth + '/ssst/' + tkn + '?return=' + urlencode(document.URL);
              }
              else {
                if (tkn == -2) {
                  $.ajax({
                    url: api + '/gtf',
                    type: "post",
                    data: {
                      'id': 'fbe'
                    },
                    success: function(data) {
                      $('#lgn-bx').removeClass("in");
                      $('#pop-prw').html(JSON.parse(data)['frm']).showPopup(1);
                    }
                  });
                  $('#pop-prw').on('click', '#fb-ml-sv', function() {
                    var eml_rgx = /^[a-zA-Z0-9_\+-]+(\.[a-zA-Z0-9_\+-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.([a-zA-Z]{2,4})$/;
                    var popup_bdy = $(this).parents(".modal-footer").siblings(".modal-body");
                    var email = popup_bdy.find('input').val();
                    if (email == '' || !eml_rgx.test(email))
                    {
                      popup_bdy.find('p.err-msg').text('Looks like email id is not valid');
                      popup_bdy.find('input').addClass('error');
                      return false;
                    }
                    usrdt.eml = email;
                    usrdt.etp = "E";
                    fbLgnPost(usrdt);
                  });
                  $('#pop-prw').on('click', '#fb-ml #prw-close', function() {
                    $(this).parents("#pop-prw").fadeOut(100, function() {
                      $('#sts-msg').showStatus('Sorry you cannot login without providing email.', 'err');
                    });
                  });
                }
                else if (tkn == -5) {
                  $('#sts-msg').showStatus('Email already associated with another SaddaHaq account. Either please provide another email or login using credentials.', 'err');
                }
                else {
                  $('#sts-msg').showStatus('Sorry. Unable to login!!', 'err');
                }
              }
            });
          }

        });
      } else {
        //console.log('User cancelled login or did not fully authorize.');
      }
    }, {scope: 'public_profile, email'});
  });
  
  /* Login Page */
  /* Form validations for empty fields */
  $('#pop-prw, #lgn-bx').on('submit', '#lgn-frm', function(e) {
    e.preventDefault();
    var brk = 0;
    var $this = $(this);
    $this.find('.btn').attr('disabled', 'disabled');
    $this.find("input[type='text'],input[type='password'],textarea, select").removeClass('error').each(function() {
      if ($(this).val() == '' || $(this).val() == 0)
      {
        $(this).addClass('error');
        brk = 1;
        return false;
      }
      else
        brk = 0;
    });
    if (brk == 1)
    {
      $this.find('.err-msg').removeClass('scs').text('Username or Password field cannot be empty');
      $this.find('.btn').removeAttr('disabled');
    }
    else
    {
      $.ajax({
        url: $('body').data('auth') + '/api/idty',
        type: 'post',
        data: {
          "email": $this.find('#lgn-unme').val(),
          "password": $this.find('#lgn-pwd').val()
        },
        success: function(d) {
          if (d == 1) {
            var t = (window.location.href.indexOf('?') === -1) ? window.location.href : urldecode(window.location.href.split('?')[1].split('=')[1]);
            var url = null;
            if(t.indexOf('#') !== -1)
              url = t.split('#')[0];
            
            if (t.indexOf('&&') === -1) {
              url = t;
            }
            else {
              var tmp = t.split('&&');
              url = tmp[0] + '?rt=' + urlencode(tmp[1]);
            }
            window.location = url;
          }
          else {
            var msg = '';
            if (d == 0)
              msg = 'User account suspended!!';
            else if (d == -1)
              msg = 'Invalid username or password!!';
            else if (d == -2)
              msg = 'All fields are required!!';
            $this.find('.btn').removeAttr('disabled');
            $this.find('.err-msg').removeClass('scs').text(msg).addClass("in");
          }
        }
      });
    }
    return false;
  });
});



