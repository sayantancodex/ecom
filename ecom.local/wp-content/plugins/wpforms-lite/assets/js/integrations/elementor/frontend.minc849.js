"use strict";var WPFormsElementorFrontend=window.WPFormsElementorFrontend||function(o,e,r){var n={forceLoadChoices:!1,init:function(){n.events()},events:function(){e.addEventListener("elementor/popup/show",function(e){e=r("#elementor-popup-modal-"+e.detail.id).find(".wpforms-form");e.length&&n.initFields(e)}),r(o).on("elementor/popup/show",()=>{n.forceLoadChoices=!0,wpforms.loadChoicesJS()}),r(o).on("wpformsBeforeLoadElementChoices",(e,o)=>{r(o).parents('div[data-elementor-type="popup"]').length&&!n.forceLoadChoices&&e.preventDefault()})},initFields:function(e){wpforms.ready(),"undefined"!=typeof wpformsModernFileUpload&&wpformsModernFileUpload.init(),"undefined"!=typeof wpformsRecaptchaLoad&&("recaptcha"===wpformsElementorVars.captcha_provider&&"v3"===wpformsElementorVars.recaptcha_type?"undefined"!=typeof grecaptcha&&grecaptcha.ready(wpformsRecaptchaLoad):wpformsRecaptchaLoad()),"undefined"!=typeof WPFormsRepeaterField&&WPFormsRepeaterField.ready(),r(o).trigger("wpforms_elementor_form_fields_initialized",[e])}};return n}(document,window,jQuery);WPFormsElementorFrontend.init();