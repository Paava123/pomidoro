
import { defineStore } from 'pinia'

export const useSoundStore = defineStore('sound', ()=> {
  

let click = new Audio("../public/sound/clickSound.wav");
let bell = new Audio();

function PlayClickSound(){
    click.cloneNode().play();
}

function PlayBellSound(){
    bell.cloneNode().play();
}

return {PlayClickSound};
},{  persist: true})