import {ProviceDto} from 'service/dto/provinceDto';
import { DistrictDto } from './dto/districtDto';
import { WardDto } from './dto/wardDto';

export type URIAddress  = {
  uri: string;
  paramName?: string
}

export type URIAddressServiceConfig = {
  province: URIAddress;
  district: URIAddress;
  ward: URIAddress;
};

export interface AddressService {
  getBaseURL(): string;
  getToken(): string;
  getConfig(): URIAddressServiceConfig;
  getAllProvices(): Promise<ProviceDto[]>;
  getAllDistrictsOfProvice(provinceId: number): Promise<DistrictDto[]>;
  getAllWardsOfDistrict(districtId: number): Promise<WardDto[]>;
};
