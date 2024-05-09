import type { OptionsType } from '$lib/shadcn-ui/preset-types.js';
import hexes from '../hexes.js';

export default function (options: OptionsType) {
	const scheme = hexes[options.theme || 'zinc'];

	return {
		'hook-misc': {
			'@media (min-width:640px)': {
				'.uk-stepper-default .uk-stepper-done a::before': {
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(
						scheme.light.primary
					)}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E%0A")`
				},
				'.dark .uk-stepper-default .uk-stepper-done a::before': {
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z' fill='${encodeURIComponent(
						scheme.dark.primary
					)}' fill-rule='evenodd' clip-rule='evenodd' %3E%3C/path%3E%3C/svg%3E%0A")`
				}
			}
		}
	};
}
