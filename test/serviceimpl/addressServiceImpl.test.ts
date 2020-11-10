import { AddressService, URIAddressServiceConfig } from 'service/addressService';
import { DistrictDto } from 'service/dto/districtDto';
import { ProviceDto } from 'service/dto/provinceDto';
import { WardDto } from 'service/dto/wardDto';
import { AddressServiceImpl } from 'serviceimpl/addressServiceImpl';

describe('Address Service - GHN', () => {
  const token = '278194ce-0bc5-11eb-84a9-aef8461f938e';
  const baseUrl = 'https://dev-online-gateway.ghn.vn/';
  const provinceUri = '/shiip/public-api/master-data/province';
  const districtUri = '/shiip/public-api/master-data/district';
  const districtParamName = 'province_id';
  const wardUri = '/shiip/public-api/master-data/ward';
  const wardParamName = 'district_id';
  const addressService: AddressService = new AddressServiceImpl(
    baseUrl,
    token,
    {
      province: {
        uri: provinceUri,
      },
      district: {
        uri: districtUri,
        paramName: districtParamName
      },
      ward: {
        uri: wardUri,
        paramName: wardParamName
      },
    }
  );

  it('shoud set base url', () => {
    expect(addressService.getBaseURL()).toEqual(baseUrl);
  });

  it('should set token', () => {
    expect(addressService.getToken()).toEqual(token);
  });

  it('should set config', () => {
    const config: URIAddressServiceConfig = addressService.getConfig();


    expect(config.province.uri).toEqual(provinceUri);
    expect(config.province.paramName).toBeUndefined();
    expect(config.district.uri).toEqual(districtUri);
    expect(config.district.paramName).toEqual(districtParamName);
    expect(config.ward.uri).toEqual(wardUri);
    expect(config.ward.paramName).toEqual(wardParamName);
  });

  it('should have provinces', async () => {
    const provices: ProviceDto[] = await addressService.getAllProvices();

    expect(provices.length).toBeGreaterThan(0);
  });

  it('should have district', async () => {
    const provinceId: number = 202;
    const districts: DistrictDto[] = await addressService
      .getAllDistrictsOfProvice(provinceId);

    expect(districts.length).toBeGreaterThan(0);
    expect(districts[0].ProvinceID).toEqual(provinceId);
  });

  it('should have wards', async () => {
    const districtId = 1442;
    const wards: WardDto[] = await addressService
      .getAllWardsOfDistrict(districtId);

    expect(wards.length).toBeGreaterThan(0);
    expect(wards[0].DistrictID).toEqual(districtId);
  });

});