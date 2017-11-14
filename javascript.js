$(document).ready(function(){
   /* var channelsArray = ['cohhcarnage','the_lazy_peon','mfpallytime','neebsgaming','koyo','strippin','zethiann','forcegaming'];
  for (var i = 0; i < channelsArray.length; i++) {
    text += cars[i] + "<br>";
  }
  */
  $.ajax({
    url:'https://api.twitch.tv/kraken/streams/mfpallytime/?client_id=25uubqo7b284h9adfikgpgxn4xzub6',
    success: function(response) {
      console.log(response);
      if (response.stream) {
        var logo = response.stream.channel.logo;
        var channel_name = response.stream.channel.display_name;
        var channel_status = response.stream.channel.game;
        var channel_banner = response.stream.channel.profile_banner;
        $('#channel_logo').attr('src',logo);
        $('#channel_name').text(channel_name);
        $('#channel_status').text(channel_status);
        $('#channel_banner').css({'background-image':'url(' + channel_banner + ')', 'background-size':'cover'});
        $('#channel_on_off').text('Online').css('color','green');
      }
      else{
            var logo_off = response.logo;
            var channel_name_off = response.display_name;
            var channel_status_off = response.game;
            var channel_banner_off = response.profile_banner;
            $('#channel_logo').attr('src',logo_off);
            $('#channel_name').text(channel_name_off);
            $('#channel_status').text(channel_status_off);
            $('#channel_banner').css({'background-image':'url(' + channel_banner_off + ')', 'background-size':'cover'});
            $('#channel_on_off').text('Offline').css('color','red');
      }
    },
  });
});
