$("#submit").click(function()
{
    var user = $('#user').val();
    var pwd = $('#pwd').val();
     if(user.equals("1234@gmail.com") && pwd.equals("1234"))
     {
         alert("Succesfully Logged in!");
     }
});