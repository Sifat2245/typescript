// type UserRole = 'Admin' | "Editor" | "Viewer"
enum UserRole {
 Admin = "Admin",
 Editor = "Editor",
 Viewer = "Viewer"
}

const canEdit = (role: UserRole) =>{
    if(role === UserRole.Admin || role === UserRole.Editor){
        return true;

    }
    return false
}

const editPermissable = canEdit(UserRole.Admin)

console.log(editPermissable);