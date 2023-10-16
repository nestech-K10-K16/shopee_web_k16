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
