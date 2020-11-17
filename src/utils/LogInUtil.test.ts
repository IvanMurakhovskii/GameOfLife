import { getUsername, isUserLoggedIn, logIn, logOut } from "./LogInUtil";


const setItem = jest.spyOn(Storage.prototype, "setItem");
const getItem = jest.spyOn(Storage.prototype, "getItem");
const removeItem = jest.spyOn(Storage.prototype, "removeItem");

describe("LoginUtils", () => {
    it("make login should save usename to localstorage", async () => {
        await logIn("username");
        expect(setItem).toHaveBeenCalledWith("username", "username");
    });

    it("make logout should remove usename from localstorage", async () => {
        await logOut();
        expect(removeItem).toHaveBeenCalledWith("username");
    });

    it("getUsername should return usename from localstorage", async () => {
        getItem.mockReturnValueOnce(null);
        const username = await getUsername();
        expect(getItem).toHaveBeenCalledWith("username");
        expect(getItem).toHaveBeenCalledTimes(1);
        expect(username).toBe("");
    });

    it("isUserLoggedIn should return true", async () => {
        await logIn("username");
        expect(isUserLoggedIn()).toBeTruthy();
    });
});