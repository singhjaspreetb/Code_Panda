// Interactive change skin custom styles
function themerex_skin_customizer(option, val) {

	var custom_style = '';

	if (option == 'body_style') {
		jQuery('body')
			.removeClass('body_style_boxed body_style_wide body_style_fullwide body_style_fullscreen')
			.addClass('body_style_'+val);
		if (val == 'boxed') jQuery('#custom_options #co_bg_pattern_list a').eq(0).trigger('click');

	} else if (option == 'bg_color') {

		jQuery("#custom_options .co_switch_box a[data-value='boxed']").trigger('click');
		jQuery('#custom_options #co_bg_pattern_list .co_pattern_wrapper, #custom_options #co_bg_images_list .co_image_wrapper').removeClass('active');
		jQuery('body').removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3').css('backgroundColor', clr);

	} else if (option == 'bg_pattern') {

		jQuery('body')
			.removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3')
			.css('backgroundColor', 'transparent')
			.addClass('bg_pattern_' + val);

	} else if (option == 'bg_image') {

		jQuery('body')
			.removeClass('bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_image_1 bg_image_2 bg_image_3')
			.css('backgroundColor', 'transparent')
			.addClass('bg_image_' + val);

	} 
	
	
	else if(option == 'color_scheme'){
			if(val == 'pastel'){
				var clr1 = '#000';
				var rgb1 = '#564';
				
				var clr2 = '#000';
				var rgb2 = '#564';
				
				var clr3 = '#000';
				var rgb3 = '#564';
		
			}
		
		
		
	}
	
	else if (option == 'link_color') {

		var clr = val;
		var rgb = themerex_hex2rgb(clr);
		// Link color styles
		custom_style += '\
			a,\
			.bg_tint_light a,\
			.link_color,\
			.top_panel_style_light .content .search_wrap.search_style_regular .search_form_wrap .search_submit,\
			.top_panel_style_light .content .search_wrap.search_style_regular .search_icon,\
			.search_results .post_more,\
			.search_results .search_results_close,\
			.page_top_wrap .breadcrumbs a.breadcrumbs_item,\
			.post_title .post_icon,\
			.post_item_related .post_title a,\
			.isotope_item_courses .post_category a,\
			.isotope_item_courses .post_rating .reviews_stars_bg,\
			.isotope_item_courses .post_rating .reviews_stars_hover,\
			.isotope_item_courses .post_rating .reviews_value,\
			.isotope_item_courses_1 .post_title a,\
			.reviews_block .reviews_item:nth-child(3n+1) .reviews_stars_hover,\
			.post_item:nth-child(3n+1) .post_rating .reviews_stars_bg,\
			.post_item:nth-child(3n+1) .post_rating .reviews_stars_hover,\
			.post_item:nth-child(3n+1) .post_rating .reviews_value,\
			.post_author .post_author_title a,\
			.comments_list_wrap .comment_info > span.comment_author,\
			.comments_list_wrap .comment_info > .comment_date > .comment_date_value,\
			.layout_single-courses .post_info .post_info_date,\
			.layout_single-courses .post_info .post_info_posted:before,\
			.widget_area .widget_text a,\
			.widget_area .post_info a,\
			.sc_accordion.sc_accordion_style_1 .sc_accordion_item .sc_accordion_title.ui-state-active,\
			.sc_audio .sc_audio_author_name,\
			.sc_audio .sc_audio_title,\
			.sc_button.sc_button_style_border,\
			.sc_dropcaps.sc_dropcaps_style_1 .sc_dropcaps_item,\
			.sc_icon_bg_link,\
			.sc_icon_shape_round.sc_icon_bg_link:hover,\
			.sc_icon_shape_square.sc_icon_bg_link:hover,\
			a:hover .sc_icon_shape_round.sc_icon_bg_link,\
			a:hover .sc_icon_shape_square.sc_icon_bg_link,\
			.sc_list_style_iconed li:before,\
			.sc_list_style_iconed .sc_list_icon,\
			.sc_tabs.sc_tabs_style_1 .sc_tabs_titles li.ui-state-active a,\
			.sc_tabs.sc_tabs_style_1 .sc_tabs_titles li a:hover,\
			.sc_team_item .sc_team_item_info .sc_team_item_title a,\
			.sc_title_icon,\
			.sc_toggles.sc_toggles_style_1 .sc_toggles_item .sc_toggles_title.ui-state-active,\
			.woocommerce .woocommerce-message:before, .woocommerce-page .woocommerce-message:before,\
			.woocommerce div.product span.price, .woocommerce div.product p.price, .woocommerce #content div.product span.price, .woocommerce #content div.product p.price, .woocommerce-page div.product span.price, .woocommerce-page div.product p.price, .woocommerce-page #content div.product span.price, .woocommerce-page #content div.product p.price,.woocommerce ul.products li.product .price,.woocommerce-page ul.products li.product .price,\
			.woocommerce a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.alt:hover, .woocommerce #respond input#submit.alt:hover, .woocommerce #content input.button.alt:hover, .woocommerce-page a.button.alt:hover, .woocommerce-page button.button.alt:hover, .woocommerce-page input.button.alt:hover, .woocommerce-page #respond input#submit.alt:hover, .woocommerce-page #content input.button.alt:hover,\
			.woocommerce a.button:hover, .woocommerce button.button:hover, .woocommerce input.button:hover, .woocommerce #respond input#submit:hover, .woocommerce #content input.button:hover, .woocommerce-page a.button:hover, .woocommerce-page button.button:hover, .woocommerce-page input.button:hover, .woocommerce-page #respond input#submit:hover, .woocommerce-page #content input.button:hover,\
			.woocommerce .quantity input[type="button"]:hover, .woocommerce #content input[type="button"]:hover, .woocommerce-page .quantity input[type="button"]:hover, .woocommerce-page #content .quantity input[type="button"]:hover,\
			.woocommerce ul.cart_list li > .amount, .woocommerce ul.product_list_widget li > .amount, .woocommerce-page ul.cart_list li > .amount, .woocommerce-page ul.product_list_widget li > .amount,\
			.woocommerce ul.cart_list li span .amount, .woocommerce ul.product_list_widget li span .amount, .woocommerce-page ul.cart_list li span .amount, .woocommerce-page ul.product_list_widget li span .amount,\
			.woocommerce ul.cart_list li ins .amount, .woocommerce ul.product_list_widget li ins .amount, .woocommerce-page ul.cart_list li ins .amount, .woocommerce-page ul.product_list_widget li ins .amount,\
			.woocommerce.widget_shopping_cart .total .amount, .woocommerce .widget_shopping_cart .total .amount, .woocommerce-page.widget_shopping_cart .total .amount, .woocommerce-page .widget_shopping_cart .total .amount,\
			.woocommerce a:hover h3, .woocommerce-page a:hover h3,\
			.woocommerce .cart-collaterals .order-total strong, .woocommerce-page .cart-collaterals .order-total strong,\
			.woocommerce .checkout #order_review .order-total .amount, .woocommerce-page .checkout #order_review .order-total .amount,\
			.woocommerce .star-rating, .woocommerce-page .star-rating, .woocommerce .star-rating:before, .woocommerce-page .star-rating:before,\
			.widget_area .widgetWrap ul > li .star-rating span, .woocommerce #review_form #respond .stars a, .woocommerce-page #review_form #respond .stars a,\
			.woocommerce ul.products li.product h3 a, .woocommerce-page ul.products li.product h3 a,\
			.woocommerce ul.products li.product .price, .woocommerce-page ul.products li.product .price,\
			.woocommerce ul.products li.product .star-rating:before, .woocommerce ul.products li.product .star-rating span\
			{\
				color:'+clr+';\
			}\
			.sc_countdown.sc_countdown_style_2 .sc_countdown_separator,\
			.sc_countdown.sc_countdown_style_2 .sc_countdown_label\
			{\
				color: rgba('+rgb.r+','+rgb.g+','+rgb.b+', 0.8);\
			}\
			.link_color_bgc,\
			.sc_table table tr:first-child,\
			.top_panel_style_light .page_top_wrap,\
			.isotope_item_courses .post_featured .post_mark_new,\
			.isotope_item_courses .post_featured .post_title,\
			.isotope_item_courses > .post_item_courses > .post_content.ih-item.square.colored .info,\
			.reviews_block .reviews_max_level_100:nth-child(3n+1) .reviews_stars_hover,\
			.reviews_block .reviews_item:nth-child(3n+1) .reviews_slider,\
			.error404.top_panel_style_light .page_content_wrap,\
			.sc_accordion.sc_accordion_style_1 .sc_accordion_item .sc_accordion_title.ui-state-active .sc_accordion_icon_opened,\
			input[type="submit"],\
			input[type="button"],\
			button,\
			.sc_button.sc_button_style_filled,\
			.sc_blogger.layout_date .sc_blogger_item .sc_blogger_date,\
			.sc_dropcaps.sc_dropcaps_style_2 .sc_dropcaps_item,\
			.sc_highlight_style_1,\
			.sc_icon_shape_round.sc_icon_bg_link,\
			.sc_icon_shape_square.sc_icon_bg_link,\
			.sc_infobox.sc_infobox_style_regular,\
			.sc_price_block.sc_price_block_style_1,\
			.sc_skills_bar .sc_skills_item .sc_skills_count,\
			.sc_skills_counter .sc_skills_item.sc_skills_style_3 .sc_skills_count,\
			.sc_skills_counter .sc_skills_item.sc_skills_style_4 .sc_skills_count,\
			.sc_skills_counter .sc_skills_item.sc_skills_style_4 .sc_skills_info,\
			.sc_tabs.sc_tabs_style_1 .sc_tabs_titles li.ui-state-active a:after,\
			.sc_scroll_bar .swiper-scrollbar-drag:before,\
			.sc_toggles.sc_toggles_style_1 .sc_toggles_item .sc_toggles_title.ui-state-active .sc_toggles_icon_opened,\
			.sc_tooltip_parent .sc_tooltip,\
			.sc_tooltip_parent .sc_tooltip:before,\
			.woocommerce .widget_price_filter .ui-slider .ui-slider-range,.woocommerce-page .widget_price_filter .ui-slider .ui-slider-range,\
			.woocommerce a.button, .woocommerce button.button, .woocommerce input.button, .woocommerce #respond input#submit, .woocommerce #content input.button, .woocommerce-page a.button, .woocommerce-page button.button, .woocommerce-page input.button, .woocommerce-page #respond input#submit, .woocommerce-page #content input.button, .woocommerce a.button.alt, .woocommerce button.button.alt, .woocommerce input.button.alt, .woocommerce #respond input#submit.alt, .woocommerce #content input.button.alt, .woocommerce-page a.button.alt, .woocommerce-page button.button.alt, .woocommerce-page input.button.alt, .woocommerce-page #respond input#submit.alt, .woocommerce-page #content input.button.alt,\
			.woocommerce span.new, .woocommerce-page span.new,\
			.woocommerce span.onsale, .woocommerce-page span.onsale,\
			.woocommerce ul.products li.product .add_to_cart_button, .woocommerce-page ul.products li.product .add_to_cart_button,\
			.woocommerce table.cart thead th, .woocommerce #content table.cart thead th, .woocommerce-page table.cart thead th, .woocommerce-page #content table.cart thead th\
			{\
				background-color: '+clr+';\
			}\
			.sc_countdown.sc_countdown_style_2 .sc_countdown_digits span {\
				background-color: rgba('+rgb.r+','+rgb.g+','+rgb.b+', 0.5);\
			}\
			figure figcaption,\
			.sc_image figcaption\
			{\
				background-color: rgba('+rgb.r+','+rgb.g+','+rgb.b+', 0.6);\
			}\
			.sc_team.sc_team_style_2 .sc_team_item_avatar .sc_team_item_hover \
			{\
				background-color: rgba('+rgb.r+','+rgb.g+','+rgb.b+', 0.8);\
			}\
			.sc_slider_swiper .sc_slider_info {\
				background-color: rgba('+rgb.r+','+rgb.g+','+rgb.b+', 0.8) !important;\
			}\
			.link_color_bg,\
			#bbpress-forums div.bbp-topic-content a,\
			#buddypress button, #buddypress a.button, #buddypress input[type="submit"], #buddypress input[type="button"], #buddypress input[type="reset"], #buddypress ul.button-nav li a, #buddypress div.generic-button a, #buddypress .comment-reply-link, a.bp-title-button, #buddypress div.item-list-tabs ul li.selected a,\
			.woocommerce .widget_price_filter .ui-slider .ui-slider-handle, .woocommerce-page .widget_price_filter .ui-slider .ui-slider-handle\
			{\
				background: '+clr+';\
			}\
			.mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current, .mejs-controls .mejs-time-rail .mejs-time-current\
			{\
				background: '+clr+' !important;\
			}\
			.link_color_border,\
			pre.code,\
			#toc .toc_item.current,\
			#toc .toc_item:hover,\
			.top_panel_style_light .content .search_wrap.search_style_regular.search_opened,\
			.post_format_aside.post_item_single .post_content p,\
			.post_format_aside .post_descr,\
			.post_item_related .post_content_wrap,\
			.isotope_wrap .isotope_item .post_featured,\
			.isotope_wrap .isotope_item_courses_1 .post_featured,\
			.comments_list_wrap ul.children,\
			.comments_list_wrap ul > li + li,\
			.comments_list_wrap > ul,\
			.sc_accordion.sc_accordion_style_1 .sc_accordion_item .sc_accordion_title.ui-state-active,\
			.sc_button.sc_button_style_border,\
			.sc_blogger.layout_date .sc_blogger_item .sc_blogger_date,\
			.sc_icon_shape_round.sc_icon_bg_link,\
			.sc_icon_shape_square.sc_icon_bg_link,\
			.sc_skills_bar .sc_skills_item .sc_skills_count,\
			.sc_team_item .sc_team_item_info,\
			.sc_toggles.sc_toggles_style_1 .sc_toggles_item .sc_toggles_title.ui-state-active,\
			.woocommerce ul.products li.product .post_featured, .woocommerce-page ul.products li.product .post_featured,\
			.woocommerce ul.products li.product:nth-child(5n+1) .post_featured, .woocommerce-page ul.products li.product:nth-child(5n+1) .post_featured\
			{\
				border-color: '+clr+'; \
			}\
			.woocommerce .woocommerce-message, .woocommerce-page .woocommerce-message,\
			.woocommerce a.button.alt:active, .woocommerce button.button.alt:active, .woocommerce input.button.alt:active, .woocommerce #respond input#submit.alt:active, .woocommerce #content input.button.alt:active, .woocommerce-page a.button.alt:active, .woocommerce-page button.button.alt:active, .woocommerce-page input.button.alt:active, .woocommerce-page #respond input#submit.alt:active, .woocommerce-page #content input.button.alt:active,\
			.woocommerce a.button:active, .woocommerce button.button:active, .woocommerce input.button:active, .woocommerce #respond input#submit:active, .woocommerce #content input.button:active, .woocommerce-page a.button:active, .woocommerce-page button.button:active, .woocommerce-page input.button:active, .woocommerce-page #respond input#submit:active, .woocommerce-page #content input.button:active\
			{\
				border-top-color: '+clr+'; \
			}\
			.comments_wrap .comment-respond {\
				border-bottom-color: '+clr+'; \
			}\
			.post_content.ih-item.circle.effect17.colored:hover .img:before {\
				box-shadow: inset 0 0 0 110px '+clr+', inset 0 0 0 16px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(0, 0, 0, 0.1);\
			}\
		';
		// Link dark color
		hsb = themerex_hex2hsb(clr);
		hsb.s = Math.min(100, hsb.s + 15);
		hsb.b = Math.max(0, hsb.b - 20);
		clr = themerex_hsb2hex(hsb);
		custom_style += '\
			a:hover,\
			.bg_tint_light a:hover,\
			a.link_color:hover,\
			.link_dark,\
			.search_results .post_more:hover,\
			.search_results .search_results_close:hover,\
			.post_item_related .post_title a:hover,\
			.isotope_item_courses_1 .post_title a:hover,\
			.isotope_item_courses_1 .post_category a:hover,\
			.post_author .post_author_title a:hover,\
			.widget_area .widget_text a:hover,\
			.widget_area .post_info a:hover,\
			.sc_accordion.sc_accordion_style_1 .sc_accordion_item .sc_accordion_title:hover,\
			.sc_icon.sc_icon_bg_link:hover,\
			a:hover .sc_icon.sc_icon_bg_link,\
			.sc_team_item .sc_team_item_info .sc_team_item_title a:hover,\
			.sc_toggles.sc_toggles_style_1 .sc_toggles_item .sc_toggles_title:hover,\
			.woocommerce ul.products li.product h3 a:hover, .woocommerce-page ul.products li.product h3 a:hover\
			{\
				color:'+clr+';\
			}\
			.top_panel_style_light .content .search_wrap.search_style_regular .search_form_wrap .search_submit:hover,\
			.top_panel_style_light .content .search_wrap.search_style_regular .search_icon:hover\
			{\
				color:'+clr+' !important;\
			}\
			.link_dark_bgc,\
			.page_top_wrap .breadcrumbs a.breadcrumbs_item:hover,\
			.top_panel_style_dark.article_style_boxed .page_top_wrap .breadcrumbs a.breadcrumbs_item:hover,\
			.sc_accordion.sc_accordion_style_1 .sc_accordion_item .sc_accordion_title:hover .sc_accordion_icon_opened,\
			.sc_toggles.sc_toggles_style_1 .sc_toggles_item .sc_toggles_title:hover .sc_toggles_icon_opened,\
			.woocommerce ul.products li.product .add_to_cart_button:hover, .woocommerce-page ul.products li.product .add_to_cart_button:hover\
			{\
				background-color: '+clr+';\
			}\
			.link_dark_bg\
			{\
				background: '+clr+';\
			}\
			.link_dark_border,\
			.sc_accordion.sc_accordion_style_1 .sc_accordion_item .sc_accordion_title:hover,\
			.sc_toggles.sc_toggles_style_1 .sc_toggles_item .sc_toggles_title:hover\
			{\
				border-color: '+clr+'; \
			}\
		';

	} else if (option == 'menu_color') {

		var clr = val;
		var rgb = themerex_hex2rgb(clr);
		// Menu color styles
		custom_style += '\
			.menu_color,\
			.bg_tint_light .menu_main_responsive_button,\
			.search_wrap.search_style_regular .search_form_wrap .search_submit,\
			.search_wrap.search_style_regular .search_icon,\
			.post_item_related:nth-child(3n+2) .post_title a,\
			.isotope_item_courses:nth-child(5n+2) .post_featured .post_category a,\
			.isotope_item_courses:nth-child(5n+4) .post_featured .post_category a,\
			.isotope_item_courses:nth-child(5n+2) .post_featured .post_rating .reviews_stars_bg,\
			.isotope_item_courses:nth-child(5n+4) .post_featured .post_rating .reviews_stars_bg,\
			.isotope_item_courses:nth-child(5n+2) .post_featured .post_rating .reviews_stars_hover,\
			.isotope_item_courses:nth-child(5n+4) .post_featured .post_rating .reviews_stars_hover,\
			.isotope_item_courses:nth-child(5n+2) .post_featured .post_rating .reviews_value,\
			.isotope_item_courses:nth-child(5n+4) .post_featured .post_rating .reviews_value,\
			.isotope_item_courses_1:nth-child(3n+2) .post_title a,\
			.isotope_item_courses_1:nth-child(3n+2) .post_category a,\
			.isotope_item_courses_1:nth-child(3n+2) .post_item .post_rating .reviews_stars_bg,\
			.isotope_item_courses_1:nth-child(3n+2) .post_item .post_rating .reviews_stars_hover,\
			.isotope_item_courses_1:nth-child(3n+2) .post_item .post_rating .reviews_value,\
			.pagination_slider .pager_cur:hover,\
			.pagination_slider .pager_cur:focus,\
			.pagination_pages > .active,\
			.pagination_pages > a:hover,\
			.pagination_wrap .pager_next,\
			.pagination_wrap .pager_prev,\
			.pagination_wrap .pager_last,\
			.pagination_wrap .pager_first,\
			.reviews_block .reviews_item:nth-child(3n+2) .reviews_stars_hover,\
			.post_item:nth-child(3n+2) .post_rating .reviews_stars_bg,\
			.post_item:nth-child(3n+2) .post_rating .reviews_stars_hover,\
			.post_item:nth-child(3n+2) .post_rating .reviews_value,\
			.post_item_404 .page_title,\
			.post_item_404 .page_subtitle,\
			.widget_area a,\
			.widget_area ul li:before,\
			.widget_area ul li a:hover,\
			.widget_area button:before,\
			.widget_area .widget_product_tag_cloud a:hover,\
			.widget_area .widget_tag_cloud a:hover,\
			.sc_accordion.sc_accordion_style_2 .sc_accordion_item .sc_accordion_title.ui-state-active,\
			.sc_accordion.sc_accordion_style_2 .sc_accordion_item .sc_accordion_title.ui-state-active .sc_accordion_icon,\
			.sc_countdown.sc_countdown_style_1 .sc_countdown_digits,\
			.sc_countdown.sc_countdown_style_1 .sc_countdown_separator,\
			.sc_countdown.sc_countdown_style_1 .sc_countdown_label,\
			.sc_icon_bg_menu,\
			.sc_icon_shape_round.sc_icon_bg_menu:hover,\
			.sc_icon_shape_square.sc_icon_bg_menu:hover,\
			a:hover .sc_icon_shape_round.sc_icon_bg_menu,\
			a:hover .sc_icon_shape_square.sc_icon_bg_menu,\
			.sc_tabs.sc_tabs_style_2 .sc_tabs_titles li a:hover,\
			.sc_tabs.sc_tabs_style_2 .sc_tabs_titles li.ui-state-active a,\
			.sc_toggles.sc_toggles_style_2 .sc_toggles_item .sc_toggles_title.ui-state-active,\
			.sc_toggles.sc_toggles_style_2 .sc_toggles_item .sc_toggles_title.ui-state-active .sc_toggles_icon,\
			.woocommerce ul.products li.product:nth-child(5n+2) h3 a, .woocommerce-page ul.products li.product:nth-child(5n+2) h3 a,\
			.woocommerce ul.products li.product:nth-child(5n+4) h3 a, .woocommerce-page ul.products li.product:nth-child(5n+4) h3 a,\
			.woocommerce ul.products li.product:nth-child(5n+2) .price, .woocommerce-page ul.products li.product:nth-child(5n+2) .price,\
			.woocommerce ul.products li.product:nth-child(5n+4) .price, .woocommerce-page ul.products li.product:nth-child(5n+4) .price,\
			.woocommerce ul.products li.product:nth-child(5n+2) .star-rating:before, .woocommerce ul.products li.product:nth-child(5n+2) .star-rating span,\
			.woocommerce ul.products li.product:nth-child(5n+4) .star-rating:before, .woocommerce ul.products li.product:nth-child(5n+4) .star-rating span,\
			.woocommerce nav.woocommerce-pagination ul li a:focus, .woocommerce nav.woocommerce-pagination ul li a:hover, .woocommerce nav.woocommerce-pagination ul li span.current\
			{\
				color: '+clr+';\
			}\
			.menu_color_bgc,\
			.menu_main_wrap .menu_main_nav > li:hover,\
			.menu_main_wrap .menu_main_nav > li.sfHover,\
			.menu_main_wrap .menu_main_nav > li#blob,\
			.menu_main_wrap .menu_main_nav > li.current-menu-item,\
			.menu_main_wrap .menu_main_nav > li.current-menu-parent,\
			.menu_main_wrap .menu_main_nav > li.current-menu-ancestor,\
			.menu_main_wrap .menu_main_nav > li ul,\
			.menu_user_wrap .menu_user_nav > li.menu_user_register,\
			.menu_user_wrap .menu_user_nav > li.menu_user_login,\
			.menu_user_wrap .menu_user_nav > li.menu_user_logout,\
			.menu_main_wrap .menu_main_nav_area .menu_main_responsive,\
			.isotope_filters a,\
			.isotope_item_courses:nth-child(5n+2) .post_featured .post_mark_new,\
			.isotope_item_courses:nth-child(5n+2) .post_featured .post_title,\
			.isotope_item_courses:nth-child(5n+2) .post_content.ih-item.colored .info,\
			.isotope_item_courses:nth-child(5n+4) .post_featured .post_mark_new,\
			.isotope_item_courses:nth-child(5n+4) .post_featured .post_title,\
			.isotope_item_courses:nth-child(5n+4) .post_content.ih-item.colored .info,\
			.pagination_slider .pager_cur,\
			.pagination_pages > a,\
			.pagination_pages > span,\
			.pagination_viewmore > a,\
			.viewmore_loader,\
			.mfp-preloader span,\
			.sc_video_frame.sc_video_active:before,\
			.post_featured .post_nav_item:before,\
			.post_featured .post_nav_item .post_nav_info,\
			.reviews_block .reviews_summary .reviews_item,\
			.reviews_block .reviews_max_level_100:nth-child(3n+2) .reviews_stars_hover,\
			.reviews_block .reviews_item:nth-child(3n+2) .reviews_slider,\
			.widget_area .widget_calendar td a:hover,\
			.widget_area .widget_product_tag_cloud a,\
			.widget_area .widget_tag_cloud a,\
			.scroll_to_top,\
			.sc_accordion.sc_accordion_style_2 .sc_accordion_item .sc_accordion_title .sc_accordion_icon,\
			.sc_button.sc_button_style_filled.sc_button_bg_menu,\
			.sc_dropcaps.sc_dropcaps_style_3 .sc_dropcaps_item,\
			.sc_highlight_style_2,\
			.sc_icon_shape_round.sc_icon_bg_menu,\
			.sc_icon_shape_square.sc_icon_bg_menu,\
			.sc_infobox.sc_infobox_style_success,\
			.sc_popup:before,\
			.sc_price_block.sc_price_block_style_2,\
			.sc_scroll_controls_wrap a,\
			.sc_slider_controls_wrap a,\
			.sc_tabs.sc_tabs_style_2 .sc_tabs_titles li a,\
			.sc_toggles.sc_toggles_style_2 .sc_toggles_item .sc_toggles_title .sc_toggles_icon,\
			.woocommerce ul.products li.product:nth-child(5n+2) span.new, .woocommerce-page ul.products li.product:nth-child(5n+2) span.new,\
			.woocommerce ul.products li.product:nth-child(5n+2) span.onsale, .woocommerce-page ul.products li.product:nth-child(5n+2) span.onsale,\
			.woocommerce ul.products li.product:nth-child(5n+4) span.new, .woocommerce-page ul.products li.product:nth-child(5n+4) span.new,\
			.woocommerce ul.products li.product:nth-child(5n+4) span.onsale, .woocommerce-page ul.products li.product:nth-child(5n+4) span.onsale,\
			.woocommerce ul.products li.product:nth-child(5n+2) .add_to_cart_button, .woocommerce-page ul.products li.product:nth-child(5n+2) .add_to_cart_button,\
			.woocommerce ul.products li.product:nth-child(5n+4) .add_to_cart_button, .woocommerce-page ul.products li.product:nth-child(5n+4) .add_to_cart_button,\
			.woocommerce nav.woocommerce-pagination ul li a, .woocommerce nav.woocommerce-pagination ul li span.current\
			{\
				background-color: '+clr+';\
			}\
			.post_item:not(.post_item_courses) > .post_content.ih-item.circle.effect1.colored .info,\
			.post_item:not(.post_item_courses) > .post_content.ih-item.circle.effect2.colored .info,\
			.post_item:not(.post_item_courses) > .post_content.ih-item.circle.effect5.colored .info .info-back,\
			.post_item:not(.post_item_courses) > .post_content.ih-item.circle.effect19.colored .info,\
			.post_item:not(.post_item_courses) > .post_content.ih-item.square.effect4.colored .mask1,\
			.post_item:not(.post_item_courses) > .post_content.ih-item.square.effect4.colored .mask2,\
			.post_item:not(.post_item_courses) > .post_content.ih-item.square.effect6.colored .info,\
			.post_item:not(.post_item_courses) > .post_content.ih-item.square.effect7.colored .info,\
			.post_item:not(.post_item_courses) > .post_content.ih-item.square.effect12.colored .info,\
			.post_item:not(.post_item_courses) > .post_content.ih-item.square.effect13.colored .info,\
			.post_item:not(.post_item_courses) > .post_content.ih-item.square.effect_dir.colored .info,\
			.post_item:not(.post_item_courses) > .post_content.ih-item.square.effect_shift.colored .info\
			{\
				background-color: rgba('+rgb.r+','+rgb.g+','+rgb.b+', 0.6);\
			}\
			.sc_scroll_controls_type_side .sc_scroll_controls_wrap a,\
			.sc_team.sc_team_style_2 [class*="column-"]:nth-child(3n+2) .sc_team_item_avatar .sc_team_item_hover\
			{\
				background-color: rgba('+rgb.r+','+rgb.g+','+rgb.b+', 0.8);\
			}\
			.post_content.ih-item.circle.effect17.colored:hover .img:before {\
				box-shadow: inset 0 0 0 110px rgba('+rgb.r+','+rgb.g+','+rgb.b+', 0.6), inset 0 0 0 16px rgba(255, 255, 255, 0.8), 0 1px 2px rgba(0, 0, 0, 0.1);\
			}\
			.menu_color_bg,\
			.post_content.ih-item.circle.effect1.colored .info,\
			.post_content.ih-item.circle.effect2.colored .info,\
			.post_content.ih-item.circle.effect3.colored .info,\
			.post_content.ih-item.circle.effect4.colored .info,\
			.post_content.ih-item.circle.effect5.colored .info .info-back,\
			.post_content.ih-item.circle.effect6.colored .info,\
			.post_content.ih-item.circle.effect7.colored .info,\
			.post_content.ih-item.circle.effect8.colored .info,\
			.post_content.ih-item.circle.effect9.colored .info,\
			.post_content.ih-item.circle.effect10.colored .info,\
			.post_content.ih-item.circle.effect11.colored .info,\
			.post_content.ih-item.circle.effect12.colored .info,\
			.post_content.ih-item.circle.effect13.colored .info,\
			.post_content.ih-item.circle.effect14.colored .info,\
			.post_content.ih-item.circle.effect15.colored .info,\
			.post_content.ih-item.circle.effect16.colored .info,\
			.post_content.ih-item.circle.effect18.colored .info .info-back,\
			.post_content.ih-item.circle.effect19.colored .info,\
			.post_content.ih-item.circle.effect20.colored .info .info-back,\
			.post_content.ih-item.square.effect1.colored .info,\
			.post_content.ih-item.square.effect2.colored .info,\
			.post_content.ih-item.square.effect3.colored .info,\
			.post_content.ih-item.square.effect4.colored .mask1,\
			.post_content.ih-item.square.effect4.colored .mask2,\
			.post_content.ih-item.square.effect5.colored .info,\
			.post_content.ih-item.square.effect6.colored .info,\
			.post_content.ih-item.square.effect7.colored .info,\
			.post_content.ih-item.square.effect8.colored .info,\
			.post_content.ih-item.square.effect9.colored .info .info-back,\
			.post_content.ih-item.square.effect10.colored .info,\
			.post_content.ih-item.square.effect11.colored .info,\
			.post_content.ih-item.square.effect12.colored .info,\
			.post_content.ih-item.square.effect13.colored .info,\
			.post_content.ih-item.square.effect14.colored .info,\
			.post_content.ih-item.square.effect15.colored .info,\
			.post_content.ih-item.circle.effect20.colored .info .info-back,\
			.post_content.ih-item.square.effect_book.colored .info\
			{\
				background: '+clr+';\
			}\
			.menu_color_border,\
			.search_wrap.search_style_regular.search_opened,\
			.pagination > a,\
			.isotope_wrap .isotope_item:nth-child(3n+2) .post_featured,\
			.isotope_wrap .isotope_item_courses_1:nth-child(3n+2) .post_featured,\
			.isotope_filters a,\
			.pagination_slider .pager_cur,\
			.pagination_pages > a,\
			.pagination_pages > span,\
			.comments_list_wrap > ul > li > ul.children,\
			.comments_list_wrap > ul > li > ul > li,\
			.comments_list_wrap > ul > li > ul.children > li > ul.children > li > ul.children > li > ul.children,\
			.comments_list_wrap > ul > li > ul > li > ul > li > ul > li > ul > li,\
			.widget_area .widget_calendar .today .day_wrap,\
			.widget_area .widget_product_tag_cloud a,\
			.widget_area .widget_tag_cloud a,\
			.sc_accordion.sc_accordion_style_2 .sc_accordion_item .sc_accordion_title .sc_accordion_icon,\
			.sc_button.sc_button_style_border.sc_button_bg_menu,\
			.sc_icon_shape_round.sc_icon_bg_menu,\
			.sc_icon_shape_square.sc_icon_bg_menu,\
			.sc_tabs.sc_tabs_style_2 .sc_tabs_titles li a,\
			.sc_team [class*="column-"]:nth-child(3n+2) .sc_team_item .sc_team_item_info,\
			.sc_toggles.sc_toggles_style_2 .sc_toggles_item .sc_toggles_title .sc_toggles_icon,\
			.woocommerce ul.products li.product:nth-child(5n+2) .post_featured, .woocommerce-page ul.products li.product:nth-child(5n+2) .post_featured,\
			.woocommerce ul.products li.product:nth-child(5n+4) .post_featured, .woocommerce-page ul.products li.product:nth-child(5n+4) .post_featured,\
			.woocommerce nav.woocommerce-pagination ul li a, .woocommerce nav.woocommerce-pagination ul li span.current\
			{\
				border-color: '+clr+'; \
			}\
			.post_content.ih-item.circle.effect1 .spinner\
			{\
				border-right-color: '+clr+'; \
			}\
			.post_content.ih-item.circle.effect1 .spinner\
			{\
				border-bottom-color: '+clr+'; \
			}\
			.post_item_related:nth-child(3n+2) .post_content_wrap\
			{\
				border-top-color: '+clr+'; \
			}\
		';
		// Menu dark color
		hsb = themerex_hex2hsb(clr);
		hsb.s = Math.min(100, hsb.s + 15);
		hsb.b = Math.max(0, hsb.b - 20);
		clr = themerex_hsb2hex(hsb);
		custom_style += '\
			.menu_dark,\
			a.menu_color:hover,\
			.top_panel_style_light .menu_main_wrap .logo a,\
			.top_panel_style_light .menu_main_wrap .menu_main_nav > li > a,\
			.bg_tint_light .menu_main_responsive_button:hover,\
			.post_item_related:nth-child(3n+2) .post_title a:hover,\
			.isotope_item_courses_1:nth-child(3n+2) .post_title a:hover,\
			.isotope_item_courses_1:nth-child(3n+2) .post_category a:hover,\
			.pagination_wrap .pager_next:hover,\
			.pagination_wrap .pager_prev:hover,\
			.pagination_wrap .pager_last:hover,\
			.pagination_wrap .pager_first:hover,\
			.widget_area a:hover,\
			.widget_area ul li a,\
			.widget_area button:hover:before,\
			.sc_icon.sc_icon_bg_menu:hover,\
			a:hover .sc_icon.sc_icon_bg_menu,\
			.woocommerce ul.products li.product:nth-child(5n+2) h3 a:hover, .woocommerce-page ul.products li.product:nth-child(5n+2) h3 a:hover,\
			.woocommerce ul.products li.product:nth-child(5n+4) h3 a:hover, .woocommerce-page ul.products li.product:nth-child(5n+4) h3 a:hover\
			{\
				color: '+clr+';\
			}\
			.search_wrap.search_style_regular .search_form_wrap .search_submit:hover,\
			.search_wrap.search_style_regular .search_icon:hover\
			{\
				color: '+clr+' !important;\
			}\
			.menu_dark_bgc,\
			.top_panel_fixed.top_panel_over.top_panel_opacity_transparent .top_panel_wrap,\
			.menu_main_wrap .menu_main_nav > li ul li a:hover,\
			.menu_main_wrap .menu_main_nav > li ul li.current-menu-item > a,\
			.menu_main_wrap .menu_main_nav > li ul li.current-menu-ancestor > a,\
			.menu_main_wrap .menu_main_nav_area .menu_main_responsive a:hover,\
			.scroll_to_top:hover,\
			.sc_scroll_controls_wrap a:hover,\
			.sc_slider_controls_wrap a:hover,\
			.woocommerce ul.products li.product:nth-child(5n+2) .add_to_cart_button:hover, .woocommerce-page ul.products li.product:nth-child(5n+2) .add_to_cart_button:hover,\
			.woocommerce ul.products li.product:nth-child(5n+4) .add_to_cart_button:hover, .woocommerce-page ul.products li.product:nth-child(5n+4) .add_to_cart_button:hover\
			{\
				background-color: '+clr+';\
			}\
			.menu_dark_bg\
			{\
				background: '+clr+';\
			}\
			.menu_dark_border\
			{\
				border-color: '+clr+'; \
			}\
		';

	} else if (option == 'user_color') {

		var clr = val;
		var rgb = themerex_hex2rgb(clr);
		// User menu color styles
		custom_style += '\
			.user_color,\
			.post_item_related:nth-child(3n+3) .post_title a,\
			.isotope_item_courses:nth-child(5n+3) .post_featured .post_category a,\
			.isotope_item_courses:nth-child(5n+5) .post_featured .post_category a,\
			.isotope_item_courses:nth-child(5n+3) .post_featured .post_rating .reviews_stars_bg,\
			.isotope_item_courses:nth-child(5n+5) .post_featured .post_rating .reviews_stars_bg,\
			.isotope_item_courses:nth-child(5n+3) .post_featured .post_rating .reviews_stars_hover,\
			.isotope_item_courses:nth-child(5n+5) .post_featured .post_rating .reviews_stars_hover,\
			.isotope_item_courses:nth-child(5n+3) .post_featured .post_rating .reviews_value,\
			.isotope_item_courses:nth-child(5n+5) .post_featured .post_rating .reviews_value,\
			.isotope_item_courses_1:nth-child(3n+3) .post_title a,\
			.isotope_item_courses_1:nth-child(3n+3) .post_category a,\
			.isotope_item_courses_1:nth-child(3n+3) .post_item .post_rating .reviews_stars_bg,\
			.isotope_item_courses_1:nth-child(3n+3) .post_item .post_rating .reviews_stars_hover,\
			.isotope_item_courses_1:nth-child(3n+3) .post_item .post_rating .reviews_value,\
			.reviews_block .reviews_item:nth-child(3n+3) .reviews_stars_hover,\
			.post_item:nth-child(3n+3) .post_rating .reviews_stars_bg,\
			.post_item:nth-child(3n+3) .post_rating .reviews_stars_hover,\
			.post_item:nth-child(3n+3) .post_rating .reviews_value,\
			.sc_icon_bg_user,\
			.sc_icon_shape_round.sc_icon_bg_user:hover,\
			.sc_icon_shape_square.sc_icon_bg_user:hover,\
			a:hover .sc_icon_shape_round.sc_icon_bg_user,\
			a:hover .sc_icon_shape_square.sc_icon_bg_user,\
			.woocommerce ul.products li.product:nth-child(5n+3) h3 a, .woocommerce-page ul.products li.product:nth-child(5n+3) h3 a,\
			.woocommerce ul.products li.product:nth-child(5n+5) h3 a, .woocommerce-page ul.products li.product:nth-child(5n+5) h3 a,\
			.woocommerce ul.products li.product:nth-child(5n+3) .price, .woocommerce-page ul.products li.product:nth-child(5n+3) .price,\
			.woocommerce ul.products li.product:nth-child(5n+5) .price, .woocommerce-page ul.products li.product:nth-child(5n+5) .price,\
			.woocommerce ul.products li.product:nth-child(5n+3) .star-rating:before, .woocommerce ul.products li.product:nth-child(5n+3) .star-rating span,\
			.woocommerce ul.products li.product:nth-child(5n+5) .star-rating:before, .woocommerce ul.products li.product:nth-child(5n+5) .star-rating span\
			{\
				color: '+clr+';\
			}\
			.user_color_bgc,\
			.menu_user_wrap .menu_user_nav > li,\
			.menu_user_wrap .menu_user_nav > li ul,\
			.isotope_filters a.active,\
			.isotope_filters a:hover,\
			.isotope_item_courses:nth-child(5n+3) .post_featured .post_mark_new,\
			.isotope_item_courses:nth-child(5n+3) .post_featured .post_title,\
			.isotope_item_courses:nth-child(5n+3) .post_content.ih-item.colored .info,\
			.isotope_item_courses:nth-child(5n+5) .post_featured .post_mark_new,\
			.isotope_item_courses:nth-child(5n+5) .post_featured .post_title,\
			.isotope_item_courses:nth-child(5n+5) .post_content.ih-item.colored .info,\
			.pagination_viewmore > a:hover,\
			.reviews_block .reviews_max_level_100:nth-child(3n+3) .reviews_stars_hover,\
			.reviews_block .reviews_item:nth-child(3n+3) .reviews_slider,\
			.sc_button.sc_button_style_filled.sc_button_bg_user,\
			.sc_dropcaps.sc_dropcaps_style_4 .sc_dropcaps_item,\
			.sc_highlight_style_3,\
			.sc_icon_shape_round.sc_icon_bg_user,\
			.sc_icon_shape_square.sc_icon_bg_user,\
			.sc_infobox.sc_infobox_style_info,\
			.sc_price_block.sc_price_block_style_3,\
			.woocommerce a.button:hover, .woocommerce button.button:hover, .woocommerce input.button:hover, .woocommerce #respond input#submit:hover, .woocommerce #content input.button:hover, .woocommerce-page a.button:hover, .woocommerce-page button.button:hover, .woocommerce-page input.button:hover, .woocommerce-page #respond input#submit:hover, .woocommerce-page #content input.button:hover, .woocommerce a.button.alt:hover, .woocommerce button.button.alt:hover, .woocommerce input.button.alt:hover, .woocommerce #respond input#submit.alt:hover, .woocommerce #content input.button.alt:hover, .woocommerce-page a.button.alt:hover, .woocommerce-page button.button.alt:hover, .woocommerce-page input.button.alt:hover, .woocommerce-page #respond input#submit.alt:hover, .woocommerce-page #content input.button.alt:hover,\
			.woocommerce ul.products li.product:nth-child(5n+3) span.new, .woocommerce-page ul.products li.product:nth-child(5n+3) span.new,\
			.woocommerce ul.products li.product:nth-child(5n+3) span.onsale, .woocommerce-page ul.products li.product:nth-child(5n+3) span.onsale,\
			.woocommerce ul.products li.product:nth-child(5n+5) span.new, .woocommerce-page ul.products li.product:nth-child(5n+5) span.new,\
			.woocommerce ul.products li.product:nth-child(5n+5) span.onsale, .woocommerce-page ul.products li.product:nth-child(5n+5) span.onsale,\
			.woocommerce ul.products li.product:nth-child(5n+3) .add_to_cart_button, .woocommerce-page ul.products li.product:nth-child(5n+3) .add_to_cart_button,\
			.woocommerce ul.products li.product:nth-child(5n+5) .add_to_cart_button, .woocommerce-page ul.products li.product:nth-child(5n+5) .add_to_cart_button\
			{\
				background-color: '+clr+';\
			}\
			.sc_team.sc_team_style_2 [class*="column-"]:nth-child(3n+3) .sc_team_item_avatar .sc_team_item_hover {\
				background-color: rgba('+rgb.r+','+rgb.g+','+rgb.b+', 0.8);\
			}\
			.custom_options #co_toggle,\
			input[type="submit"]:hover,\
			input[type="button"]:hover,\
			button:hover,\
			.sc_button.sc_button_style_filled:hover\
			{\
				background-color: '+clr+' !important;\
			}\
			.user_color_bg,\
			#bbpress-forums div.bbp-topic-content a:hover,\
			#buddypress button:hover, #buddypress a.button:hover, #buddypress input[type="submit"]:hover, #buddypress input[type="button"]:hover, #buddypress input[type="reset"]:hover, #buddypress ul.button-nav li a:hover, #buddypress div.generic-button a:hover, #buddypress .comment-reply-link:hover, a.bp-title-button:hover, #buddypress div.item-list-tabs ul li.selected a\
			{\
				background: '+clr+';\
			}\
			.user_color_border,\
			.isotope_wrap .isotope_item:nth-child(3n+3) .post_featured,\
			.isotope_wrap .isotope_item_courses_1:nth-child(3n+3) .post_featured,\
			.isotope_filters a.active,\
			.isotope_filters a:hover,\
			.comments_list_wrap > ul > li > ul.children > li > ul.children,\
			.comments_list_wrap > ul > li > ul > li > ul > li,\
			.comments_list_wrap > ul > li > ul.children > li > ul.children > li > ul.children > li > ul.children > li > ul.children,\
			.comments_list_wrap > ul > li > ul > li > ul > li > ul > li > ul > li > ul > li,\
			.sc_button.sc_button_style_border.sc_button_bg_user,\
			.sc_icon_shape_round.sc_icon_bg_user,\
			.sc_icon_shape_square.sc_icon_bg_user,\
			.sc_team [class*="column-"]:nth-child(3n+3) .sc_team_item .sc_team_item_info,\
			.woocommerce ul.products li.product:nth-child(5n+3) .post_featured, .woocommerce-page ul.products li.product:nth-child(5n+3) .post_featured,\
			.woocommerce ul.products li.product:nth-child(5n+5) .post_featured, .woocommerce-page ul.products li.product:nth-child(5n+5) .post_featured\
			{\
				border-color: '+clr+'; \
			}\
			.sc_button.sc_button_style_border:hover\
			{\
				border-color: '+clr+' !important; \
			}\
			.post_item_related:nth-child(3n+3) .post_content_wrap\
				border-top-color: '+clr+'; \
			}\
		';
		// User menu dark color
		hsb = themerex_hex2hsb(clr);
		hsb.s = Math.min(100, hsb.s + 15);
		hsb.b = Math.max(0, hsb.b - 20);
		clr = themerex_hsb2hex(hsb);
		custom_style += '\
			.user_dark,\
			a.user_color:hover,\
			.post_item_related:nth-child(3n+3) .post_title a:hover,\
			.isotope_item_courses_1:nth-child(3n+3) .post_title a:hover,\
			.isotope_item_courses_1:nth-child(3n+3) .post_category a:hover,\
			.sc_icon.sc_icon_bg_user:hover,\
			a:hover .sc_icon.sc_icon_bg_user,\
			.woocommerce ul.products li.product:nth-child(5n+3) h3 a:hover, .woocommerce-page ul.products li.product:nth-child(5n+3) h3 a:hover,\
			.woocommerce ul.products li.product:nth-child(5n+5) h3 a:hover, .woocommerce-page ul.products li.product:nth-child(5n+5) h3 a:hover\
			{\
				color: '+clr+';\
			}\
			.user_dark_bgc,\
			.menu_user_wrap .menu_user_nav > li ul li a:hover,\
			.menu_user_wrap .menu_user_nav > li ul li.current-menu-item > a,\
			.menu_user_wrap .menu_user_nav > li ul li.current-menu-ancestor > a,\
			.woocommerce ul.products li.product:nth-child(5n+3) .add_to_cart_button:hover, .woocommerce-page ul.products li.product:nth-child(5n+3) .add_to_cart_button:hover,\
			.woocommerce ul.products li.product:nth-child(5n+5) .add_to_cart_button:hover, .woocommerce-page ul.products li.product:nth-child(5n+5) .add_to_cart_button:hover\
			{\
				background-color: '+clr+';\
			}\
			.isotope_item_courses:nth-child(5n+3) .post_info_wrap .post_button .sc_button:hover,\
			.isotope_item_courses:nth-child(5n+5) .post_info_wrap .post_button .sc_button:hover\
			{\
				background-color: '+clr+' !important;\
			}\
			.user_dark_bg\
			{\
				background: '+clr+';\
			}\
			.user_dark_border\
			{\
				border-color: '+clr+'; \
			}\
		';

	//} else if (option == 'body_style') {

		//Uncomment next row to apply changes without reloading page
		//jQuery('body').removeClass('body_style_boxed body_style_wide body_style_fullwide body_style_fullscreen').addClass('body_style_'+val);
	} else {
		themerex_custom_options_show_loader();
		//location.reload();
		var loc = jQuery('#co_site_url').val();
		var params = THEMEREX_GLOBALS['co_add_params']!=undefined ? THEMEREX_GLOBALS['co_add_params'] : {};
		params[option] = val;
		var pos = -1, pos2 = -1, pos3 = -1;
		for (var option in params) {
			val = params[option];
			pos = pos2 = pos3 = -1;
			if ((pos = loc.indexOf('?')) > 0) {
				if ((pos2 = loc.indexOf(option, pos)) > 0) {
					if ((pos3 = loc.indexOf('&', pos2)) > 0)
						loc = loc.substr(0, pos2) + option+'='+val + loc.substr(pos3);
					else
						loc = loc.substr(0, pos2) + option+'='+val;
				} else
					loc += '&'+option+'='+val;
			} else
				loc += '?'+option+'='+val;
		}
		window.location.href = loc;
		return;

	}

	if (custom_style != '') {
		var styles = jQuery('#themerex-customizer-styles-'+option).length > 0 ? jQuery('#themerex-customizer-styles-'+option) : '';
		if (styles.length == 0)
			jQuery('head').append('<style id="themerex-customizer-styles-'+option+'" type="text/css">'+custom_style+'</style>');
		else
			styles.html(custom_style);
	}
}
