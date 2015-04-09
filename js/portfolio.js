// JavaScript Document
$(document).ready(function ( )
    {
    $('#content').load('html/about.html');
    
    $('#aboutBTN').on('click', function () 
        {
            $('#content').load('html/about.html');
        });
	$('#resumeBTN').on('click', function () 
        {
            $('#content').load('html/resume.html');
        });
	$('#projectsBTN').on('click', function () 
        {
            $('#content').load('html/projects.html');
        });
	$('#contactBTN').on('click', function () 
        {
            $('#content').load('html/contact.html');
        });
    });
