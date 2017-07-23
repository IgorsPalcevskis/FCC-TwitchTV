$(document).ready(function(){
  $.ajax({
    url:'https://api.twitch.tv/kraken/channels/cohhcarnage/?client_id=25uubqo7b284h9adfikgpgxn4xzub6',
    success: function(response) {
      console.log(response);
      var logo = response.logo;
      var channel_name = response.display_name;
      var channel_status = response.status;
      var channel_banner = response.profile_banner;
      $('#channel1_logo').attr('src',logo);
      $('#channel1_name').text(channel_name);
      $('#channel1_status').text(channel_status);
      if (channel_banner) {
        $('#channel1_banner').css({'background-image':'url(' + channel_banner + ')', 'background-size':'cover'});
      }
    },
  });
});
