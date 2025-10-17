function calculator() {
    let s1, s2, result;
    return {
        init: function(selector1, selector2, resultSelector) {
            s1 = document.querySelector(selector1);
            s2 = document.querySelector(selector2);
            result = document.querySelector(resultSelector);
        },

        add: function() {
            result.value = Number(s1.value) + Number(s2.value);
        },

        subtract: function() {
            result.value = Number(s1.value) - Number(s2.value);
        }
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');