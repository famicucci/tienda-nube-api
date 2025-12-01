export interface Order {
  id: number;
  token: string;
  store_id: number;
  contact_email: string;
  contact_name: string;
  contact_phone: string;
  contact_identification: null;
  billing_name: string;
  billing_phone: string;
  billing_address: string;
  billing_number: string;
  billing_floor: string;
  billing_locality: string;
  billing_zipcode: string;
  billing_city: string;
  billing_province: string;
  billing_country: string;
  billing_customer_type: null;
  billing_business_name: null;
  billing_trade_name: null;
  billing_state_registration: null;
  billing_fiscal_regime: null;
  billing_business_activity: null;
  billing_invoice_use: null;
  billing_document_type: null;
  coupon: any[];
  promotional_discount: PromotionalDiscount;
  subtotal: string;
  discount: string;
  discount_coupon: null;
  discount_gateway: string;
  total: string;
  total_usd: string;
  checkout_enabled: boolean;
  weight: string;
  currency: string;
  language: string;
  gateway: string;
  gateway_id: null;
  gateway_name: string;
  extra: Extra;
  storefront: string;
  note: string;
  owner_note: null;
  created_at: string;
  updated_at: string;
  completed_at: CompletedAt;
  payment_details: PaymentDetails;
  attributes: any[];
  free_shipping_config: null;
  payment_count: null;
  payment_status: string;
  order_origin: null;
  same_billing_and_shipping_address: boolean;
  customer: Customer;
  products: Product[];
  customer_visit: CustomerVisit;
  fulfillments: null;
  number: number;
  cancel_reason: null;
  cancelled_at: null;
  closed_at: string;
  read_at: null;
  status: string;
  gateway_link: null;
  has_shippable_products: boolean;
  shipping_address: Address;
  shipping_status: string;
  paid_at: null;
  client_details: ClientDetails;
  app_id: null;
  total_paid_by_customer_including_fees: string;
  total_paid_by_customer: null;
}

export interface ClientDetails {
  browser_ip: string;
  user_agent: string;
}

export interface CompletedAt {
  date: Date;
  timezone_type: number;
  timezone: string;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  identification: null;
  phone: string;
  note: null;
  default_address: Address;
  addresses: Address[];
  billing_name: string;
  billing_phone: string;
  billing_address: string;
  billing_number: string;
  billing_floor: string;
  billing_locality: string;
  billing_zipcode: string;
  billing_city: string;
  billing_province: string;
  billing_country: string;
  extra: Extra;
  total_spent: string;
  total_spent_currency: string;
  last_order_id: number;
  active: boolean;
  first_interaction: string;
  created_at: string;
  updated_at: string;
  customer_type: string;
  business_name: string;
  trade_name: string;
  state_registration: string;
  fiscal_regime: string;
  invoice_use: string;
  document_type: string;
  business_activity: string;
}

export interface Address {
  address: string;
  city: string;
  country: string;
  created_at: string;
  default: boolean;
  floor: string;
  id: number;
  locality: string;
  name: string;
  number: string;
  phone: string;
  province: string;
  updated_at: string;
  zipcode: string;
  customs?: null;
}

export interface Extra {}

export interface CustomerVisit {
  created_at: string;
  landing_page: string;
  utm_parameters: UtmParameters;
}

export interface UtmParameters {
  utm_campaign: null;
  utm_content: null;
  utm_medium: null;
  utm_source: null;
  utm_term: null;
}

export interface PaymentDetails {
  method: string;
  credit_card_company: null;
  installments: number;
}

export interface Product {
  id: number;
  depth: string;
  height: string;
  name: string;
  name_without_variants: null;
  price: string;
  compare_at_price: string;
  product_id: number;
  image: Image;
  quantity: number;
  free_shipping: boolean;
  weight: string;
  width: string;
  variant_id: number;
  variant_values: any[];
  properties: any[];
  sku: string;
  barcode: null;
  has_promotional_price: boolean;
  promotions: Promotions;
  cost: null;
}

export interface Image {
  id: number;
  product_id: number;
  src: string;
  position: number;
  alt: any[];
  height: number;
  width: number;
  thumbnails_generated: number;
  created_at: string;
  updated_at: string;
}

export interface Promotions {
  percentage_off: number;
}

export interface PromotionalDiscount {
  id: null;
  store_id: number;
  order_id: number;
  created_at: Date;
  total_discount_amount: string;
  contents: any[];
  promotions_applied: any[];
}
