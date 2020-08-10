import {createSelector} from 'reselect';
const selectmenu = state => state.menu;

export const selectMenuSections = createSelector(
    [selectmenu],
    (menu=>menu.sections)
)