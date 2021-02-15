


  $("[data-trigger='dropdown']").on("mouseenter",function(){
    var submenu = $(this).parent().find(".submenu");
    submenu.fadeIn(300);

    $(".profile-menu").on("mouseleave",function(){
      submenu.fadeOut(300);
    })
  });

  function animateText(id, text, i) {
    document.getElementById(id).innerHTML = text.substring(0, i);
    i++;
    if (i > text.length) i = 0;
    setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 100);
  }
