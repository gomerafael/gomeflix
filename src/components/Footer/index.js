import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://pt.wikipedia.org/wiki/Pandemia_de_COVID-19">
          quarentena
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
