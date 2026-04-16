import Inventory from './Inventory';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

 const renderInventory = () => {
    return render (
        <MemoryRouter future={{ 
    v7_startTransition: true, 
    v7_relativeSplatPath: true 
  }}>
            <Inventory />
        </MemoryRouter>
    );
}; 

describe("Inventory Page", () => {
    test("See if Add button is on screen", () => {
        renderInventory();
        //render(<Inventory/>)
        const add = screen.getByRole("button", {name: "Add"});
        expect(add).toBeInTheDocument();
    });
    test("See if Remove button is on screen", () => {
        renderInventory();
        //render(<Inventory/>)
        const remove = screen.getByRole("button", {name: "Remove"});
        expect(remove).toBeInTheDocument();
    });
    /* test("Location Dropdown is present on page", () => {
        renderInventory();
        //render(<Inventory/>)
        const locationDropdown = screen.getByTestId("locationDropdown");

        expect(locationDropdown).toBeInTheDocument();
    }); */
    test("render 1 button and 1 link", () => {
            renderInventory();
            const buttons = screen.getAllByRole('link');
            expect(buttons).toHaveLength(4);
        });
});
