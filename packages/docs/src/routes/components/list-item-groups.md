---
title: List Item group Component
description: The list item group component allows you to compile multiple list items together and allow you to select one or more items.
keywords: list groups, svelte materialify list group, svelte list group component
related:
  - components/lists
  - components/item-groups
  - components/cards
---

# List item groups

The `ListItemGroup` provides the ability to create a group of selectable v-list-items. The ListItemGroup component utilizes `ItemGroup` at its core to provide a clean interface for interactive lists.

# Usage

By default, the `ListItemGroup` operates similarly to ItemGroup. If a value is not provided, the group will provide a default based upon its index.

<Components.Example file="ListItemGroup/usage" />

## Examples

### Active Class

You can set a class which will be added when an item is selected.
<Components.Example file="ListItemGroup/activeClass" />

### Mandatory

At least one item must be selected.
<Components.Example file="ListItemGroup/mandatory" />

### Multiple

You can select multiple items at one time.
<Components.Example file="ListItemGroup/multiple" />

### Selection Controls

Using the default slot, you can access an items internal state and toggle it. Since the active property is a boolean, we use the true-value prop on the checkbox to link its state to the `ListItem`.
<Components.Example file="ListItemGroup/controls" />
