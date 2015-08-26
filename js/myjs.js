/**
 * Created by hp on 08/20/2015.
 */

$( document ).ready(
    $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 240
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    )
);

$('.collapse').collapse();

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
});