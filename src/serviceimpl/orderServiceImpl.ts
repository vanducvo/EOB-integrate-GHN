import Axios from "axios";
import {FeeEstimateReqDto, FeeEstimateResDto } from "../service/dto/feeEsitmateDto";
import { OrderReqDto } from "../service/dto/orderReqDto";
import { FeeDto, OrderResDto } from "../service/dto/orderResDto";
import MessageResponse from "../service/messageReponse";
import { OrderService, URIOrderServiceConfig } from "../service/orderService";

export class OrderServiceImpl implements OrderService {
  private token: string;
  private baseUrl: string;
  private config: URIOrderServiceConfig;

  public constructor(
    baseUrl: string,
    token: string,
    config: URIOrderServiceConfig
  ) {
    this.token = token;
    this.baseUrl = baseUrl;
    this.config = config;
  }

  public getToken(): string {
    return this.token;
  }

  public getBaseUrl(): string {
    return this.baseUrl;
  }

  public getConfig(): URIOrderServiceConfig {
    return { ...this.config };
  }

  public async createOrder(order: OrderReqDto): Promise<OrderResDto> {
    const createOrderUrl = new URL(this.config.create, this.baseUrl).href;
    const req = await Axios.post<MessageResponse<OrderResDto>>(
      createOrderUrl, order, {
      headers: {
        Token: this.token
      }
    });
    return this.ExtractData<OrderResDto>(req);
  }

  async getFee(basic: FeeEstimateReqDto): Promise<FeeEstimateResDto> {
    const feeUrl = new URL(this.config.fee, this.baseUrl).href;
    const req = await Axios.post<MessageResponse<FeeEstimateResDto>>(
      feeUrl,
      basic
      ,
      {
        headers: {
          Token: this.token,
          ShopId: this.config.shop_id
        }
      });
    return this.ExtractData<FeeEstimateResDto>(req);
  }


  private ExtractData<T>(req): T {
    return req.data.data;
  }
}