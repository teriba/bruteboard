import { LitElement, css, html, property, customElement } from 'lit-element';

@customElement('brute-card')
export class BruteCard extends LitElement {
  @property( {type: Number} ) col = 1;
  @property( {type: Number}) row = 1;

  static get styles() {
    return css`
      div { 
        background-color: gray;
      }
  `;
  }

  render() {
    return html`<div class='card'>
      Just do it
    </div>`;
  }
}

