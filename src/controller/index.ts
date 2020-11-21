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
        process.env.BASE_URL,
        process.env.TOKEN,
        {
          province: {
            uri: process.env.URI_PROVINCE
          },
          district: {
            uri: process.env.URI_DISTRICT,
            paramName: process.env.PARAM_NAME_DISTRICT
          },
          ward: {
            uri: process.env.URI_WARD,
            paramName: process.env.PARAM_NAME_WARD
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
      process.env.BASE_URL,
      process.env.TOKEN,
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