import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import InviteMember from './InviteMember';
import userEvent from '@testing-library/user-event';

const renderInvite = () => {
    return render (
        <MemoryRouter future={{ 
    v7_startTransition: true, 
    v7_relativeSplatPath: true 
  }}>
            <InviteMember/>
        </MemoryRouter>
    );
};

describe("InviteMembers Page", () => {
    test("navigates to Household", () => {
        renderInvite();
        const link = screen.getByRole('link',{name:/Back/i});
        expect(link).toBeInTheDocument();
        expect(link.getAttribute('href')).toBe('/household');
    });

    test("renders invite form elements", () => {
        renderInvite();
        expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /Enter/i})).toBeInTheDocument();
    });

});