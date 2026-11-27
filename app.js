// Safe login example
function login(username, password) {
    const expectedPassword = process.env.ADMIN_PASSWORD;

    if (username === "admin" && password === expectedPassword) {
        return "Login successful";
    }

    return "Invalid username or password";
}

console.log(login("admin", "test123"));
