import { FeeEstimateReqDto, FeeEstimateResDto } from "../service/dto/feeEsitmateDto";
import { OrderReqDto } from "../service/dto/orderReqDto";
import { OrderResDto } from "../service/dto/orderResDto";
import { OrderService } from "../service/orderService";

export class OrderController {
  private orderService: OrderService;
  constructor(orderService: OrderService){
    this.orderService = orderService;
  }

  async createOrder(order: OrderReqDto): Promise<OrderResDto> {
    return this.orderService.createOrder(order);
  }
  async getFee(basic: FeeEstimateReqDto): Promise<FeeEstimateResDto>{
    return this.orderService.getFee(basic);
  }
}