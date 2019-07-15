define([], function () {
    window.requirejs.config({
        paths: {
            "iconpicker": M.cfg.wwwroot + '/mod/bootstrapelements/js/fontawesome-iconpicker.min',
        },
        shim: {
            'iconpicker': {exports: 'iconpicker'},
        }
    });
});