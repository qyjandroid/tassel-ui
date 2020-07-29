import { addons } from '@storybook/addons';
import themes from './theme';

addons.setConfig({
    showRoots: true,
    theme: themes,
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: "bottom",
    sidebarAnimations: true,
});