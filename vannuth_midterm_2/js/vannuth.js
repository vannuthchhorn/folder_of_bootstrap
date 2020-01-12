$(function(){
    $('button').on('click',function(){
        var user = $('#user').val();
        var pass = $('#pass').val();
        (user !="") ? setSuccess('user') : setError('user');
        (pass !="") ? setSuccess('pass') : setError('pass');
    });
});
function setSuccess(success){
    $('#' + success).addClass('border-success').removeClass('border-danger');
}
function setError(error){
    $('#' + error).addClass('border-danger').removeClass('border-success');
}