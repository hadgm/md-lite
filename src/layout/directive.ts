const Breakpoints = ['', 'xs', 'gt-xs', 'sm', 'gt-sm', 'md', 'gt-md', 'lg', 'gt-lg', 'xl', 'print'];
const ApiWithValues = ['layout', 'flex', 'flex-order', 'flex-offset', 'layout-align'];
const ApiNoValues = ['show', 'hide', 'layout-padding', 'layout-margin'];

const snakeToCamel = (name) => {
  return name.replace(/\-([a-zA-Z])/g, (match, cap) => cap.toUpperCase());
};

export function registerDirective(module) {

  Breakpoints.forEach(breakpoint => {

    ApiNoValues.forEach(name => {
      let directiveName = breakpoint ? name + '-' + breakpoint : name;
      module.directive(
        snakeToCamel(directiveName),
        createUnObservableDirective(directiveName)
      );
    });


  })
}

export function createUnObservableDirective(name) {
  const translateToCssClass = (scope, elm) => {
    elm.addClass(name);
  };

  return function() {
    return  {
      restrict: 'A',
      compile(elm, attrs) {
        translateToCssClass(undefined, elm);
        return translateToCssClass;
      },
    };
  };
}
