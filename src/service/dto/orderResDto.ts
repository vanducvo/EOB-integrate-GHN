export interface FeeDto {
    main_service: number;
    insurance: number;
    station_do: number;
    station_pu: number;
    return: number;
    r2s: number;
}

export interface OrderResDto {
  district_encode: string;
  expected_delivery_time: Date;
  fee: FeeDto;
  order_code: string;
  sort_code: string;
  total_fee: number;
  trans_type: string;
  ward_encode: string;
}