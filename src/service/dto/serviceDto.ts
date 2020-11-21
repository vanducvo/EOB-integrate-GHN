export interface ServiceReqDto {
  shop_id: number;
  from_district: number;
  to_district: number;
}

export interface ServiceResDto {
  service_id: number;
  short_name: string;
  service_type_id: number;
}