// JavaScript Document
$(document).ready(function ( ){
    console.log("!");
      $('#bbtn').on('click', function () {
        console.log("!!!");
        var container = document.getElementById('content');
        console.log(container);
        $('#content').load('html/about.html');
  })

})