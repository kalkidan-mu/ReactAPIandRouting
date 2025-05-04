import React from 'react'

function Headerlink(props) {
  return (
    
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={props.link}>
          {props.name}
        </a>
      </li>
    
  );
}

export default Headerlink
