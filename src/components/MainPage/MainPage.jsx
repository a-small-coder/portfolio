import { VStack } from '@chakra-ui/react';
import React from 'react';
import Header from '../Header/Header';
import Introduce from '../Indroduce/Introduce';
import Button from '../lib/Button/Button';
import NavItem from '../lib/NavItem/NavItem';
import SimpleDescription from '../lib/SimpleDescription/SimpleDescription';
import TextBlock from '../lib/TextBlock/TextBlock';
import LongRowSection from '../LongRowSection/LongRowSection';
import Skills from '../Skills/Skills';

function MainPage(props) {

    const dataSocial = [
        {id: 1, name: "github", link: "", icon: ""},
        {id: 2, name: "vk", link: "", icon: ""},
        {id: 3, name: "telegram", link: "", icon: ""},
        {id: 4, name: "instagram", link: "", icon: ""},
        {id: 5, name: "linkedin", link: "", icon: ""}
    ]
    const dataIntro = {
        heading: "Привет, я Дубровин Олег",
        description: "Я начинающий frontend разработчик. В настоящее время я работаю на полставки младшим веб-разработчиком в научно-исследовательском центре в Московском Техническом Университете Связи и Информатики. Я стремлюсь постоянно совершенствоватьcя и улучшать свои навыки в профессиональной сфере.",
        contacts: [
            {id: 1, title: "Рабочий телефон", data: "+79864553042", type:"simple"},
            {id: 2, title: "Email", data: "Dubrovin.Oleg.v@mail.ru", type:"simple"},
            {id: 3, title: "Социальные сети", data: dataSocial, type:"list"},
        ]
    }

    const dataSkills = {
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
            {
                id: 4,
                title: "soft skills",
                content: "Screaming Frog, Woorank, Raventools, Semrush, Moz, WebCEO, Google Analytics, ChartBeat, CrazyEgg." 
            },
        ]
    }

    const dataEducation = {
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
                title: "Курс верстки HTML5 + CSS3",
                subtitle: "HTML-academy",
                date: "Апрель, 2018 - Июль, 2018",
                content: "Всю жизнь я был движим нерушимой верой в важность обучения. Я стараюсь узнавать что-то новое каждый день." 
            },
            {
                id: 3,
                title: "Еще один курс",
                subtitle: "шарага 2.0",
                date: "Октябрь, 2019 - Февраль, 2020",
                content: "Всю жизнь я был движим нерушимой верой в важность обучения. Я стараюсь узнавать что-то новое каждый день." 
            },
            {
                id: 4,
                title: "Точно еще что-то было",
                subtitle: "Филькина грамота",
                date: "Февраль, 2020 - Май, 2020",
                content: "Всю жизнь я был движим нерушимой верой в важность обучения. Я стараюсь узнавать что-то новое каждый день." 
            },

        ]
    }

    const dataExperience = {
        title: "Мой опыт",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        sections: [
            {
                id: 1,
                title: "Работа просто так",
                subtitle: "дома",
                date: "Апрель, 2018 - Январь, 2019",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
            },
            {
                id: 2,
                title: "Верстка слонов в кружке, поиграться со шрифтами...",
                subtitle: "DubrovinOleg company",
                date: "Апрель, 2019 - Июль, 2020",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
            },
            {
                id: 3,
                title: "trainee frontend",
                subtitle: "GrandCore",
                date: "Май, 2021 - Июль, 2021",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
            },
            {
                id: 4,
                title: "Fulstack developer",
                subtitle: "Один невзлетевший стартап",
                date: "Октябрь, 2021 - Январь, 2022",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
            },
            {
                id: 5,
                title: "Junior frontend",
                subtitle: "МТУСИ",
                date: "Январь, 2022 - текущее время",
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
            },

        ]
    }

    return (
        <div className='page'>

            <Introduce data={dataIntro}/>

            <Skills data={dataSkills}/>

            <LongRowSection data={dataEducation}/>

            <LongRowSection data={dataExperience}/>
            
        </div>
    );
}

export default MainPage;