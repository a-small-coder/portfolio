import React from 'react';
import Introduce from '../Indroduce/Introduce';
import LongRowSection from '../LongRowSection/LongRowSection';

function MainPage(props) {

    const dataSocial = [
        {id: 1, name: "github", link: "https://github.com/a-small-coder", icon: "github"},
        {id: 3, name: "telegram", link: "https://t.me/DubrovinOlegV", icon: "telegram"},
    ]
    const dataIntro = {
        heading: "Привет, я Дубровин Олег",
        description: "Я разработчик, стреплюсь постоянно развиваться и изучать новое.",
        contacts: [
            {id: 2, title: "Email", data: "Dubrovin.Oleg.v@mail.ru", type:"simple"},
            {id: 3, title: "Социальные сети", data: dataSocial, type:"list"},
        ]
    }

    const dataSkills = {
        type: "grid",
        title: "Навыки",
        description: "Меня вдохновляет работа с людьми, которые увлечены своим делом.",
        sections: [
            {
                id: 1,
                title: "Frontend development",
                content: "HTML, CSS\\SCSS, TypeScript, React.js, Next.js, Redux, mobX, mantineUI, StoryBook, Jest, Webpack" 
            },
            {
                id: 2,
                title: "Backend development",
                content: "TypeScript, Node.js, Express.js, Python, Django, FastApi, PostgreSQL, MongoDB, MySQL, Postman, Pytest" 
            },
            {
                id: 3,
                title: "Data science\\Data analysis",
                content: "SQL, Redash, Python, Pandas, Numpy, PySpark, Tensorflow, Keras, Scikit-learn, Transformers, Open CV, NPL, Computer vision" 
            },
        ]
    }

    const dataEducation = {
        type: "column",
        title: "Образование",
        description: "Всю жизнь я был движим нерушимой верой в важность обучения. Я стараюсь узнавать что-то новое каждый день.",
        sections: [
            {
                id: 1,
                title: "Магистратура \"Веб-разработка\"",
                subtitle: "Мисис",
                date: "Сентябрь 2024 - Август 2026",
                content: "Разработка веб-сервисов и ui/ux дизайн" 
            },
            {
                id: 2,
                title: "Бакалавриат \"Информатика и вычислительная техника\"",
                subtitle: "МТУСИ",
                date: "Сентябрь 2020 - Август 2024",
                content: "Аналитика в больших данных, глубокое обучение, компьютерное зрение и NPL, разработка desktop-приложений" 
            },
            {
                id: 3,
                title: "Курс \"Симулятор SQL\"",
                subtitle: "Karpov.courses",
                date: "2024",
                content: "Курс позволил структурировать знания по sql, освоить новые инструменты и получить опыт построения дашбордов как продуктовый аналитик" 
            },
            {
                id: 4,
                title: "Курс \"Статистика\"",
                subtitle: "stepik (Анатолий Карпов)",
                date: "2023",
                content: "Дисперсионный анализ, статистические критерии, линейная и логистическая регрессия, теория по математической статистике" 
            },
            {
                id: 5,
                title: "Курс \"Hadoop и Big data\"",
                subtitle: "VK",
                date: "2022",
                content: "Современное представление о больших данных, файловая система HDFS, экосистема Hadoop, PySpark" 
            },
            {
                id: 6,
                title: "Курс \"Путь самурая\"",
                subtitle: "IT-kamasutra",
                date: "2022",
                content: "Разработка на Typescript и React" 
            },
            {
                id: 7,
                title: "Курс \" Python\" от университета Биоинформатики",
                subtitle: "stepik",
                date: "2019",
                content: "Python, алгоритмы и структуры данных" 
            },
        ]
    }

    const dataExperience = {
        type: "column",
        title: "Мой опыт",
        description: `
        Имею практические навыки и опыт в Big Data, SQL запросах, построении и обучении нейронных моделей (LLM, LSTM, RNN, temporal convolutional network). 
        Также имею опыт в написании веб-приложений на python и react\\next.js. Применяю Docker и умею настраивать ci\\cd в рабочих проектах. \n
        Мои знания не ограничиваются только технологиями и языками программирования, я умею эффективно работать в команде, знаю особенности работы с внешними заказчиками и понимаю роль разработки и аналитики для бизнеса.
        `,
        sections: [
            {
                id: 1,
                title: "Анализ и разработка модуля предиктивной аналитики для электродвигателя с использованием технологий искусственного интеллекта.",
                subtitle: "Научная разработка. Data science and python dev",
                content: `Этот проект направлен на разработку модели предиктивной аналитики для
                прогнозирования состояния электродвигателя.  Модуль используется в веб-платформе, которая позволяет следить
                за техническим состоянием электродвигателей, а также спрогнозировать даты технического обслуживания`
            },
            {
                id: 2,
                title: "Веб-сервис для разметки данных (аудио)",
                subtitle: "Fullstack and data science",
                content: `Веб-приложение для разметки аудиофайлов, которое
                позволяет пользователям добавлять аннотации к звуковым данным. Этот проект помог
                разметить более 10 000 примеров для системы транскрибации телефонных звонков` 
            },
            {
                id: 5,
                title: "Cистема глубокой видеоаналитики в реальном времени",
                subtitle: "Frontend dev and Data science",
                content: `Система используется для контроля ношения СИЗ на производствах, анализа фактов нарушений, создания отчётов. \n
                Особенности разработанной системы глубокой видеоаналитики были продемонстрированы в рамках пporpaммы на канале "Россия 1" и на форуме "Армия-2022"`
            },
            {
                id: 6,
                title: "Downdetector веб-ресурсов банков России",
                subtitle: "Frontend and data science",
                content: `Сервис анализирует данные из открытых источников, в том числе сообщения в социальных сетях и составляет отчет о доступности веб-ресурсов.\n
                Проект "Downdetector веб-ресурсов банков России" занял 3 место на Уральском форуме 2022 и победил в номинации "лучший питчинг"`
            },
            {
                id: 7,
                title: "Система автоматизации учета и выполнения исправительных дорожных работ в Москве",
                subtitle: "Frontend and data science",
                content: "Система позволяет вести учет бригад рабочих и мест дорожных работ в городе. Модуль на основе компьютерного зрения позволяет автоматизировать процесс проверки качества ремонта." 
            },
            {
                id: 3,
                title: "Анализ настроения текста при помощи RNN LSTM",
                subtitle: "Data science, deep learning",
                content: `В этом проекте используется рекуррентная нейронная сеть (RNN) с LSTM для
                анализа настроений в текстах. Модель обучается на размеченных данных, чтобы
                классифицировать тексты как положительные, отрицательные или нейтральные.` 
            },
            {
                id: 4,
                title: "Классификация изображений из CIFAR-10",
                subtitle: "Data science, deep learning",
                content: `Проект включает классификацию изображений из набора данных CIFAR-10,
                который содержит изображения различных объектов, таких как самолеты и машины. Модель обучается для распознавания и классификации этих объектов. Инструменты: TensorFlow, Keras`
            },

            {
                id: 8,
                title: "Интернет магазин для услуг медицинского центра",
                subtitle: "Fullstack",
                content: "E-commerce приложение, которое позволяет выбирать и заказывать медицинские услуги (обследования и анализы) а также предоставляет информацию о компании" 
            },
            
            {
                id: 9,
                title: "Open source проект краудфандинговой платформы",
                subtitle: "Frontend",
                content: "Выступал в роли frontend разработчика, создал 12 страниц, написал более 5000 строк кода. В данный момент проект закрыт" 
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