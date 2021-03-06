import * as React from 'react';
import { NavLink } from "react-router-dom";
import createClass from 'create-react-class';
import s from './HomePage.module.css';
import ava from '../../images/ava.jpg';
import banner from '../../images/banner.jpg';


export const HomePage = createClass({
    render: function () {
        return (
            <div className={s.pageWrapper}>
                <header><h1 className={s.entryTitle}>АЛЕКСЕЙ ГРИГОРЬЕВ | АВТОРСКИЙ БЛОГ</h1></header>
                <div>
                    <div className={s.contentArea}>
                        <a title="Блог с рассказами о серхъестественном и приключениях">
                            <img src={banner} alt="" className={s.banner} />
                        </a>
                        <div>
                            <article>

                                <div className={s.entryContent}>
                                    <div className={s.title}><p><h2>Краткая биография о авторе</h2></p></div>
                                    <p><img src={ava} title="Авторский блог" className={s.ava} /></p>
                                    <p><strong style={{ color: '#235713' }}>Дата рождения: </strong> 1982г<br />
                                        <strong style={{ color: '#235713' }}>Сфера деятельности: </strong> Писатель</p>


                                    <p>Доброго времени суток, уважаемые посетители.</p>
                                    <p>На этом сайте вы найдете увлекательные истории и новеллы</p>
                                    <p>Они находятся в разделе <NavLink to="/blog">БЛОГ</NavLink> </p>
                                    <p><strong style={{ font: 'bold' }}>Примечание:</strong> Для того чтобы получить доступ </p>
                                    <p>к данному разделу вам необходимо авторизоваться на сайте под любым именем и паролем.</p>
                                    <p></p>
                                    <p><strong style={{ font: 'bold' }}>Биография:</strong></p>
                                    <p>    Автором всех рассказов являюсь я - Алексей Григорьев. Я написал их в 2009-2013гг. </p>
                                    <p>Вдохновение на написание доброй половины рассказов я черпал из детско-подростковых грёз о телепортации, путешествиях.</p>
                                    <p>На остальную половину меня сподвигли реальные жизненные ситуации. В частности виртуальная любовь, ошибки юности и иные ситуации.  </p>

                                    <p>Приятного досуга и чтения!  </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div >

            </div >
        );
    }
});



