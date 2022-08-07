class User {
    constructor(id, image, email, password) {
        this.id = id.toString();
        this.image = image;
        this.email = email;
        this.password = password;
    }
}

export default User;