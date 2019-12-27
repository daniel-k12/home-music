$(function() {
    $('#volume-slider').on('input', function() {
        var volume_slider_val = parseInt($('#volume-slider').val());
        if(volume_slider_val === 0) {
            //Mute volume, switch icon to volume-mute
            $('#volume-icon').attr('src', '/icons/volume-mute.svg');
        } else if(volume_slider_val > 0 && volume_slider_val <= 70) {
            //Low volume, switch icon to volume-low
            $('#volume-icon').attr('src', '/icons/volume-low.svg');
        } else if(volume_slider_val > 70) {
            //High volume, switch icon to volume-high
            $('#volume-icon').attr('src', '/icons/volume-high.svg');
        }
    });
});