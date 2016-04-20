export function supplant(template, values, pattern = /\{([^\{\}]*)\}/g) {
  return template.replace(pattern, function(a, b) {
    let p = b.split('.'),
      r = values;
    try {
      for (let s in p) {
        if (p.hasOwnProperty(s) ) {
          r = r[p[s]];
        }
      }
    } catch (e) {
      r = a;
    }
    return (typeof r === 'string' || typeof r === 'number') ? r : a;
  });
}
