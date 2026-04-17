import Register from './Register';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

const renderRegister = () => {
    return render (
        <MemoryRouter future={{ 
    v7_startTransition: true, 
    v7_relativeSplatPath: true 
  }}>
            <Register />
        </MemoryRouter>
    );
};

describe("Register Page", () => {
    test("navigates to login page", () => {
        renderRegister();
        const link = screen.getByText(/Already have an account\? Login/i);
        expect(link.getAttribute('href')).toBe('/');
    });

    test("renders login form elements", () => {
        renderRegister();
        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /REGISTER/i})).toBeInTheDocument();
    });

    test("render 1 button and 1 link", () => {
        renderRegister();
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(1);
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(1);
    });
});