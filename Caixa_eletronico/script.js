var nomeUsu = prompt("Bem Vindo ao Banco Cash! Qual seu nome?");
		alert("Olá " + nomeUsu + " é um prazer ter você por aqui!");
		var saldo = 5000.00; //Variavel Global
		var senha = 3589;
		var extrato = ["Magalu -505.65", "\nBar do Seu Jorge -21.20", "\nGiga Atacado -568,95", "\nPagamento +3500", "\nParcela do carro -2000", "\n"];
		
		function inicio() {
			//ESCOPO
			//Variavel Local

			var escolha = parseInt(prompt('Selecione uma opção: \n1.) Saldo \n2.) Extrato \n3.) Saque \n4.) Depósito \n5.) Tranferência \n6.) Sair'));
			
			switch(escolha){
				case 1:
					var senhaUsu = parseInt(prompt("Digite sua senha:"));
					if(senhaUsu != senha){
						alert("Senha incorreta, tente novamente");
						inicio();
					}else{
						ver_saldo();
					}
					break;
				case 2:
					var senhaUsu = parseInt(prompt("Digite sua senha:"));
					if(senhaUsu != senha){
						alert("Senha incorreta, tente novamente");
						inicio();
					}else{
						ver_extrato();
					}
					break;
				case 3:
					var senhaUsu = parseInt(prompt("Digite sua senha:"));
					if(senhaUsu != senha){
						alert("Senha incorreta, tente novamente");
						inicio();
					}else{
						fazer_saque();
					}
					break;
				case 4:
					fazer_deposito();
					break;
				case 5:
					var senhaUsu = parseInt(prompt("Digite sua senha:"));
					if(senhaUsu != senha){
						alert("Senha incorreta, tente novamente");
						inicio();
					}else{
						transferencia();
					}
					break;
				case 6:
					sair();
					break;
				default:
					erro();
			}
		}

		function digitar_senha(){

		}

		function ver_saldo() {
			
			alert("Seu saldo atual é: " + saldo);
			inicio();
		}

		function fazer_deposito() {
			
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));
			
			// Not a Number --> Isso é um não-número?
			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número.');
				fazer_deposito();
			} else if(deposito <=0){
				alert("Operação não autorizada.");
				fazer_deposito();
			}else{
				saldo += deposito;
				//saldo = saldo + deposito;
				ver_saldo();
			}
		}

		function fazer_saque() {
			
			var saque = parseFloat(prompt('Qual o valor para saque?'));
			
			if(isNaN(saque) || saque === '') {
				alert('Por favor, informe um número.');
				fazer_saque();
			}else if(saque > saldo || saque <= 0){
				alert("Operação não autorizada.");
				fazer_saque();
			}else {
				saldo -= saque; //saldo = saldo - saque;
				ver_saldo();
			}
		}

		function ver_extrato(){
			alert("Seu extrato: \n" + extrato);
			inicio();
		}

		function transferencia(){

			var contaTransf = parseInt(prompt("Digite o número da conta ao qual deseja transferir:"));
			if(isNaN(contaTransf) || contaTransf > 99999 || contaTransf <= 0){
				alert("Digite uma conta válida");
			}

			function transfFinal(){
				var transf = parseFloat(prompt('Qual o valor da transferência?'));
			
				if(isNaN(transf) || transf == "") {
					alert('Por favor, informe um número.');
					transfFinal();
				}else if(transf > saldo || transf <= 0){
					alert("Operação não autorizada.");
					transfFinal();
				}else {
					saldo -= transf; //saldo = saldo - saque;
					ver_saldo();
				}
			}
			transfFinal();
		}

		function erro() {
			alert('Por favor, informe um número entre 1 e 6.');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert(nomeUsu + ", foi um prazer ter você por aqui! Volte sempre.")
				window.close();
			} else {
				inicio();
			}
		}

		inicio();