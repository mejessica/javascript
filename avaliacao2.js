<!DOCTYPE html>
<html>
    <head>
        <title>avalicao 2</title>
        <meta charset="utf-8">
    </head>
    <body>
        <script>
            let saldo = parseInt(prompt("digite seu saldo"));
            let idade = parseInt(prompt("digite sua idade"));
            let saldonovo = 0;

            
                if(idade < 18){
                novosaldo =saldo * 1.01;
                alert("seu novo saldo é "+novosaldo);
                }
                else if(idade > 18 && idade < 25){
                novosaldo= saldo * 1.03;
                alert("seu novo saldo é "+novosaldo);
                }
                else{
                 novosaldo=saldo*1.05;
                alert("seu novo saldo é "+novosaldo);
                }
            
            
        </script>
    </body>
</html>
