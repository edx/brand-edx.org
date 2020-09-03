@edx/brand
==========

This project contains branding assets and themes for edx.org.

-----
Usage
-----

Install this package:

.. code-block:: bash

  npm install --save @edx/brand@git+https://git@github.com/edx/brand#master

Import assets from this package in a consuming node application:

.. code-block:: javascript

  import logo from '@edx/brand/edx-logo.svg';

--------------
Images & Logos
--------------

edX Logo
--------

.. image:: /edx-logo.svg
    :alt: edX
    :width: 128px

.. code-block:: javascript

  import logo from '@edx/brand/edx-logo.svg';

  // Or the png version
  import logo from '@edx/brand/edx-logo.png';

edX Logo with ®
---------------

.. image:: /edx-logo-registered.svg
    :alt: edX
    :width: 128px

.. code-block:: javascript

  import logo from '@edx/brand/edx-logo-registered.svg';

  // Or the png version
  import logo from '@edx/brand/edx-logo-registered.png';

------------
Contributing
------------

When adding to this project avoid breaking changes through any means possible. This package is not published to npm and consuming applications may refer to this github project directly.

