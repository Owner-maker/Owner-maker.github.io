class Film{
    constructor(title,year,director,country,time,type,acters,description,posterSmall,posterBig,linkYT,id){
        this.title = title;
        this.year = year;
        this.director = director;
        this.country = country;
        this.time = time;
        this.type = type;
        this.acters = acters;
        this.description = description;
        this.posterSmall = posterSmall;
        this.posterBig = posterBig;
        this.linkYT = linkYT;
        this.id = id;
    }
}


let film1 = new Film(
    "Беги, Лола беги",
    1998,
    "Том Тыквер",
    "Германия",
    81,
    "Триллеры",
    "Франка Потенте, Мориц Бляйбтрой, Херберт Кнауп, Нина Петри, Армин Роде",
    "Вряд ли кто-то с ходу назовет десять хороших немецких фильмов (не потому, что их нет, а потому, что никто не является знатоком немецкого кино). Но в числе первых пяти наверняка будет «Беги, Лола, беги». Легкая, но очень увлекательная криминальная комедия отлично передает дух кино 90-х — круто, смешно, немного грустно, очень динамично и ярко.",
    "url('../images/smallPosters/img1.jpg')",
    "../images/bigPosters/img1.jpg",
    "https://www.youtube.com/watch?v=E0rT32Qvzic",
    "flm1"
);

let film2 = new Film(
    "Бешеные псы",
    1991,
    "Квентин Тарантино",
    "США",
    100,
    "Триллеры",
    "Квентин Тарантино, Харви Кейтель, Тим Рот, Майкл Мэдсен, Крис Пенн",
    "Первый фильм Квентина Тарантино. По нашему скромному мнению, лучший фильм Квентина Тарантино. Банда идет на дело, но внезапно все идет не по плану. Сирены, копы, трупы (в том числе, и среди членов банды) и понимание того, что кто-то из подельников — предатель. Но кто? Как это выяснить, если алиби нет ни у кого и все одинаково подозрительно себя ведут? И что делать с этим дальше, учитывая, что полиция ищет их, а один из грабителей истекает кровью?",
    "url('../images/smallPosters/img2.jpg')",
    "../images/bigPosters/img2.jpg",
    "https://www.youtube.com/watch?v=GWzMBmzsGeE",
    "flm2"
);

let film3 = new Film(
    "Бойцовский клуб",
    1999,
    "Дэвид Финчер",
    "США",
    133,
    "Триллеры",
    "Эдвард Нортон, Брэд Питт, Хелена Бонем Картер",
    "Если вы не смотрели этот фильм, то вам можно лишь позавидовать: ведь у вас еще все впереди. Дэвид Финчер снял фильм, который сначала провалился в прокате, а потом стал культовым и вошел в топ-10 любых киношных рейтингов. Брэд Питт и Эдвард Нортон в бесбашенной истории о том как попытка вырваться из общества потребления может завести в куда более дремучие дебри.",
    "url('../images/smallPosters/img3.jpg')",
    "../images/bigPosters/img3.jpg",
    "https://www.youtube.com/watch?v=C7-7qQ61QHU",
    "flm3"
);

let film4 = new Film(
    "Большой Лебовски",
    1998,
    "Джоэл Коэн, Итан Коэн",
    "США",
    117,
    "Комедии",
    "Джефф Бриджес, Джон Гудман, Джулианна Мур, Стив Бушеми, Дэвид Хаддлстон",
    "Братья Коэны в 90-х снимали исключительно картины статуса не ниже культового. Феноменальный разгильдяй по прозвищу Дюдя (Джефф Бриджес) живет беспечной жизнью, пока его не путают с богатым однофамильцем. Теперь динамика его жизни заметно ускорится, да и наполнение ее станет куда более напряженным. Как всегда у Коэнов, главное — не повороты сюжета, а бесконечный поток юмора, который переходит из состояния черного в абсурдный и обратно.",
    "url('../images/smallPosters/img4.jpg')",
    "../images/bigPosters/img4.jpg",
    "https://www.youtube.com/watch?v=M6_JJK5IIDU",
    "flm4"
);

let film5 = new Film(
    "Брат",
    1997,
    "Алексей Балабанов",
    "Россия",
    95,
    "Боевики",
    "Сергей Бодров мл., Виктор Сухоруков, Светлана Письмиченко, Мария Жукова",
    "Российское кино в 90-х однозначно было не на взлете, и фильм Балабанова стал одним из первых, показавших, что ситуация все же не безнадежна. Герой Бодрова возвращается из армии и едет в Питер, чтобы найти там старшего брата и попытаться обустроиться в большом городе. С учетом того, что его брат — киллер, обустройство проходит заметно сложнее, чем ожидалось. Музыка Наутилус Помпилиус и новый образ современного героя/антигероя.",
    "url('../images/smallPosters/img5.jpg')",
    "../images/bigPosters/img5.jpg",
    "https://www.youtube.com/watch?v=Zq55yxODJiA",
    "flm5"
);

let film6 = new Film(
    "Быть Джоном Малковичем",
    1999,
    "Спайк Джонс",
    "США",
    112,
    "Фантастика",
    "Джон Кьюсак, Кэмерон Диаз, Кэтрин Кинер",
    "Чарли Кауфман написал свой первый сценарий для полного метра для этого фильма — теперь это один из самых нестандартных и ценных сценаристов Голливуда. Что если в тело Джона Малковича можно вселиться всего за 200 долларов? Как будет чувствовать себя сам Малкович? Попробует ли он сам вселиться в свое тело через дверь в секретном шкафу? Безумно и прекрасно.",
    "url('../images/smallPosters/img6.jpg')",
    "../images/bigPosters/img6.jpg",
    "https://www.youtube.com/watch?v=DgIw_F9WmZQ",
    "flm6"
);

let film7 = new Film(
    "Ведьма из Блэр: Курсовая с того света",
    1990,
    "Дэниэл Мирик, Эдуардо Санчес",
    "США",
    81,
    "Ужасы",
    "Хезер Донахью, Джошуа Леонард, Майкл С. Уильямс",
    "Фильм смотрится как документалка. И от этого становится еще страшнее. Один из самых впечатляющих хорроров всех времен о группе студентов, которые отправились собирать материалы о загадочной ведьме и попали в такой переплет, которого не стоит ни одна курсовая.",
    "url('../images/smallPosters/img7.jpg')",
    "../images/bigPosters/img7.jpg",
    "https://www.youtube.com/watch?v=tx8sGX6c59A",
    "flm7"
);

let film8 = new Film(
    "Во имя отца",
    1993,
    "Джим Шеридан",
    "Ирландия",
    132,
    "Драмы",
    "Дэниэл Дэй-Льюис, Пит Постлетуэйт, Эмма Томпсон",
    "Если в фильме снимается Дэниел Дэй-Льюис, то как минимум, будет однозначным удовольствием смотреть на его актерскую игру. Но эта история куда более значимая: в Англии взрывают бары, ИРА берет на себя ответственность, полиция арестовывает подозреваемых, в том числе четверых людей, которые просто были на месте происшествия. Тюрьма встречает их унижениями и избиениями, а в это время их адвокат пытается добиться справделивости. Фильм по реальным событиям (по книге, которую написал один из четверых обвиненных) получил главный приз Берлинского кнофестиваля и семь номинаций на Оскар.",
    "url('../images/smallPosters/img8.jpg')",
    "../images/bigPosters/img8.jpg",
    "https://www.youtube.com/watch?v=dkIfI3qSsig",
    "flm8"
);

let film9 = new Film(
    "Вcе о моей матери",
    1999,
    "Педро Альмодовар",
    "Испания",
    101,
    "Драмы",
    "Сесилия Рот, Мариса Паредес, Кандела Пенья",
    "История о матери-одиночке, потерявшей сына и начинающей жизнь заново, получила практически все главные награды мира кино — Оскар, BAFTA, Золотой глобус, Сезар и премию Канн за лучшую режиссуру. Великолепный ансамбль актрис, который максимально реалистично растворяется в истории, повороты которой предугадать практически невозможно.",
    "url('../images/smallPosters/img9.jpg')",
    "../images/bigPosters/img9.png",
    "https://www.youtube.com/watch?v=CF0XR07HrYQ",
    "flm9"
);

let film10 = new Film(
    "Город потерянных детей",
    1995,
    "Жан-Пьер Жёне, Марк Каро",
    "Франция",
    112,
    "Фантастика",
    "Рон Перлман, Жюдит Витте, Доминик Пинон",
    "Французское кино в своих лучших проявлениях. Сюрреалистический мир, окружающий главных героев, в котором злобный ученый похищает детей, чтобы смотреть их сны. Психоделическое оформление выдуманного города действует на зрителя не меньше, чем сама история. Один из режиссеров, Жан-Пьер Жёне, снял среди прочего такие фильмы как «Амели» и «Чужой 4».",
    "url('../images/smallPosters/img10.jpg')",
    "../images/bigPosters/img10.jpg",
    "https://www.youtube.com/watch?v=SboC2SR_q4I",
    "flm10"
);

let film11 = new Film(
    "Двенадцать обезьян",
    1995,
    "Терри Гиллиам",
    "США",
    129,
    "Фантастика",
    "Брюс Уиллис, Мэделин Стоу, Брэд Питт",
    "Антиутопия от Терри Гиллиама, в которой мир не выжил из-за смертельного вируса, выпущенного некоей организацией, которую теперь должен разыскать герой Брюса Уиллиса в прошлом. Одна из лучших ролей Брэда Питта, который в этой картине не только безумен, но и совершенно неузнаваем после стольких ролей красавчиков и героев.",
    "url('../images/smallPosters/img11.jpg')",
    "../images/bigPosters/img11.jpg",
    "https://www.youtube.com/watch?v=VY3LIUTuRPE",
    "flm11"
);

let film12 = new Film(
    "Двойная жизнь Вероники",
    1991,
    "Кшиштоф Кесьлёвский",
    "Франция",
    93,
    "Драмы",
    "Ирен Жакоб, Халина Грыгляшевска, Калина Едрусик, Александр Бардини, Владислав Ковальский",
    "Совместное производство Франции и Польши. Один из самых известных польских режиссеров, Кшиштоф Кесьлёвский, поставил историю из двух частей, действие которой происходит в двух странах и на двух языках. Стартует оно в Польше, а продолжается во Франции. Связывает две части одна актриса, играющая двух девушек — двух Вероник. Когда все заканчивается для одной, начинается для другой. Чтобы добиться того результата, который он задумывал, Кесьлёвский сделал, по разным версиям, от 17 до 27 версий монтажа фильма (он даже хотел прокатывать разные версии в разных кинотеатрах). Толкований значения этой истории на стыке реальности и ощущений прогнозируемо было не меньше, чем версий монтажа. Критики в восторге, Ирен Жакоб получила приз Канн за лучшую роль, а зрители окунулись в гипнотический мир, который раньше себе даже не могли и представить.",
    "url('../images/smallPosters/img12.jpg')",
    "../images/bigPosters/img12.jpg",
    "https://www.youtube.com/watch?v=8HREH6LQJd4",
    "flm12"
);

let film13 = new Film(
    "День сурка",
    1993,
    "Харольд Рэмис",
    "США",
    100,
    "Комедии",
    "Харольд Рэмис, Билл Мюррей, Энди МакДауэлл",
    "Но не все лучшие фильмы должны быть сюрреалистическими полотнами со сложной историей создания. Порой комедии бывают не менее глубокими и цепляющими за душу, чем самые серьезные драмы. Нет смысла пересказывать в сотый раз сюжет этого шедевра с Биллом Мюрреем в главной роли, погружая вас в параллельный день сурка. Пожалуй, это одна из тех картин, которая не оставила недовольных — если вы найдете человека, которому не понравился «День сурка», то дайте нам знать. Мы найдем его и заставим смотреть «Зеленого слоника».",
    "url('../images/smallPosters/img13.jpg')",
    "../images/bigPosters/img13.jpg",
    "https://www.youtube.com/watch?v=iIIX9OnSARg",
    "flm13"
);

let film14 = new Film(
    "Достучаться до небес",
    1997,
    "Томас Ян",
    "Германия",
    87,
    "Комедии",
    "Тиль Швайгер, Ян Йозеф Лиферс, Тьерри Ван Вервеке",
    "Молодой еще Тиль Швайгер, снимавшийся во все той же «Лоле» Мориц Бляйбтрой и Рутгер Хауэр в коротком, но таком важном эпизоде. Двое смертельно больных отправляются на море, потому что именно это главное желание для одного из них (ведь Руди никогда там не был). Путь им предстоит непростой, но все испытания того стоят. Ведь на небе только и разговоров, что море…",
    "url('../images/smallPosters/img14.jpg')",
    "../images/bigPosters/img14.jpg",
    "https://www.youtube.com/watch?v=n0JXGT8qdH4",
    "flm14"
);


let film15 = new Film(
    "Зеленая миля",
    1999,
    "Фрэнк Дарабонт",
    "США",
    188,
    "Драмы",
    "Том Хэнкс, Дэвид Морс, Майкл Кларк Дункан, Бонни Хант",
    "Одна из лучших экранизаций Стивена Кинга. Огромный неуклюжий темнокожий обладает уникальным даром исцелять людей. Но вместо признания, он получает обвинения в убийстве. Попадая в тюрьму, он не ломается сам и меняет жизни как заключенных, так и персонала. Пронзительная история о добре, зле, прощении и самопожертвовании.",
    "url('../images/smallPosters/img15.jpg')",
    "../images/bigPosters/img15.jpg",
    "https://www.youtube.com/watch?v=TODt_q-_4C4",
    "flm15"
);

let film16 = new Film(
    "Казино",
    1995,
    "Мартин Скорсезе",
    "США",
    171,
    "Драмы",
    "Роберт Де Ниро, Шэрон Стоун, Джо Пеши, Джеймс Вудс",
    "Мгновенная классика от Мартина Скорсезе. Роберт Де Ниро в роли смотрящего в казино, контролируемом мафией. У него есть друг, который может решить любой вопрос и напортачить в самый неподходящий момент (Джо Пеши), и жена, которая безвольно подчиняется своему бывшему и выполняет любые его приказы (Шэрон Стоун). Несмотря на тяжелый эмоциональный фон, работать все равно нужно — мафия требует максимальной эффективности труда, который она оплачивает.",
    "url('../images/smallPosters/img16.jpg')",
    "../images/bigPosters/img16.jpg",
    "https://www.youtube.com/watch?v=a7eX9txPXQ4",
    "flm16"
);

let film17 = new Film(
    "Король-рыбак",
    1991,
    "Терри Гиллиам",
    "США",
    138,
    "Комедии",
    "Робин Уильямс, Джефф Бриджес, Аманда Пламмер",
    "Терри Гиллиам в своем лучшем проявлении. Робин Уильямс и Джефф Бриджес в главных ролях. Легенда, переложенная на современный лад. Популярный радиоведущий допускает в эфире вольность, из-за которой в итоге гибнут люди. Он опускается на дно, оказывается на грани гибели. И только такой же опустившийся человек может ему помочь…",
    "url('../images/smallPosters/img17.jpg')",
    "../images/bigPosters/img17.jpg",
    "https://www.youtube.com/watch?v=mcD3mqP8qbU",
    "flm17"
);

let film18 = new Film(
    "Крик",
    1996,
    "Уэс Крэйвен",
    "США",
    111,
    "Ужасы",
    "Нив Кэмпбелл, Кортни Кокс, Дэвид Аркетт, Скит Ульрих",
    "Пособие по тому как создавать триллеры и фильмы ужасов. Невероятное количество отсылок к другим шедеврам и художественным приемам по созданию напряжения на экране. Предугадать, чем все завершится и попробовать догадаться, кто реальный убийца, просто невозможно: Уэс Крейвен играет со зрителем, специально то пуская его по ложному следу, то просто притворяясь, что он делает именно это.",
    "url('../images/smallPosters/img18.jpg')",
    "../images/bigPosters/img18.jpg",
    "https://www.youtube.com/watch?v=vkJQxqJwNhs",
    "flm18"
);

let film19 = new Film(
    "Криминальное чтиво",
    1994,
    "Квентин Тарантино",
    "США",
    154,
    "Триллеры",
    "Квентин Тарантино, Джон Траволта, Сэмюэл Л. Джексон",
    "Классика от Квентина Тарантино, которая мгновенно сделала его культовым режиссером и определила дальнейшее развитие кино на десятилетия. Заслуженная победа в Каннах, десятки цитат, на которые разобрали фильм и один из самых любимых фильмов миллионов киноманов по всему миру.",
    "url('../images/smallPosters/img19.jpg')",
    "../images/bigPosters/img19.jpg",
    "https://www.youtube.com/watch?v=vBADUmfa9Q4",
    "flm19"
);

let film20 = new Film(
    "Леон",
    1994,
    "Люк Бессон",
    "Франция",
    133,
    "Драмы",
    "Жан Рено, Гари Олдман, Натали Портман, Дэнни Айелло",
    "Киллер спасает девочку от рук убийц и берет ее под свою опеку. Теперь у нее одна дорога — стать таким же киллером, как и ее защитник. Если, конечно, ей удастся выжить в противостоянии с коррупционерами-полицейскими. Классический фильм от Люка Бессона, его визитная карточка, в которой в полной мере раскрылись Жан Рено и Гэри Олдмен, а также впервые появилась в большой центральной роли Натали Портман.",
    "url('../images/smallPosters/img20.jpg')",
    "../images/bigPosters/img20.jpg",
    "https://www.youtube.com/watch?v=hvya_q8KM80",
    "flm20"
);

let film21 = new Film(
    "Магнолия",
    1999,
    "Пол Томас Андерсон",
    "США",
    189,
    "Драмы",
    "Том Круз, Филип Бейкер Холл, Филип Сеймур Хоффман",
    "Одна из лучших ролей Тома Круза. Великолепный фильм Пола Томаса Андерсона о переплетении судеб нескольких разных людей в течение буквально одного дня. Звездный актерский состав, большая часть которого перешла из предыдущей картины режиссера.",
    "url('../images/smallPosters/img21.jpg')",
    "../images/bigPosters/img21.jpg",
    "https://www.youtube.com/watch?v=YmoxuBedHak&t=54s",
    "flm21"
);

let film22 = new Film(
    "Матрица",
    1999,
    "Лана Вачовски, Лилли Вачовски",
    "США",
    136,
    "Фантастика",
    "Киану Ривз, Лоренс Фишбёрн, Кэрри-Энн Мосс",
    "Один из фильмов, который стал не просто образцом хорошего кино, но и совершил революцию в подходе к повествованию и визуальным эффектам. Потом вышли еще две части, значительно более слабые, но первый так и остался одним из самых любимых у целого поколения зрителей.",
    "url('../images/smallPosters/img22.jpg')",
    "../images/bigPosters/img22.jpg",
    "https://www.youtube.com/watch?v=YihPA42fdQ8",
    "flm22"
);

let film23 = new Film(
    "Непрощенный",
    1992,
    "Клинт Иствуд",
    "США",
    125,
    "Драмы",
    "Клинт Иствуд, Джин Хэкмен, Морган Фриман",
    "Клинт Иствуд мог уйти на пенсию еще в 60-х. Но если бы он так сделал, он бы оставил нас без многих шедевров, которые он снял в 80-х и 90-х. Главное кино 90-х от Иствуда — «Непрощенный». После съемок в декадах классических вестернов, актер и режиссер сумел собрать воедино движение классики 50-х и мораль всего наследия современного кинематографа. Исповедь человека, который повидал на своем веку слишком многое. Прощение от грешника. Покаяние от того, кто не может простить. Рассказ о любви от человека, который поверил в лучшее только при встрече с женщиной, которая смогла обратить его во что-то большее, чем он представлял собой во время скитания по территории Дикого Запада. Если вы ждете от вестерна следующей фазы по сравнению с самым быстрым стрелком в городе — вам сюда.",
    "url('../images/smallPosters/img23.jpg')",
    "../images/bigPosters/img23.jpg",
    "https://www.youtube.com/watch?v=j7idBxy_C0g",
    "flm23"
);

let film24 = new Film(
    "Семь",
    1995,
    "Дэвид Финчер",
    "США",
    126,
    "Триллеры",
    "Брэд Питт, Морган Фриман, Гвинет Пэлтроу, Кевин Спейси",
    "Один из лучших фильмов в истории кино. Шедевр Дэвида Финчера, который и погружает в напряженную атмсоферу мрачного дождливого триллера, и запутывает, как полагается хорошему детективу. Финал расследования убийств религиозного фанатика-маньяка, который подбирает жертв под перечень семи смертных грехов, не только непредсказуем, но и по-настоящему трогает за живое. Если вы по какой-то причине еще не смотрели этот фильм — это ваша цель номер один на ближайший вечер.",
    "url('../images/smallPosters/img24.jpg')",
    "../images/bigPosters/img24.jpg",
    "https://www.youtube.com/watch?v=Kakw9HUvLXU",
    "flm24"
);

let film25 = new Film(
    "Умница Уилл Хантинг",
    1997,
    "Гас Ван Сент",
    "США",
    126,
    "Драмы",
    "Мэтт Дэймон, Робин Уильямс, Бен Аффлек",
    "Молодые Мэтт Дэймон и Бен Аффлек написали не по годам зрелый сценарий, а Гас Ван Сент поставил по нему один из лучших фильмов 90-х. Юный Уилл — математический гений, который в то же время имеет постоянные проблемы с законом из-за взрывного хулиганского характера. Чтобы талантливый парень не попал в тюрьму, его под свое крыло берет профессор математики, который находит Уиллу психолога, чтобы проходить сеансы, предписанные судьей. Но совладать с крутым нравом парня совсем непросто, ведь он просто одержим саморазрушением… Прекрасная история взросления и переоценки жизненных приоритетов. Робин Уильямс и Стеллан Скарсгард в ролях старших наставников молодежи.",
    "url('../images/smallPosters/img25.jpg')",
    "../images/bigPosters/img25.jpg",
    "https://www.youtube.com/watch?v=kPvph3I3wLU",
    "flm25"
);

let film26 = new Film(
    "Утомленные солнцем",
    1994,
    "Никита Михалков",
    "Россия",
    141,
    "Драмы",
    "Никита Михалков, Олег Меньшиков, Ингеборга Дапкунайте",
    "Гран-при Каннского фестиваля и Оскар за лучший фильм на иностранном языке. История того, как под колесами машины сталинских репрессий оказался бывший герой революции, который был настолько уверен в своей неприкосновенности, что отказался распознать признаки своего скорого падения, несмотря на предупреждение от бывшего возлюбленного своей жены, вернувшегося в свой старый дом после многих непростых лет.",
    "url('../images/smallPosters/img26.jpg')",
    "../images/bigPosters/img26.jpg",
    "https://www.youtube.com/watch?v=iXYgsMcVwSI",
    "flm26"
);

let film27 = new Film(
    "Список Шиндлера",
    1993,
    "Стивен Спилберг",
    "США",
    195,
    "Драмы",
    "Лиам Нисон, Бен Кингсли, Рэйф Файнс, Кэролайн Гудолл, Эмбет Дэвидц",
    "Фильм, который многие рассматривают как лучший в карьере Спилберга. По реальной истории Оскара Шиндлера, который освободил несколько сотен евреев из лагерей во время Второй мировой. Лиам Нисон в главной роли и Рэйф Файнс в образе антагониста со стороны нацистов.",
    "url('../images/smallPosters/img27.jpg')",
    "../images/bigPosters/img27.jpg",
    "https://www.youtube.com/watch?v=4r2Z0U9Y53o",
    "flm27"
);

let film28 = new Film(
    "Спасти рядового Райана",
    1998,
    "Стивен Спилберг",
    "США",
    169,
    "Драмы",
    "Том Хэнкс, Том Сайзмор, Эдвард Бёрнс, Барри Пеппер, Адам Голдберг",
    "Один из лучших фильмов Стивена Спилберга. Фильм о событиях высадки в Нормандии перетекает в историю спасения одного человека. Стоит ли ставить под угрозу жизнь нескольких солдат и офицеров ради спасения единственного? Ответ для каждого зрителя будет своим, но путь к нему режиссер сделал максимально интересным и напряженным.",
    "url('../images/smallPosters/img28.jpg')",
    "../images/bigPosters/img28.png",
    "https://www.youtube.com/watch?v=cqEvTIK6Too",
    "flm28"
);

let film29 = new Film(
    "Свой человек",
    1999,
    "Майкл Манн",
    "США",
    157,
    "Триллеры",
    "Аль Пачино, Рассел Кроу, Кристофер Пламмер, Дайан Венора",
    "Майкл Манн снял драму по реальной истории, в которой сотрудник табачной компании под страхом суда, разрушенной карьеры и потери репутации, донес правду о том, какую на самом деле угрозу представляет продукция табачников и какие уловки используются, чтобы бизнес приносил еще больше денег за счет пагубного пристрастия масс. Прекрасные роли Рассела Кроу и Аль Пачино.",
    "url('../images/smallPosters/img29.jpg')",
    "../images/bigPosters/img29.png",
    "https://www.youtube.com/watch?v=0qB_yeT5ihc",
    "flm29"
);



let films = [film1, film2, film3, film4, film5, film6, film7, film8, film9, film10, film11, film12, film13, film14, film15, film16, film17, film18, film19, film20, film21, film22, film23, film24, film25, film26, film27, film28, film29];
