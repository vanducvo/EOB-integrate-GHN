import { URIAddressServiceConfig, AddressService, URIAddress } from "service/addressService";
import { ProviceDto } from "service/dto/provinceDto";
import axios from 'axios';
import MessageResponse from "service/messageReponse";
import { URL } from 'url';
import { DistrictDto } from "service/dto/districtDto";
import { WardDto } from "service/dto/wardDto";

export class AddressServiceImpl implements AddressService {
  private token: string;
  private baseUrl: string;
  private config: URIAddressServiceConfig;

  public constructor(
    baseUrl: string,
    token: string,
    config: URIAddressServiceConfig
  ) {
    this.token = token;
    this.baseUrl = baseUrl;
    this.config = config;
  }

  private queryFrom(uriAddress: URIAddress, value?: string): URL {
    const url = new URL(uriAddress.uri, this.baseUrl);
    if (uriAddress.paramName) {
      url.searchParams.append(uriAddress.paramName, value);
    }

    return url;
  }

  private async getData<T>(url: URL) {
    return await axios.get<MessageResponse<T>>(url.href, {
      headers: {
        Token: this.token
      }
    });
  }

  private extractData<T>(res): T {
    return res.data.data;
  }

  public getToken(): string {
    return this.token;
  }

  public getBaseURL(): string {
    return this.baseUrl;
  }

  public getConfig(): URIAddressServiceConfig {
    return { ...this.config };
  }

  public async getAllProvices(): Promise<ProviceDto[]> {
    const url = this.queryFrom(this.config.province);
    const res = await this.getData<ProviceDto[]>(url);
    return this.extractData<ProviceDto[]>(res);
  }

  public async getAllDistrictsOfProvice(
    provinceId: number
  ): Promise<DistrictDto[]> {
    const url = this.queryFrom(this.config.district, provinceId.toString());
    const res = await this.getData<DistrictDto[]>(url);
    return this.extractData<DistrictDto[]>(res);
  }

  public async getAllWardsOfDistrict(districtId: number): Promise<WardDto[]> {
    const url = this.queryFrom(this.config.ward, districtId.toString());
    const res = await this.getData<WardDto[]>(url);
    return this.extractData<WardDto[]>(res);;
  }

}
