$(document).ready(function() {
    $('#lista-tarefas').click(function() {
        $('li').toggleClass("feito");
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nome').val();
        const item = $('<li></li>');
        $(`<span>${nomeTarefa}</span>`).appendTo(item);
        $(item).appendTo('ul');
        console.log(item);
        $('#nome').val('')
    })
})