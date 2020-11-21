export interface ItemDto {
  name: string;
  code: string;
  quantity: number;
}

export enum RequireNoteDto {
  CHOTHUHANG = 'CHOTHUHANG',
  CHOXEMHANGKHONGTHU= 'CHOXEMHANGKHONGTHU',
  KHONGCHOXEMHANG='KHONGCHOXEMHANG',
}

export enum PayementTypeDto {
  SELLER = 1,
  BUYER = 2
}

export enum ServiceTypeDto {
  AIR = 1,
  ROAD = 2
}

export interface OrderReqDto {
  to_name: string;
  to_phone: string;
  to_address: string;
  to_ward_code: string;
  to_district_id: number;
  return_phone?: string;
  return_address?: string;
  return_district_id?: number;
  return_ward_code?: string;
  client_order_code?: string;
  cod_amount?: number;
  content: string;
  weight: number;
  length: number;
  width: number;
  height: number;
  pick_station_id?: number;
  deliver_station_id?: number;
  insurance_value?: number;
  coupon?: string;
  service_type_id?: ServiceTypeDto;
  service_id?: number;
  payment_type_id?: PayementTypeDto; 
  note?: string;
  required_note: RequireNoteDto;
  items: ItemDto[]
}