---
title: Tabs
related:
  - components/icons
  - components/windows
---

# Tabs

The `Tabs` component is used for hiding content behind a selectable item. This can also be used as a pseudo-navigation for a page, where the tabs are links and the tab-items are the content.

## API

- [Tabs](/api/Tabs/)
- [Tab](/api/Tab/)
- [TabContent](/api/TabContent/);

## Examples

Below is a collection of simple to complex examples.

### Fixed Tabs

The fixed-tabs prop forces tab to take up all available space up to the maximum width (300px).
<Components.Example file="Tabs/fixedTabs" />

### Centered Active

Active tab is always centered.
<Components.Example file="Tabs/centeredActive" />

### Grow

The grow prop will make the tab items take up all available space up to a maximum width of 300px.
<Components.Example file="Tabs/grow" />

### Vertical

Tabs can be toggled to stack its v-tab components vertically.
<Components.Example file="Tabs/vertical" />

### Icons

Tabs can contain icons as well as text. This increases their height to 72px.
<Components.Example file="Tabs/icons" />

### Extension

You can use them inside [AppBar](/components/app-bar/)'s extension slot.
<Components.Example file="Tabs/extension" />
