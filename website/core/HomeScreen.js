const React = require('react');

class HomeScreen extends React.Component {
    render() {
        const {siteConfig, language = ''} = this.props;
        const {baseUrl, docsUrl} = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        const langPart = `${language ? `${language}/` : ''}`;
        const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

        const ProjectTitle = () => (
          <div className="search-container">
            <h2 className="projectTitle">
              {siteConfig.homeConfig.title}
            </h2>
            <form className="search" acceptCharset="UTF-8" method="get" >
              <div><input id="query" name="query" title={siteConfig.homeConfig.searchTitle} placeholder={siteConfig.homeConfig.searchTitle}  type="search" className="ui-autocomplete-input" autoComplete="off"/></div>
            </form>
            <div className="search-topics">
                <div className="search-heading"><strong>Popular help topics: &nbsp;</strong></div>
                <div className="search-items">
                  <div><u><a href="/hc/en-gb/articles/202288908">message formatting</a></u>,</div>
                  <div ><u><a href="/hc/en-gb/articles/201909068">change password</a></u>,</div>
                  <div ><u><a href="/hc/en-gb/articles/201355156">notifications</a></u></div>
                </div>
            </div>
          </div>
        );
      /*  const Button = props => (
          <div className="pluginWrapper buttonWrapper">
            <a className="button" href={props.href} target={props.target}>
              {props.children}
            </a>
          </div>
        );*/
        return (
          <div className="homeContainer">
            <div className="homeSplashFade">
              <div className="wrapper homeWrapper">
                <div className="inner">
                  <ProjectTitle />
                </div>
              </div>
            </div>
          </div>
        );
    }
};
module.exports = HomeScreen;
