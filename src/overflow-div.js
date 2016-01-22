'use strict';

import React from 'react';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';

export default class OverflowDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false
    };
  }

  componentDidMount() {
    let element = this._textDiv
    if (element.scrollWidth > element.clientWidth){
      this.setState({showTooltip: true})
    }  
  }

  contentWithoutTooltip(){
    return (
      <div className={this.props.divClassName} ref={(d) => this._textDiv = d}>
        {this.props.divContent}
      </div>
    );
  }

  contentWithTooptip(){
    const tooltip = (
      <Tooltip className={this.props.tooltipClassName} id={this.props.tooltipId}>{this.props.divContent}</Tooltip>
    );

    return (
      <OverlayTrigger placement="top" overlay={tooltip}>
        {this.contentWithoutTooltip()}
      </OverlayTrigger>)
  }

  render() {
    return this.state.showTooltip ? this.contentWithTooptip() : this.contentWithoutTooltip()  
  }
}
