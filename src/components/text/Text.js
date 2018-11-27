import React from 'react';
import { Link } from 'gatsby';

export const Introduction = () => (
    <React.Fragment>
        <h1>Hello there!</h1>
        <p>
            My name is <strong>Sean McPherson</strong>, and I am a software
            developer, educator, and learner. I work as a UI/UX Developer with
            React for TSYS in Atlanta, GA.
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
