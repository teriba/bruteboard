import { LitElement, css, html, property, customElement } from 'lit-element';

@customElement('brute-card')
export class BruteCard extends LitElement {
  @property( {type: String} ) title = "";
  @property( {type: String} ) assignee = "";
  @property( {type: String} ) author = "";
  @property( {type: String} ) key = "";

  
  static get styles() {
    return css`
      :host { 
        flex: 0 1 auto;
        position: relative;
        margin-top: 20px;
        margin-bottom: 20px;

        padding: 5px;
        padding-left: 20px;
        position: relative;
        border: 1px solid black;
        min-height: 150px;
        width: 80%;
        max-width: 200px;
        background-color: white;
      }
      h3 {
        font-size: 0.8em;
        color: black;
        font-weight: 100;
      }
      img {
        border-radius: 50%
      }
      footer {
        position:absolute;
        bottom: 0px;
        width: 100%;
        height: 64px;
        left: 0px;
      }
      footer > img{
        position: absolute;
        right: 16px;
        bottom: 16px;
        height: 56px;
      }
     `;


    
  }

  render() {
    return html`
      <h3>${this.title}</h3>
      <footer>
        <a href="">${this.key}</a>
        <img src="${this.assignee}">
      </footer>
      `;
  }
}

