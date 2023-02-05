import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('Should render the Header correctly', () => {
	it('The title can only be capitalized', () => {
		render(<Header />);
		expect(screen.getByText(/ARGOS/)).toBeInTheDocument();
		expect(screen.getByText(/HOTEL/)).toBeInTheDocument();
	});
	it('The Cart must not contain any items', () => {
		render(<Header />);
		expect(screen.getByTestId(/CartIndicator/)).toBeInTheDocument();
	});
});
