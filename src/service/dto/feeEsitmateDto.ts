export interface FeeEstimateReqDto {
  service_id: number;
  to_district_id: number,
  to_ward_code: string;
  height: number;
  length: number;
  weight: number;
  width: number;
  insurance_value: number;
  coupon: string | null;
}

export interface FeeEstimateResDto {
  total: number
  service_fee: number
  insurance_fee: number
  pick_station_fee: number
  coupon_value: number
  r2s_fee: number
}