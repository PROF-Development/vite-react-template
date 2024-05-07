import {describe, expect, it} from "vitest"
import {render, screen} from "@testing-library/react";
import HomePage from "../pages/HomePage.jsx";
import {MemoryRouter} from "react-router-dom";

describe('HomePage', ()=>{
    it('Рендер страницы HomePage', ()=>{
        render(
            <MemoryRouter>
                <HomePage/>
            </MemoryRouter>
        )
        expect(screen.getByTestId('message')).toHaveTextContent('HomePage')
    })
})