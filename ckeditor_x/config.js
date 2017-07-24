/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	console.log('sdffsdfd');
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	
	config.coreStyles_italic = { element : 'i', overrides : 'em' };
	config.coreStyles_bold = { element : 'b', overrides : 'strong' };
	config.FormatOutput = false ;
	config.allowedContent = true;
	config.forceEnterMode = false;
	config.forcePasteAsPlainText = false;
	config.autoParagraph = false;
	config.enterMode = CKEDITOR.ENTER_DIV;
	config.shiftEnterMode = CKEDITOR.ENTER_DIV;

	config.format_tags = 'div;h1;h2;h3;h4;h5;h6';
	config.format_h1 = { element: 'h1', attributes: { 'style': 'font-size:24px;' } };
	config.format_h2 = { element: 'h2', attributes: { 'style': 'font-size:18px;' } };
	config.format_h3 = { element: 'h3', attributes: { 'style': 'font-size:14px;' } };
	config.format_h4 = { element: 'h4', attributes: { 'style': 'font-size:12px;' } };
	config.format_h5 = { element: 'h5', attributes: { 'style': 'font-size:10px;' } };
	config.format_h6 = { element: 'h6', attributes: { 'style': 'font-size:8px;' } };

	config.font_names =
		'Arial/Arial, sans-serif;' +
		'Arial Unicode MS/Arial Unicode MS, sans-serif;' +
		'Calibri/Calibri, sans;' +
		'Tahoma/Tahoma, sans-serif;' +
		'Verdana/Verdana, sans-serif;';
	
	// qlikview sans
	
	/*
	config.toolbarGroups = [
		//{name: 'ok'},
			{name: 'basicstyles'},
			{name: 'colors'},
			{name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi']},
			'/',
			{name: 'styles'}
	];
	*/
	
	config.toolbar = [
		// ok
		['Bold', 'Italic', 'Underline', 'Strike', '-', 'TextColor', 'BGColor'],
		['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'],
		['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
		'/',
		['Format', 'Font', 'FontSize'], // var dropdown
	];
	
	//config.extraPlugins = 'sharedspace';
	//config.sharedSpaces = {top: 'sharedCKToolbar'};
};
