function get_rand_img()
{
    var arr = ["43c16a6b0c8f525a4ba092bb34815550fa049fe9",
    "35ec51bb9b8bdd5108c7bb7b8e35007a2507346b",
    "192ad929ba470b967ea627b32db0ec56c1efd9f6",
    "1633c316f8d53db9f2e1605d62b2b11deb39357a",
    "a97c187f5648de53eb0bf273df6767dcdb36856e",
    "7dacc4059a710d26e40bd1c054a8ec2d6ec93f80",
    "f870101953ecbdf1fd829e14de82e8a10ffa95cc"
    ];
    var addr = "https://i0.hdslb.com/bfs/album/" + arr[Math.floor((Math.random()*arr.length))] + ".png";
    document.getElementById("randimg").src = addr;
    document.getElementById("t").height = "0";
}

