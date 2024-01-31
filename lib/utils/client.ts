const MALE_RETIREMENT = 67;
const FEMALE_RETIREMENT = 65;
const MONTH_COEFFICIENT = 200;
const EMPLOYEE_SALARY_DEPOSITE = 6.5;
const EMPLOYER_SALARY_DEPOSITE = 6;
const COMPENSATION_DEPOSITE = 100 / 12;
const INITIAL_AMOUNT = 0;
const MAX_YEARLY = 8;
const MIN_YEARLY = 2;
const MAX_DEPOSITE_INTEREST = 2;
const MIN_DEPOSITE_INTEREST = 1;
const MAX_SAVING_INTEREST = 1;
const MIN_SAVING_INTEREST = 0.01;


function compound_interest(init_amount: number, monthly_deposite: number, yearly: number, years_of_deposites: number, intrest_rate: number) {
    /**
     * This is the basic compound interest calculator
     * init_amount: The initial value in the fund
     * monthly_deposite: How many money deopsite at each month
     * yearly: The yearly rate extimated
     * years_of_deposite: how many years of intrest and deposite there to calculate
     * interest_rate: the interest rate taken from the saving
     */
    const net_yearly = yearly - intrest_rate;
    const number_of_months = 12 * years_of_deposites;
    const pow_pow = Math.pow(1 + (net_yearly / 1200), number_of_months)
    const compt = init_amount * pow_pow + monthly_deposite * ((pow_pow - 1) / net_yearly) * 1200;
    return compt
}

export function saving_result(salery: number, age: number, saving_intrest: number, deposit_interest: number, yearly: number, is_male: boolean = true) {
    /**
     * This function calculate the total saving a persion will have when he retired, that is using the compound interest mechanism.
     * salary: person monthly salary
     * age: person current age
     * saving_interest: the interest collected from the person saving in the pension fund
     * deposite_interest: the interest collected from the person deposited to the fund
     * yearly: estimeted yearly yield
     * is_male: whether the person is male or female
     */
    const deposite_percetage = (EMPLOYEE_SALARY_DEPOSITE + EMPLOYER_SALARY_DEPOSITE + COMPENSATION_DEPOSITE) / 100;
    let retiemnt = 0;
    if (is_male) {
        retiemnt = MALE_RETIREMENT;
    }
    else {
        retiemnt = FEMALE_RETIREMENT;
    }
    const years_of_deposites = retiemnt - age;
    const mounthly_deposite = deposite_percetage * salery * (1 - (deposit_interest / 100));
    return Math.round(compound_interest(INITIAL_AMOUNT, mounthly_deposite, yearly, years_of_deposites, saving_intrest))
}

export function monthly_income(salery: number, age: number, saving_intrest: number, deposit_interest: number, yearly: number, is_male: boolean = true) {
    /**
     * This function calculate the monthly income a persion will get when he retired, that is using saving result calculator.
     * salary: person monthly salary
     * age: person current age
     * saving_interest: the interest collected from the person saving in the pension fund
     * deposite_interest: the interest collected from the person deposited to the fund
     * yearly: estimeted yearly yield
     * is_male: whether the person is male or female
     */
    return Math.round(saving_result(salery, age, saving_intrest, deposit_interest, yearly, is_male) / MONTH_COEFFICIENT);
}

function extract_value_from_slider(slider:number, max_value:number, min_value:number){
    return min_value + slider*Math.abs(max_value-min_value)
}

function extract_yearly_from_slider(yearly_slider: number) {
    return extract_value_from_slider(yearly_slider, MAX_YEARLY, MIN_YEARLY);
}

export function extract_deposite_interest_from_slider(interest_slider: number) {
    return extract_value_from_slider(interest_slider, MAX_DEPOSITE_INTEREST, MIN_DEPOSITE_INTEREST);
}

export function extract_saving_interest_from_slider(interest_slider: number) {
    return extract_value_from_slider(-interest_slider, MIN_SAVING_INTEREST, MAX_SAVING_INTEREST);;
}

export function saving_by_by_sliders(salery: number, age: number, intrest_slider: number, yearly_slider: number, is_male: boolean = true) {
    const yearly = extract_yearly_from_slider(yearly_slider);
    const deposite_interest = extract_deposite_interest_from_slider(intrest_slider);
    const saving_interest = extract_saving_interest_from_slider(intrest_slider);
    return saving_result(salery, age, saving_interest, deposite_interest, yearly, is_male);
}

export function monthly_income_by_by_sliders(salery: number, age: number, intrest_slider: number, yearly_slider: number, is_male: boolean = true) {
    const yearly = extract_yearly_from_slider(yearly_slider);
    const deposite_interest = extract_deposite_interest_from_slider(intrest_slider);
    const saving_interest = extract_saving_interest_from_slider(intrest_slider);
    return monthly_income(salery, age, saving_interest, deposite_interest, yearly, is_male);
}