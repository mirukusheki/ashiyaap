// i fix target:"_blank" to rel="noopener" because this rule
// https://mathiasbynens.github.io/rel-noopener/

import React from 'react';

const About = () => {
  return (
    <div className="social-media">
      Created by <b>Ryuujo</b> <br/>
      <b>Github:</b> <a href="https://github.com/ryuujo" rel="noopener">Ryuujo</a><br/>
      <small>(You can Donate to me for more development or just enjoying my web page)</small>
      <br/>
      <b>Repositories:</b> <a href="https://github.com/ryuujo/ashiyaap"
                              rel="noopener">https://github.com/ryuujo/ashiyaap</a>
      <br/><br/>
      Found any bug? <a href="https://github.com/ryuujo/ashiyaap/issues" rel="noopener">Let me know</a>
    </div>
  );
};

export default About;
