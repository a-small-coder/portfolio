import React from 'react';
import Introduce from '../Indroduce/Introduce';
import LongRowSection from '../LongRowSection/LongRowSection';

function MainPage(props) {

    const dataSocial = [
        {id: 1, name: "github", link: "https://github.com/a-small-coder", icon: "github"},
        {id: 2, name: "vk", link: "", icon: "vk"},
        {id: 3, name: "telegram", link: "", icon: "telegram"},
    ]
    const dataIntro = {
        heading: "Привет, я Дубровин Олег",
        description: "Я начинающий frontend разработчик. В настоящее время я работаю на полставки младшим веб-разработчиком в научно-исследовательском центре в Московском Техническом Университете Связи и Информатики. Я стремлюсь постоянно совершенствоватьcя и улучшать свои навыки в профессиональной сфере.",
        contacts: [
            {id: 1, title: "Рабочий телефон", data: "+798500000000", type:"simple"},
            {id: 2, title: "Email", data: "Dubrovin.Oleg.v@mail.ru", type:"simple"},
            {id: 3, title: "Социальные сети", data: dataSocial, type:"list"},
        ]
    }

    const dataSkills = {
        type: "grid",
        title: "Навыки",
        description: "Меня вдохновляет создание отличных проектов с людьми, которые так же увлечены созданием чего-то потрясающего.",
        sections: [
            {
                id: 1,
                title: "frontend development",
                content: "HTML, CSS, LESS, SASS, React.js, Redux, materialUi, chakra-ui, chart-js" 
            },
            {
                id: 2,
                title: "web development",
                content: "JavaScript, TypeScript, Node.js, GitHub, GitLab, Python, Django, MongpDB, MySQL, PostgreSQL, Wordpress, Postman" 
            },
            {
                id: 3,
                title: "UI\\UX design",
                content: "Photoshop, Figma, Illustrator, Прототипирование, юзабилити-тестрование" 
            },
            // {
            //     id: 4,
            //     title: "soft skills",
            //     content: "Screaming Frog, Woorank, Raventools, Semrush, Moz, WebCEO, Google Analytics, ChartBeat, CrazyEgg." 
            // },
        ]
    }

    const dataEducation = {
        type: "column",
        title: "Образование",
        description: "Всю жизнь я был движим нерушимой верой в важность обучения. Я стараюсь узнавать что-то новое каждый день.",
        sections: [
            {
                id: 1,
                title: "Неоконченное высшее образование",
                subtitle: "МТУСИ",
                date: "Сентябрь 2020 - текущее время",
                content: "Всю жизнь я был движим нерушимой верой в важность обучения. Я стараюсь узнавать что-то новое каждый день." 
            },
            {
                id: 2,
                title: "\"Курс ВЕБ-разработчик - с нуля до результата!\"",
                subtitle: "beonmax",
                date: "Август, 2020 - Декабрь, 2020",
                content: "Программа обучения включает видео уроки по изучению Веб-разработки с нуля. Благодаря практическим заданиям, Вы сможете закрепить полученные знания и создать собственные сайты на практике." 
            },
            {
                id: 3,
                title: "\"Курс JavaScript - полный курс с нуля до результата\"",
                subtitle: "beonmax",
                date: "Октябрь, 2019 - Март, 2020",
                content: "Основная цель курса - практика изучения JavaScript на реальных примерах для frontend-разработчиков. Каждый теоретический блок заканчивается практикой. Создадите реальные проекты в процессе прохождения курса" 
            },
            {
                id: 4,
                title: "16 тренажеров",
                subtitle: "HTML-academy",
                date: "Апрель, 2018 - Июль, 2019",
                content: "Знакомство с веб-разработкой, Знакомство с HTML и CSS, \
                Знакомство с JavaScript, Погружение в HTML и CSS, Продвинутый HTML и CSS, \
                Программирование на JavaScript, Динамические эффекты, Сборник: Тонкости CSS..." 
            },
            
            

        ]
    }

    const dataExperience = {
        type: "column",
        title: "Мой опыт",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        sections: [
            {
                id: 5,
                title: "Junior frontend",
                subtitle: "МТУСИ",
                date: "Январь, 2022 - текущее время",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
            },
            {
                id: 4,
                title: "Fulstack developer",
                subtitle: "Один невзлетевший стартап",
                date: "Октябрь, 2021 - Январь, 2022",
                content: "Разрабатывался проект инновационной интернет-прощадки для инвесторов и владельцев малого бизнеса. Работал со стеком react + django. " 
            },
            {
                id: 3,
                title: "trainee frontend",
                subtitle: "GrandCore",
                date: "Май, 2021 - Июль, 2021",
                content: "Open source проект. Приходилось преимущественно верстать страницы сайта, интегрировать верстку в react компоненты. Создал 12 страниц, написал более 5000 строчек кода" 
            },
            {
                id: 2,
                title: "Верстка слонов в кружке, поиграться со шрифтами...",
                subtitle: "DubrovinOleg company",
                date: "Апрель, 2019 - Июль, 2020",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
            },
            
        ]
    }

    return (
        <div className='page'>

            <Introduce data={dataIntro}/>

            <LongRowSection data={dataSkills}/>

            <LongRowSection data={dataEducation}/>

            <LongRowSection data={dataExperience}/>
            
        </div>
    );
}

export default MainPage;