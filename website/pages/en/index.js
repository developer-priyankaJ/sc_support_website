/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const HomeScreen = require(process.cwd() +'/core/HomeScreen.js');
const BlockButton = require(process.cwd() +'/core/BlockButton.js');
const translate = require('../../server/translate.js').translate;
class Index extends React.Component {
  render() {
    const {config: siteConfig, language = 'en'} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );
/*    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );*/
    const Articles = () => (
      <Container
        padding={['bottom']}
        className="main-articles"
      >
      <div className="promoted-articles">
        <h3><translate>Featured Articles</translate></h3>
        <ul>
		      <li><a href="/hc/en-gb/articles/360002063088-Understand-your-actions-in-ScopeHub"><translate>Understand your</translate><b className="highlight"> <translate>actions</translate></b> <translate>in ScopeHub</translate></a></li>
			  	<li><a href="/hc/en-gb/articles/360017938993-What-is-a-channel-"><b className="highlight"><translate>What is </translate></b> <translate> a channel?</translate></a></li>
			    <li><a href="/hc/en-gb/articles/201457107-Send-and-read-messages"><b className="highlight"><translate>Send </translate></b><translate> and </translate> <b className="highlight"><translate>read</translate></b> <translate> messages</translate></a></li>
			    <li><a href="/hc/en-gb/articles/115000769927-Message-and-file-threads"><translate>Message and file </translate> <b className="highlight"> <translate>threads</translate></b></a></li>
			    <li><a href="/hc/en-gb/articles/226410907-View-all-your-unread-messages"><translate>View all your </translate> <b className="highlight"><translate>unread messages</translate></b></a></li>
			    <li><a href="/hc/en-gb/articles/201864558-Set-your-ScopeHub-status-and-availability"><translate>Set your </translate> <b className="highlight"><translate>ScopeHub status</translate></b> <translate>and availability</translate></a></li>
    </ul>
        </div>
      </Container>
    );

  /*  const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );*/

    const Features = () => (
      <BlockButton content={[
          {
            content: <translate>Welcome to Scopehub! Nice to see you here. Let's get started!</translate>,
            image: `${baseUrl}img/getting_started.svg`,
            title: <translate>Getting Started</translate>,
            id: 'getting-started'
          },
          {
            content: <translate>From channels to search – learn how ScopeHub works from top to bottom.</translate>,
            image: `${baseUrl}img/using_scopehub.svg`,
            title: <translate>Using ScopeHub</translate>,
            id:'using-sh'
          },
          {
            content: <translate>Adjust your profile and preferences to make ScopeHub work just for you.</translate>,
            image: `${baseUrl}img/profile.svg`,
            title: <translate>Your Profile & Preferences</translate>,
            id: 'profile'
          }
        ]}>
      </BlockButton>
    );

  /*  const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2><translate>Who is Using This?</translate></h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };
*/
    return (
      <div>
        <HomeScreen siteConfig={siteConfig} language={language} />
        <div className="home-mainContainer">
          <div className="features"><Features /></div>
          <div className="main-articles"><Articles /></div>
        </div>
      </div>
    );
  }
}
Index.title = "ScopeHub";
module.exports = Index;
