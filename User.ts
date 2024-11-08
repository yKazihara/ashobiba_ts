class User {
    constructor(public userName: string, public userAddress: string) {
        console.log("constructor");
    }
    getInfo() : string {
        return "名前：" + this.userName + "　住所：" + this.userAddress;
    }
};
var user = new User('山田', '京都府');
var str = user.getInfo();
console.log(str); // 名前：山田　住所：京都府
