import React from "react";
import {render, screen, fireEvent, waitFor } from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import Footer from "@/host-app/src/feature/footer/footer";
import '@testing-library/jest-dom';
import {NAVBAR_ITEMS} from "@/host-app/src/shared/utils/constants";
import {Navbar} from "@/host-app/src/shared/components/navbar/navbar";

const styles = require("../styles.module.scss");

test('test footer', ()=>{
    render(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    );

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(5);

    expect(screen.getByText("© 2023 EATLY All Rights Reserved.")).toBeInTheDocument();

    const menuItems = Array.from(
        document.querySelectorAll(`.${styles.li_item}`)
    )
    expect(menuItems).toHaveLength(NAVBAR_ITEMS.length);

    NAVBAR_ITEMS.forEach((item:any, index: number) => {
        expect(menuItems[index]).toHaveTextContent(item);
    });
});

test('Navbar items navigate on click', () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockNavigate,
    }));

    render(
        <MemoryRouter initialEntries={["/"]}>
            <Navbar />
        </MemoryRouter>
    );

    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();


    NAVBAR_ITEMS.forEach(item=>{
        const menuItem = screen.getByText(item);
        expect(menuItem).toBeInTheDocument();
        fireEvent.click(menuItem);
    })

});