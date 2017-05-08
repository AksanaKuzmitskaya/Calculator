export function clickButton(button) {
    console.log("clicked button:", button.buttonName)
    return {
        type: 'BUTTON_CLICKED',
        payload: button 
    };
}