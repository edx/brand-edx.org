==================
@edx/brand-edx.org
==================

This project contains branding assets and themes for edx.org. It is the edX implementation of the branding interface defined in `@edx/brand-openedx <https://git@github.com/edx/brand-openedx>`_. Note that we aim to avoid introducing any breaking changes.

-----
Usage
-----

Install this package one of two ways.


Versioned with npm. Including this project this way will allow you to control the version you pull into your application. This is safer, but it also means you will need to manually update it or use some automation to update it for you.

.. code-block:: bash

  npm install --save @edx/brand@npm:@edx/brand-edx.org

Unversioned with Github. Including this project this way will pull in the latest version of it whenever a project's requirements are installed. This alleviates the need to manually pull in updates. The draw back is that if a breaking change is inadvertently introduced it is likely to gum up your pipeline or create a visual bug.

.. code-block:: bash

  npm install --save @edx/brand@git+https://git@github.com/edx/brand-edx.org#master

Import assets from this package in a consuming node application:

.. code-block:: javascript

  import logo from '@edx/brand/logo.svg';

--------------
Images & Logos
--------------

edX Logo
--------

.. image:: /logo.svg
    :alt: edX
    :width: 128px

.. code-block:: javascript

  import logo from '@edx/brand/logo.svg';

  // Or the png version
  import logo from '@edx/brand/logo.png';

edX Logo with ®
---------------

.. image:: /logo-trademark.svg
    :alt: edX
    :width: 128px

.. code-block:: javascript

  import logo from '@edx/brand/logo-trademark.svg';

  // Or the png version
  import logo from '@edx/brand/logo-trademark.png';

edX Logo in white
-----------------

.. image:: /logo-white.svg
    :alt: edX
    :width: 128px

.. code-block:: javascript

  import logo from '@edx/brand/logo-white.svg';

  // Or the png version
  import logo from '@edx/brand/logo-white.png';

edX Favicon
-----------------

.. image:: /favicon.ico
    :alt: edX
    :width: 128px

.. code-block:: javascript

  // @edx/brand/favicon.ico;

-------------
Paragon Theme
-------------

Use the theme in this package as described in the Paragon docs: https://edx.github.io/paragon/

.. code-block:: sass

  @import "@edx/brand/paragon/fonts";
  @import "@edx/brand/paragon/variables";
  @import "@edx/paragon/scss/core/core";
  @import "@edx/brand/paragon/overrides";


--------------------------------
Publishing with Semantic Release
--------------------------------

This project is published to npm with Semantic Release. When a pull request is merged to master Semantic Release reads the commit messages to determine whether to make a new patch. minor, or major release of this package. For more info see https://github.com/semantic-release/semantic-release#how-does-it-work

--------------------------------------
Customizing the theme with Paragon design tokens
--------------------------------------

* The `v21.0.0-alpha.x` release of Paragon is installed. This allows us to configure the `build-tokens.js` file to source the default/core Paragon design token JSON files from the published NPM package as the base tokens to use.
  * We may want to consider the pros/cons of shipping the design tokens JSON files as a separate NPM package?
* NOTE: Requires you to copy the `tokens/source` folder from `@edx/paragon` into `node_modules/@edx/paragon/tokens`.
  * If we adopt this approach, we will need to include the source tokens in the NPM package.
* This theming approach allows theme authors to essentially do a "deep merge" with the default/core Paragon design token JSON files, by combining the sources from the installed Paragon NPM package and the JSON design token files specific to the theme this code repository represents.
  * NOTE: If the default/core Paragon design token uses the `modify` clause but the theme author doesn't want the default `modify` behavior, it may be overridden only with a `null` to disable the default behavior.


Changes:
1. Adds an `example` app to preview any theme customizations/extensions in a sample MFE.
1. Adds `tokens` directory to `paragon`. This should follow the same folder/JSON structure as is used on whatever version of Paragon is installed in this repository. These JSON files are deep-merged with the default/standard Paragon design tokens to allow for theme customizations. We may want to explore defining types for the JSON schema as a way of self-documenting the theme API (aka the JSON file structure).
1. Defines design tokens for `Button` component's primary variant base and hover states (note: these should likely be in the default/core Paragond design tokens as well)
1. Brings in `style-dictionary` and the `build-tokens` script, allowing the approach of merging overrides to the core Paragon design tokens, while being able to utilize `style-dictionary` at this custom theme layer.
1. To run the example app with hot reloading of the design tokens compilation, run: `npx nodemon build-tokens` from within the `paragon` directory in one terminal and `npm start` from within the `example` directory in another terminal.
