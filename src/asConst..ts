const UserRole = {
 Admin: "ADMIN",
 Editor: "EDITOR",
 Viewer: "VIEWER"
} as const

const canEdit = (role: typeof UserRole[keyof typeof UserRole]) =>{
    if(role === UserRole.Admin || role === UserRole.Editor){
        return true;

    }
    return false
}

const editPermissable = canEdit(UserRole.Admin)

console.log(editPermissable);