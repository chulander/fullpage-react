const React = require('react');

const utils = require('../utils');
const { renderUtils } = utils;
const { defaultClass } = renderUtils;

class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'Slide';
  }

  render() {
    var style = Object.assign({overflow: 'hidden', width: '100%', height: window.innerHeight}, this.props.style);
    var attrs = {
      'data-slide': this.props.horizontal ? 'HorizontalSlider' : 'Fullpage'
    };

    return (
      <div className={defaultClass.call(this)} {...attrs} style={style}>
        {this.props.children}
      </div>
    );
  }
}
Slide.propTypes = {
  children: React.PropTypes.node,
  style: React.PropTypes.object,
  horizontal: React.PropTypes.bool
};

module.exports = Slide;
