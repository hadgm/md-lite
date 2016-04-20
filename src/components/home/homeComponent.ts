import {HomeController} from './HomeController.ts';

export default function homeComponent() {
  return {
    restrict: 'EA',
    template: `<span>{{home.title}}</span>`,
    controller: HomeController,
    controllerAs: 'home',
  };
}
