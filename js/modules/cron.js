$(document).ready(function(){
    $("select[name='homeid_ip_port']").change(function(e){
		checkSteamSupportAutoUpdate($(this));
	});
	
	$("select[name='homeid_ip_port']").trigger("change");
});

function checkSteamSupportAutoUpdate(elem){
	var curOpt = $("select[name='homeid_ip_port'] option:selected");
	if(curOpt.attr('steam')){
		$("option[value='steam_auto_update']", $(elem)).removeAttr('disabled');
	}else{
		$("option[value='steam_auto_update']", $(elem)).attr('disabled','disabled');
	}
}
