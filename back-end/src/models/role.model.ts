const getList = () => {
    const role = [{ IdRole: 0, Name: "Admin" }, { IdRole: 1, Name: "Customer" }]
    return role
}

const RoleModel = { getList }
export default RoleModel