// hubble.gl
// SPDX-License-Identifier: MIT
// Copyright (c) vis.gl contributors

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Base, {BaseIconProps} from './base';

export default class DownloadVideo extends Component<BaseIconProps> {
  static propTypes = {
    /** Set the height of the icon, ex. '16px' */
    height: PropTypes.string
  };

  static defaultProps = {
    height: '16px',
    predefinedClassName: 'data-ex-icons-download-video',
    viewBox: '0 0 24 24'
  };

  render() {
    return (
      <Base {...this.props}>
        <path d="M16 4c.552 0 1 .448 1 1v4.2l5.213-3.65c.226-.158.538-.103.697.124.058.084.09.184.09.286v12.08c0 .276-.224.5-.5.5-.103 0-.203-.032-.287-.09L17 14.8V19c0 .552-.448 1-1 1H2c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1h14zm-6 4H8v4H5l4 4 4-4h-3V8z" />
      </Base>
    );
  }
}
