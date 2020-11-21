import { FeeEstimateReqDto, FeeEstimateResDto } from "./dto/feeEsitmateDto";
import { OrderReqDto } from "./dto/orderReqDto";
import { OrderResDto } from "./dto/orderResDto";

export type URIOrderServiceConfig = {
  create: string;
  fee?: string;
  shop_id?: number;
  district_id?: number;
  ward_code?: number
}

export interface OrderService {
  createOrder(order: OrderReqDto): Promise<OrderResDto>;
  getFee(basic: FeeEstimateReqDto): Promise<FeeEstimateResDto>;
}