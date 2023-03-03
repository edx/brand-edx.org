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

Default fallback image for `Card.ImageCap` component
--------

.. image:: /paragon/images/card-imagecap-fallback.png
    :alt: card-imagecap-fallback
    :width: 380px

.. code-block:: javascript

  // the png version
  import cardFallbackImg from '@edx/brand/paragon/images/card-imagecap-fallback.png';

-------------
Paragon Theme
-------------

Use the theme in this package as described in the Paragon docs: https://edx.github.io/paragon/

.. code-block:: sass

  @import "@edx/brand/paragon/fonts";
  @import "@edx/brand/paragon/variables";
  @import "@edx/paragon/scss/core/core";
  @import "@edx/brand/paragon/overrides";


-------------------------------------
Theming with Paragon's Design Tokens
-------------------------------------
Starting from `v21` Paragon uses style-dictionary to build CSS variables from design tokens (i.e. JSON files), Paragon
allows to override design tokens values before building CSS variables allowing to apply custom theme.

See `tokens` directory for tokens that edX.org theme overrides. This directory should follow the same folder/JSON structure as is used on whatever version of Paragon is installed in this repository. These JSON files are deep-merged with the default/standard Paragon design tokens.
Note that some tokens have `"modify": null` property specified, this is done to disable default Paragon's behaviour that modifies this specific token in some way, read more about token's modifications during build time here[TODO: add link to Paragon readme].

Developing with design tokens
#############################

#. Install Paragon with

   .. code-block:: bash

     npm install

#. Update values in `tokens` folder
#. Run following command to build updated CSS files

   .. code-block:: bash

     build-design-tokens --source ./tokens/src --build-dir ./paragon/css/

#. View changes on the local version of Paragon's documentation site

   #. Go to Paragon repository, cd to ``www`` project and run

     .. code-block:: bash

       npm install <path_to_this_repository>

   #. Start docs site with ``npm start``


--------------------------------
Publishing with Semantic Release
--------------------------------

This project is published to npm with Semantic Release. When a pull request is merged to master Semantic Release reads the commit messages to determine whether to make a new patch. minor, or major release of this package. For more info see https://github.com/semantic-release/semantic-release#how-does-it-work
