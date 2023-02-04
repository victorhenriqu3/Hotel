import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Header } from './Components/Header';

import { theme } from './style/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider resetCSS theme={theme}>
			<Header />
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
