import User from '../models/user';

async function createUser(user: User): Promise<any> {
    try {

        const newUser =await  User.create(user);
        if(newUser){
            return newUser; 
        }
       
}catch(err: any){
    throw err
}

}

// Read
async function getUsers(): Promise<any[]> {

    const users = await User.findAll();
    return users;

}

// Update
async function updateUser(user:User): Promise<any> {

    try {
        const userEntity = await User.findByPk(user.id);
        if (!userEntity) {
            return "User not found !"
        }
        await userEntity.update(user);
        return "User updated successfully";
    }catch (err:any) {
        return `Error updating user due to ${err.message}`;
  }
}

// Delete
async function deleteUser(id: number): Promise<any> {

     try {
        const userEntity = await User.findByPk(id);
        if (!userEntity) {
            return "User not found !"
        }
        await userEntity.destroy();
        return "User updated successfully";
    }catch (err:any) {
        return `Error updating user due to ${err.message}`;
  }

}

export { createUser, getUsers, updateUser, deleteUser };