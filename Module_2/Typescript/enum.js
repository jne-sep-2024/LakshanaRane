// user1=login=>nomal user
// user2=login=>admin user
var Roles;
(function (Roles) {
    Roles[Roles["user"] = 0] = "user";
    Roles[Roles["admin"] = 1] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "laksh",
    email: 'laksh@mail.com',
    password: '123',
    role: Roles.admin
};
var user2 = {
    name: "abc",
    email: 'abc@mail.com',
    password: '1233',
    role: Roles.user
};
var isAdmin = function (user) {
    var email = user.email, role = user.role;
    return role === Roles.admin ? "".concat(email, " is allowed to  edit the website") : "".concat(email, " is  not allowed to  edit the website");
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
