import HomeController from './HomeController.js';

export default function homeComponent() {
  return {
    restrict: 'EA',
    template: `<span>home</span>`,
    controller: HomeController,
    controllerAs: 'home',
  };
}
