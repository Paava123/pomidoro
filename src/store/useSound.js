
import { defineStore } from 'pinia'

export const useSoundStore = defineStore('sound', ()=> {
  

let click = new Audio("../public/sound/clickSound.wav");
let bell = new Audio("chime.mp3");

function PlayClickSound(){
    click.cloneNode().play();
}

function PlayBellSound(){
    bell.cloneNode().play();
}

return {PlayClickSound};
},{  persist: true})
