export const formProductManage = [
  {
    name: "IdProduct",
    readOnly: true,
  },
  {
    name: "Name",
  },
  {
    name: "Amount",
    type: "number",
  },
  {
    name: "Price",
    type: "number",
  },
  {
    name: "Image",
    type: "file",
  },
];

export const formUserManage = [
  {
    name: "Email",
    readOnly: true,
    type: "email",
  },
  {
    name: "Password",
    type: "password",
  },
  {
    name: "Name",
  },
];

export const formLoginData = [
  {
    name: "Email",
    type: "email",
  },
  {
    name: "Password",
    type: "password",
  },
];

export const formRegisterData = [
  {
    name: "Name",
    placeholder: "Full name",
  },
  {
    name: "Email",
    type: "email",
    placeholder: "Email",
  },
  {
    name: "Password",
    type: "password",
    placeholder: "Password",
  },
  {
    name: "RePassword",
    type: "password",
    placeholder: "Confirm password",
  },
];

export const formCustomerManageData = [
  {
    name: "Name",
    notEmpty: "(*)",
  },
  {
    name: "CompanyName",
  },
  {
    name: "Country",
  },
  {
    name: "Address",
    notEmpty: "(*)",
  },
  {
    name: "PostCode",
  },
  {
    name: "City",
  },
  {
    name: "Phone",
    type: "tel",
    placeholder: "000 000 0000",
    pattern: "[0-9]{3} [0-9]{3} [0-9]{4}",
    maxlength: "12",
    notEmpty: "(*)",
  },
  {
    name: "Email",
    type: "email",
  },
];

export const formBillDetailsData = [
  {
    name: "Name",
    placeholder: "Full Name",
  },
  {
    name: "CompanyName",
    placeholder: "Company Name",
  },
  {
    name: "Country",
    placeholder: "Country *",
  },
  {
    name: "Address",
    placeholder: "Street Address *",
  },
  {
    name: "PostCode",
    placeholder: "Postcode / ZIP *",
  },
  {
    name: "City",
    placeholder: "Town / City *",
  },
  {
    name: "Phone",
    placeholder: "Phone *",
  },
  {
    name: "Email",
    placeholder: "Email *",
  },
];
