==================
@edx/brand-edx.org
==================

This project contains branding assets and themes for edx.org. It is the edX implementation of the branding interface defined in `@edx/brand-openedx <https://git@github.com/edx/brand-openedx>`_.

-----
Usage
-----

Install this package one of two ways

Unversioned with Github:

.. code-block:: bash

  npm install --save @edx/brand@git+https://git@github.com/edx/brand-edx.org#master


Versioned with npm:

.. code-block:: bash

  npm install --save @edx/brand@npm:@edx/brand-edx.org


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


-------------
Paragon Theme
-------------

Use the theme in this package as described in the Paragon docs: https://edx.github.io/paragon/

.. code-block:: sass

  @import "@edx/brand/paragon/fonts";
  @import "@edx/brand/paragon/variables";
  @import "@edx/paragon/scss/core/core";
  @import "@edx/brand/paragon/overrides";
