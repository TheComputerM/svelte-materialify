---
title: DataTable
description: The DataTable component is used to display tabular information across rows and columns.
keywords: data tables, svelte materialify data table component, svelte data table component
related:
  - components/list
  - components/list-item-groups
---

# DataTable

The `DataTable` component is used to display tabular information across rows and columns.

## API

- [DataTable](/api/DataTable/)
- [DataTableHead](/api/DataTableHead/)
- [DataTableBody](/api/DataTableBody/)
- [DataTableRow](/api/DataTableRow/)
- [DataTableCell](/api/DataTableCell/)

## Examples

Below is a collection of simple to complex examples.

### Basic

This is a basic example.
<Components.Example file="DataTable/basic" />

### With fixed header

Optionally, the header of the table can be fixed in place while scrolling.
<Components.Example file="DataTable/fixed-header" />

### With row selection

Row selection allows users to select one or multiple rows via row checkboxes. Users can select or deselect all rows with the header row checkbox, which is also live updated based on the selection.
<Components.Example file="DataTable/row-selection" />

### With pagination

Pagination can additionally be rendered in the table footer.
<Components.Example file="DataTable/pagination" />

### With progress indicator

Progress indicator bellow the table header can be used to signify an ongoing process to the user.
<Components.Example file="DataTable/progress-indicator" />

### With column sorting

Column sorting allows the user to reorder the table rows in ascending or descending order by a column.
<Components.Example file="DataTable/column-sorting" />
