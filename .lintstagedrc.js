
module.exports = {
  //lint & prettify TS and JS files
  '*.{js,jsx,ts,tsx}': (filenames) => filenames.map(filename => `prettier --write "${filename}"`)(filename => `eslint --fix "${filename}"`),
  '*.{js,jsx,tstsx}': (filenames) =>[
    `npm run lint --fix . ${filenames.join(' --file')}`,
    `prettier --write ${filenames.join(' ')}`,
    `npm test -- --findRelatedTests ${filenames.join(' ')}`
  ]
}
