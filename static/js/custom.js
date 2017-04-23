


(function() {
  // button to toggle sidebar
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    $("#menu-toggle").toggleClass("menu-toggled");
  });


  // Need to manually adjust this when you add new layouts :(
  var pages = [
    "about",
    "tutorials",
    "blog"
  ];
  
  var pagesRegExp = pages.map(function(x) {
    return new RegExp(x);
  });
  
  var localOrigin = "http://127.0.0.1:4321";
  
  // highlight current page in sidebar 
  // won't work when running locally
  $( window ).on("load", function() {
    
    // for fiddling with css locally
    
    var pagesHref = null;
    for (var i = 0; i < pages.length; i++) {
      if (pagesRegExp[i].test(location.href)) {
        pagesHref = pages[i];
      }
    }
    $(".nav-link[href*='"+ pagesHref +"']").parent().addClass("active");
  
  });  
})();  


