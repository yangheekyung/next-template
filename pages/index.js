import React from 'react';
import {withTranslation} from '../i18n';

const Index = ({t, i18n}) => (
  <div></div>
);

Index.getInitialProps = async () => {
  return {
    namespacesRequired: ['common'],
  }
};

export default withTranslation('common')(Index);