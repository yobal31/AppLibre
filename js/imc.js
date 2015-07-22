// JavaScript Document

$(document).ready(function(e) {
	$("#number_alt").numeric();
	$("#number_peso").numeric();
	
    $("#bt_start").click(function(e) {
		CalcularIMC();
        $.mobile.changePage("#pg_IMC", { transition: "slide", changeHash: false });
    });
	$("#bt_new").click(function(e) {
		$("#number_alt").val("");
		$("#number_peso").val("");
        $.mobile.changePage("#pg_Start", { transition: "slide", changeHash: false });
    });
});

function CalcularIMC() {
	var altura, peso, imc;
	var valorIMC= [17,18.5,25,26,30,35,40];
	var Calificacion=["Infrapeso","Delgadez","Normal","Sobrepeso","Obesidad tipo I","Obesidad tipo II","Obesidad tipo III","Obesidad mórbida"];
	var _Color=["color-orange","color-yellow","color-green","color-yellow","color-orange","color-red","color-red","color-blackberry"];
	
	var Riesgos= ["Dolencias pulmonares, anorexia nerviosa, desnutrición","Sin riesgo pero con precaución de no adelgazar más","Estado saludable","Sin riesgo pero con precaución de no engondar más","Sobrecarga de articulaciones, cansancio excesivo y un cierto grado de enfermedades cardiovasculares", "Problemas cardiacos, diabetes, hipertensión, enfermedad de vesícula y algunos cánceres","Serios riesgos para la salud, disminución de la calidad de vida. Visita a un médico","Riesgo inmediato. Precisará siempre bajo control médico, tratamiento famacológico o quirúrgico" ];
	
	var index=0;
	
	altura=parseInt($("#number_alt").val())/100;
	peso=parseInt($("#number_peso").val());
	
	imc= parseFloat( (peso/(altura*altura)).toFixed(1) );
	
	ClearStyles();
	switch (true) {
		case imc < valorIMC[0]:
			index=0;
			break;
		case imc >= valorIMC[0] && imc <valorIMC[1]:
			index=1;
			break;
		case imc >= valorIMC[1] && imc <valorIMC[2]:
			index=2;
			break;
		case imc >= valorIMC[2] && imc <valorIMC[3]:
			index=3;
			break;
		case imc >= valorIMC[3] && imc <valorIMC[4]:
			index=4;
			break;
		case imc >= valorIMC[4] && imc <valorIMC[5]:
			index=5;
			break;
		case imc >= valorIMC[5] && imc <valorIMC[6]:
			index=6;
			break;
		case imc >= valorIMC[6]:
			index=7;
			break;
	}
	
	$("#tpeso").text(Calificacion[index]);
	$("#pg_IMC").addClass(_Color[index]);
	$("#valimc").text(imc);
	$("#desc").text("Riesgos: "+Riesgos[index]+".");
	
	
}

function ClearStyles() {
	$("#pg_IMC").removeClass("color-green color-orange color-red color-yellow");	
}