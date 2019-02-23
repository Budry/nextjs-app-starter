/**
 * This file is part of the zaruba-ondrej.cz package.
 *
 * (c) Ondřej Záruba <info@zaruba-ondrej.cz>
 *
 * For the full copyright and license information, please view the license.md
 * file that was distributed with this source code.
 */

const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');

module.exports = withPlugins([
  withTypescript,
  [withSass, {
    cssModules: true
  }],
  [withImages, {
    inlineImageLimit: 1,
  }]
]);