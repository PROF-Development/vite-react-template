// import 'matchmedia-polyfill'
import {afterEach, beforeAll} from "vitest";
import {cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/vitest"
import jest from "jest";

window.matchMedia = window.matchMedia || (() => {
    return {
        matches: false,
        addListener: () => {},
        removeListener: () => {}
    };
});

afterEach(()=>{
    cleanup()
})