# laravel-nova-file-factory
File factory that generates Laravel Nova resources with PipeDream

# How to install
NPM
`$ npm install laravel-nova-file-factory --dev`

Yarn
`$ yarn add -D laravel-nova-file-factory`

Next we need to tell `@pipe-dream/laravel-create` to use our factory.
Open up `[composer-vendor]/pipe-dream/laravel/src/resources/js/app.js`

add
`import LaravelNovaFileFactory from 'laravel-nova-file-factory'` to your imports

Further down, look for
```
window.store = new Vuex.Store(
    new PipeDream({
        fileFactories: [
            LaravelFileFactory,
        ],
        ...window.__ENV__
    }).defaultStore
)
```
Add `LaravelNovaFileFactory` to the `fileFactories` array
Rebuild pipedream by running `yarn build` inside `[composer-vendor]/pipe-dream/laravel`
