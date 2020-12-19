import { OrderServiceImpl } from "../serviceimpl/orderServiceImpl";
import { AddressServiceImpl } from "../serviceimpl/addressServiceImpl";
import { AddressController } from "./addressController";
import { OrderController } from "./orderController";

let addressController = null;
let orderController = null;

export function getAdressController(): AddressController {
  if (!addressController) {


    addressController = new AddressController(
      new AddressServiceImpl(
        'https://dev-online-gateway.ghn.vn/',
        '278194ce-0bc5-11eb-84a9-aef8461f938e',
        {
          province: {
            uri: '/shiip/public-api/master-data/province'
          },
          district: {
            uri: '/shiip/public-api/master-data/district',
            paramName: 'province_id'
          },
          ward: {
            uri: '/shiip/public-api/master-data/ward',
            paramName: 'district_id'
          },
          district_id: 1463,
          shop_id: 75578,
          ward_code: 1463,
          service: {
            uri: '/shiip/public-api/v2/shipping-order/available-services'
          }
        }
      )
    );
  }

  return addressController;
}

export function getOrderController(): OrderController{
  if(!orderController){
    orderController = new OrderController(new OrderServiceImpl(
      'https://dev-online-gateway.ghn.vn/',
      '278194ce-0bc5-11eb-84a9-aef8461f938e',
      {
        create: '/shiip/public-api/v2/shipping-order/create',
        fee: '/shiip/public-api/v2/shipping-order/fee',
        district_id: 1463,
        shop_id: 75578,
        ward_code: 1463
      }
    ))
  }

  return orderController;
}