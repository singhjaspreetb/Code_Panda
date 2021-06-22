 jQuery(document).ready(function() {
	"use strict"; 
		THEMEREX_GLOBALS["ajax_url"] = "#";
		THEMEREX_GLOBALS["ajax_nonce"] = "afefc26b7a";
		THEMEREX_GLOBALS["ajax_nonce_editor"] = "b4f7f39b8a";
		THEMEREX_GLOBALS["site_url"] = "index.html";
		THEMEREX_GLOBALS["vc_edit_mode"] = false;
		THEMEREX_GLOBALS["theme_font"] = "";
		THEMEREX_GLOBALS["theme_skin"] = "education";
		THEMEREX_GLOBALS["theme_skin_bg"] = "";
		THEMEREX_GLOBALS["slider_height"] = 100;
		THEMEREX_GLOBALS["system_message"] = {
			message: "",
			status: "",
			header: ""
		};
		THEMEREX_GLOBALS["user_logged_in"] = true;
		THEMEREX_GLOBALS["toc_menu"] = "fixed";
		THEMEREX_GLOBALS["toc_menu_home"] = false;
		THEMEREX_GLOBALS["toc_menu_top"] = true;
		THEMEREX_GLOBALS["menu_fixed"] = true;
		THEMEREX_GLOBALS["menu_relayout"] = 960;
		THEMEREX_GLOBALS["menu_responsive"] = 800;
		THEMEREX_GLOBALS["menu_slider"] = true;
		THEMEREX_GLOBALS["demo_time"] = 0;
		THEMEREX_GLOBALS["media_elements_enabled"] = true;
		THEMEREX_GLOBALS["ajax_search_enabled"] = true;
		THEMEREX_GLOBALS["ajax_search_min_length"] = 3;
		THEMEREX_GLOBALS["ajax_search_delay"] = 200;
		THEMEREX_GLOBALS["css_animation"] = true;
		THEMEREX_GLOBALS["menu_animation_in"] = "bounceIn";
		THEMEREX_GLOBALS["menu_animation_out"] = "fadeOutDown";
		THEMEREX_GLOBALS["popup_engine"] = "pretty";
		THEMEREX_GLOBALS["popup_gallery"] = true;
		THEMEREX_GLOBALS["email_mask"] = "^([a-zA-Z0-9_\-]+\.)*[a-zA-Z0-9_\-]+@[a-z0-9_\-]+(\.[a-z0-9_\-]+)*\.[a-z]{2,6}$";
		THEMEREX_GLOBALS["contacts_maxlength"] = 1000;
		THEMEREX_GLOBALS["comments_maxlength"] = 1000;
		THEMEREX_GLOBALS["remember_visitors_settings"] = false;
		THEMEREX_GLOBALS["admin_mode"] = false;
		THEMEREX_GLOBALS["isotope_resize_delta"] = 0.3;
		THEMEREX_GLOBALS["error_message_box"] = null;
		THEMEREX_GLOBALS["viewmore_busy"] = false;
		THEMEREX_GLOBALS["video_resize_inited"] = false;
		THEMEREX_GLOBALS["top_panel_height"] = 0;
	});
		
jQuery(document).ready(function() {
	"use strict";
	THEMEREX_GLOBALS["strings"] = {
		bookmark_add: "Add the bookmark",
		bookmark_added: "Current page has been successfully added to the bookmarks. You can see it in the right panel on the tab \"Bookmarks\"",
		bookmark_del: "Delete this bookmark",
		bookmark_title: "Enter bookmark title",
		bookmark_exists: "Current page already exists in the bookmarks list",
		search_error: "Error occurs in AJAX search! Please, type your query and press search icon for the traditional search way.",
		email_confirm: "On the e-mail address <b>%s</b> we sent a confirmation email.<br>Please, open it and click on the link.",
		reviews_vote: "Thanks for your vote! New average rating is:",
		reviews_error: "Error saving your vote! Please, try again later.",
		error_like: "Error saving your like! Please, try again later.",
		error_global: "Global error text",
		name_empty: "The name can\"t be empty",
		name_long: "Too long name",
		email_empty: "Too short (or empty) email address",
		email_long: "Too long email address",
		email_not_valid: "Invalid email address",
		subject_empty: "The subject can\"t be empty",
		subject_long: "Too long subject",
		text_empty: "The message text can\"t be empty",
		text_long: "Too long message text",
		send_complete: "Send message complete!",
		send_error: "Transmit failed!",
		login_empty: "The Login field can\"t be empty",
		login_long: "Too long login field",
		login_success: "Login success! The page will be reloaded in 3 sec.",
		login_failed: "Login failed!",
		password_empty: "The password can\"t be empty and shorter then 4 characters",
		password_long: "Too long password",
		password_not_equal: "The passwords in both fields are not equal",
		registration_success: "Registration success! Please log in!",
		registration_failed: "Registration failed!",
		geocode_error: "Geocode was not successful for the following reason:",
		googlemap_not_avail: "Google map API not available!",
		editor_save_success: "Post content saved!",
		editor_save_error: "Error saving post data!",
		editor_delete_post: "You really want to delete the current post?",
		editor_delete_post_header: "Delete post",
		editor_delete_success: "Post deleted!",
		editor_delete_error: "Error deleting post!",
		editor_caption_cancel: "Cancel",
		editor_caption_close: "Close"
	};
});

jQuery(document).ready(function() {
	"use strict";
	if (THEMEREX_GLOBALS["theme_font"] == "") THEMEREX_GLOBALS["theme_font"] = "Roboto";
	THEMEREX_GLOBALS["link_color"] = "#1eaace";
	THEMEREX_GLOBALS["menu_color"] = "#1dbb90";
	THEMEREX_GLOBALS["user_color"] = "#ffb20e";
});

jQuery(document).ready(function() {
	"use strict";
	THEMEREX_GLOBALS["reviews_allow_user_marks"] = true;
	THEMEREX_GLOBALS["reviews_max_level"] = 100;
	THEMEREX_GLOBALS["reviews_levels"] = "bad,poor,normal,good,great";
	THEMEREX_GLOBALS["reviews_vote"] = "";
	THEMEREX_GLOBALS["reviews_marks"] = "58,47,62,47".split(",");
	THEMEREX_GLOBALS["reviews_users"] = 12;
	THEMEREX_GLOBALS["post_id"] = 688;
});

jQuery(document).ready(function() {
	"use strict";
	THEMEREX_GLOBALS["reviews_allow_user_marks"] = true;
	THEMEREX_GLOBALS["reviews_max_level"] = 100;
	THEMEREX_GLOBALS["reviews_levels"] = "bad,poor,normal,good,great";
	THEMEREX_GLOBALS["reviews_vote"] = "";
	THEMEREX_GLOBALS["reviews_marks"] = "50,77,63,60".split(",");
	THEMEREX_GLOBALS["reviews_users"] = 8;
	THEMEREX_GLOBALS["post_id"] = 636;
});

jQuery(document).ready(function() {
	THEMEREX_GLOBALS["reviews_allow_user_marks"] = true;
	THEMEREX_GLOBALS["reviews_max_level"] = 100;
	THEMEREX_GLOBALS["reviews_levels"] = "bad,poor,normal,good,great";
	THEMEREX_GLOBALS["reviews_vote"] = "";
	THEMEREX_GLOBALS["reviews_marks"] = "89,79,72,71".split(",");
	THEMEREX_GLOBALS["reviews_users"] = 4;
	THEMEREX_GLOBALS["post_id"] = 26;
});

jQuery(document).ready(function() {
	"use strict";
	THEMEREX_GLOBALS["reviews_allow_user_marks"] = true;
	THEMEREX_GLOBALS["reviews_max_level"] = 100;
	THEMEREX_GLOBALS["reviews_levels"] = "bad,poor,normal,good,great";
	THEMEREX_GLOBALS["reviews_vote"] = "";
	THEMEREX_GLOBALS["reviews_marks"] = "68,75,88,96".split(",");
	THEMEREX_GLOBALS["reviews_users"] = 2;
	THEMEREX_GLOBALS["post_id"] = 32;
});

jQuery(document).ready(function() {
	"use strict";
	THEMEREX_GLOBALS["reviews_allow_user_marks"] = true;
	THEMEREX_GLOBALS["reviews_max_level"] = 100;
	THEMEREX_GLOBALS["reviews_levels"] = "bad,poor,normal,good,great";
	THEMEREX_GLOBALS["reviews_vote"] = "";
	THEMEREX_GLOBALS["reviews_marks"] = "79,87,89,92".split(",");
	THEMEREX_GLOBALS["reviews_users"] = 3;
	THEMEREX_GLOBALS["post_id"] = 92;
});


jQuery(document).ready(function() {
	"use strict";
	THEMEREX_GLOBALS['ppp'] = 6;
	jQuery(".isotope_filters.isotope-courses-streampage").append('<a href="#" data-filter="*" class="isotope_filters_button active">All</a><a href="#" data-filter=".flt_55" class="isotope_filters_button">Language</a><a href="#" data-filter=".flt_43" class="isotope_filters_button">Marketing</a><a href="#" data-filter=".flt_57" class="isotope_filters_button">Social</a><a href="#" data-filter=".flt_52" class="isotope_filters_button">Medicine</a><a href="#" data-filter=".flt_53" class="isotope_filters_button">Computers</a>');
});

jQuery(document).ready(function() {
	"use strict";
	THEMEREX_GLOBALS['ppp'] = 8;
	jQuery(".isotope_filters.portfolio-page-2-columns").append('<a href="#" data-filter="*" class="isotope_filters_button active">All</a><a href="#" data-filter=".flt_34" class="isotope_filters_button">medical</a><a href="#" data-filter=".flt_32" class="isotope_filters_button">masonry</a><a href="#" data-filter=".flt_33" class="isotope_filters_button">english</a>');
});


jQuery(document).ready(function() {
	"use strict";
	THEMEREX_GLOBALS['ppp'] = 8;
	jQuery(".isotope_filters.portfolio-page-3-columns").append('<a href="#" data-filter="*" class="isotope_filters_button active">All</a><a href="#" data-filter=".flt_34" class="isotope_filters_button">medical</a><a href="#" data-filter=".flt_32" class="isotope_filters_button">masonry</a><a href="#" data-filter=".flt_33" class="isotope_filters_button">english</a>');
});


jQuery(document).ready(function() {
	"use strict";
	THEMEREX_GLOBALS['ppp'] = 9;
	jQuery(".isotope_filters.masonry-page-2-columns").append('<a href="#" data-filter="*" class="isotope_filters_button active">All</a><a href="#" data-filter=".flt_34" class="isotope_filters_button">medical</a><a href="#" data-filter=".flt_32" class="isotope_filters_button">masonry</a><a href="#" data-filter=".flt_33" class="isotope_filters_button">english</a><a href="#" data-filter=".flt_35" class="isotope_filters_button">computer</a>');
});

jQuery(document).ready(function() {
	"use strict";
	THEMEREX_GLOBALS['ppp'] = 9;
	jQuery(".isotope_filters.masonry-page-3-columns").append('<a href="#" data-filter="*" class="isotope_filters_button active">All</a><a href="#" data-filter=".flt_34" class="isotope_filters_button">medical</a><a href="#" data-filter=".flt_32" class="isotope_filters_button">masonry</a><a href="#" data-filter=".flt_33" class="isotope_filters_button">english</a><a href="#" data-filter=".flt_35" class="isotope_filters_button">computer</a>');
});


jQuery(document).ready(function() {
	"use strict";
	jQuery("a.zoom").prettyPhoto({
		hook: 'data-rel',
		social_tools: false,
		horizontal_padding: 20,
		opacity: 0.8,
		deeplinking: false
	});
	jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
		hook: 'data-rel',
		social_tools: false,
		horizontal_padding: 20,
		opacity: 0.8,
		deeplinking: false
	});
});
