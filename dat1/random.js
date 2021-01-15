function get_rand_img() {
    var arr = ["037c5e50bb0ccbccbe101df1464b02fccb230c3e",
        "26672905d1805939f987180ce04eb43c38df2040",
        "1b9755c872da25ba09d01095bc25cb5bf280b4bd",
        "ad81e75b395f89c2d4e2cd7eceb8b67ec539b891",
        "92066e954769c8e371aa2e3f230cab900a8411d1",
        "4509581a34d67a855a40a11e3fa9c88ea8443556",
        "723b177b11cd7081b7eea7c95dece12cd725f34e",
        "214d792e67d4867d0784c2a938ff015e2d97796f",
        "bf587ec3069ad0e132b83cd61ec9ce6220aebba0",
        "43c16a6b0c8f525a4ba092bb34815550fa049fe9",
        "35ec51bb9b8bdd5108c7bb7b8e35007a2507346b",
        "192ad929ba470b967ea627b32db0ec56c1efd9f6",
        "1633c316f8d53db9f2e1605d62b2b11deb39357a",
        "a97c187f5648de53eb0bf273df6767dcdb36856e",
        "7dacc4059a710d26e40bd1c054a8ec2d6ec93f80",
        "f870101953ecbdf1fd829e14de82e8a10ffa95cc"
    ];
    var addr;
    do {
        addr = "https://i0.hdslb.com/bfs/album/" + arr[Math.floor((Math.random() * arr.length))] + ".png";
    } while (document.getElementById("randimg").src == addr);
    document.getElementById("randimg").src = addr;
    document.getElementById("t").height = "0";
}