import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.scss';

const TemplateWrapper = ({ children }) => (
  <div className="container">
    <Helmet title="HorchataJS" />
    <Navbar />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;