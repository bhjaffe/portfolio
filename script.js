//script for parallax effect on background
//code source (pre-modification): http://stackoverflow.com/questions/5168983/html-5-independent-scrolling-for-perspective-illusion

$body = $('body');

function parallax()
{
  var pageOffsetX, pageOffsetY, modifiedOffsetX, modifiedOffsetY;

  modifiedOffsetX = 0;
    
//  pageOffsetX = ...//get the offset
  pageOffsetY = $(document).scrollTop();
  modifiedOffsetX = pageOffsetY * 0.1;
  modifiedOffsetY = pageOffsetY * -0.7;

  $body.css('background-position', modifiedOffsetX + 'px ' + modifiedOffsetY + 'px');
  setTimeout(parallax, 1);
}

parallax();