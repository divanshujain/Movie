 var fo : AudioSource;
 
 function Update () {
     
     if (!fo.isPlaying && Time.time >= 75) {
         fo.Play();
     }
 }