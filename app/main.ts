    /**
 * Created by lapachuka on 9/18/16.
 */
    import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
    import { AppModule } from './app.module';
    const platform = platformBrowserDynamic();
    platform.bootstrapModule(AppModule);