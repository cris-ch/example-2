/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });

  // addParagraph
  // create a new p element and store it in a variable.
  describe('addParagraph', () => {
    it('creates a p element and stores', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');
      
      const view = new View();
      view.addParagraph();
      expect(document.querySelectorAll('p').length).toBe(3);
    })
  })
});