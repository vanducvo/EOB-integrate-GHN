import { AddressController } from "controller/addressController";
import { District } from "controller/dao/district";
import { Ward } from "controller/dao/ward";
import { AddressServiceImpl } from "serviceimpl/addressServiceImpl";

describe('Address Controller', () => {
  let adressController: AddressController;
  beforeAll(() => {
    const addressService = new AddressServiceImpl(null, null, null);

    // stub getAllProvices
    addressService.getAllProvices = () => Promise.resolve([{
      ProviceID: 0,
      ProviceName: '0',
      Code: '0'
    },]
    );


    // stub getAllDistrictsOfProvice
    addressService.getAllDistrictsOfProvice = (provinceId) => Promise.resolve([
      {
        DistrictID: 0,
        ProvinceID: provinceId,
        DistrictName: '',
        Code: '0',
        Type: '0',
        SupportType: '0'
      }
    ]);

    // stub getAllWardsOfDistrict
    addressService.getAllWardsOfDistrict = (districtId: number) => Promise.resolve([
      {
        WardCode: '0',
        DistrictID: districtId,
        WardName: '0'
      }
    ]);



    adressController = new AddressController(
      addressService
    );
  });

  it('should have provinces', async () => {
    const provinces = await adressController.getAllProvinces();

    expect(provinces.length).toBeGreaterThan(0);
  });

  it('should have districts', async () => {
    const provinceId = 202;
    const districts: District[] = await adressController
      .getAllDistrictsOfProvince(provinceId);

    expect(districts.length).toBeGreaterThan(0);
    expect(districts[0].id).toEqual(0);
  });

  it('should have wards', async () => {
    const districtId = 1442;
    const wards: Ward[] = await adressController
      .getAllWardsOfDistrict(districtId);

    expect(wards.length).toBeGreaterThan(0);
    expect(wards[0].id).toEqual(0);
  })
});