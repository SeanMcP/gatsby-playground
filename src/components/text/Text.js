import React from 'react';
import { Link } from 'gatsby';

export const About = () => (
    <React.Fragment>
        <p>I was born and raised in State College, Pennsylvania.</p>
        <p>I studied Middle-level Education at Edinboro University.</p>
        <p>I moved to Atlanta to work for Gwinnett County Public Schools.</p>
        <p>
            I graduated from The Iron Yard with a certificate in Front-end
            Development.
        </p>
    </React.Fragment>
);

export const Introduction = () => (
    <React.Fragment>
        <p>
            My name is <strong>Sean McPherson</strong>, and I am a software
            developer, educator, and learner. I work as a UI/UX Developer with
            React for <a href="https://www.tsys.com/about-us/" targe="_blank">TSYS</a> in Atlanta, GA. I also organize{' '}
            <a href="https://meetup.com/jrdevatl" target="_blank">
                Jr Devs
            </a>
            , a community for junior developers.
        </p>
        <p>
            I am interested in developing web applications to solve problems
            that <strong>make the world a better place</strong>. I'm
            particularly intersted in the fields of <strong>education</strong>,{' '}
            <strong>clean water</strong>, <strong>renewable energy</strong>, and{' '}
            <strong>economic empowerment</strong>.
        </p>
        <p>
            If you have a project in any other those categories,{' '}
            <Link to={'contact'}>I'd love to hear about it</Link>.
        </p>
        <p>
            Outside of work, I enjoy spending time with my family (wife, son,
            and dog), playing soccer and board games, and living out my faith.
        </p>
    </React.Fragment>
);
