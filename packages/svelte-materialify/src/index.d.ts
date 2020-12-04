import { SvelteComponentTyped } from 'svelte'
import { TransitionConfig, blur, crossfade, draw, fade, fly, scale, slide } from 'svelte/transition'
import { RippleOptions } from './@types/Ripple'

interface AlertProps {

  class?: string;

  /**
   * @default true
   */
  visible?: boolean;

  transition?: any;

  transitionOpts?: any;

  /**
   * @default false
   */
  dense?: boolean;

  /**
   * @default false
   */
  outlined?: boolean;

  /**
   * @default false
   */
  text?: boolean;

  /**
   * @default false
   */
  tile?: boolean;

  /**
   * @default false
   */
  dismissible?: boolean;

  /**
   * @default false
   */
  border?: boolean;

  /**
   * @default false
   */
  coloredBorder?: boolean;

}

export declare class Alert extends SvelteComponentTyped<AlertProps> {}

interface AppBarProps {

  class?: string;

  /**
   * @default '56px'
   */
  height?: string;

  /**
   * @default false
   */
  tile?: boolean;

  /**
   * @default false
   */
  flat?: boolean;

  /**
   * @default false
   */
  dense?: boolean;

  /**
   * @default false
   */
  prominent?: boolean;

  /**
   * @default false
   */
  fixed?: boolean;

  /**
   * @default false
   */
  absolute?: boolean;

  /**
   * @default false
   */
  collapsed?: boolean;

  /**
   * @default ''
   */
  style?: string;

}

export declare class AppBar extends SvelteComponentTyped<AppBarProps> {}

interface AvatarProps {

  class?: string;

  /**
   * @default 48
   */
  size?: number;

  /**
   * @default false
   */
  tile?: boolean;

  /**
   * @default null
   */
  style?: object;

}

export declare class Avatar extends SvelteComponentTyped<AvatarProps> {}

interface BadgeProps {

  class?: string;

  /**
   * @default ''
   */
  value?: string;

  /**
   * @default true
   */
  active?: boolean;

  /**
   * @default false
   */
  bordered?: boolean;

  /**
   * @default false
   */
  dot?: boolean;

  /**
   * @default false
   */
  tile?: boolean;

  /**
   * @default false
   */
  bottom?: boolean;

  /**
   * @default false
   */
  left?: boolean;

  /**
   * @default 'Badge'
   */
  label?: string;

  transition?: any;

  /**
   * @default 6
   */
  offsetX?: number;

  /**
   * @default 6
   */
  offsetY?: number;

}

export declare class Badge extends SvelteComponentTyped<BadgeProps> {}

interface BreadcrumbsProps {

  class?: string;

  /**
   * @default false
   */
  large?: boolean;

  items?: any;

  /**
   * @default null
   */
  style?: object;

}

export declare class Breadcrumbs extends SvelteComponentTyped<BreadcrumbsProps> {}

interface ButtonProps {

  class?: string;

  /**
   * @default false
   */
  fab?: boolean;

  /**
   * @default false
   */
  icon?: boolean;

  /**
   * @default false
   */
  block?: boolean;

  /**
   * The size of the button.
   * @default 'default'
   */
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large';

  /**
   * @default false
   */
  tile?: boolean;

  /**
   * @default false
   */
  text?: boolean;

  /**
   * @default false
   */
  depressed?: boolean;

  /**
   * @default false
   */
  outlined?: boolean;

  /**
   * @default false
   */
  rounded?: boolean;

  /**
   * @default null
   */
  disabled?: boolean;

  /**
   * @default false
   */
  active?: boolean;

  /**
   * @default 'active'
   */
  activeClass?: string;

  /**
   * @default 'button'
   */
  type?: string;

  ripple?: RippleOptions;

  /**
   * @default 'null'
   */
  style?: string;

}

export declare class Button extends SvelteComponentTyped<ButtonProps> {}

interface ButtonGroupProps {

  /**
   * Classes to add to button group.
   */
  class?: string;

  /**
   * Does not remove box shadow.
   * @default false
   */
  elevated?: boolean;

  /**
   * Remove border.
   * @default false
   */
  borderless?: boolean;

  /**
   * Remove border radius.
   * @default false
   */
  tile?: boolean;

  /**
   * Add border radius to the first and last button.
   * @default false
   */
  rounded?: boolean;

  /**
   * Identifies buttons as active with this class.
   * @default 'active'
   */
  activeClass?: string;

  /**
   * Array or string with the active button(s) value.
   */
  value?: any;

  /**
   * Forces a value to always be selected (if available).
   * @default false
   */
  mandatory?: boolean;

  /**
   * Allow multiple selections, makes the value prop an array.
   * @default false
   */
  multiple?: boolean;

  /**
   * Maximun number of selections.
   */
  max?: any;

  /**
   * Styles to apply to button group.
   * @default null
   */
  style?: object;

}

export declare class ButtonGroup extends SvelteComponentTyped<ButtonGroupProps> {}

interface ButtonGroupItemProps {

  class?: string;

  value?: any;

  activeClass?: any;

  /**
   * @default null
   */
  disabled?: object;

}

export declare class ButtonGroupItem extends SvelteComponentTyped<ButtonGroupItemProps> {}

interface CardProps {

  class?: string;

  /**
   * @default false
   */
  flat?: boolean;

  /**
   * @default false
   */
  tile?: boolean;

  /**
   * @default false
   */
  outlined?: boolean;

  /**
   * @default false
   */
  raised?: boolean;

  /**
   * @default false
   */
  shaped?: boolean;

  /**
   * @default false
   */
  hover?: boolean;

  /**
   * @default false
   */
  link?: boolean;

  /**
   * @default false
   */
  loading?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default null
   */
  style?: object;

}

export declare class Card extends SvelteComponentTyped<CardProps> {}

interface CardActionsProps {

  class?: string;

  /**
   * @default null
   */
  style?: object;

}

export declare class CardActions extends SvelteComponentTyped<CardActionsProps> {}

interface CardSubtitleProps {

  class?: string;

  /**
   * @default null
   */
  style?: object;

}

export declare class CardSubtitle extends SvelteComponentTyped<CardSubtitleProps> {}

interface CardTextProps {

  class?: string;

  /**
   * @default null
   */
  style?: object;

}

export declare class CardText extends SvelteComponentTyped<CardTextProps> {}

interface CardTitleProps {

  class?: string;

  /**
   * @default null
   */
  style?: object;

}

export declare class CardTitle extends SvelteComponentTyped<CardTitleProps> {}

interface CheckboxProps {

  /**
   * Add class to checkbox wrapper.
   */
  class?: string;

  /**
   * Class to add to checkbox when it is checked or indeterminate.
   * @default 'primary'
   */
  color?: string;

  /**
   * Get/Set checked state.
   * @default false
   */
  checked?: boolean;

  /**
   * Get/Set indeterminate state.
   * @default false
   */
  indeterminate?: boolean;

  /**
   * Make the checkbox disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * The value for the checkbox.
   * @default null
   */
  value?: object;

  /**
   * Combines components into a single group.
   * @default null
   */
  group?: object;

  /**
   * Id for the checkbox, defaults to a random uid.
   * @default null
   */
  id?: object;

  /**
   * Styles to add to checkbox.
   * @default null
   */
  style?: object;

}

export declare class Checkbox extends SvelteComponentTyped<CheckboxProps> {}

interface ChipProps {

  /**
   * Classes to add to chip.
   */
  class?: string;

  /**
   * Determines whether the chip is visible or not.
   * @default true
   */
  active?: boolean;

  /**
   * Selected state
   * @default false
   */
  selected?: boolean;

  /**
   * Specifies the size of chip.
   * @default 'default'
   */
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large';

  /**
   * @default false
   */
  outlined?: boolean;

  /**
   * @default false
   */
  pill?: boolean;

  /**
   * @default false
   */
  link?: boolean;

  /**
   * @default false
   */
  label?: boolean;

  /**
   * @default false
   */
  close?: boolean;

}

export declare class Chip extends SvelteComponentTyped<ChipProps> {}

interface DialogProps {

  class?: string;

  /**
   * @default false
   */
  active?: boolean;

  /**
   * @default false
   */
  persistent?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default 500
   */
  width?: number;

  /**
   * @default false
   */
  fullscreen?: boolean;

  transition?: any;

  overlay?: any;

}

export declare class Dialog extends SvelteComponentTyped<DialogProps> {}

interface DividerProps {

  class?: string;

  /**
   * @default false
   */
  inset?: boolean;

  /**
   * @default false
   */
  vertical?: boolean;

  /**
   * @default null
   */
  style?: object;

}

export declare class Divider extends SvelteComponentTyped<DividerProps> {}

interface ExpansionPanelProps {

  /**
   * Classes to add to the panel.
   */
  class?: string;

  /**
   * Options for the slide transition.
   */
  slideOpts?: any;

  /**
   * Make the panel readonly.
   * @default false
   */
  readonly?: boolean;

  /**
   * Disable the panel.
   * @default false
   */
  disabled?: boolean;

  /**
   * Styles to add to the panel.
   * @default null
   */
  style?: object;

}

export declare class ExpansionPanel extends SvelteComponentTyped<ExpansionPanelProps> {}

interface ExpansionPanelsProps {

  EXPANSION_PANELS?: any;

  /**
   * Classes to add to panel container.
   */
  class?: string;

  /**
   * 0 based indices of the active panels.
   */
  value?: any;

  /**
   * Make multiple panels active at the same time.
   * @default false
   */
  multiple?: boolean;

  /**
   * Make is necessary for at least one panel to be selected.
   * @default false
   */
  mandatory?: boolean;

  /**
   * Accordion style panels.
   * @default false
   */
  accordion?: boolean;

  /**
   * Make panels popout when active.
   * @default false
   */
  popout?: boolean;

  /**
   * Make panels inset when active.
   * @default false
   */
  inset?: boolean;

  /**
   * Remove shadow from panels.
   * @default false
   */
  flat?: boolean;

  /**
   * Remove border radius from panels.
   * @default false
   */
  tile?: boolean;

  /**
   * Disable all the panels.
   * @default null
   */
  disabled?: object;

  /**
   * Styles to add to the panel container.
   * @default null
   */
  style?: object;

}

export declare class ExpansionPanels extends SvelteComponentTyped<ExpansionPanelsProps> {}

interface FooterProps {

  class?: string;

  /**
   * @default false
   */
  absolute?: boolean;

  /**
   * @default false
   */
  fixed?: boolean;

  /**
   * @default false
   */
  inset?: boolean;

  /**
   * @default false
   */
  padless?: boolean;

  /**
   * @default null
   */
  style?: object;

}

export declare class Footer extends SvelteComponentTyped<FooterProps> {}

interface ColProps {

  /**
   * @default false
   */
  cols?: boolean;

  /**
   * @default false
   */
  sm?: boolean;

  /**
   * @default false
   */
  md?: boolean;

  /**
   * @default false
   */
  lg?: boolean;

  /**
   * @default false
   */
  xl?: boolean;

  /**
   * @default false
   */
  offset?: boolean;

  /**
   * @default false
   */
  offset_sm?: boolean;

  /**
   * @default false
   */
  offset_md?: boolean;

  /**
   * @default false
   */
  offset_lg?: boolean;

  /**
   * @default false
   */
  offset_xl?: boolean;

  /**
   * @default null
   */
  style?: object;

  class?: string;

}

export declare class Col extends SvelteComponentTyped<ColProps> {}

interface ContainerProps {

  /**
   * @default false
   */
  fluid?: boolean;

  /**
   * @default null
   */
  style?: object;

  class?: string;

}

export declare class Container extends SvelteComponentTyped<ContainerProps> {}

interface RowProps {

  /**
   * @default false
   */
  dense?: boolean;

  /**
   * @default false
   */
  noGutters?: boolean;

  class?: string;

  /**
   * @default null
   */
  style?: object;

}

export declare class Row extends SvelteComponentTyped<RowProps> {}

interface IconProps {

  class?: string;

  /**
   * @default '24px'
   */
  size?: string;

  /**
   * @default 0
   */
  rotate?: number;

  /**
   * @default false
   */
  spin?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default null
   */
  path?: object;

  /**
   * @default null
   */
  label?: object;

  /**
   * @default null
   */
  style?: object;

}

export declare class Icon extends SvelteComponentTyped<IconProps> {}

interface InputProps {

  class?: string;

  /**
   * @default null
   */
  color?: object;

  /**
   * @default false
   */
  dense?: boolean;

  /**
   * @default false
   */
  readonly?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default false
   */
  error?: boolean;

  /**
   * @default false
   */
  success?: boolean;

  /**
   * @default null
   */
  style?: object;

}

export declare class Input extends SvelteComponentTyped<InputProps> {}

interface ItemGroupProps {

  ITEM_GROUP?: any;

  class?: string;

  /**
   * @default ''
   */
  activeClass?: string;

  value?: any;

  /**
   * @default false
   */
  multiple?: boolean;

  /**
   * @default false
   */
  mandatory?: boolean;

  max?: any;

  /**
   * @default null
   */
  role?: object;

  /**
   * @default null
   */
  style?: object;

}

export declare class ItemGroup extends SvelteComponentTyped<ItemGroupProps> {}

interface LazyProps {

  observer?: any;

}

export declare class Lazy extends SvelteComponentTyped<LazyProps> {}

interface ListProps {

  class?: string;

  /**
   * @default null
   */
  dense?: object;

  /**
   * @default null
   */
  disabled?: object;

  /**
   * @default false
   */
  flat?: boolean;

  /**
   * @default false
   */
  rounded?: boolean;

  /**
   * @default false
   */
  nav?: boolean;

  /**
   * @default false
   */
  outlined?: boolean;

  /**
   * @default null
   */
  style?: object;

}

export declare class List extends SvelteComponentTyped<ListProps> {}

interface ListGroupProps {

  class?: string;

  /**
   * @default ''
   */
  activatorClass?: string;

  activatorProps?: any;

  /**
   * @default true
   */
  active?: boolean;

  /**
   * @default false
   */
  eager?: boolean;

  transition?: any;

  transitionOpts?: any;

  /**
   * @default null
   */
  offset?: object;

  /**
   * @default null
   */
  disabled?: object;

  ripple?: any;

  /**
   * @default null
   */
  style?: object;

}

export declare class ListGroup extends SvelteComponentTyped<ListGroupProps> {}

interface ListItemProps {

  class?: string;

  activeClass?: any;

  value?: any;

  /**
   * @default false
   */
  active?: boolean;

  /**
   * @default false
   */
  dense?: boolean;

  /**
   * @default null
   */
  disabled?: object;

  /**
   * @default false
   */
  multiline?: boolean;

  link?: any;

  selectable?: any;

  ripple?: any;

  /**
   * @default null
   */
  style?: object;

}

export declare class ListItem extends SvelteComponentTyped<ListItemProps> {}

interface ListItemGroupProps {

  class?: string;

  value?: any;

  /**
   * @default 'active'
   */
  activeClass?: string;

  /**
   * @default false
   */
  multiple?: boolean;

  /**
   * @default false
   */
  mandatory?: boolean;

  max?: any;

  /**
   * @default null
   */
  style?: object;

}

export declare class ListItemGroup extends SvelteComponentTyped<ListItemGroupProps> {}

interface MaterialAppProps {

  /**
   * @default 'light'
   */
  theme?: string;

}

export declare class MaterialApp extends SvelteComponentTyped<MaterialAppProps> {}

interface MenuProps {

  class?: string;

  /**
   * @default false
   */
  active?: boolean;

  /**
   * @default false
   */
  absolute?: boolean;

  transition?: any;

  inOpts?: any;

  outOpts?: any;

  /**
   * @default false
   */
  offsetX?: boolean;

  /**
   * @default true
   */
  offsetY?: boolean;

  /**
   * @default 0
   */
  nudgeX?: number;

  /**
   * @default 0
   */
  nudgeY?: number;

  /**
   * @default true
   */
  openOnClick?: boolean;

  /**
   * @default false
   */
  hover?: boolean;

  /**
   * @default true
   */
  closeOnClickOutside?: boolean;

  /**
   * @default true
   */
  closeOnClick?: boolean;

  /**
   * @default false
   */
  bottom?: boolean;

  /**
   * @default false
   */
  right?: boolean;

  /**
   * @default false
   */
  tile?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default 8
   */
  index?: number;

  /**
   * @default ''
   */
  style?: string;

}

export declare class Menu extends SvelteComponentTyped<MenuProps> {}

interface NavigationDrawerProps {

  class?: string;

  /**
   * @default '256px'
   */
  width?: string;

  /**
   * @default true
   */
  active?: boolean;

  /**
   * @default false
   */
  fixed?: boolean;

  /**
   * @default false
   */
  absolute?: boolean;

  /**
   * @default false
   */
  right?: boolean;

  /**
   * @default false
   */
  mini?: boolean;

  /**
   * @default false
   */
  clipped?: boolean;

  /**
   * @default false
   */
  borderless?: boolean;

  /**
   * @default '56px'
   */
  miniWidth?: string;

  /**
   * @default '56px'
   */
  clippedHeight?: string;

  transition?: any;

  transitionOpts?: any;

  /**
   * @default null
   */
  style?: object;

}

export declare class NavigationDrawer extends SvelteComponentTyped<NavigationDrawerProps> {}

interface OverlayProps {

  transition?: any;

  inOpts?: any;

  outOpts?: any;

  /**
   * @default true
   */
  active?: boolean;

  /**
   * @default 0.46
   */
  opacity?: number;

  /**
   * @default 'rgb(33, 33, 33)'
   */
  color?: string;

  /**
   * @default 5
   */
  index?: number;

  /**
   * @default false
   */
  absolute?: boolean;

  /**
   * @default ''
   */
  style?: string;

  class?: string;

}

export declare class Overlay extends SvelteComponentTyped<OverlayProps> {}

interface ProgressCircularProps {

  class?: string;

  /**
   * @default false
   */
  indeterminate?: boolean;

  /**
   * @default 'secondary'
   */
  color?: string;

  /**
   * @default 0
   */
  rotate?: number;

  /**
   * @default 32
   */
  size?: number;

  /**
   * @default 0
   */
  value?: number;

  /**
   * @default 4
   */
  width?: number;

  /**
   * @default ''
   */
  style?: string;

}

export declare class ProgressCircular extends SvelteComponentTyped<ProgressCircularProps> {}

interface ProgressLinearProps {

  class?: string;

  /**
   * @default 0
   */
  value?: number;

  /**
   * @default true
   */
  active?: boolean;

  /**
   * @default false
   */
  indeterminate?: boolean;

  /**
   * @default '4px'
   */
  height?: string;

  /**
   * @default 'primary'
   */
  backgroundColor?: string;

  /**
   * @default 0.3
   */
  backgroundOpacity?: number;

  color?: any;

  /**
   * @default 100
   */
  buffer?: number;

  /**
   * @default false
   */
  reversed?: boolean;

  /**
   * @default false
   */
  stream?: boolean;

  /**
   * @default false
   */
  rounded?: boolean;

  /**
   * @default false
   */
  striped?: boolean;

  /**
   * @default ''
   */
  style?: string;

}

export declare class ProgressLinear extends SvelteComponentTyped<ProgressLinearProps> {}

interface RadioProps {

  /**
   * Add class to radio wrapper.
   */
  class?: string;

  /**
   * Color of the radio when active.
   * @default 'primary'
   */
  color?: string;

  /**
   * Disables the radio.
   * @default false
   */
  disabled?: boolean;

  /**
   * Bind radio to a group.
   */
  group?: any;

  /**
   * Value for the radio.
   * @default null
   */
  value?: object;

  /**
   * Id for the checkbox.
   * @default null
   */
  id?: object;

  /**
   * Styles for the radio wrapper.
   * @default null
   */
  style?: object;

}

export declare class Radio extends SvelteComponentTyped<RadioProps> {}

interface SelectProps {

  class?: string;

  /**
   * @default false
   */
  active?: boolean;

  value?: any;

  items?: any;

  /**
   * @default false
   */
  filled?: boolean;

  /**
   * @default false
   */
  outlined?: boolean;

  /**
   * @default false
   */
  solo?: boolean;

  /**
   * @default false
   */
  dense?: boolean;

  /**
   * @default null
   */
  placeholder?: object;

  /**
   * @default ''
   */
  hint?: string;

  /**
   * @default false
   */
  mandatory?: boolean;

  /**
   * @default false
   */
  multiple?: boolean;

  max?: any;

  /**
   * @default false
   */
  chips?: boolean;

  /**
   * @default null
   */
  disabled?: object;

  format?: any;

}

export declare class Select extends SvelteComponentTyped<SelectProps> {}

interface SlideGroupProps {

  SLIDE_GROUP?: any;

  class?: string;

  /**
   * @default true
   */
  showArrows?: boolean;

  /**
   * @default false
   */
  hideDisabledArrows?: boolean;

  /**
   * @default false
   */
  centerActive?: boolean;

  /**
   * @default ''
   */
  activeClass?: string;

  value?: any;

  /**
   * @default false
   */
  multiple?: boolean;

  /**
   * @default false
   */
  mandatory?: boolean;

  max?: any;

}

export declare class SlideGroup extends SvelteComponentTyped<SlideGroupProps> {}

interface SlideItemProps {

  class?: string;

  activeClass?: any;

  value?: any;

  /**
   * @default null
   */
  disabled?: object;

}

export declare class SlideItem extends SvelteComponentTyped<SlideItemProps> {}

interface SliderProps {

  /**
   * @default 0
   */
  min?: number;

  /**
   * @default 100
   */
  max?: number;

  value?: any;

  connect?: any;

  /**
   * @default 'primary'
   */
  color?: string;

  /**
   * @default null
   */
  step?: object;

  /**
   * @default null
   */
  margin?: object;

  /**
   * @default null
   */
  limit?: object;

  /**
   * @default null
   */
  padding?: object;

  /**
   * @default false
   */
  thumb?: boolean;

  /**
   * @default false
   */
  persistentThumb?: boolean;

  /**
   * @default 'primary-color'
   */
  thumbClass?: string;

  /**
   * @default false
   */
  vertical?: boolean;

  /**
   * @default false
   */
  inverseLabel?: boolean;

  /**
   * @default false
   */
  readonly?: boolean;

  /**
   * @default null
   */
  disabled?: object;

  /**
   * @default ''
   */
  hint?: string;

  /**
   * @default null
   */
  style?: object;

}

export declare class Slider extends SvelteComponentTyped<SliderProps> {}

interface SnackbarProps {

  class?: string;

  /**
   * @default false
   */
  absolute?: boolean;

  /**
   * @default true
   */
  active?: boolean;

  /**
   * @default false
   */
  top?: boolean;

  /**
   * @default false
   */
  left?: boolean;

  /**
   * @default false
   */
  bottom?: boolean;

  /**
   * @default false
   */
  right?: boolean;

  /**
   * @default false
   */
  center?: boolean;

  /**
   * @default '8px'
   */
  offsetX?: string;

  /**
   * @default '8px'
   */
  offsetY?: string;

  /**
   * @default false
   */
  outlined?: boolean;

  /**
   * @default false
   */
  text?: boolean;

  /**
   * @default false
   */
  rounded?: boolean;

  /**
   * @default false
   */
  tile?: boolean;

  /**
   * @default false
   */
  timeout?: boolean;

  transition?: any;

  /**
   * @default ''
   */
  style?: string;

}

export declare class Snackbar extends SvelteComponentTyped<SnackbarProps> {}

interface SubheaderProps {

  /**
   * @default false
   */
  inset?: boolean;

  /**
   * @default null
   */
  style?: object;

  class?: string;

}

export declare class Subheader extends SvelteComponentTyped<SubheaderProps> {}

interface SwitchProps {

  /**
   * Add class to switch wrapper.
   */
  class?: string;

  /**
   * Color of the switch when active.
   * @default 'primary'
   */
  color?: string;

  /**
   * The value for the switch.
   * @default null
   */
  value?: object;

  /**
   * Combines components into a single group.
   */
  group?: any;

  /**
   * Get/Set checked state.
   * @default false
   */
  checked?: boolean;

  /**
   * make switch inset.
   * @default false
   */
  inset?: boolean;

  /**
   * Makes the switch dense.
   * @default false
   */
  dense?: boolean;

  /**
   * Disables the switch.
   * @default false
   */
  disabled?: boolean;

  /**
   * Id for switch.
   * @default null
   */
  id?: object;

  /**
   * Styles to add to switch.
   * @default null
   */
  style?: object;

}

export declare class Switch extends SvelteComponentTyped<SwitchProps> {}

interface TableProps {

  /**
   * @default false
   */
  dense?: boolean;

  /**
   * @default false
   */
  fixedHeader?: boolean;

  /**
   * @default null
   */
  style?: object;

  class?: string;

}

export declare class Table extends SvelteComponentTyped<TableProps> {}

interface TabProps {

  class?: string;

  value?: any;

  activeClass?: any;

  /**
   * @default null
   */
  disabled?: object;

}

export declare class Tab extends SvelteComponentTyped<TabProps> {}

interface TabContentProps {

  class?: string;

  /**
   * @default null
   */
  style?: object;

}

export declare class TabContent extends SvelteComponentTyped<TabContentProps> {}

interface TabsProps {

  TABS?: any;

  class?: string;

  /**
   * @default 0
   */
  value?: number;

  /**
   * @default false
   */
  centerActive?: boolean;

  /**
   * @default true
   */
  showArrows?: boolean;

  /**
   * @default false
   */
  fixedTabs?: boolean;

  /**
   * @default false
   */
  grow?: boolean;

  /**
   * @default false
   */
  centered?: boolean;

  /**
   * @default false
   */
  right?: boolean;

  /**
   * @default false
   */
  icons?: boolean;

  /**
   * @default true
   */
  slider?: boolean;

  /**
   * @default ''
   */
  sliderClass?: string;

  ripple?: any;

  /**
   * @default false
   */
  vertical?: boolean;

}

export declare class Tabs extends SvelteComponentTyped<TabsProps> {}

interface TextFieldProps {

  class?: string;

  /**
   * @default ''
   */
  value?: string;

  /**
   * @default 'primary'
   */
  color?: string;

  /**
   * @default false
   */
  filled?: boolean;

  /**
   * @default false
   */
  solo?: boolean;

  /**
   * @default false
   */
  outlined?: boolean;

  /**
   * @default false
   */
  flat?: boolean;

  /**
   * @default false
   */
  dense?: boolean;

  /**
   * @default false
   */
  rounded?: boolean;

  /**
   * @default false
   */
  clearable?: boolean;

  /**
   * @default false
   */
  readonly?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default null
   */
  placeholder?: object;

  /**
   * @default ''
   */
  hint?: string;

  /**
   * @default false
   */
  counter?: boolean;

  messages?: any;

  rules?: any;

  /**
   * @default 1
   */
  errorCount?: number;

  /**
   * @default false
   */
  validateOnBlur?: boolean;

  /**
   * @default false
   */
  error?: boolean;

  /**
   * @default false
   */
  success?: boolean;

  id?: any;

  /**
   * @default null
   */
  style?: object;

}

export declare class TextField extends SvelteComponentTyped<TextFieldProps> {}

interface TextareaProps {

  /**
   * @default ''
   */
  value?: string;

  /**
   * @default 'primary'
   */
  color?: string;

  /**
   * @default false
   */
  filled?: boolean;

  /**
   * @default false
   */
  solo?: boolean;

  /**
   * @default false
   */
  outlined?: boolean;

  /**
   * @default false
   */
  flat?: boolean;

  /**
   * @default false
   */
  rounded?: boolean;

  /**
   * @default false
   */
  clearable?: boolean;

  /**
   * @default false
   */
  readonly?: boolean;

  /**
   * @default 5
   */
  rows?: number;

  /**
   * @default false
   */
  autogrow?: boolean;

  /**
   * @default false
   */
  noResize?: boolean;

  /**
   * @default false
   */
  disabled?: boolean;

  /**
   * @default null
   */
  placeholder?: object;

  /**
   * @default ''
   */
  hint?: string;

  /**
   * @default false
   */
  counter?: boolean;

  rules?: any;

  /**
   * @default 1
   */
  errorCount?: number;

  messages?: any;

  /**
   * @default false
   */
  validateOnBlur?: boolean;

  /**
   * @default false
   */
  error?: boolean;

  /**
   * @default false
   */
  success?: boolean;

  id?: any;

  /**
   * @default null
   */
  style?: object;

}

export declare class Textarea extends SvelteComponentTyped<TextareaProps> {}

interface TooltipProps {

  class?: string;

  /**
   * @default 'default'
   */
  color?: string;

  /**
   * @default false
   */
  active?: boolean;

  /**
   * @default false
   */
  top?: boolean;

  /**
   * @default false
   */
  bottom?: boolean;

  /**
   * @default false
   */
  left?: boolean;

  /**
   * @default false
   */
  right?: boolean;

}

export declare class Tooltip extends SvelteComponentTyped<TooltipProps> {}

interface VirtualListProps {

  /**
   * @default true
   */
  active?: boolean;

  items?: any;

  /**
   * @default ''
   */
  itemClasses?: string;

  /**
   * @default 0
   */
  depth?: number;

  /**
   * @default ''
   */
  style?: string;

  offsetFunction?: any;

  class?: string;

}

export declare class VirtualList extends SvelteComponentTyped<VirtualListProps> {}

interface WindowProps {

  WINDOW?: any;

  class?: string;

  /**
   * @default 'active'
   */
  activeClass?: string;

  /**
   * @default 0
   */
  value?: number;

  /**
   * @default false
   */
  vertical?: boolean;

  /**
   * @default false
   */
  reverse?: boolean;

  /**
   * @default true
   */
  continuous?: boolean;

}

export declare class Window extends SvelteComponentTyped<WindowProps> {}

interface WindowItemProps {

  class?: string;

  /**
   * @default null
   */
  style?: object;

}

export declare class WindowItem extends SvelteComponentTyped<WindowItemProps> {}
