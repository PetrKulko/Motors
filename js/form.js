$('.application__form').submit(function () {
    var form = $(this);
    var field = [];
    form.find('input[data-validate]').each(function () {
      field.push('input[data-validate]');
      var value = $(this).val(),
          line = $(this).closest('.form__input');
      for(var i=0;i<field.length;i++) {
        if( !value ) {
          line.addClass('form__input-required');
          setTimeout(function() {
            line.removeClass('form__input-required')
          }.bind(this),2000);
          event.preventDefault();
        }
      }
    });
  });