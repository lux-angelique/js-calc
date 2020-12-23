$(document).ready(function() {
    let type_paper = {
      "Выберите бумагу": 0,
      "Мелованная": 6.8,
      "Повышенной белизны (SPLENDORGEL)": 40.5,
      "Prestige Лён": 45
    };
    let type_color = {
      "Выберите цветность": { file: 0, print: 0},
      "Односторонняя черно-белая": { file: 110, print: 14},
      "Двусторонняя черно-белая": { file: 220, print: 28},
      "Односторонняя цветная": { file: 110, print: 37},
      "Цветная с одной стороны и черно-белая с другой": { file: 220, print: 51},
      "Двусторонняя цветная": { file: 220, print: 74}
    };

    let html = '';
    for (let key in type_paper) {
        html += '<option value="' + key + '">' + key + "</option>";
    }
    $('#card-paper').html(html);

    html = '';
    for (let key in type_color) {
        html += '<option value="' + key + '">' + key + "</option>";
    }
    $('#card-color').html(html);

    $('.calc').change(function(){
        let tir_size = $('#card-quantity').val() / 30;
        let price_papper = type_paper[$('#card-paper').val()] * tir_size;
        let price_template = type_color[$('#card-color').val()]['file'];
        let price_print = type_color[$('#card-color').val()]['print'] * tir_size;
        let sum = price_papper + price_template + price_print;
        $('#final_price').text(sum);
    });
    $(document).on('change', '#card-color', function(){
        $('img').hide();
        if ($('#card-color').val() == "Односторонняя черно-белая") {
            $('#card_1_0').show("slow");
        }
        if ($('#card-color').val() == "Двусторонняя черно-белая") {
            $('#card_1_1').show("slow");
        }
        if ($('#card-color').val() == "Односторонняя цветная") {
            $('#card_4_0').show("slow");
        }
        if ($('#card-color').val() == "Цветная с одной стороны и черно-белая с другой") {
            $('#card_4_1').show("slow");
        }
        if ($('#card-color').val() == "Двусторонняя цветная") {
            $('#card_4_4').show("slow");
        }
    });
});