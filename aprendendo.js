<!DOCTYPE html> 
<html>
    <head>
        <meta charset="utf-8">
        <meta name="author" content="jessica">
        <title>exercicios js</title>
    </head>
    <body>
        <script>
            let nome1, nome2, idade=0;
            nome1=prompt("por favor digite o primeiro nome");
            nome2=prompt("por favor digite seu sobrenome");
            idade=prompt("por favor digite sua idade");
            idade=parseInt(idade);
            alert(nome1+" "+nome2+", a sua idade é"+idade);
            alert("sau idade equivale em dias aproximadamente "+idade*335);

            var x = 10;
            var y = "a";
            console.log(y === "b" || x >=10);

            var x = 3;
            var y = 8;
            console.log(!(x=="3"|| x ===y)&&!(y != 8 && x <= y))
        
            var str = "";
            var msg = "haha!";
            var isFunny = "false";

            console.log(!((str||msg)&& isFunny));

            
            let idade= 0;
            idade=prompt("por favor digite sua idade");
            idade=parseInt(idade);
            if(idade < 16){
                alert("nao pode entrar no evento");
            } else if ( idade >= 16 && idade < 18) {
                alert("pode entrar no evento, mas sem bebida em");
            } else{
                alert("pode entrar no evento e beber");
                alert("se beber nao dirija");
            }
        </script>
            
    </body>
</html>
