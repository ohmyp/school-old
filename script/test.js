$("#home").click(function () {
    window.close();
});
$("#logo").click(function () {
    window.location = 'index.html';
});

var url = window.location.href;
var id = url.substring(url.lastIndexOf('=') + 1);

test1 = new Test("Тест по профориентации по методике Е.А. Климова.",
    "Прочитай данные утверждения. Если ты согласен с ними, то нажми на кнопку \"Да\", если нет, нажми на кнопку \"Нет\". Если ты сомневаешься,  нажми на кнопку \"Не знаю\".",
    [{
            q: "1. Легко знакомлюсь с людьми.",
            category: "human",
            value: 1,
        },
        {
            q: "2. Охотно и подолгу могу что-нибудь мастерить.",
            category: "tech",
            value: 1,
        },
        {
            q: "3. Люблю ходить в музеи, театры, на выставки.",
            category: "art",
            value: 1,
        },
        {
            q: "4. Охотно и постоянно ухаживаю за растениями, животными.",
            category: "nature",
            value: 1,
        },
        {
            q: "5. Охотно и подолгу могу что-нибудь вычислять, чертить.",
            category: "digit",
            value: 1,
        },
        {
            q: "6. С удовольствием общаюсь со сверстниками или малышами. ",
            category: "human",
            value: 1,
        },
        {
            q: "7. С удовольствием ухаживаю за растениями и животными.",
            category: "nature",
            value: 1,
        },
        {
            q: "8. Обычно делаю мало ошибок в письменных работах.",
            category: "digit",
            value: 1,
        },
        {
            q: "9. Мои изделия обычно вызывают интерес у товарищей, старших.",
            category: "tech",
            value: 2,
        },
        {
            q: "10. Люди считают, что у меня есть художественные способности.",
            category: "art",
            value: 2,
        },
        {
            q: "11. Охотно читаю о растениях, животных.",
            category: "nature",
            value: 1,
        },
        {
            q: "12. Принимаю участие в спектаклях, концертах.",
            category: "art",
            value: 1,
        },
        {
            q: "13. Люблю читать об устройстве механизмов, приборов, машин.",
            category: "tech",
            value: 1,
        },
        {
            q: "14. Подолгу могу разгадывать головоломки, задачи, ребусы.",
            category: "digit",
            value: 2,
        },
        {
            q: "15. Легко улаживаю разногласия между людьми.",
            category: "human",
            value: 2,
        },
        {
            q: "16. Считают, что у меня есть способности к работе с техникой.",
            category: "tech",
            value: 2,
        },
        {
            q: "17. Людям нравится мое художественное творчество.",
            category: "art",
            value: 2,
        },
        {
            q: "18. У меня есть способности к работе с растениями и животными.",
            category: "nature",
            value: 2,
        },
        {
            q: "19. Я могу ясно излагать свои мысли в письменной форме.",
            category: "digit",
            value: 2,
        },
        {
            q: "20. Я почти никогда ни с кем не ссорюсь.",
            category: "human",
            value: 1,
        },
        {
            q: "21. Результаты моего технического творчества одобряют даже незнакомые люди.",
            category: "tech",
            value: 1,
        },
        {
            q: "22. Без особого труда усваиваю иностранные языки.",
            category: "digit",
            value: 1,
        },
        {
            q: "23. Мне часто случается помогать даже незнакомым людям.",
            category: "human",
            value: 2,
        },
        {
            q: "24. Подолгу могу заниматься музыкой, рисованием, читать книги и т. д.",
            category: "art",
            value: 1,
        },
        {
            q: "25. Могу влиять на ход развития растений и животных.",
            category: "nature",
            value: 2,
        },
        {
            q: "26. Люблю разбираться в устройстве механизмов, приборов.",
            category: "tech",
            value: 1,
        },
        {
            q: "27. Мне обычно удается убедить людей в своей правоте.",
            category: "human",
            value: 1,
        },
        {
            q: "28. Охотно наблюдаю за растениями или животными.",
            category: "nature",
            value: 1,
        },
        {
            q: "29.Охотно читаю научно-популярную, критическую литературу, публицистику.",
            category: "digit",
            value: 1,
        },
        {
            q: "30. Стараюсь понять секреты мастерства и пробую свои силы в живописи, музыке и т. п.",
            category: "art",
            value: 1,
        },
    ],
    "Наибольшая полученная сумма или суммы(по столбцам) указывают на наиболее подходящий для тип профессии. Малые или отрицательные суммы указывают на типы профессий, которых следует избегать при выборе. Максимальное число баллов в каждом столбце - 8. В соответствии с данной классификацией мир современных профессий можно разделить на 5 основных типов:<br>\
    <br><span>1. «Человек-природа».</span><br>Представителей этих профессий объединяет одно очень важное качество — любовь к природе. Но любовь не созерцательная. Которой обладают практически все люди, считая природу наиболее благоприятной средой для отдыха, а деятельная связанная с познанием ее законов и применением их. Одно дело — любить животных и растения, играть с ними, радоваться им. И совсем другое — регулярно, день за днем ухаживать за ними, наблюдать, лечить, выгуливать, не считаясь с личным временем и планами. Специалист должен не просто все знать о живых организмах, но и прогнозировать возможные изменения в них и принимать меры. От человека требуется инициатива и самостоятельность в решении конкретных задач, заботливость, терпение и дальновидность. Человек, работающий в сфере «человек-природа», должен быть спокойным и уравновешенным. <br>\
    <br><span>2. «Человек-техника».</span><br>Особенность технических объектов в том, что они, как правило, могут быть точно измерены по многим признакам. При их обработке, преобразовании, перемещении или оценке от работника требуется точность, определенность действий. Техника как предмет руда представляет широкие возможности для новаторства, выдумки. творчества, поэтому важное значение приобретает такое качество, как практическое мышление. Техническая фантазия, способность мысленно соединять и разъединять технические объекты и их части — важные условия для успеха в данной области.<br>\
    <br><span>3. «Человек-знаковая система».</span><br>Мы встречаемся со знаками значительно чаще, чем обычно представляем себе. Это цифры. Коды, условные знаки, естественные или искусственные языки, чертежи, таблицы формулы. В любом случае человек воспринимает знак как символ реального объекта или явления. Поэтому специалисту, который работает со знаками, важно уметь с одной стороны, абстрагироваться от реальных физических, химически, механических свойств предметов, а с другой — представлять и воспринимать характеристики реальных явлений или объектов, стоящих за знаками. Чтобы успешно работать в какой-нибудь профессии данного типа, необходимо уметь мысленно погружаться в мир, казалось бы, сухих обозначений и сосредотачиваться на сведениях, которые они несут в себе. Особые требования профессии этого типа предъявляют к вниманию.<br>\
    <br><span>4. «Человек-искусство».</span><br>Важнейшие требования, которые предъявляют профессии, связанные с изобразительной, музыкальной, литературно-художественной, актерско-сценической деятельностью человека — наличие способности к искусствам, творческое воображение, образное мышление, талант, трудолюбие.<br>\
    <br><span>5. «Человек-человек».</span><br>Даже выбирая профессию, не связанную непосредственно с общением, вы поступите правильно, если обратите внимание на общительность и контактность. Подумайте, куда вы обращены- к людям или к себе? С кем бы вы хотели общаться — с собой или с другими? Главное содержание труда в профессиях типа «человек-человек» сводится к взаимодействию между людьми. Если не наладится это взаимодействие, значит, не наладится и работа. Качества, необходимые для работы с людьми: устойчивое, хорошее настроение в процессе работы с людьми, потребность в общении, способность мысленно ставить себя на место другого человека, быстро понимать намерения, помыслы, настроение людей, умение разбираться в человеческих взаимоотношениях, хорошая память (умение держать в уме имена и особенности многих людей), умение находить общий язык с различными людьми, терпение.\
    ");

test1ResultNames = {
    nature: "Человек-природа",
    tech: "Человек-техника",
    human: "Человек-человек",
    digit: "Человек-знаковая система",
    art: "Человек-искусство»"
}

var testName = $(".header_titles h1");
testName.text(test1.title);

var testInstruction = $(".header_titles h2");
testInstruction.text(test1.instruction);

var qName = document.createElement('h2');
qName.classList.add("large_title")
qName.innerText = "Нажми на кнопку \"Начать\", чтобы запустить тестирование.";

$(".test").append(qName);

// Запуск теста
startTest = document.createElement("button");
startTest.innerText = "Начать";
startTest.addEventListener('click', function () {
    startTest.remove();
    switch (id){
        case "1":
            test(test1, test1ResultNames);
            break;
    }
})
$(".test").append(startTest);


function test(testInput, testResultNames) {
    countQuestion = 0;
    test = testInput.questions[countQuestion];
    qName.innerText = test.q;
    let result = {
        nature: 0,
        tech: 0,
        human: 0,
        digit: 0,
        art: 0,
    }

    // Создание и добавление кнопок
    yes = document.createElement("button");
    yes.innerText = "Да";
    yes.value = "yes";
    no = document.createElement("button");
    no.innerText = "Нет";
    no.value = "no";
    dontknow = document.createElement("button");
    dontknow.innerText = "Не знаю";
    dontknow.value = "dontknow";
    $(".test").append(yes, no, dontknow);


    //Добавляем ивентлистнеры на кнопки:
    yes.addEventListener("click", chooseButtonsCLick);
    no.addEventListener("click", chooseButtonsCLick);
    dontknow.addEventListener("click", chooseButtonsCLick);



    function chooseButtonsCLick() {

        // Добавляем значение к результату если нажата кнопка Да
        if (this.value === "yes") {
            result[test.category] += test.value;
        } else if (this.value === "no") {
            result[test.category] -= test.value;
        }

        // Конец теста
        if (countQuestion === testInput.questions.length - 1) {
            qName.innerHTML = "Тест пройден!";
            var testResultDiv = document.createElement('form');
            testResultDiv.setAttribute('method', 'post');
            testResultDiv.setAttribute('action', 'https://formspree.io/f/xnqwazkn');
            testResultDiv.classList.add("results");
            $(".test").append(testResultDiv);

            for (r in result) {
                testResultDiv.append(parseResults(r));
            }

            var inputName = document.createElement('input');
            inputName.setAttribute('placeholder', 'Иванов Иван')
            inputName.setAttribute('name', 'name')
            var inputClass = document.createElement('input');
            inputClass.setAttribute('placeholder', '2А')
            inputClass.setAttribute('name', 'class')

            var sendToEmail = document.createElement('button');
            sendToEmail.setAttribute('type', 'submit')
            sendToEmail.innerHTML = "Сохранить";


            // Интерпретация результатов

            var explainElement = document.createElement("details");
            var explainTitle = document.createElement("summary");
            explainTitle.innerHTML = "Расшифровка результатов";
            var explainText = document.createElement("p");
            explainText.innerHTML = testInput.explain;
            explainElement.append(explainTitle, explainText);
            testResultDiv.append(inputName);
            testResultDiv.append(inputClass );

            testResultDiv.append(sendToEmail);
            testResultDiv.append(explainElement);

            yes.remove();
            no.remove();
            dontknow.remove();
            return 0;
        }


        // Переходим к следующему вопросу
        countQuestion++;
        test = testInput.questions[countQuestion];
        qName.innerText = test.q;
    }

    function parseResults(r) {
        number = result[r];
        var max = 8;
        var min = -8;

        var div = document.createElement('div');
        div.classList.add('result');

        var indicator = document.createElement('input');
        indicator.classList.add('indicator');
        indicator.setAttribute('readonly', 'readonly');
        indicator.setAttribute('value', result[r])
        indicator.setAttribute('name', r)

        var resultNumber = document.createElement('p');
        resultNumber.innerHTML = result[r];

        indicator.append(resultNumber);

        result[r] > 0 ? percent = Math.floor(result[r] / 8 * 100) : percent = Math.floor(Math.abs(result[r]) / 8 * 100)
        result[r] > 0 ? indicatorColor = "6ECB63" : indicatorColor = "FF7878";
        indicator.style.background = "linear-gradient(90deg, #" + indicatorColor + " 0%, #" + indicatorColor + " " + percent + "%, white " + percent + "%, white 100%)";

        var name = document.createElement('p');
        name.innerText = testResultNames[r];


        div.append(name, indicator);
        return div;
    }
}
