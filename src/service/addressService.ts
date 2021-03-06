import {ProviceDto} from 'service/dto/provinceDto';
import { DistrictDto } from './dto/districtDto';
import { ServiceResDto } from './dto/serviceDto';
import { WardDto } from './dto/wardDto';

export type URIAddress  = {
  uri: string;
  paramName?: string
}

export type URIAddressServiceConfig = {
  province: URIAddress;
  district: URIAddress;
  ward: URIAddress;
  service?: URIAddress;
  shop_id?: number;
  district_id?: number;
  ward_code?: number
};

export interface AddressService {
  getAllProvices(): Promise<ProviceDto[]>;
  getAllDistrictsOfProvice(provinceId: number): Promise<DistrictDto[]>;
  getAllWardsOfDistrict(districtId: number): Promise<WardDto[]>;
  getAvailableServices(toDistrict: number): Promise<ServiceResDto[]>;
};
