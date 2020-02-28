new Vue({

    el: "#hold-text",
    data: {

        rate: null,
        principal: null,
        time: null,
        message: '',
    },
    methods: {

        // validate: function(num) {
        //     if (num < 0 || isNaN(num)) return this.message = "Enter a valid Input";
        //     return parseFloat(num);
        // },
        calculate: function(rate, time, princ) {
            let actualAmount = (princ * rate * time) / 100;
            return this.message = ` AMOUNT:    # ${actualAmount.toFixed(2)}`;

        },
    }

});