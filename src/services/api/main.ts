import {HttpClient} from './httpClient';
import { Country } from './types';

export default class MainApi extends HttpClient {
  private static classInstance?: MainApi;

  private constructor() {
    // super('https://api.awesome-site.com');
    super('https://restcountries.eu/rest/v2');
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new MainApi();
    }

    return this.classInstance;
  }

  public getAllCountries = () => this.instance.get<Country[]>('/all');

  public searchCountry = async (name: String) => {
    console.log("fetching,...", name)
    return  await this.instance.get<Country[]>(`/name/${name}`);
  }
  public searchCountryByFullName = (name: String) => this.instance.get<Country[]>(`/name/${name}?fullText=true`);

  public getUser = (id: string) => this.instance.get<Country>(`/users/${id}`);
}
