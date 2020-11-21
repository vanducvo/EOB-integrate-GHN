import { ServiceResDto } from '../service/dto/serviceDto';
import { AddressService } from '../service/addressService';
import { DistrictDto } from '../service/dto/districtDto';
import { ProviceDto } from '../service/dto/provinceDto';
import { WardDto } from '../service/dto/wardDto';
import { District } from './dao/district';
import { Province } from './dao/province';
import { Ward } from './dao/ward';

export class AddressController {
  private addressService: AddressService;

  public constructor(addressService: AddressService) {
    this.addressService = addressService;
  }

  private provinceDto2Province(province: ProviceDto): Province {
    return { id: province.ProvinceID, name: province.ProvinceName };
  }
  
  private districtDto2District(district: DistrictDto): District {
    return { id: district.DistrictID, name: district.DistrictName };
  }
  
  public async getAllProvinces(): Promise<Province[]> {
    const provinces: ProviceDto[] = await this.addressService.getAllProvices();
    return provinces.map(this.provinceDto2Province);
  }

  public async getAllDistrictsOfProvince(provinceId: number): Promise<District[]> {
    const districts: DistrictDto[] = await this.addressService
      .getAllDistrictsOfProvice(provinceId);
    return districts.map(this.districtDto2District)
  }

  public async getAllWardsOfDistrict(districtId: number): Promise<Ward[]> {
    const wards: WardDto[] = await this.addressService
      .getAllWardsOfDistrict(districtId);

    return wards.map((ward) => {
      return {
        id: ward.WardCode,
        name: ward.WardName
      };
    });
  }

  async getAvailableServices(toDistrict: number): Promise<ServiceResDto[]> {
    const services = await this.addressService.getAvailableServices(toDistrict);
    return services.filter(service => service.short_name !== "");
  }

}