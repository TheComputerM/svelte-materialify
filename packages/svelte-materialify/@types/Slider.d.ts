import { SvelteComponent } from './shared';

interface SliderProps {
  /** Minimum allowed value. */
  min?: number;
  /** Maximum allowed value. */
  max?: number;
  /** Value of the slider. */
  value?: number | number[];
  /** Display colored bars between handles. */
  connect?: boolean | boolean[] | 'lower' | 'upper' ;
  /** Color class of the slider when active. */
  color?: string;
  /** Slider jump interval. By default, the slider slides fluently. */
  step?: number;
  /** The minimum distance between the handles. Defaults to zero. */
  margin?: number;
  /** The maximum distance between two handles. Defaults to unlimited. */
  limit?: number;
  /** Limits how close to the slider edges handles can be. */
  padding?: number | [number] | [number, number];
  /**
   * Whether to display thumb tooltips. Can be set individually for each handle with an
   * array. Default formatter can be replaced by passing in a formatter function in place
   * of the boolean. Defaults to `false`.
   */
  thumb?: boolean | ((value: number) => string) | (boolean | ((value: number) => string))[];
  /**
   * Whether handle tooltips are always visible. Defaults to `false` (Only active
   * handle's tooltip is visible.).
   */
  persistentThumb?: boolean;
  /** Custom tooltip class. Defaults to `primary-color`. */
  thumbClass?: string;
  /**
   * Whether slider's orientation is vertical. Defaults to `false`.
   * Vertical sliders don't assume a default `height`, so a height needs to be set.
   */
  vertical?: boolean;
  /** Whether to display the label at the end of the slider. */
  inverseLabel?: boolean;
  /** Whether slider is read-only. */
  readonly?: boolean;
  /** Whether slider is disabled. */
  disabled?: boolean;
  /** Hint text. */
  hint?: string;
  /** Styles to add to slider element. */
  style?: string;
}

declare class Slider extends SvelteComponent<SliderProps> { }

export default Slider;
