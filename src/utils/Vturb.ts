export class Vturb {
    static script: HTMLScriptElement;
  
    static mount = () => {
      this.script = document.createElement('script');
      this.script.src = 'https://scripts.converteai.net/817bd58d-9ef6-4339-97a6-a374233fe748/players/65bc1fc9ba90b10008f9c928/player.js';
      this.script.async = true;
      this.script.type = 'text/javascript';
      this.script.id = 'smartplayer-script-head';
  
      setTimeout(() => {
        document.head.appendChild(this.script);
      }, 1);
    }
  
    static verifyScriptIsLoaded = () => {
      return document.getElementById('smartplayer-script-head');
    }
  
    static unmount = () => {
      if (this.script && this.verifyScriptIsLoaded()) {
        document?.head?.removeChild(this.script);
      }
    }
  }