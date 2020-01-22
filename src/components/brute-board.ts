import { LitElement, css, html, property, customElement } from 'lit-element';
import '../components/brute-card.ts'
import '../components/brute-column.ts'

@customElement('brute-board')
export class BruteBoard extends LitElement {
  @property({type: String}) title: string = 'New Board';

  static get styles() {
    return css`
      :host{
        font-family:  'Exo', sans-serif;
      }
      h1 {
        margin-left: 20px;
      }
      div { 
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content:flex-start;
        align-items: stretch;

        font-family:  'Exo', sans-serif;
        color: black;
        background-color: white; 
        border-top: 1px solid grey;

        height: 80vh;
        padding: 4px;
      } 
  `;
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      <div>
        <slot></slot>
      </div>
    `;
  }
}

