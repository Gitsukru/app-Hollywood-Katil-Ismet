export class ResetValue{
    reset(...args){
        args.forEach(item => {
            item.value = "";
        })
    }
}