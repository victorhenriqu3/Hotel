import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	fonts: {
		body: 'Montserrat, sans-serif;',
	},
	colors: {
		background: '#EEEEEE',
		backgroundCard: '#f9f9f9',
		yellowish: '#FFF159',
		blueGraysh: {
			200: '#3345CC',
			400: '#2F387B',
		},
		grey: '#2C2C2C',
	},
});
