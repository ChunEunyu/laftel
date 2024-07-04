type Today = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const getCurrentDayOfWeek = (): Today => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dayOfWeek as Today; // 타입 단언을 사용하여 'Today' 타입으로 간주
};
