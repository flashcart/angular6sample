import { Injector }  from '@angular/core';
import { ConfigService } from './config.service';


export class ConfigComponent {

    constructor(private injector: Injector, public configService: ConfigService) {

    }

    showConfig(){
        // this.configService.getConfig().subscribe((data: Config) => this.config = {
        //     heroesUrl: data['heroesUrl'],
        //       textfile:  data['textfile']
        // });
    }
}