import {describe, expect, it} from "vitest"
import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";

describe('HomePage', ()=>{
    it('Рендер страницы HomePage', ()=>{
        render(
            <MemoryRouter>
                <HomePage/>
            </MemoryRouter>
        )
        expect(screen.getByTestId('block')).toHaveTextContent('HomePage')
    })
})