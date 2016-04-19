 var foo : AudioSource;
 
 function Update () {
     
     if (!foo.isPlaying && Time.time >= 75) {
         foo.Play();
     }
 }