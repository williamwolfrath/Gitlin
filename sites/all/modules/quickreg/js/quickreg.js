$(document).ready(function() { 
	
	$("#dmodal").modal({
    overlayClose:true,
    opacity:80,
    overlayCss: {backgroundColor:"#000"},
    });
    
	$('.form-submit').addClass('simplemodal-close');


	$.fn.inline_label=function(options){var config={text:false,use_title:false,css_class:"inline_label",hide_label:true};if(options)$.extend(config,options);this.each(function(){var t=$(this);var text;if(config.text){text=config.text;}else if(config.use_title){text=t.attr('title');}else{if(!t.attr('id')){throw"No id attribute found!";}
var label=$('label[for='+t.attr('id')+']');if(label.length==0){throw"No label for "+t.attr('id')+"!";}
if(label.length>1){throw"Too many labels for "+t.attr('id')+"!";}
text=label.text();if(config.hide_label){label.hide();}}
t.focus(function(){var t=$(this);if(t.val()==text){t.val('');if(config.css_class){t.removeClass(config.css_class);}}});t.blur(function(){var t=$(this);if(t.val()==''){t.val(text);if(config.css_class){t.addClass(config.css_class);}}});t.trigger('focus');t.trigger('blur');});return this;};	

	$('#dmodal #edit-name').inline_label({text: "choose a username"}).inline_label({css_class: "inline_label"});
	$('#dmodal #edit-name-1').inline_label({text: "choose a username"}).inline_label({css_class: "inline_label"});
  $('#dmodal #edit-name-2').inline_label({text: "choose a username"}).inline_label({css_class: "inline_label"});
	$('#dmodal #edit-mail').inline_label({text: "enter your email address"}).inline_label({css_class: "inline_label"});
  $('#dmodal #edit-mail-1').inline_label({text: "enter your email address"}).inline_label({css_class: "inline_label"});
  $('#dmodal #edit-mail-2').inline_label({text: "enter your email address"}).inline_label({css_class: "inline_label"});
	$('#dmodal input.form-text').addClass('blurr');
	$('#dmodal input.form-text').focus( function () {$(this).removeClass('blurr')} );
	$('#dmodal input.form-text').blur( function () {$(this).addClass('blurr')} );


  $('#dmodal #edit-legal-accept-wrapper .form-required').append('<a class="clickshow"> "show these"</a>');
  $('#dmodal #edit-legal-accept-1-wrapper .form-required').append('<a class="clickshow"> "show these"</a>');
	$("#dmodal .form-item .description").hide();
  $("#dmodal .legal-terms").hide();

  $('a.clickshow').toggle(
    function() {
      $('#dmodal .legal-terms').show();
    },
    function() {
      $('#dmodal .legal-terms').hide();
    }
  );

/*
var oTxtFields = $('input,textarea');
$.each(oTxtFields, function(){
	var label = $('label[for=' + $(this).attr('id') + ']');
	label.addClass('overlayed');
	if (!$(this).val() == '') {
		label.hide();
	}
	$(this)
		.focus(function(e){
			$('label[for=' + $(e.target).attr('id') + ']').hide();
		})
		.blur(function(e){
			if ($(e.target).val() == '') {
				$('label[for=' + $(e.target).attr('id') + ']').show();
			}
		})
	;
});
*/



		//$("#dmodal .form-item .description").each(function(index) {
		//	var $parentDiv = $(this).parent('div');
		//	$('<div class="helperr">??</div>').prependTo($parentDiv);
		//});
		//.each(function(index) {	
		//var $parentDiv = $(this).parent('div');
		//var $clonedCopy = $(this).clone();
			//$("<div class="xx">?</div>").insertAfter($parentDiv);
			//$('this').hide();
			
		//$clonedCopy
  		//.addClass('tested')
  	//	.addClass('floatright')
  	//	.insertAfter($parentDiv)
  	//	.end()
  		//.remove()
	//});
	$('#dmodal .form-item .helperr').hover(
		function() {
			$(this).nextAll('.description').show();
		},
		function() {
			$(this).nextAll('.description').hide();
		}
	);




//end jQuery
});