(function(System, SystemJS) {(function (require, exports, module, __filename, __dirname, global, GLOBAL) {var blog = {

    init:function(){

         this.logo = jQuery('.logo-big');

        jQuery('.js-page-blog').addClass("loaded");

        app.contactForm = require('./contact-form.js');

        app.contactForm.init();

    },
    destroy:function(){

        jQuery(window).off( "scroll",blog.logoScroll);
        app.contactForm.destroy();

    }

}
module.exports = blog;
}).apply(__cjsWrapper.exports, __cjsWrapper.args);
})(System, System);