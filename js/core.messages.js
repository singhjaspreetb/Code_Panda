// Popup messages
//-----------------------------------------------------------------
jQuery(document).ready(function(){
	"use strict";

	 _GLOBALS['message_callback'] = null;
	 _GLOBALS['message_timeout'] = 5000;

	jQuery('body').on('click', '# _modal_bg,. _message . _message_close', function (e) {
		"use strict";
		 _message_destroy();
		if ( _GLOBALS['message_callback']) {
			 _GLOBALS['message_callback'](0);
			 _GLOBALS['message_callback'] = null;
		}
		e.preventDefault();
		return false;
	});
});


// Warning
function  _message_warning(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var icon = arguments[2] ? arguments[2] : 'cancel-1';
	var delay = arguments[3] ? arguments[3] :  _GLOBALS['message_timeout'];
	return  _message({
		msg: msg,
		hdr: hdr,
		icon: icon,
		type: 'warning',
		delay: delay,
		buttons: [],
		callback: null
	});
}

// Success
function  _message_success(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var icon = arguments[2] ? arguments[2] : 'check-1';
	var delay = arguments[3] ? arguments[3] :  _GLOBALS['message_timeout'];
	return  _message({
		msg: msg,
		hdr: hdr,
		icon: icon,
		type: 'success',
		delay: delay,
		buttons: [],
		callback: null
	});
}

// Info
function  _message_info(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var icon = arguments[2] ? arguments[2] : 'info-1';
	var delay = arguments[3] ? arguments[3] :  _GLOBALS['message_timeout'];
	return  _message({
		msg: msg,
		hdr: hdr,
		icon: icon,
		type: 'info',
		delay: delay,
		buttons: [],
		callback: null
	});
}

// Regular
function  _message_regular(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var icon = arguments[2] ? arguments[2] : 'quote-1';
	var delay = arguments[3] ? arguments[3] :  _GLOBALS['message_timeout'];
	return  _message({
		msg: msg,
		hdr: hdr,
		icon: icon,
		type: 'regular',
		delay: delay,
		buttons: [],
		callback: null
	});
}

// Confirm dialog
function  _message_confirm(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var callback = arguments[2] ? arguments[2] : null;
	return  _message({
		msg: msg,
		hdr: hdr,
		icon: 'help',
		type: 'regular',
		delay: 0,
		buttons: ['Yes', 'No'],
		callback: callback
	});
}

// Modal dialog
function  _message_dialog(content) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var init = arguments[2] ? arguments[2] : null;
	var callback = arguments[3] ? arguments[3] : null;
	return  _message({
		msg: content,
		hdr: hdr,
		icon: '',
		type: 'regular',
		delay: 0,
		buttons: ['Apply', 'Cancel'],
		init: init,
		callback: callback
	});
}

// General message window
function  _message(opt) {
	"use strict";
	var msg = opt.msg != undefined ? opt.msg : '';
	var hdr  = opt.hdr != undefined ? opt.hdr : '';
	var icon = opt.icon != undefined ? opt.icon : '';
	var type = opt.type != undefined ? opt.type : 'regular';
	var delay = opt.delay != undefined ? opt.delay :  _GLOBALS['message_timeout'];
	var buttons = opt.buttons != undefined ? opt.buttons : [];
	var init = opt.init != undefined ? opt.init : null;
	var callback = opt.callback != undefined ? opt.callback : null;
	// Modal bg
	jQuery('# _modal_bg').remove();
	jQuery('body').append('<div id=" _modal_bg"></div>');
	jQuery('# _modal_bg').fadeIn();
	// Popup window
	jQuery('. _message').remove();
	var html = '<div class=" _message  _message_' + type + (buttons.length > 0 ? '  _message_dialog' : '') + '">'
		+ '<span class=" _message_close iconadmin-cancel icon-cancel-1"></span>'
		+ (icon ? '<span class=" _message_icon iconadmin-'+icon+' icon-'+icon+'"></span>' : '')
		+ (hdr ? '<h2 class=" _message_header">'+hdr+'</h2>' : '');
	html += '<div class=" _message_body">' + msg + '</div>';
	if (buttons.length > 0) {
		html += '<div class=" _message_buttons">';
		for (var i=0; i<buttons.length; i++) {
			html += '<span class=" _message_button">'+buttons[i]+'</span>';
		}
		html += '</div>';
	}
	html += '</div>';
	// Add popup to body
	jQuery('body').append(html);
	var popup = jQuery('body . _message').eq(0);
	// Prepare callback on buttons click
	if (callback != null) {
		 _GLOBALS['message_callback'] = callback;
		jQuery('. _message_button').click(function(e) {
			"use strict";
			var btn = jQuery(this).index();
			callback(btn+1, popup);
			 _GLOBALS['message_callback'] = null;
			 _message_destroy();
		});
	}
	// Call init function
	if (init != null) init(popup);
	// Show (animate) popup
	var top = jQuery(window).scrollTop();
	jQuery('body . _message').animate({top: top+Math.round((jQuery(window).height()-jQuery('. _message').height())/2), opacity: 1}, {complete: function () {
		// Call init function
		//if (init != null) init(popup);
	}});
	// Delayed destroy (if need)
	if (delay > 0) {
		setTimeout(function() {  _message_destroy(); }, delay);
	}
	return popup;
}

// Destroy message window
function  _message_destroy() {
	"use strict";
	var top = jQuery(window).scrollTop();
	jQuery('# _modal_bg').fadeOut();
	jQuery('. _message').animate({top: top-jQuery('. _message').height(), opacity: 0});
	setTimeout(function() { jQuery('# _modal_bg').remove(); jQuery('. _message').remove(); }, 500);
}
