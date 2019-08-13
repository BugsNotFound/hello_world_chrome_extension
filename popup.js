$(function() {
    $("#name").keyup(function() {
        var name = $('#name').val();
        if (name == "") name = "World";
        $("#greet").text("Hello " + name);
    });
})