const male_retriment = 67;
const female_retiemnt = 65;
const mounth_coefficient = 200;
const employee_salary_deposite = 6.5;
const employer_salary_deposite = 6;
const compensation_deposite = 100 / 12;
const initial_amount = 0;
const MAX_YEARLY = 8;
const MIN_YEARLY = 2;

function compound_interest(init_price: number, monthly_deposite: number, yearly: number, years_of_deposites: number, intrest_rate: number) {
    // This is the basic compound interest calculator
    /**
     * This is the basic compound interest calculator
     * init_price: The initial value in the fund
     * monthly_deposite: How many money deopsite at each month
     * yearly: The yearly rate extimated
     * years_of_deposite: how many years of intrest and deposite there to calculate
     * interest_rate: the interest rate taken from the saving
     */
    const net_yearly = yearly - intrest_rate;
    const number_of_months = 12 * years_of_deposites;
    const pow_pow = Math.pow(1 + (net_yearly / 1200), number_of_months)
    const compt = init_price * pow_pow + monthly_deposite * ((pow_pow - 1) / net_yearly) * 1200;
    return compt
}

export function saving_result(salery: number, age: number, saving_intrest: number, deposit_interest: number, yearly: number, is_male: boolean = true) {
    const deposite_percetage = (employee_salary_deposite + employer_salary_deposite + compensation_deposite) / 100;
    let retiemnt = 0;
    if (is_male) {
        retiemnt = male_retriment;
    }
    else {
        retiemnt = female_retiemnt;
    }
    const years_of_deposites = retiemnt - age;
    const mounthly_deposite = deposite_percetage * salery * (1 - (deposit_interest / 100));
    return Math.round(compound_interest(initial_amount, mounthly_deposite, yearly, years_of_deposites, saving_intrest))
}

export function monthly_income(salery: number, age: number, saving_intrest: number, deposit_interest: number, yearly: number, is_male: boolean = true) {
    return Math.round(saving_result(salery, age, saving_intrest, deposit_interest, yearly, is_male) / mounth_coefficient);
}

function extract_yearly_from_slider(yearly_slider: number) {
    return MIN_YEARLY + yearly_slider * (MAX_YEARLY - MIN_YEARLY);
}

function extract_deposite_interest_from_slider(interest_slider: number) {
    return 1.5;
}

function extract_saving_interest_from_slider(interest_slider: number) {
    return 0.1;
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