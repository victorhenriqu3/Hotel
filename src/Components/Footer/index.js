import React from 'react';
import { FaLinkedin } from 'react-icons/fa'
import {FooterBase} from './styles'

function Footer() {
  return (
    <FooterBase>
      <a href="linkedin.com/in/victor-henrique-monteiro-lima-264004143">
      
      <strong> <FaLinkedin value={{ className: 'react-icons' }}/> /Victor Henrique</strong>
      </a>
    </FooterBase>
  );
}

export default Footer;