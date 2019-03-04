// i fix target:"_blank" to rel="noopener" because this rule
// https://mathiasbynens.github.io/rel-noopener/

import React from 'react';

const About = () => {
  return (
    <div className="social-media">
      Created by <b>MirukuSheki</b> <br/>
      <b>Github:</b> <a href="https://github.com/mirukusheki" rel="noopener">mirukusheki</a><br/>
      <b>Paypal: </b><a href="https://paypal.me/RJKuker?locale.x=id_ID" rel="noopener">paypal.me/RJKuker</a><br/>
      <small>(You can Donate to me for more development or just enjoying my web page)</small><br/>
      <b>Repositories:</b> <a href="https://github.com/mirukusheki/ashiyaap"
                              rel="noopener">https://github.com/mirukusheki/ashiyaap</a>
      <br/><br/>
      Found any bug? <a href="https://github.com/mirukusheki/ashiyaap/issues" rel="noopener">Let me know</a>
    </div>
  );
};

export default About;
