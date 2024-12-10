export const formatCurrency = (amount: number) => {
    if (!amount) return 0
    return new Intl.NumberFormat("es-VE").format(amount);
};

export const formatAccountNumber = (account: string) => {
    if (!account) return ""
    else if (account.length < 20) return account
    return `${account.substring(0, 4)} **** **** **** ${account.substring(16, 21)}`
};
