import { SCREEN_SM } from "./constants";
export function isResponsive() {
  if (window.screen.availWidth < SCREEN_SM) {
    return true;
  }
}
