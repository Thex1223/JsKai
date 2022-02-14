	// =============================================
	// <-----------------/ JSKai \----------------->
    // =============================================
    //				    Português(BR)
    // JSKai created by: Kainan Henrique C. dos Santos
    // 
    // 			[Na18k & Ka 1223 Organization]
    //
    //  Creator - Na18k(GitHub): https://github.com/Na18k
    // 	Thex 1223 Organization(GitHub): https://github.com/Thex1223
    //
    //  Project page: https://github.com/Ka-1223/JsKai
    //
    // Version: 0.0.1 alpha [Código totalmente experimental]
    //
    // =============================================
    // Copyright © 2021 Na18k & Ka 1223 Organization
    // =============================================

    // JS
	function aleatorio(min, max) {
		min = Math.ceil(min);
	  	max = Math.floor(max);
	  	return Math.floor(Math.random() * (max - min)) + min;
	}
	function data(tipo, formato) {

		var dataAtual = new Date();
		var dataFormatada = "";

		var dia = dataAtual.getDate();
		var mes = dataAtual.getMonth() + 1;
		var ano = dataAtual.getFullYear();

		var hora = (dataAtual.getHours()<10 ? '0' : '') + dataAtual.getHours();
		var minuto = (dataAtual.getMinutes()<10 ? '0' : '') + dataAtual.getMinutes();
		var segundo = (dataAtual.getSeconds()<10 ? '0' : '') + dataAtual.getSeconds();

		if (tipo == "all" || tipo == 0 || tipo !== "") {
			dataFormatada = dia + "/" + mes + "/" + ano + " " + hora + ":" + minuto + ":" + segundo;
		}
		if(tipo == "data" || tipo == 1) {

			if(formato == "DD/MM/AAAA" || formato == "dd/mm/aaaa") {
				dataFormatada = dia + "/" + mes + "/" + ano;

			} else if(formato == "AAAA/MM/DD" || formato == "aaaa/mm/dd") {

				dataFormatada = ano + "/" + mes + "/" + dia;

			} else if(formato == "MM/DD/AAAA" || formato == "mm/dd/aaaa") {

				dataFormatada = mes + "/" + dia + "/" + ano;

			} else if(formato == "MM/AAAA/DD" || formato == "mm/aaaa/dd") {

				dataFormatada = mes + "/" + ano + "/" + dia;

			} else if(formato == "DD/MM" || formato == "dd/mm") {

				dataFormatada = dia + "/" + mes;

			} else if(formato == "MM/AAAA" || formato == "mm/aaaa") {

				dataFormatada = mes + "/" + ano;

			} else if(formato !== "") {
				// Data padrão :)
				dataFormatada = dia + "/" + mes + "/" + ano;
			}
		}
		if(tipo == "tempo" || tipo == 2) {

			dataFormatada = hora + ":" + minuto + ":" + segundo;
		}
		return dataFormatada;
	}
	function letra(inicio, fim) {
		return substring(inicio, fim);
	}
	function vazio() {
		return null;
	}
	function imc(altura, peso) {
		return peso / (altura * altura);
	}
	function convert(argumento, tipo) {
		if(tipo == "number" || tipo == 0) {
			return parseInt(argumento);
		}
		if(tipo == "string" || tipo == 1 || tipo == null || tipo !== "") {
			return argumento.toString();
		}
	}
	function trocaArgument(argumento, tipo, tempo) {
		if(tipo == "bolean" || tipo == 0 || tipo == null) {
			if(argumento == true) {
				return false;
			}
			if(argumento == false) {
				return true;
			}
		}
	}



	// HTML
	function escreveHtml(argumento) {
		document.write(argumento);
	}
	function content(elemento, argumento) {
		element = document.querySelector(elemento);
		return element.textContent = argumento;
	}
	function getElement(elemento, tipo) {
		if(tipo == "query" || tipo == 0 || tipo == null) {
			document.querySelector(elemento);
		}
		if(tipo == "id" || tipo == 1) {
			document.getElementById(elemento);
		}
		if(tipo == "name" || tipo == 2) {
			document.getElementsByName(elemento);
		}
		if(tipo == "class" || tipo == 3) {
			document.getElementsByClassName(elemento);
		}
		if(tipo == "tag" || tipo == 4) {
			document.getElementsByTagName(elemento);
		}
		if(tipo == "tagNs" || tipo == 5) {
			document.getElementsByTagNameNS(elemento);
		}
	}
	function getKey(argumento) {
    	return argumento.keyCode;
    }
	function executaKey(evento, teclaCode, executar) {
	    if(evento.keyCode == teclaCode) {
	       return executar;
	    }
	}
	function substi(elemento, para) {
		if(elemento === "src") {
			elemento.src = para;
		}
		if(elemento === "href") {
			elemento.href = para;
		}
	}