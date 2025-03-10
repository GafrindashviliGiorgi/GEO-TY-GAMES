let big = document.querySelector(".k2")


let x = [
    {
        image:"h1ta.jpg",
        h3:"თამაში H1taზე",
        p:"თამაში სადაც უნდა გამოიყენო შენი IQ, გქქვს მაღალი IQ",
    }, {
        image:"HungruMan.jpg",
        h3:"თამაშიHungruManებზე ",
        p:"თამაში სადაც უნდა შეჭამო ბევრი ხინკალი",
    },{
        image:"NikaTmg.jpg",
        h3:"თამაში Nika tmgზე",
        p:"თამაში სადაც რანდომ რიცხვის გამოცნობაზე გემატება გამომწერები",
    },{
        image:"akeb.jpg",
        h3:"თამაში akebაზე",
        p:"თამაში სადაც უნდა განავითარო შენი მიზანი",
    },{
        image:"NikaDotiashvili.jpg",
        h3:"თამაში Nika Dotiashvilზე",
        p:"თამაში სადაც უნდა განავითარო ინგლისური",
    },
    {
        image:"Zipper.jpg",
        h3:"თამაში Zipperზე",
        p:"თამაში სადაც უნდა შეჭრა ხალხს თმები და დაამყარო რეკორდი",
        link:"zipper.html"
    }
]

x.forEach((item) => {
    big.innerHTML += `        <div class="k1" onclick="ku()">
            <img src="${item.image}" alt="">
            <div style="position: relative; top: 10px; font-size: 10px; text-align: center;">
                <h3>${item.h3}</h3>
                <p>${item.p}</p>

            </div>
            <button class="ku"><a href=${item.link}>გადასვლა</a></button>
        </div>`

})