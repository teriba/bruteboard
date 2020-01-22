import { LitElement, css, html, property, customElement } from 'lit-element';
import '../components/brute-card.ts'

@customElement('brute-board')
export class BruteBoard extends LitElement {
  // @property() name = 'World';

  static get styles() {
    return css`
      div { 
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: auto auto auto auto;
        grid-column-gap: 20px;
        grid-row-gap: 20px;

        color: red;
        width: 100vw;
        height: 100vh;
        background-color: lightgrey; 
      }

      brute-card.row-todo{
        grid-column: 1;

      }
  `;
  }

  render() {
    return html`<div class='board'>
      <slot></slot>
      <brute-card class="row-todo"></brute-card>
      <brute-card class="row-todo"></brute-card>
    </div>`;
  }
}

