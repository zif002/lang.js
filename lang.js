/**
 * Created by ПК on 03.06.2016.
 */
var lang = {
    'Индекс цен': {
        'ab':'Aхәқәа риндекс',
        'en':'Price Index'
    },
};
$(function(){
    $.each($('.lang'), function(index, el){
        var el = $(el),
            text = $(el).text().trim().toLowerCase();
            $.each(lang, function(lang_text, lang){
                var key = lang_text.toLowerCase();
                if($(el).is('.lang_ab') && text === key){
                    $(el).text(lang.ab)
                }
                if($(el).is('.lang_en') && text === key){
                    $(el).text(lang.en);
                }
            })
    })
})