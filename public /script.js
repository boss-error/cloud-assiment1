 /**/
        let text = document.getElementById('text');
        let sat = document.getElementById('sat');
        let stars = document.getElementById('stars');
        let btn = document.getElementById('btn');
        let mont = document.getElementById('mont');
        let cosmos = document.getElementById('cosmos');
        let forest = document.getElementById('forest');
        let header = document.getElementById('header');

        window.addEventListener('scroll', function() {
            let value = window.scrollY;

            text.style.top = 15 + value * +.2 + '%';
            stars.style.top = value * -1.5 + 'px';
            stars.style.left = value * 5 + 'px';
            sat.style.top = value * -1 + 'px';
            sat.style.left = value * -1 + 'px';
            btn.style.marginTop = value * 1.5 + 'px';
            mont.style.top = value * +.34 + 'px';
            cosmos.style.top = value * .25 + 'px';
            header.style.top = value * .5 + 'px';
        })


 //			function open()     //pk cette algo ne supporte que 3 var ?
        function myFunction() {
            var Bienvenue;
            var time = new Date().getHours();
            if (time < 11) {
                Bienvenue = "c'est encore une belle journée qui commence !";
            } else if (time < 20) { //SINON -hours inferieur 20H
                Bienvenue = "cette journée est plutôt cool !";
                //					document.open.boutton;//putain ça marche mais ça annule myFunction?!!!

            } else {
                Bienvenue = "la soirée s'annonce douce !"; //AUTREMENT write=""

            }

            document.getElementById("hour").innerHTML = Bienvenue; //Appel de mon id=""
        }


        var d = new Date();
        var days = ["dimanche, les autres on l'heure, toi tu as le temps!", "lundi, tendons vers nos objectifs!", "mardi c'est le jour de l'amitié !", "mercredi tous peut arriver !", "jeudi, le week-end s'approche !", "vendredi et demain matin tu est en week-end !", "samedi, on fait quoi aujourd'hui ?"];

        document.getElementById("jour").innerHTML = days[d.getDay()];
