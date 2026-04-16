import ExpirationCalendar from './ExpirationCalendar';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

const renderCalendar = () => {
    return render (
        <MemoryRouter future={{ 
    v7_startTransition: true, 
    v7_relativeSplatPath: true 
  }}>
            <ExpirationCalendar />
        </MemoryRouter>
    );
};

describe("Expiration Calendar Page", () => {
    test("renders calendar navigation buttons", () => {
        renderCalendar();
        expect(screen.getByRole('button', {name: /PREV/i})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /NEXT/i})).toBeInTheDocument();
    });

    test("renders calendar view options (day, week, month)", () => {
        renderCalendar();
        expect(screen.getByText(/day/i)).toBeInTheDocument();
        expect(screen.getByText(/week/i)).toBeInTheDocument();
        expect(screen.getByText(/month/i)).toBeInTheDocument();
    });

    test("renders headers for days of the week", () => {
        renderCalendar();
        expect(screen.getByRole('columnheader', {name: /mon/i})).toBeInTheDocument();
    });
});