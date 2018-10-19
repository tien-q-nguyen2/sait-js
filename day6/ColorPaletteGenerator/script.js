(function(){
    new ClipboardJS('.copy-hex');

    $("form").submit(function(e){
        e.preventDefault();
    });
    
    $('#hue-list-opt').on('click', function(){
        $('#color-hex-entry').attr('disabled','');
        $('#color-list').removeAttr('disabled');
    });
    $('#hue-hex-opt').on('click', function(){
        $('#color-hex-entry').removeAttr('disabled');
        $('#color-list').attr('disabled','');
    });
    
    var colorNames = ['red','orange','yellow','green','blue','purple',
                                        'pink','monochrome','random'];
    $('#color-list').css('text-transform','capitalize');
    $.each(colorNames, function( index, value ){
        var colorOption = $('<option>'+value+'</option>');
        $('#color-list').append(colorOption);
    });
    
    var luminosityOptions = ['bright','light','dark'];
    $('#color-luminosity').css('text-transform','capitalize');
    $.each(luminosityOptions, function( index, value ){
        var luminosityOption = $('<option>'+value+'</option>');
        $('#color-luminosity').append(luminosityOption);
    });
    
    $('#copied-notification').hide();
    
    //Grab the controls (and their string values) in the html file
    $('#submit').on('click', function(event){
        var palette = $('#palette');
        palette.empty().css('visibility','hidden');
    
        var cancelGenerate = false;
        var colorCount = parseInt($('#color-num-entry').val());
        if (colorCount < 1 || colorCount > 500) {
    
            cancelGenerate = true;
        }
    
        var colorHue;
        if ($('#color-hex-entry').attr('disabled') !== undefined){
            colorHue = $('#color-list').val().toLowerCase();
        } else {
            var valueInHexField = $('#color-hex-entry').val();
            if (/[0-9a-fA-F]{6}/.test(valueInHexField)){
                colorHue = '#' + valueInHexField;
            } else {
                cancelGenerate = true;
            }
        }
    
        if (!cancelGenerate){
            var colorLuminosity = $('#color-luminosity').val().toLowerCase();
    
            var generatedColors = randomColor({count: colorCount, hue: colorHue,
                                        luminosity: colorLuminosity});
            var palette = $('#palette');
            palette.css('visibility','visible').empty();
    
            for(var i = 0; i < colorCount; i++){
                var color = $('<a class="copy-hex" data-clipboard-text="' + 
                                generatedColors[i].slice(1) +
                            '"><div class="color"></div></a>');
                color.css('background', generatedColors[i]);
                palette.append(color);
                color.hide();
                color.fadeIn(400 + (200 * i) % 1200);
            }
            
            $('.copy-hex').on('click', function() {
                console.log('here!');
                $('#copied-notification').finish().slideDown().fadeOut(2000);
            });
        }
    })
})();
