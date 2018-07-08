'use strict';

const cheerio = require('cheerio');
const hexoUtil = require('hexo-util');
const expect = require('chai').expect;

describe('Hexo Tag Link Preview', function() {
  const linkPreview = require('./../linkPreview.js');

  describe('linkPreview.getTag', function() {
    it('should return object', async () => {
        const options = {
          descriptionLength: 140,
          className: 'link-preview'
        }
        const linkPreviewTag = await linkPreview.getTag({url: 'https://www.google.com/'}, options);
        // output html tag
        const html = cheerio.load(linkPreviewTag).html();
        expect(html).includes('<a href="https://www.google.com/" class="link-preview">');
      }
    )
  })
})