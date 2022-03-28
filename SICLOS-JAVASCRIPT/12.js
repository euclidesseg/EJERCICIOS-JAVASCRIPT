var fila =3;
var col = 5;
var con = 1;
var nun = 1;
document.write("<table border = '1'>");
 while(con<=fila){
     document.write("<tr>");
    var con1 = 1;
        while(con1<=col){
            document.write("<td>" + (num++) +"</td>");
            con1++;
        }
        document.write("</tr>");
        con++;
 }
 document.write("</table>");
