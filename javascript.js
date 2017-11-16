$(document).ready(function(){
var channelsArray = ['cohhcarnage','the_lazy_peon','mfpallytime','neebsgaming','koyo','strippin','zethiann','forcegaming'];
  $.ajax({
    url:'https://api.twitch.tv/kraken/streams/'+ channelsArray[0] +'/?client_id=25uubqo7b284h9adfikgpgxn4xzub6',
    success: function(response) {
      if (response.stream) {
        var logo = response.stream.channel.logo;
        var channel_name = response.stream.channel.display_name;
        var channel_status = response.stream.channel.game;
        var channel_banner = response.stream.channel.profile_banner;
        var result = '';
        result += '<div class="channel_frame col-lg-6 col-md-6 col-sm-12 col-xs-12"><div class="padding_div"><div class="channel_banner" id="channel_banner"></div><p id="channel_on_off">Offline</p><img id="channel_logo" class="logo_img" src="" alt="channel logo"><h2 id="channel_name"></h2><p id="channel_status"></p></div></div>';
        $('.row').html(result);
        $('#channel_logo').attr('src',logo);
        $('#channel_name').text(channel_name);
        $('#channel_status').text(channel_status);
        $('#channel_banner').css({'background-image':'url(' + channel_banner + ')', 'background-size':'cover'});
        $('#channel_on_off').text('Online').css('color','green');
      } else{
        $.ajax({
          url: 'https://api.twitch.tv/kraken/channels/'+ channelsArray[0] +'/?client_id=25uubqo7b284h9adfikgpgxn4xzub6',
          success: function (response) {
            console.log(response);
            var logo = response.logo;
            var channel_name = response.display_name;
            var channel_banner = response.profile_banner;
            result += '<div class="channel_frame col-lg-6 col-md-6 col-sm-12 col-xs-12"><div class="padding_div"><div class="channel_banner" id="channel_banner"></div><p id="channel_on_off">Offline</p><img id="channel_logo" class="logo_img" src="" alt="channel logo"><h2 id="channel_name"></h2><p id="channel_status"></p></div></div>';
            $('.row').html(result);
            $('#channel_logo').attr('src',logo);
            $('#channel_name').text(channel_name);
            $('#channel_banner').css({'background-image':'url(' + channel_banner + ')', 'background-size':'cover'});
            $('#channel_on_off').text('Offline').css('color','red');
          },
        });
      }
    },
  });
});
