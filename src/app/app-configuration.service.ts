import {Injectable} from "@angular/core";

@Injectable()
export class AppConfiguration {
  public API_URL = `//${window.location.hostname}:8080`;
}
