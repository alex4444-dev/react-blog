import * as React from 'react';
import createClass from 'create-react-class';
import ava from '../../images/ava.jpg';
import slide from '../../images/slide.jpg';
import background from '../../images/background.png';
import s from './MainPage.module.css';

const MainPage = createClass({
    render: function () {
        return (
            <div>
                <title><h1>Блог Ефима Заславского | Дирижер-хормейстер, певец-солист Крымгосфилармонии, вокальный педагог</h1></title>

                <div id="page" className="hfeed site">
                    <header id="masthead" className="site-header" role="banner">
                        <div className="site-branding">
                            <h1 className="site-title"><a title="Блог Ефима Заславского" rel="home">Блог Ефима Заславского</a></h1>
                            <h2 className="site-description">Дирижер-хормейстер, певец-солист Крымгосфилармонии, вокальный педагог</h2>
                        </div>
                        <div img src={background} className={s.logo} alt=''></div>

                        <div className={s.about}>
                            <em><span style={{ color: '#993300' }}><strong>Ефим Борисович Заславский</strong></span></em><br />
                            <em>Заслуженный работник культуры и искусств Украины,</em><br />
                            <em>Заслуженный артист Автономной Республики Крым,</em><br />
                            <em>лауреат премии АР Крым</em>
                        </div>
                    </header>
                </div>

                <div id="main" className="site-branding">
                    <div className="header-image">
                        <a href="http://efimzaslavskiy.ru/" title="Блог Ефима Заславского" rel="home">
                            <img src={slide} alt="" className={s.slide} />
                        </a>
                    </div>
                    <div id="primary" className="content-area">
                        <div id="content" className="site-content" role="main">
                            <article id="post-7" className="post-7 page type-page status-publish hentry">
                                <header className="entry-header">
                                    <h1 className={s.entryTitle}>Биография Ефима Борисовича Заславского</h1>	</header>{/* .entry-header */}
                                <div className={s.entryContent}>
                                    <p><img src={ava} title="Ефим Борисович Заславский" className={s.ava} /></p>
                                    <p><strong style={{ color: '#235713' }}>Дата рождения: </strong> 1938<br />
                                        <strong style={{ color: '#235713' }}>Сфера деятельности: </strong> Искусство</p>
                                    <p>Родился 1 ноября 1938 г.в Крыму.</p>
                                    <p>С 1954 г.живет в Феодосии и с 16 лет поет в родном городе.<br />
                                        С 1959 г.по 1964 гг.учеба в Симфеорополе.В 1971 г.окончил Харьковский Государственный институт Культуры.</p>
                                    <p>Дирижер и певец — эти два начала он совмещает на протяжении всей своей творческой деятельности.70-80 годы созданы хоры «Коктебель», хор мальчиков, матросский хор Керченско-Феодосийской военно-морской базы.В 1990 г.создан камерный хор «Кантабиле», который известен в Крыму и за его пределами.</p>
                                    <p>Руководил музыкальным хоровым обществом Феодосии в 1970 г.В 1990 г.был избран Председателем Фонда Культуры, является членом Национального всеукраинского музыкального союза Украины.Параллельно ведет интенсивную концертную деятельность, участвует во многих престижных конкурсах в фестивалях, за эти годы создано более 10-ти сольных программ вокальной музыки: «Деревянная Русь» — вокальный цикл Г.Свиридова, П.И.Чайковский «Романсы, оперная классика», «Я помню чудное мгновенье», «Песни опаленные войной» и др.</p>
                                    <p>1990-2000 г.концертная деятельность удачно совмещается с вокально-педагогической работой в ДМШ №2, где впервые в Крыму по его инициативе открыт класс вокала в 1992 году.</p>
                                    <p>Являясь солистом Крымгосфилармонии создает музыкально-художественый лекторий(1992 г) для учащихся и студентов города, на базе картинной галереи, которым руководит уже более 20 лет.</p>
                                    <p><strong style={{ color: '#235713' }}>Награды: </strong> Заслуженный работник культуры Украины, Заслуженный артист АРК, лауреат премии искусств АРК.</p>
                                </div>{/* .entry-content */}
                            </article>{/* #post-## */}
                            <div id="comments" className="comments-area">
                            </div>{/* #comments .comments-area */}
                        </div>{/* #content .site-content */}
                    </div>{/* #primary .content-area */}

                    <div>
                        <input type="hidden" name="gW4b1vlxspnh" id="gW4b1vlxspnh" />
                    </div>{/* #main .site-main */}

                </div > {/* #page .hfeed .site */}
                {/* ngg_resource_manager_marker */}
                {/* Lightbox Plus Colorbox v2.7.2/1.5.9 - 2013.01.24 - Message: 0*/}
            </div >
        );
    }
});

export default MainPage;

