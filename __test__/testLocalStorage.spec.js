import {saveTrip, deleteTrip, showSavedTrip } from "./js/localStorage";

describe("Testing the saveTrip() functionality", () => {
    test("Testing the saveTrip() function", () => {
        expect(saveTrip).toBeDefined();
    })});


describe("Testing the deleteTrip() functionality", () => {
    test("Testing the deleteTrip() function", () => {
        expect(deleteTrip).toBeDefined();
    })});

describe("Testing the showSavedTrip() functionality", () => {
    test("Testing the showSavedTrip() function", () => {
        expect(showSavedTrip).toBeDefined();
    })});    