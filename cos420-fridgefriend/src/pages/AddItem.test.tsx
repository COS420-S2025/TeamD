import AddItem from './AddItem';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

const renderPageToTest = () => {
    return render (
        <MemoryRouter future={{ 
    v7_startTransition: true, 
    v7_relativeSplatPath: true 
  }}>
            <AddItem />
        </MemoryRouter>
    );
};

describe("Expiration Calendar Page", () => {
    test("renders 'add' and 'cancel' buttons", () => {
        renderPageToTest();
        expect(screen.getByRole('button', {name: /add/i})).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /cancel/i})).toBeInTheDocument();
    });

    test("renders text input fields (itemName, price, quantity)", () => {
        renderPageToTest();
        expect(screen.getByTestId("itemName")).toBeInTheDocument();
        expect(screen.getByTestId("price")).toBeInTheDocument();
        expect(screen.getByTestId("quantity")).toBeInTheDocument();
    });

    test("renders non-text input fields", () => {
        renderPageToTest();
        expect(screen.getByTestId("opened")).toBeInTheDocument();
        expect(screen.getByTestId("fridge")).toBeInTheDocument();
        expect(screen.getByTestId("freezer")).toBeInTheDocument();
        expect(screen.getByTestId("pantry")).toBeInTheDocument();
        expect(screen.getByTestId("expirationDate")).toBeInTheDocument();
    });
});