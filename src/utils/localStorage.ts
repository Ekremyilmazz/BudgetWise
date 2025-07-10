const STORAGE_KEY = "budget-data";

export const saveToLocalStorage = (data: any) => {
    try{
        const json = JSON.stringify(data);
        localStorage.setItem(STORAGE_KEY, json);
    } catch (err) {
        console.error("LocalStorage save error:", err);
    }
};

export const loadFromLocalStorage = () => {
    try{
        const json = localStorage.getItem(STORAGE_KEY);
        return json ? JSON.parse(json) : undefined;
    } catch (err) {
        console.error("LocalStorage load error:", err);
        return undefined;
    }
}