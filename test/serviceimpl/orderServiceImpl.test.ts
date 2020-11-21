import { OrderReqDto, RequireNoteDto, ServiceTypeDto } from "service/dto/orderReqDto";
import { OrderResDto } from "service/dto/orderResDto";
import { URIOrderServiceConfig } from "service/orderService";
import { OrderServiceImpl } from "serviceimpl/orderServiceImpl";

describe('Order Service - GHN', () => {
  const token = '278194ce-0bc5-11eb-84a9-aef8461f938e';
  const baseUrl = 'https://dev-online-gateway.ghn.vn/';
  const create = '/shiip/public-api/v2/shipping-order/create';
  const orderService: OrderServiceImpl = new OrderServiceImpl(
    baseUrl,
    token,
    {
      create
    }
  );

  const data: OrderReqDto = {
    "payment_type_id": 2,
    "note": "Tintest 123",
    "required_note": RequireNoteDto.KHONGCHOXEMHANG,
    "client_order_code": "",
    "to_name": "TinTest124",
    "to_phone": "0987654321",
    "to_address": "72 Thành Thái, Phường 14, Quận 10, Hồ Chí Minh, Vietnam",
    "to_ward_code": "20107",
    "to_district_id": 1442,
    "cod_amount": 200000,
    "content": "ABCDEF",
    "weight": 200,
    "length": 15,
    "width": 15,
    "height": 15,
    "pick_station_id": 0,
    "deliver_station_id": 0,
    "insurance_value": 2000000,
    "service_id": 1,
    "service_type_id": 2,
    "items": [
      {
        "name": "quần dài",
        "code": "sip123",
        "quantity": 1
      }
    ]
  };

  it('shoud set base url', () => {
    expect(orderService.getBaseUrl()).toEqual(baseUrl);
  });

  it('should set token', () => {
    expect(orderService.getToken()).toEqual(token);
  });

  it('should set config', () => {
    const config: URIOrderServiceConfig = orderService.getConfig();

    expect(config.create).toEqual(create);
  });

  it('should create order', async () => {

    const respond: OrderResDto = await orderService.createOrder(data);

    expect(respond).toBeTruthy();
  });
});