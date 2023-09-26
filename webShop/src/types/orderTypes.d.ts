type Name = {
  given_name?: string;
  surname?: string;
};

type Payer = {
  payer_id?: string;
  email_address?: string;
  name?: Name;
  address?: string;
};

type PurchaseUnits = {
  amount?: string;
  description?: string;
};

type PaymentDetails = {
  id?: string;
  create_time?: string;
  payer?: Payer;
  purchase_units?: PurchaseUnits;
};

type HomeAddress = {
  province?: string;
  canton?: string;
  district?: string;
  exact_address?: string;
};

type UserData = {
  name?: string;
  address?: string;
  phone?: string;
  user_id?: string;
};

type PurchaseDetailsProps = {
  user_data: UserData;
  home_address: HomeAddress;
  payment_details: PaymentDetails;
  products: string[]
};
