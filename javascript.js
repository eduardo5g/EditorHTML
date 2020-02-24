console.log('oi');
$(document).ready(function() {
    carregarDivs();
});

function carregarDivs() {
    $("#svg-add-div-body").click(function() {
        var div = document.createElement('div');
        div.setAttribute('class', 'div-pe row12 col12');
        div.innerHTML = "Digite aqui o texto desejado ou crie algum elemento!";
        $("#div-body").append(div);
    })
};