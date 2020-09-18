@edx/brand-edx.org
==================

This project contains branding assets and themes for edx.org. It is the edX implementation of the branding interface defined in `@edx/brand-openedx <https://git@github.com/edx/brand-openedx>`_.

-----
Usage
-----

Install this package:

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

.. image:: /logo-registered.svg
    :alt: edX
    :width: 128px

.. code-block:: javascript

  import logo from '@edx/brand/logo-registered.svg';

  // Or the png version
  import logo from '@edx/brand/logo-registered.png';
