SS64 - Severák's shorthand extenesion
=====================================

Simple extension for Chrome. It gives you shortcut from your omnibox to [ss64.com](http://ss64.com/) website and other reference manuals. Simply type `ss` press tab and later type your question (e.g. `man mount`).

Possible subject codes are:

- `man` - for linux manual pages at ss64.com
- `help` - for windows command line reference at ss64.com
- `css` - for CSS3 reference at ss64.com
- `lua` - for Lua 5.2 reference manual

Files
-----

- folder `ss64` - source of chrome extension
- `ss64.txt` - an index used by extension (this is downloaded from my pages actually, so I can add more keywords without reinstalling the extension)
- `prase.lua` - quick-hack parser for extracting links, used while creating index (still need lot of manual work)

Lincense
--------

(C) Severák 2013

Licensed under MIT license (same as Lua).