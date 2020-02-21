import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer id="footer" style={{textAlign: 'center'}}>
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li>
              <a href={url} class={`icon ${icon}`}>
                <span class="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; FIRE Resorts</li>
        <li>
          Built by <a href="http://instagram.com/itsobinna">Obinna</a>
        </li>
      </ul>
    </footer>
  );
}
