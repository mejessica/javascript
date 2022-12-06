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
         const numero = [];
           const size = 5;
          
            for(let i = 0; i < size; i++){
            let msg= prompt("digite um numero (loop de 5)");
                numero.push(msg);
            }
            
            function compara(){
                const min = Math.min(...numero);
                const max = Math.max(...numero);

                alert("menor numero: "+min);
                alert("maior numero: "+max);
            }

            compara();
    </script>
</body>
</html>
