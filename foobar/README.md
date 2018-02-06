# Foo

Sample Angular Component library built with Angular CLI + ng-packagr.

## Installation

Just run `yarn add @dirkluijk/foo` and use it in your app:

```typescript
import { NgModule } from '@angular/core';
import { BoxModule } from '@dirkluijk/foo';

@NgModule({
  imports: [ BoxModule ]
})
export class MyModule {}
```

```html
<foo-box [title]="'Your box'"></foo-box>
```

## Roadmap

* Demonstrate external styling
