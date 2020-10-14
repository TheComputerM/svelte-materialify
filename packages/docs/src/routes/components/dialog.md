---
title: Dialog Component
---

# Dialog

The `Dialog` component inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. Use dialogs sparingly because they are interruptive.

## API

- [Dialog](/api/Dialog/)

## Examples

Below is a collection of simple to complex examples.

## Basic

This is a simple dialog with just basic logic.

<Components.Example file="Dialog/basic" />

## Modal

Using the `persistent` prop will not close the dialog the overlay is clicked.

<Components.Example file="Dialog/modal" />

## Fullscreen

Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.

<Components.Example file="Dialog/fullscreen" />

## Nested

Dialogs can be nested: you can open one dialog from another.

<Components.Example file="Dialog/nested" />
