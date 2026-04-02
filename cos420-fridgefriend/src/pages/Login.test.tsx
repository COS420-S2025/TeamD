import Login from './Login';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

const renderLogin = () => {
    return render (
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
};

describe("Login Page", () => {
    test("navigates to register page", () => {
        renderLogin();
        const link = screen.getByText(/don't have an account\> register/i);
        expect(link.getAttribute('href')).toBe('/register');
    });

    test("renders login form elements", () => {
        renderLogin();
        expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /login/i})).toBeInTheDocument();
    });

    test("render 1 button and 1 link", () => {
        renderLogin();
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(1);
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(1);
    });
});