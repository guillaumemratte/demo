import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateLoader, TranslateModule, TranslatePipe} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import {EffectsModule} from '@ngrx/effects';
import {SearchEffects} from '@store/effects/search.effects';
import {StoreModule} from '@ngrx/store';
import {appReducers, metaReducers} from '@store/reducers/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot(appReducers, { metaReducers }),
    EffectsModule.forRoot([
      SearchEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  exports: [
    HttpClientModule,
    TranslateModule,
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('Coremodule is already loaded. Import only once in AppModule');
    }
  }
}
