document.getElementById("search_text").addEventListener("keyup", function(e) { //позволяет по клавише enter (13) в поле input выполнить поиск
        if (e.keyCode === 13) {
            document.getElementById("search_button").click(); //осуществляет событие нажатия кнопки
        }
    });

function searchInTable() { //функция поиска подстроки по таблице
    var search_text = document.getElementById("search_text"); //подстрока для поиска
    var search_result = document.getElementsByClassName("search_result")[0]; //поле вывода результата поиска
    var table_data = document.getElementsByClassName("td_col_1"); //Данные, по которым осуществляется поиск. Для поиска по всем ячейкам, необходимо изменить строку класса на table_td

    search_result.innerHTML = ""; //Зачистка поле вывода результата

    for (var i = 0; i < table_data.length; i++) { //Зачистка выделения стилями найденных в таблице результатов
        table_data[i].style.backgroundColor = "";
    }

    if (search_text.value === "") return alert("Введите поисковой запрос"); //Проверка на пустую строку в поле input

    var flag = false; //Отвечает за возращаемое булевое значение функции regPhase
    var result = 0; //Счетчик найденных поисоквых результатов

    var regPhrase = new RegExp(search_text.value, "i"); //Отвечает за поиск подстроки в строке без учета регистра

    for (var i = 0; i < table_data.length; i++) { //цикл по количеству ячеек
        flag = regPhrase.test(table_data[i].querySelector("p").innerHTML); //True, когда подстрака найдена, иначе False
        if (flag) {
            table_data[i].style.backgroundColor = "red"; //Когда одстрока найдена, ячейка таблицы окрашивается в красный
            result += 1; // Инкремент счетчика
        }
    }

    if (result > 0) {
        search_result.innerHTML = "По запросу найдено " + result; //Вывод количества найденных результатов
    } 
    else {
        search_result.innerHTML = "Ничего не найдено";
    }
    
    search_text.value = ""; //очистка input поля поиска
}