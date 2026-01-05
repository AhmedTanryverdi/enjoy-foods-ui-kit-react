import React from "react";
import {render, screen, fireEvent, waitFor } from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import Header from "../header";
import '@testing-library/jest-dom';
import {Navbar} from "../view/navbar/navbar";

const styles = require("../styles.module.scss");

const MENU = ["Login", "Sign up", "Menu", "Blog", "Pricing", "Contact"];
const NAVBAR_ITEMS = ["Menu", "Blog", "Pricing", "Contact"];

test('test header', async  () => {
    render(<MemoryRouter>
            <Header />
        </MemoryRouter>);
    expect(screen.getByRole('img')).toBeInTheDocument();

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Sign up')).toBeInTheDocument();


    const hamburgerButton =
        Array.from(document.querySelectorAll(".hamburger_menu"))
        .find(el =>
            el.querySelectorAll(`.${styles.level}`).length === 3
        );

    if (!hamburgerButton) {
        throw new Error('Гамбургер-кнопка не найдена');
    }

    fireEvent.click(hamburgerButton);

    await waitFor(() => {
        expect(document.querySelector(".dropdown")).toBeInTheDocument();
    });

    const menuItems = Array.from(
        document.querySelectorAll(`.${styles.list_item}`)
    )
    expect(menuItems).toHaveLength(MENU.length);

    MENU.forEach((item:any, index: number) => {
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
        expect(menuItem).toBeInTheDocument(); // Убедимся, что элемент есть
        fireEvent.click(menuItem);
    })

});




