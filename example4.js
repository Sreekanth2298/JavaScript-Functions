// Annual Taxable Income	           New Tax Regime	  
// --------------------------------------------------
// Up to Rs.3 lakh	Exempt	            Exempt
// ------------------------------------------------
// Over Rs.3 lakh to Rs. 5 lakh	         5%	
// --------------------------------------------------
// Over Rs.5 lakh to Rs.6 lakh	         5%	
// ---------------------------------------------------
// Over Rs.6 lakh to Rs. 9 lakh	         10%
// ---------------------------------------------------


const taxToBePaid = function  calculateTax(income){
    let tax=0
    function isTaxApplicable(leftAmount){
        if(leftAmount <3){
            return tax;
        }else{
            if(leftAmount > 3 && leftAmount <6){
                leftAmount-=3;
                tax+=0.05* leftAmount;
            }else if(leftAmount >6 && leftAmount <9 ){
                leftAmount-=6;
                tax+=0.1 *leftAmount
            }else{
                leftAmount-=10
                tax+=0.2*leftAmount;
            }
              return isTaxApplicable(leftAmount)
        }
        //return tax

    }
    return isTaxApplicable(income);
    }
    


console.log(taxToBePaid(25));



