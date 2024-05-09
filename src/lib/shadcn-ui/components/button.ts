export default function () {
	return {
		'hook-button': {
			margin: null,
			border: null,
			overflow: null,
			font: null,
			color: null,
			textTransform: null,
			WebkitAppearance: null,
			borderRadius: null,
			display: null,
			boxSizing: null,
			padding: null,
			verticalAlign: null,
			fontSize: null,
			lineHeight: null,
			textAlign: null,
			textDecoration: null,
			'@apply inline-flex justify-center items-center font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-sm h-9 px-4 py-2 rounded-md shadow':
				{}
		},
		'hook-disabled': {
			backgroundColor: null,
			color: null,
			borderColor: null,
			'@apply opacity-50': {}
		},
		'hook-default': {
			backgroundColor: null,
			color: null,
			borderColor: null,
			border: '1px solid',
			'@apply border border-input bg-background text-accent-foreground': {}
		},
		'hook-default-hover': {
			backgroundColor: null,
			color: null,
			borderColor: null,
			'@apply bg-accent': {}
		},
		'hook-default-active': {
			backgroundColor: null,
			color: null,
			borderColor: null
		},
		'hook-primary': {
			backgroundColor: null,
			color: null,
			borderColor: null,
			'@apply bg-primary text-primary-foreground': {}
		},
		'hook-primary-hover': {
			backgroundColor: null,
			color: null,
			borderColor: null,
			'@apply opacity-90': {}
		},
		'hook-primary-active': {
			backgroundColor: null,
			color: null,
			borderColor: null
		},
		'hook-secondary': {
			backgroundColor: null,
			color: null,
			borderColor: null,
			'@apply bg-secondary text-secondary-foreground': {}
		},
		'hook-secondary-hover': {
			backgroundColor: null,
			color: null,
			borderColor: null,
			'@apply opacity-90': {}
		},
		'hook-secondary-active': {
			backgroundColor: null,
			color: null,
			borderColor: null
		},
		'hook-danger': {
			backgroundColor: null,
			color: null,
			borderColor: null,
			'@apply bg-destructive text-destructive-foreground': {}
		},
		'hook-danger-hover': {
			backgroundColor: null,
			color: null,
			borderColor: null,
			'@apply opacity-90': {}
		},
		'hook-danger-active': {
			backgroundColor: null,
			color: null,
			borderColor: null
		},
		'hook-link': {
			color: null,
			lineHeight: null,
			'@apply h-auto rounded-none shadow-none': {}
		},
		'hook-link-hover': {
			color: null
		},
		'hook-link-disabled': {
			color: null,
			'@apply opacity-50': {}
		},
		'hook-text': {
			color: null,
			lineHeight: null,
			'@apply h-auto rounded-none shadow-none': {}
		},
		'hook-text-hover': {
			color: null
		},
		'hook-text-disabled': {
			color: null,
			'@apply opacity-50': {}
		},
		'hook-small': {},
		'hook-large': {},
		'hook-misc': {
			'.uk-button-small': null,
			'.uk-button-large': null,
			'.uk-button-group': null,
			'.uk-button-group > .uk-button:nth-child(n + 2), .uk-button-group > div:nth-child(n + 2) .uk-button':
				null,
			'.uk-button-group .uk-button:hover, .uk-button-group .uk-button:focus, .uk-button-group .uk-button:active, .uk-button-group .uk-button.uk-active':
				null,
			'.uk-button-ghost': {
				'@apply shadow-none': {}
			},
			'.uk-button-ghost:hover': {
				'@apply bg-accent': {}
			}
		}
	};
}
