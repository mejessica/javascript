<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<script>
        let nome = prompt("qual seu nome");
        let prova1 = parseInt(prompt("coloque sua nota da prova um"));
        let prova2 = parseInt(prompt("coloque sua nota da prova dois"));

        media = (prova1 + prova2)/2;
        
        if(media >= 7){
            alert(nome+", você está aprovado");
        }
        else if(media < 3){
            alert(nome +", você está reprovado");
        } else {
            alert("prova final");
        }
    </script>
</body>
</html>
