// type UserRole = 'Admin' | "Editor" | "Viewer"
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Editor"] = "Editor";
    UserRole["Viewer"] = "Viewer";
})(UserRole || (UserRole = {}));
var canEdit = function (role) {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true;
    }
    return false;
};
var editPermissable = canEdit(UserRole.Admin);
console.log(editPermissable);
