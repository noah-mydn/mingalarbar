import { createSelector } from "@reduxjs/toolkit";

const menu = state => state.menu.menu;
const noodleMenu = state => state.menu.noodleMenu;
const saladMenu =  state =>state.menu.saladMenu;
const beveragesMenu = state => state.menu.beveragesMenu;
const otherMenu = state => state.menu.otherMenu;
const isLoading = state => state.menu.isLoading;
const error = state=> state.menu.error;

export const isLoadingSelector = createSelector(isLoading, isLoading => isLoading);
export const errorSelector = createSelector(error,error=>error);
export const menuSelector = createSelector(menu, menu => menu);
export const noodleMenuSelector = createSelector(noodleMenu, noodleMenu => noodleMenu);
export const saladMenuSelector = createSelector(saladMenu, saladMenu => saladMenu);
export const beveragesMenuSelector = createSelector(beveragesMenu, beveragesMenu => beveragesMenu);
export const otherMenuSelector = createSelector(otherMenu, otherMenu => otherMenu);
