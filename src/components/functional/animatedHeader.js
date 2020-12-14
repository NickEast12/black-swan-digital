import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
// import WAVES from 'vanta/dist/vanta.waves.min.js';
import WAVES from '../../utils/vanta.waves.min.js';

const AnimateHeaderBackgroundStyles = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  canvas {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -2;
    width: 100%;
  }
`;
class AnimateHeaderBackground extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      THREE,
      color: 0x0b0c10,
      speed: 1,
    });
  }

  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }

  render() {
    return <AnimateHeaderBackgroundStyles ref={this.vantaRef} />;
  }
}

export default AnimateHeaderBackground;