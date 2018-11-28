import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import Layout from '../components/Layout';
import PageHeader from '../components/common/PageHeader';

const ContactPage = ({ data, location }) => {
    const siteTitle = get(data, 'site.siteMetadata.title');
    const siteDescription = get(data, 'site.siteMetadata.description');
    return (
        <Layout location={location} title={siteTitle}>
            <Helmet
                htmlAttributes={{ lang: 'en' }}
                meta={[{ name: 'description', content: siteDescription }]}
                title={`Contact - ${siteTitle}`}
            />
            <PageHeader>
                <h1>Contact</h1>
            </PageHeader>
            <p>
                Do you have an excited job opportunity for me?{' '}
                <a
                    href="https://areyoulookingforwork.seanmcp.com"
                    target="_blank"
                >
                    Check my availability
                </a>
                .
            </p>
            <p>
                For all other inquiries, you can find my contact details on{' '}
                <a href="https://linkedin.com/in/seanmcp" target="_blank">
                    LinkedIn
                </a>
                .
            </p>
        </Layout>
    );
};

export default ContactPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;
