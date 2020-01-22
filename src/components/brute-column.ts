import { LitElement, css, html, property, customElement } from 'lit-element';

@customElement('brute-column')
export class BruteCard extends LitElement {
  @property( {type: String} ) name: string = "";


  static get styles() {
    return css`
      div { 
        background-color: gray;
      }
  `;
  }

  render() {
    return html`<div class='card'>HEj</div>`;
  }
}

