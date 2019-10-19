const React = require('react');

class BlockButton extends React.Component {
    returnRows(){
      let elem='', rows = [];
      for(let i=0; i<this.props.content.length; i++){
        elem = <div key={i*3} id={this.props.content[i].id} className="blockElement alignCenter imageAlignTop threeByGridBlock">
                  <a href={"/en/categories?id="+this.props.content[i].id} className="blockLink" title={this.props.content[i].title}>
                  <div className="blockImage">
                    <img width="150" height="100" src={this.props.content[i].image}/>
                  </div>
                  <div className="blockContent">
                    <h2><div><span><p>{this.props.content[i].title}</p></span></div></h2>
                    <div><span><p>{this.props.content[i].content}</p></span></div>
                  </div>
                  </a>
               </div>
        rows.push(elem);
      }
      return rows;
    }
    render() {
        return (
          <div className="container paddingBottom">
            <div className="wrapper">
              <div className="gridBlock">
                {this.returnRows()}
              </div>
            </div>
          </div>
        );
    }
};
module.exports = BlockButton;
