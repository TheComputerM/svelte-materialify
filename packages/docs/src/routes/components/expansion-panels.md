---
title: Expansion Panel Component
description: The expansion panel component is a lightweight container that hides information behind expandable and contractable containers.
keywords: expansion panels, svelte materialify expansion panel, svelte expansion panel component
related:
  - components/cards
  - components/lists
  - api/ExpansionPanels
---

# Expansion Panels

The `ExpansionPanel` component is useful for reducing vertical space with large amounts of information. The default functionality of the component is to only display one expansion panel body at a time; however, with the `multiple` property, the expansion panel can remain open until explicitly closed.

## API

- [ExpansionPanels API](/api/ExpansionPanels/)
- [ExpansionPanel API](/api/ExpansionPanel/)

## Usage

Whenever using `<ExpansionPanel>` make sure that it is a child of `<ExpansionPanels>` as it provides basic settings and functionality using setContext.
<Components.Example file="ExpansionPanels/basic" />

## Examples

Below is a collection of simple to complex examples.

### Disabled

Both the expansion panel and its content can be disabled using the `disabled` prop. You can disable a single panel or all the panels.
<Components.Example file="ExpansionPanels/disabled" />

### Multiple

You can allow multiple panels to be open at the same time using the `multiple` prop.
<Components.Example file="ExpansionPanels/multiple" />

### Popout

The expansion-panel also has **popout** design. With it, expansion-panel is enlargened when activated.
<Components.Example file="ExpansionPanels/popout" />

### Inset

**inset** expansion-panel becomes smaller when activated.
<Components.Example file="ExpansionPanels/inset" />

### Accordion

**accordion** expansion-panel hasn't got margins around active panel.
<Components.Example file="ExpansionPanels/accordion" />

### Custom Icons

Expand action icon can be customized with `icon` slot.
<Components.Example file="ExpansionPanels/customIcon" />

### External Control

Expansion panels can be controlled externally by modifying the `value` prop. Its value corresponds to a zero-based index of the currently opened expansion panel content. It is an array containing the indices of the open items, even if the multiple prop is not used.
<Components.Example file="ExpansionPanels/externalControl" />
