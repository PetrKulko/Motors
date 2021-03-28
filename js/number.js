    // // маска телефона 
    $('.application__form-phone').inputmask("+7(999)999-9999");
    
    // правило валидации телефона
    jQuery.validator.addMethod("checkMaskPhone", function(value, element) {
        return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
    });
    
 
    var form = $('.application__form');
    
    form.validate();
    
    $.validator.addClassRules({
        'application__form-phone': {
            checkMaskPhone: true,
        }

    });

    $('.header__form-phone').inputmask("+7(999)999-9999");
    
    // правило валидации телефона
    jQuery.validator.addMethod("checkMaskPhone", function(value, element) {
        return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
    });