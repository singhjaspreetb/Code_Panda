jQuery(document).ready(function () {
	"use strict";

	// Open frontend editor
	jQuery('#frontend_editor_icon_edit').click(function (e) {
		"use strict";
		if (jQuery('#frontend_editor_overflow').length == 0) {
			jQuery('body').append('<div id="frontend_editor_overflow" class="frontend_editor_overflow"></div>')
		}
		jQuery('#frontend_editor_overflow').fadeIn(400);
		jQuery('#frontend_editor_button_cancel').val( _GLOBALS['strings']['editor_caption_cancel']);
		jQuery('#frontend_editor').slideDown();
		e.preventDefault();
		return false;
	});

	//Close frontend editor
	jQuery('#frontend_editor_button_cancel').click(function (e) {
		"use strict";
		if (jQuery(this).val() ==  _GLOBALS['strings']['editor_caption_close'])
			window.location.reload();
		else {
			jQuery('#frontend_editor').slideUp();
			jQuery('#frontend_editor_overflow').fadeOut(400);
		}
		e.preventDefault();
		return false;
	});

	// Save post
	jQuery('#frontend_editor_button_save').click(function (e) {
		"use strict";
		// Save editors content
		var editor = typeof(tinymce) != 'undefined' ? tinymce.activeEditor : false;
		if ( 'mce_fullscreen' == editor.id )
			tinymce.get('content').setContent(editor.getContent({format : 'raw'}), {format : 'raw'});
		tinymce.triggerSave();
		// Prepare data
		var data = {
			action: 'frontend_editor_save',
			nonce:  _GLOBALS['ajax_nonce_editor'],
			data: jQuery("#frontend_editor form").serialize()
		};
		jQuery.post( _GLOBALS['ajax_url'], data, function(response) {
			"use strict";
			var rez = JSON.parse(response);
			if (rez.error == '') {
				 _message_success('',  _GLOBALS['strings']['editor_save_success']);
				jQuery('#frontend_editor_button_cancel').val( _GLOBALS['strings']['editor_caption_close']);
			} else {
				 _message_warning(rez.error,  _GLOBALS['strings']['editor_save_error']);
			}
		});
		e.preventDefault();
		return false;
	});

	// Delete post
	//----------------------------------------------------------------
	jQuery('#frontend_editor_icon_delete').click(function (e) {
		"use strict";
		 _message_confirm( _GLOBALS['strings']['editor_delete_post'],  _GLOBALS['strings']['editor_delete_post_header'], function(btn) {
			"use strict";
			if (btn != 1) return;
			var data = {
				action: 'frontend_editor_delete',
				post_id: jQuery("#frontend_editor form #frontend_editor_post_id").val(),
				nonce:  _GLOBALS['ajax_nonce_editor']
			};
			jQuery.post( _GLOBALS['ajax_url'], data, function(response) {
				"use strict";
				var rez = JSON.parse(response);
				if (rez.error == '') {
					 _message_success('',  _GLOBALS['strings']['editor_delete_success']);
					setTimeout(function() { 
						window.location.href =  _GLOBALS['site_url'];
						}, 1000);
				} else {
					 _message_warning(rez.error,  _GLOBALS['strings']['editor_delete_error']);
				}
			});
			
		});
		e.preventDefault();
		return false;
	});

});