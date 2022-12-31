# Cf-Plus

https://cromarmot.github.io/cf-plus

with Angular 15, node 16.x

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`

## Build

Run `ng build --base-href=/cf-plus/` to build the project.

## CI

`.github/workflows/deployghpages.yml`

## Size

```
ng build --stats-json

npx webpack-bundle-analyzer dist/cf-plus/stats.json
```
