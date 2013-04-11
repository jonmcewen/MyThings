$(document).ready(function(){
 $('#colours tr:even').addClass('evenrow');
 $('#colours tr').hover(
  function(){
   $(this).toggleClass('selected');
  }
 );
 $('#colours tr').click(
  function(){
   $(this).toggleClass('selected');
  }
 );
 $('#disclaimer').text($('p').css('font-family') + ' better selected');
 $('#hideButton').click(
  function(){
   $(this).hide(); $('#disclaimer').slideToggle('slow');
  }
 );
 $('#tabs').html('tabs go here');
 $('#getTabs').click(function(){
  headerParams = {'Authorization':'OAuth oauth_token="letmein"'};
 
  $.ajax('http://localhost/services/mythings', {headers: headerParams})
    .done(function(data){
            $.each(data, function(){
                          $('<p></p>').text(this.name).insertAfter('#tabs');
                        }
            );
          }
    )
    .fail(function(jqXHR, textStatus, errorThrown){
            $('#tabs').html('error: ' + jqXHR + '; ' + textStatus + '; ' + errorThrown);
          }
    );
 });
});
