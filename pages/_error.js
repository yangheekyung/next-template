import React from 'react';
import Error from 'next/error';
import { withTranslation } from '../i18n';

class CustomError extends Error {
  static  async getInitialProps({res, err}) {
    return {
      namespacesRequired: ['common'],
      statusCode : res?.statusCode || err?.statusCode
    }
  }

  render() {
    const {statusCode, t} = this.props;
    return (
      <h1>
        {
          statusCode
          ? t('error-with-status', { statusCode })
          : t('error-without-status')
        }
      </h1>
    )
  }
}

export default withTranslation('common')(CustomError);