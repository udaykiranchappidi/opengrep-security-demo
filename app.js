// Login example with a security mistake
function login(username, password) {
    const expectedPassword = "admin123";

    if (username === "admin" && password === expectedPassword) {
        return "Login successful";
    }

    return "Invalid username or password";
}

console.log(login("admin", "admin123"));
