function PlayList(){
    this.arr = []
}

PlayList.prototype.add = function(title){
    if(typeof title === "string"){
         this.arr.push(title)
         return this.arr
    }else{
        return "error"
    }
}
PlayList.prototype.play = function(){
    return this.arr[0] + " started to play"
}

PlayList.prototype.stop = function(){
    return this.arr[0] + " stopped"
}
const playlist = new PlayList();
console.log(playlist.add("heyjude"))
console.log(playlist.add("heyj"))
console.log(playlist.play())
console.log(playlist.stop())