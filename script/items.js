// Конструктор карточек
function Item(title, subtitle, buttons, block) {
    this.title = title || 'Заголовок карточки';
    this.subtitle = subtitle || 'Подзаголовок карточки';
    this.buttons = buttons || [
        [
            "Кнопка",
            "https://vk.com/ohmyp"
        ]
    ];
    this.block = block || 0;
}


// Конструктор тестов
function Test(title, instruction, questions, explain) {
    this.title = title || 'Заголовок теста';
    this.instruction = instruction || "Инструкция к тесту",
        this.questions = questions || [{
                q: "1. Q1.",
                category: "wtf",
                value: 1,
            },
            {
                q: "2. Q2.",
                category: "wtf",
                value: 5,
            },
        ];
    this.explain = explain || "Explanation"

}


var itemsToImport = [
    new Item('Занятие №1', "Материалы для выполнения занятия №1", [
        [
            "Лекция",
            "files/lection1.docx",
        ],
        [
            "Образец ДЗ",
            "files/homework1.docx"
        ],
        [
            "Презентация",
            "files/presentation1.docx",
        ]
    ], 'teachers'),
    new Item('Структура проектной работы', "Материалы для чтения", [
        [
            "Презентация",
            "files/Структура_Подготовка работы к защите.pptx",
        ],
        
    ], 'pupils'),
    new Item('Занятие №1', "Материалы для выполнения занятия №1", [
        [
            "Задание",
            "files/homework1.docx"
        ],
        [
            "Загрузка задания",
            "https://forms.gle/9iPjgexAjimiSadC9"
        ],
        [
            "Презентация",
            "files/presentation1.pptx"
        ],
        [
            "Анкета",
            "https://docs.google.com/forms/d/e/1FAIpQLSdz8Acv4rKMK3bPMIESY9fr4A7rnuOlXPLPf76VRau8R7YLNA/viewform?usp=sf_link"
        ]
    ], 'pupils'),
    new Item('Тестирование по методике Климова', "Пройдите профориентационный тест по методике Климова.", [
        [
            "Открыть",
            "test.html?id=1"
        ]
    ], 'tests'),
    new Item('Анкета к занятию №1 \"Выбор профессии\"', "Заполните анкету.", [
        [
            "Заполнить",
            "https://docs.google.com/forms/d/e/1FAIpQLSdz8Acv4rKMK3bPMIESY9fr4A7rnuOlXPLPf76VRau8R7YLNA/viewform?usp=sf_link"
        ]
    ], 'tests'),
    new Item('Занятие №2', "Материалы для выполнения занятия №2", [
        [
            "Лекция",
            "files/lection2.pptx",
        ],
    
        [
            "Презентация к лекции + домашнее задание",
            "files/lection_homework2.pptx",
        ]
    ], 'teachers'),
    new Item('Занятие №2', "Материалы для выполнения занятия №2", [
        [
            "Лекция",
            "files/lection2.pptx",
        ],
    
        [
            "Домашнее задание",
            "files/homework2.pptx",
        ], 
        [
            "Загрузка задания",
            "https://forms.gle/uRCRxVWGhWVDczcr5"
        ],
    ], 'pupils'),
    new Item('Занятие №3', "Материалы для выполнения занятия №3", [
        [
            "Лекция",
            "files/lection3.docx",
        ],
    
        [
            "Презентация к лекции + домашнее задание",
            "files/lection_homework3.pptx",
        ]
    ], 'teachers'),
    new Item('Занятие №3', "Материалы для выполнения занятия №3", [
        [
            "Лекция",
            "files/lection3.pptx",
        ],
    
        [
            "Домашнее задание",
            "files/homework3.pptx",
        ],
        [
            "Загрузка задания",
            "https://forms.gle/xoTdiSRyUcMDbXHq5"
        ],
    ], 'pupils'),
    new Item('Занятие №4', "Материалы для выполнения занятия №4", [
        [
            "Лекция",
            "files/lection4.docx",
        ],
    
        [
            "Презентация к лекции + домашнее задание",
            "files/lection_homework4.pptx",
        ]
    ], 'teachers'),
    new Item('Занятие №4', "Материалы для выполнения занятия №4", [
        [
            "Лекция",
            "files/lection4.pptx",
        ],
    
        [
            "Домашнее задание",
            "files/homework4.pptx",
        ], 
        [
            "Загрузка задания",
            "https://forms.gle/sJhjibTE8J88t7dz9"
        ],
    ], 'pupils'),
    new Item('Олимпиада СПбГУ', "Cтарт регистрации с 20 октября 2021 годa", [
        [
            "Перейти",
            "https://olympiada.spbu.ru/predmety.html",
        ],
    ], 'olymp58'),
    new Item('Олимпиада СПбГУ', "Cтарт регистрации с 20 октября 2021 годa", [
        [
            "Перейти",
            "https://olympiada.spbu.ru/predmety.html",
        ],
    ], 'olymp911'),

    new Item('Занятие №5', "Материалы для выполнения занятия №5", [
        [
            "Лекция",
            "files/lection5.docx",
        ],
    
        [
            "Презентация к лекции + домашнее задание",
            "files/lection_homework5.pptx",
        ]
    ], 'teachers'),
    new Item('Занятие №5', "Материалы для выполнения занятия №5", [
        [
            "Лекция",
            "files/lection5.pptx",
        ],
    
        [
            "Домашнее задание",
            "files/homework5.pptx",
        ], 
        [
            "Загрузка задания",
            "https://forms.gle/dqfz6xgAxomqByAu5"
        ],
    ], 'pupils'),
    new Item('Занятие №6', "Материалы для выполнения занятия №6", [
        [
            "Лекция",
            "files/lection6.docx",
        ],
    
        [
            "Презентация к лекции + домашнее задание",
            "files/lection_homework6.pptx",
        ]
    ], 'teachers'),
    new Item('Занятие №6', "Материалы для выполнения занятия №6", [
        [
            "Лекция",
            "files/lection6.pptx",
        ],
    
        [
            "Домашнее задание",
            "files/homework6.pptx",
        ], 
        [
            "Загрузка задания",
            "https://forms.gle/CJkzK3jjZjfsPWwi6"
        ],
    ], 'pupils'),
    new Item('Занятие №7', "Материалы для выполнения занятия №7", [
        [
            "Лекция",
            "files/presentation7.pptx",
        ],
    ], 'pupils'),
    new Item('Занятие №7', "Материалы для выполнения занятия №7", [
        [
            "Лекция",
            "files/presentation7.pptx",
        ],
    ], 'teachers'),
    new Item('Занятие №8', "Материалы для выполнения занятия №8", [
        [
            "Презентация к лекции + домашнее задание",
            "files/lection_homework8.pptx",
        ],
        [
            "Лекция",
            "files/lection8.docx",
        ],
    ], 'teachers'),
    new Item('Занятие №8', "Материалы для выполнения занятия №8", [
        [
            "Презентация к лекции + домашнее задание",
            "files/lection_homework8.pptx",
        ],
        [
            "Загрузка задания",
            "https://forms.gle/7KpbxBGQxganiDQw9"
        ],
        
    ], 'pupils'),
    new Item('Занятие №9', "Материалы для выполнения занятия №9", [
        [
            "Презентация к лекции + домашнее задание",
            "files/lection_homework9.pptx",
        ],
        [
            "Лекция",
            "files/lection9.docx",
        ],
    ], 'teachers'),
    new Item('Занятие №9', "Материалы для выполнения занятия №9", [
        [
            "Презентация к лекции + домашнее задание",
            "files/lection_homework9.pptx",
        ],
        [
            "Загрузка задания",
            "https://forms.gle/isyLWhxhqgyAkGQSA"
        ],
        
    ], 'pupils'),
    new Item('Занятие №10', "Материалы для выполнения занятия №10", [
        [
            "Презентация к лекции + домашнее задание",
            "files/lection_homework10.pptx",
        ],
        
    ], 'teachers'),
    new Item('Занятие №10', "Материалы для выполнения занятия №10", [
        [
            "Презентация к лекции + домашнее задание",
            "files/lection_homework10.pptx",
        ],
        [
            "Загрузка задания",
            "https://forms.gle/d6xEPbRo1HGjjniTA"
        ],
        
    ], 'pupils'),
    new Item('Занятие №11', "Материалы для выполнения занятия №11", [
        [
            "Презентация к лекции",
            "files/lection11.pptx",
        ],
        
    ], 'teachers'),
    new Item('Занятие №11', "Материалы для выполнения занятия №11", [
        [
            "Презентация к лекции ",
            "files/lection11.pptx",
        ],
        
    ], 'pupils'),
    new Item('Занятие №12', "Материалы для выполнения занятия №12", [
        [
            "Презентация к лекции + домашнее задание",
            "files/lection_homework12.pptx",
        ],
        
    ], 'teachers'),
    new Item('Занятие №12', "Материалы для выполнения занятия №12", [
        [
            "Презентация к лекции + домашнее задание",
            "files/lection_homework12.pptx",
        ],
        [
            "Загрузка задания",
            "https://forms.gle/BPJNfQo1P7ub8XDA8"
        ],
        
    ], 'pupils'),
    
];