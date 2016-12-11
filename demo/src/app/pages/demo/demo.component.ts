import { Component, ViewEncapsulation } from '@angular/core';

let hljs: any = require('highlight.js');

@Component({
  selector: 'demo',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./demo.scss'), require('highlight.js/styles/dracula.css')],
  template: require('./demo.html')
})
export class DemoComponent {

  sidebarScrolled = false;
  sidebarOffset = 0;

  snippets = {
    template: require('raw-loader!./snippets/template.md'),
    sourceRequire: require('raw-loader!./snippets/source-require.md'),
    sourceTemplate: require('raw-loader!./snippets/source-template.md'),
  };

  constructor() {
  }

  ngAfterViewInit(): void {
    hljs.initHighlighting();
    hljs.initHighlighting.called = false;
  }
}
