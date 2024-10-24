document.addEventListener("DOMContentLoaded", (event) => {
    // Functions
    function getId(id){
        return(document.getElementById(id));
    }

    function onClick(getvar, f){
        getvar.addEventListener("click", f);
    }

    function redirect(page){
        document.location.href = page;
    }

    // Variables
    const Home = getId('home');
    const YT =  getId('youtube');
    const TTV = getId('twitch');
    const DC =  getId('discord');
    const PAT = getId('patreon');
    const MNY = getId('money');
    const PLUS = getId('more');

    // On Clicks
    onClick(Home, function(){
        redirect("index.html");
    });

    onClick(YT, function(){
        redirect("https://href.li/https://youtube.com/@GvNx?sub_confirmation=1");
    });

    onClick(TTV, function(){
        redirect("https://href.li/https://twitch.tv/SimplyGav");
    });

    onClick(DC, function(){
        redirect("https://href.li/https://dsc.gg/simplygav");
    });

    onClick(PAT, function(){
        redirect("patreon.html");
    });

    onClick(MNY, function(){
        //redirect("https://href.li/https://gavcreator.github.io/donate/");
        redirect("tips.html");
    });

    onClick(PLUS, function(){
        redirect("https://href.li/https://zaap.bio/gav");
    });

    // tips.html
    const TIP1 = getId('TipOpt1');
    const TIP2 = getId('TipOpt2');

    onClick(TIP1, function(){
        redirect("https://href.li/https://streamelements.com/simplygav/tip")
    });

    onClick(TIP2, function(){
        redirect("https://href.li/https://oldpayments.gvnx.xyz/ModifiedOldSite/index.html")
    })
});
