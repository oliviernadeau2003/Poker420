export function tr(msg: string, dialogue: boolean = false, cons: boolean = true) {
    if (dialogue)
        alert(msg);
    if (console)
        console.log(msg);
}