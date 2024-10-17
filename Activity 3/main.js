//write your JS code here:

//1
// window.open("","","width=200, height=100");

//debugger;

//2
// var newWindow = window.open("", "MsgWindow", "width=200, height=100");
// newWindow.document.write("Hola");

//debugger;

//3
// var newWindow = window.open("", "MsgWindow", "width=200, height=100");
// newWindow.document.write("Adios");

//debugger;

//4
// var newWindow = window.open("", "_self");
// newWindow.document.write("Buenas tardes");
// window.location.replace('https://www.example.com');

//debugger;

//5
// window.open("https://www.abc.es/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");

//debugger;

//6 
// var newWindow = window.open("", "MsgWindow","width=200, height=100");
// newWindow.close();
//
// otra forma
//
// var tempWindow = window.open("", "", "");
// setTimeout(()=>{
//    tempWindow.close();
// }, 2000);

//debugger;

//7
// var myWindow = window.open("", "myWindow", "width=200,height=100");   // Opens a new window
// myWindow.document.write("<p>This is 'myWindow'</p>");   // Text in the new window
// myWindow.opener.document.write("<p>This is the source window!</p>");

//debugger;

//8
// let iframe = document.createElement("iframe");
// iframe.src = "iframe.html";
// document.body.appendChild(iframe);
// iframe.onload = function() { // cargamos el iframe
//      let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
//      iframeDoc.write("some text");
// };

//debugger;

//9
// let iframe2 = document.createElement('iframe');
// iframe2.src = 'iframe.html'; // Asegúrate de que existe
// document.body.appendChild(iframe2); // se añade el iframe al cuerpo del documento
// iframe.onload = function() { //cargamos el iframe
//    let iframeDoc = iframe2.contentDocument || iframe2.contentWindow.document;
//    console.log(iframeDoc.body.innerHTML);
// };

//debugger;