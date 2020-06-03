import React from 'react';
import {withTranslation} from '../i18n';
import Layout from "../components/layout";

const Index = ({t, i18n}) => (
  <Layout>
    <div>test</div>
  </Layout>
);

Index.getInitialProps = async () => {
  return {
    namespacesRequired: ['common'],
  }
};

export default withTranslation('common')(Index);