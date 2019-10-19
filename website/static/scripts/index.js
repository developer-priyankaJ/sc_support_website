
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function capitalize_Words(str){
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function getEnvLinks(key){
  let env = "DEV";
  let location = window.location.href;
  let env_links = {
    "DEV":{
      "contactUs":"https://www.scopehub.org/#/contact",
      "signIn":"https://dev.scopehub.org"
    },
    "PROD":{
      "contactUs":"https://www.scopehub.com/#/contact",
      "gettingStarted":"https://share.scopehub.com"
    },
    "QA":{
      "contactUs":"https://www.scopehub.net/#/contact",
      "gettingStarted":"https://qa.scopehub.net"
    }
  }
  if(location.indexOf("https://support.scopehub.com") >= 0){
    env = "PROD";
  }else if(location.indexOf("https://support.scopehub.net") >= 0){
    env = "QA";
  }
  return env_links[env][key];
}

$('document').ready(function(){

    /* For categores and article page tab selection and content  */
    var locationId = getUrlParameter('id');
    var subcategory = getUrlParameter('key');
    var articleId = getUrlParameter('file');
    var categories = {
      'getting-started':{
        title:'Getting Started',
        description: "Welcome to ScopeHub! We're so glad you're here. Let's get started!"
      },
      'using-sh':{
        title:'Using ScopeHub',
        description: "From channels to search — learn how ScopeHub works from top to bottom!"
      },
      'profile':{
        title:'Your Profile & Preferences',
        description: "Adjust your profile and preferences to make ScopeHub work just for you!"
      }
    }
    if(locationId && articleId){
        $('#'+locationId).addClass("selected");
        $('.categoriesContainer .banner_title').text(function () { return $(this).text().replace("", categories[locationId].title)});
        $('.categoriesContainer .banner_desc').text(function () { return $(this).text().replace("", categories[locationId].description)});
        $('.articles .breadcrum .category').text(categories[locationId].title+ " > ");
        $('.articles .breadcrum .subcategory').text(function () {
            let actualText = subcategory.replace(/_/g," ").replace("sh","ScopeHub");
            return $(this).text().replace("", capitalize_Words(actualText) )
        })
        $(".articles .article-content").load("../../docs/en/"+articleId+".html .docMainWrapper", function(){
          /* Left Nav Expand Collapse */
          $('.navGroupCategoryTitle').click(function(event){

            if($(this).next().hasClass('hide')){
                $(this).next().removeClass('hide').addClass('show');
                $(this).children(".arrow").css({"transform":"rotate(180deg)"})
            }else{
              $(this).next().removeClass('show').addClass('hide');
              $(this).children(".arrow").css({"transform":"rotate(90deg)"})
            }
          });
          $('[name="feedback"]').click(function(event){
            $('.feedback-input').hide();
            if(event.target.value=="yes"){
              $('.yes-block').toggle();
            }else{
              $('.no-block').toggle();
            }
          });
          $('.navGroups .navItem').click(function(event){
            event.preventDefault();
          })
        });
    }else if(!articleId && locationId){
      $('#'+locationId).addClass("selected");
      $('.categoriesContainer .banner_title').text(function () { return $(this).text().replace("", categories[locationId].title)});
      $('.categoriesContainer .banner_desc').text(function () { return $(this).text().replace("", categories[locationId].description)});
      $(".categoriesList .content").load("../../docs/en/"+locationId+"-links.html .mainContainer");
    }

    /* for docked TopBar */
    var fixedHeader = $(".fixedHeaderContainer");
    var sticky = fixedHeader[0].offsetTop;
    window.onscroll = function() {
        if (window.pageYOffset >= sticky) {
          fixedHeader[0].classList.add("sticky")
        } else {
          fixedHeader[0].classList.remove("sticky");
        }
    };

  /* for Contact us and getting started Links*/
    let elem = $('.nav-site-internal a').filter(function(index) { return $(this).text() === "Contact Us"; });
    $(elem).css({
      'background-color': '#15ac59',
      'border-radius': '6px',
      'color': 'white',
      'padding': '16px 20px 18px 20px',
      'margin': '0px 8px'
    })
    $(elem).hover(function(){
      $(this).css({
        'box-shadow': '0px 2px 0px #666666'
      })
    }, function(){
        $(this).css({
          'box-shadow': '0px 0px'
        })
    })
    $(elem).click(function(e){
      e.preventDefault();
      //let cookieVal = getCookie("username");
      let url = getEnvLinks("contactUs");
      /*if(cookieVal){
        url = "https://www.scopehub.org/contact-us-new/"
      }*/
      window.location.href=url;
    });

    let elem1 = $('.nav-site-internal a').filter(function(index) { return $(this).text() === "Getting Started"; });
    $(elem1).css({
      'background-color': '#15ac59',
      'border-radius': '6px',
      'color': 'white',
      'padding': '16px 20px 18px 20px',
      'margin': '0px 8px'
    })
    $(elem1).hover(function(){
      $(this).css({
        'box-shadow': '0px 2px 0px #666666'
      })
    }, function(){
        $(this).css({
          'box-shadow': '0px 0px'
        })
    })
    $(elem1).click(function(e){
      e.preventDefault();
      let cookieVal = getCookie("username");
      let url = getEnvLinks("gettingStarted");
      /*if(cookieVal){
        url = getEnvLinks("gettingStarted");
      }*/
      $(location).attr('href',url);
    });


    /* languages Menu Css */
      $(this).click(function(event){
           $('#languages-dropdown-items').removeClass("visible");
           $('#languages-dropdown').removeClass("visible").addClass('hide');
           /*$('#languages-menu').css({
           //  'border': '0',
           //  'border-radius': '6px 6px 6px 6px'
         });*/
       });
      $('#languages-menu').click(function(event) {
        event.stopPropagation();
        event.preventDefault();
        $('#languages-dropdown-items').toggleClass("visible");
        if($('#languages-dropdown').hasClass('visible')){
          $('#languages-menu').css({
            //'border-radius': '6px 6px 0 0'
          });
        }else{
          $('#languages-menu').css({
            //'border': '2px solid #50ac50',
            //'border-radius': '6px 6px 6px 6px'
          });
        }
        $('#languages-dropdown-items').css({
          'box-shadow': '0px 9px 14px 0px rgba(0, 0, 0, 0.1)',
          'border-radius': '0 0 6px 6px'
        });
      });

});
