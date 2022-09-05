function checkCashRegister(price, cash, cid) {
    let change = cash * 100 - price * 100;
    let cidTotal = 0;
    for (let elem of cid) {
        cidTotal += elem[1] * 100;
    }
    if (change > cidTotal) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (change === cidTotal) {
        return { status: "CLOSED", change: cid };
    }
    else {
        cid = cid.reverse();
        let moneyUnit = {
            "ONE HUNDRED": 10000,
            "TWENTY": 2000,
            "TEN": 1000,
            "FIVE": 500,
            "ONE": 100,
            "QUARTER": 25,
            "DIME": 10,
            "NICKEL": 5,
            "PENNY": 1
        };
        let answer = [];
        for (let elem of cid) {
            let accumulator = [elem[0], 0];
            elem[1] = elem[1] * 100;
            while (change >= moneyUnit[elem[0]] && elem[1] > 0) {
                change -= moneyUnit[elem[0]];
                elem[1] -= moneyUnit[elem[0]];
                accumulator[1] += moneyUnit[elem[0]] / 100;
            }
            if (accumulator[1] > 0) {
                answer.push(accumulator);
            }
        }
        if (change > 0) {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        }
        return { status: "OPEN", change: answer }
    }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));