import { routeModule } from "next/dist/build/templates/app-page";

export function plus(x:number,y:number) {
    return x+y;
  }

export function compound_interest(init_price:number,mounthly_deposite:number, yearly:number, years_of_deposites:number, intrest_rate:number) {
    const net_yearly = yearly - intrest_rate;
    const number_of_months = 12*years_of_deposites;
    const pow_pow = Math.pow(1+(net_yearly/1200),number_of_months)
    const compt=init_price*pow_pow + mounthly_deposite*((pow_pow -1)/net_yearly)*1200;
    return compt
  }

export function saving_result(salery:number, age:number, saving_intrest:number, deposit_interest:number, yearly:number, is_male:boolean = true){
    const male_retriment = 67;
    const female_retiemnt = 65;
    const deposite_percetage = (6+6.5+(100/12))/100;
    let retiemnt = 0;
    if (is_male){
        retiemnt = male_retriment;
    }
    else{
        retiemnt = female_retiemnt;
    }
    const years_of_deposites = retiemnt- age;
    const mounthly_deposite = deposite_percetage*salery*(1-(deposit_interest/100));
    return Math.round(compound_interest(0,mounthly_deposite,yearly,years_of_deposites,saving_intrest))
}

export function monthly_income(salery:number, age:number, saving_intrest:number, deposit_interest:number, yearly:number, is_male:boolean = true){
    return Math.round(saving_result(salery, age, saving_intrest, deposit_interest, yearly, is_male)/200);
}