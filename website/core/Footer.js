/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
              />
            )}
          </a>
          <div>
            <h5>PRODUCT</h5>
            <a href={this.docUrl('doc1.html', this.props.language)}>
              Why ScopeHub
            </a>
            <a href={this.docUrl('doc2.html', this.props.language)}>
              Enterprise
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              Security
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              Pricing
            </a>
          </div>
          <div>
            <h5>SCOPEHUB BY INDUSTRY</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              overview
            </a>
            <a
              href="http://stackoverflow.com/questions/tagged/"
              target="_blank"
              rel="noreferrer noopener">
              Retail Distribution
            </a>
            <a href="https://discordapp.com/">Discrete Manufacturing</a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
            <a href="https://discordapp.com/">Process Industries</a>
          </div>
          <div>
            <h5>RESOURCES</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              Help Center
            </a>
            <a
              href="http://stackoverflow.com/questions/tagged/"
              target="_blank"
              rel="noreferrer noopener">
              Blog
            </a>
            <a href="https://discordapp.com/">News</a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener">
              API
            </a>
          </div>
          <div>
            <h5>Company</h5>
            <a href={`${this.props.config.baseUrl}blog`}>About Us</a>
            <a href="https://github.com/">Leadership</a>
            <a href="https://github.com/">
              Blog
            </a>
            <a href="https://github.com/">
              News
            </a>
            <a href="https://github.com/">
              Media Kit
            </a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
