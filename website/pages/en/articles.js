/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const PropTypes = require('prop-types');
//const Doc2 = require('../../docs/doc2.md');
const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const MarkdownBlock = CompLibrary.MarkdownBlock;
const translate = require('../../server/translate.js').translate;
var fs = require('fs');

class Articles extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    const {baseUrl} = siteConfig;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }
    return (
      <div className="categoriesContainer">
        <div className="homeContainer banner">
          <div className="banner_container">
            <h1 className="banner_title"></h1>
            <p className="banner_desc"></p>
          </div>
          <div className="section_menu" id="global_menu">
          	<ul>
          		<li id="getting-started" className="category-tabs">
                 <a href="/categories?id=getting-started" className="menuItem" ><translate>Getting started</translate></a>
                 <ul >
                   <li><a href="#intro-to-scopehub"><translate>Intro to ScopeHub</translate></a></li>
                   <li><a href="#explore-plans-features"><translate>Explore plans &amp; features</translate></a></li>
                   <li><a href="#create-a-new-workspace"><translate>Create a new workspace</translate></a></li>
                   <li><a href="#join-an-existing-workspace"><translate>Join an existing workspace</translate></a></li>
                   <li><a href="#understand-roles-permissions"><translate>Understand roles &amp; permissions</translate></a></li>
                   <li><a href="#download-the-scopehub-app"><translate>Download the ScopeHub app</translate></a></li>
                 </ul>
              </li>
          		<li id="using-sh" className="category-tabs">
                <a href={"/categories?id=using-sh"}><translate>Using ScopeHub</translate></a>
                <ul>
                  <li><a href="/hc/en-gb/categories/200111606#360000110143"><translate>Work in channels</translate></a></li>
                  <li><a href="/hc/en-gb/categories/200111606#360000111086"><translate>Send messages</translate></a></li>
                  <li><a href="/hc/en-gb/categories/200111606#360000111106"><translate>Make calls &amp; share your screen</translate></a></li>
                  <li><a href="/hc/en-gb/categories/200111606#360000110183"><translate>Share files &amp; conversations</translate></a></li>
                  <li><a href="/hc/en-gb/categories/200111606#360000110163"><translate>Search in ScopeHub</translate></a></li>
                  <li><a href="/hc/en-gb/categories/200111606#360000779752"><translate>Shortcuts &amp; commands</translate></a></li>
                </ul>
              </li>
          		<li id="profile" className="category-tabs">
                <a href={"/categories?id=profile"} className="menuItem" ><translate>Your profile</translate></a>
                <ul>
                  <li><a href="/hc/en-gb/categories/360000047906#360000111146" ><translate>Access your account</translate></a></li>
                  <li><a href="/hc/en-gb/categories/360000047906#360000110223"><translate>Manage your profile</translate></a></li>
                  <li><a href="/hc/en-gb/categories/360000047906#360000111166" ><translate>Set your preferences</translate></a></li>
                  <li><a href="/hc/en-gb/categories/360000047906#360000110243" ><translate>Adjust your notifications</translate></a></li>
                </ul>
              </li>
          	</ul>
	        </div>
        </div>
        <div className="articles">
           <div className="breadcrum">
              <span className="help-center"><a href="/en" title="ScopeHub Help Center">ScopeHub Help Center</a> > </span>
              <span className="category"></span>
              <span className="subcategory"></span>
           </div>
           <div className="article-content"></div>
           <div className="onPageNav"></div>
        </div>
      </div>

    );
  }
}
Articles.title = "ScopeHub";
module.exports = Articles;
