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
                          $('<p></p>').text(this.name).hide().insertAfter('#tabs').fadeIn(1000);
                        }
            );
          }
    )
    .fail(function(jqXHR, textStatus, errorThrown){
            $('#tabs').html('error: ' + jqXHR + '; ' + textStatus + '; ' + errorThrown);
          }
    );
 });
 $('#save').click(
  function(){
   headerParams = {'Authorization':'OAuth oauth_token="letmein"'};
   thingName = $('#newthingname').val();
   thing = JSON.stringify({name: thingName}); alert("putting thing: " + thingName);
   $.ajax('http://localhost/services/mythings', {headers: headerParams, type: 'PUT', data: thing, contentType: "application/json", dataType: "json"})
    .done(function(){
            $('<p></p>').text(thingName).hide().insertAfter('#tabs').fadeIn(1000);
          }
    )
    .fail(function(jqXHR, textStatus, errorThrown){
            $('#tabs').html('error: ' + jqXHR + '; ' + textStatus + '; ' + errorThrown);
          }
    );
   }
 );
});
