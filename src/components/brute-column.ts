import { LitElement, css, html, property, customElement } from 'lit-element';

@customElement('brute-column')
export class BruteCard extends LitElement {
  @property( {type: String} ) title = "";


  static get styles() {
    return css`
      :host { 
        position: relative;
        
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;

        margin-right: 5px;
        
        flex: 1 0 auto;
        
        background-color:white;
        /* border-left: 1px solid grey; */
        
        max-width: 250px;
      }
      
      h2{
        font-size: 1.1em;
        height: 30px;
        text-align: center;
      }
   
  `;
  }

  render() {
    return html`
    <h2>${this.title}</h2>
    <slot></slot>
    `;
  }
}

