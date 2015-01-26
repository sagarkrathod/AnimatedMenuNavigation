$(document).ready(function(){
    var menuItem = $('ul.animatedMenu li a')
    var menuFirstItemPosition = $('ul.animatedMenu li a:first-child').position().left
    var menuFirstItemWidth = $('ul.animatedMenu li a:first-child').css('width')
    var menuItemSelected = $("ul.animatedMenu li.selectedMenuItem")
    var movingDiv = $('ul.animatedMenu li.movingMenu')


    //set initial position for Selected as weel as Moving menu item.
    $('ul.animatedMenu li.movingMenu, ul.animatedMenu li.selectedMenuItem').css('left',menuFirstItemPosition+'px')
    $('ul.animatedMenu li.movingMenu, ul.animatedMenu li.selectedMenuItem').css('width',menuFirstItemWidth)


    menuItem.mouseover(function(){
        var currentMenuWidth = $(this).width();
        var currentMenuLeftPosition = Math.round($(this).position().left)
        var that = $(this)
        movingDiv.stop().animate({
            left: currentMenuLeftPosition+'px',
            width:currentMenuWidth+'px',
            //}, 700,'easeOutBounce', function() {
        }, 400,function() {
            //console.log(that.html())
            //that.css("text-decoration","underline")
            //$(this).css("font-weight","bold")
        });
    })
    menuItem.click(function(){
        var currentMenuLeftPosition = Math.round($(this).position().left)
        var currentMenuWidth = $(this).width();
        menuItemSelected.show();
        menuItemSelected.css({'left':currentMenuLeftPosition,'width':currentMenuWidth});
    })
})