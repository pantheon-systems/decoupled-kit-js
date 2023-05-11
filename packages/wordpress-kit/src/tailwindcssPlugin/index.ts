import plugin from 'tailwindcss/plugin';
import {
	Quote,
	ImageComponent,
	PullQuoteComponent,
	TableComponent,
	GalleryComponent,
	AudioComponent,
	CoverComponent,
	mediaAndText,
	ButtonsComponent,
	FileMediaComponent,
	VideoComponent,
	SpacerComponent,
	SeparatorComponent,
	ColumnsComponent,
} from './components';
import { mergeToConfig } from './Config';
import { BaseUtilities, ColorUtilities, FontsUtilities } from './utilities';

/**
 * Tailwindcss plugin that maps WordPress block editor styles to tailwindcss classes.
 */
export const tailwindcssPlugin = plugin(function ({
	addUtilities,
	theme,
	addComponents,
}) {
	const color = new ColorUtilities(theme);
	const font = new FontsUtilities(theme);
	const base = new BaseUtilities();

	const quoteUtilities = Quote;

	const pullQuote = PullQuoteComponent;

	const table = TableComponent({
		stripeColor: theme('colors.stripes', '#f2f2f2'),
	});

	const image = ImageComponent();

	const gallery = GalleryComponent();

	const audio = AudioComponent();

	const cover = CoverComponent();

	const buttons = ButtonsComponent({
		defaultColor: color.getColorByName('primary'),
	});

	const fileMedia = FileMediaComponent({
		defaultColor: color.getColorByName('primary'),
	});

	const video = VideoComponent();
	const spacer = SpacerComponent();
	const separator = SeparatorComponent();

	const columns = ColumnsComponent();

	addUtilities([
		color.getBackgroundUtilities(),
		color.getBorderColorUtilities(),
		color.getColorUtilities(),
		color.getGradientUtilities(),
		font.getFontSizeUtilities(),
		font.dropCapUtilities,
		font.textAlignUtilities,
		base.baseUtilities,
		quoteUtilities,
	]);

	addComponents([
		table,
		image,
		pullQuote,
		gallery,
		audio,
		cover,
		mediaAndText,
		buttons,
		fileMedia,
		video,
		spacer,
		separator,
		columns,
	]);
},
mergeToConfig);
