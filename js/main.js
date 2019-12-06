window.onload=function(){
    napraviMeni();
    najDestinacije();
    napraviFormuProracunPutovanja();
    napraviKakoFunkcionise();
    napraviFormuBukirajPutovanje();
    napraviKontaktFormu();
    napraviPZaKontaktInformacije();
   document.getElementById("calcucalteBtn").addEventListener("click",proveraProracunForme);
   document.getElementById("bookBtn").addEventListener("click",proveraBukForme);
   document.getElementById("btnKontakt").addEventListener("click",proveraKontaktForme)
   generisiCaptachu();
}
$(document).ready(function(){
    $(window).scroll();
    $(".bukItem").click(function(e){
        e.preventDefault();
        console.log("asf;ljalf");
    });

});

function napraviMeni(){
    var nizStavkiMenija=['Home','Destination','Book','Contact'];

    var nav=document.createElement('nav');
    nav.setAttribute('id','meni');
   

    document.querySelector("#navigacija").appendChild(nav);
    var ispis="<ul>";
    for(let i=0;i<nizStavkiMenija.length;i++){
        ispis+=`<li><a href="#">${nizStavkiMenija[i]}</a></li>`
    }
    ispis+='</ul>';
    nav.innerHTML=ispis;
}

function najDestinacije(){
    var mpd=document.querySelector("#destinacije");
    var nizSlika=['hawaii','london','tokyo','paris','maldives','sydney'];
  var nizTekstaIspodSlike=["Hawaii's  warm tropical climate.","London   the world most important  city.","Tokyo, one of the world's largest cities.","One of the most beautiful cities in the world.","Maldives, where sands are white as the smiles.","Sydney is the most populous city in Australia."]
    var ispis="";
        for(let i=0;i<nizSlika.length;i++){
            ispis+=`
            <div class="col-lg-4 col-md-4 col-sm-6 destinacija">
						<figure>
							
							<img src="images/${nizSlika[i]}.jpg" alt="Destination ${i}" class="img-responsive">
						</figure>
						<div class="fh5co-text">
							<h2>${nizSlika[i].charAt(0).toUpperCase()}${nizSlika[i].substr(1)}</h2>
							<p>${nizTekstaIspodSlike[i]}</p>
							<p><a class="btn btn-primary bukItem" href="#">Book</a></p>
						</div>
					
				</div>`;
        }
        mpd.innerHTML=ispis;
   
}

var destinations=['Choose destination','Hawaii','London','Tokyo','Paris','Maldives','Sydney'];

function napraviFormuProracunPutovanja(){

    var forma=document.createElement("form");
    forma.setAttribute("method","GET");
    forma.setAttribute("id","formaRacunaj");

    var parent=document.querySelector("#formaP");
    parent.appendChild(forma);

    var inputi=['text','dest','textA','textC','date','date','button'];
    var textZaLabelu=['Your name','Destination','Adults','Children','Arrival date','Departure date',''];
    var id=['fullnameTB','destinationDDl','numbAdults','numbChidlren','dateA','dateD','calcucalteBtn'];
    var ispis="";
    for(var i=0;i<inputi.length;i++)
    {
     
        if(inputi[i]=="button"){
            ispis+=napraviDugmeZaRacunanje();
        }
        else if(inputi[i]=="dest"){
            ispis+=`
        <div class="row form-group">
        <div class="col-md-12">
            <label for="${id[i]}">${textZaLabelu[i]}</label>
            <select  id="${id[i]}" class="form-control">
            ${napraviOpcijeZaDDL()}
            </select>
            <span id="${id[i]}Greske"></span>
        </div>
    </div>`;
        }
        
        else if(inputi[i]=="textA" || inputi[i]=="textC"){
            ispis+=`
            <div class="form-group">
                <div class="col-md-6 col-sm-12">
                    <label for="${id[i]}">${textZaLabelu[i]}</label>
                    <input type="${inputi[i]}" id="${id[i]}" class="form-control"/>
                    <span id="${id[i]}Greske"></span>

                </div>
            </div>`;
        }
          else{  
              ispis+=`
            <div class="row form-group">
                <div class="col-md-12">
                    <label for="${id[i]}">${textZaLabelu[i]}</label>
                    <input type="${inputi[i]}" id="${id[i]}" class="form-control"/>
                    <span id="${id[i]}Greske"></span>

                </div>
            </div>`;
    }
    
    
          
    
            
    }
    ispis+=`
            <div class="form-group">
                <div class="col-md-12">
                    <span id="cenaPutovanja"></span>
                </div>
            </div>`;
    
    forma.innerHTML=ispis;
    function napraviOpcijeZaDDL(){
        var rez="";
        for(let i=0;i<destinations.length;i++){
            rez+=`<option value="${destinations[i]}">${destinations[i]}</option>`
        }
            return rez;
    }
   
    function napraviDugmeZaRacunanje(){
        var rez=` 
        <div class="row form-group">
        <div class="col-md-12">
        <input type="${inputi[i]}" id="${id[i]}" class="btn btn-primary btn-block" value="Calculate">
        </div>
    </div>`
        return rez;
    }
    

}
function napraviKakoFunkcionise(){
    var fafaIkonice=['fas fa-search','fas fa-check','fas fa-book'];
    var veciTekst=['Explore','Choose','Book'];
    var pasusi=['Explore our offer of destinations.','Choose destination that you like the most.','Book destination that you choosed.']
    var divUkomeCeSeIspisati=document.querySelector("#kakoFunkcionise");
    var ispis="";
    for(let i=0;i<fafaIkonice.length;i++){
        if(fafaIkonice[i]=='fas fa-book'){
            ispis+=` 
            <div class="col-md-4 col-sm-12">
            <div class="feature-center animate-box" >
                <span class="icon">
                    <i class="${fafaIkonice[i]}"></i>
                </span>
                <h3>${veciTekst[i]}</h3>
                <p>${pasusi[i]}</p>
            </div>
            </div>`;
            }
    
        else{
        ispis+=` 
        <div class="col-md-4 col-sm-6">
        <div class="feature-center animate-box" >
            <span class="icon">
                <i class="${fafaIkonice[i]}"></i>
            </span>
            <h3>${veciTekst[i]}</h3>
            <p>${pasusi[i]}</p>
        </div>
        </div>`;
        }
    }
    divUkomeCeSeIspisati.innerHTML=ispis;
}

function napraviFormuBukirajPutovanje(){
    var parent=document.querySelector("#bukirajPutovanje");
    var forma=document.createElement("form");
    forma.setAttribute("method","GET");
    forma.setAttribute("id","formaBukiraj");
    parent.appendChild(forma);
     var nizInputaZaFormu=['text','text','text','ddl','date','date','captcha','button'];   
    var nizTekstaZaLabelu=['First name','Last name','Email','Destination','Arrival date','Departure date','Verification',''];
    var idElemenata=['fName','lName','emailAdd','destDDL','dateAB','dateDB','verification','bookBtn'];
    

    var ispis="";
    for(let i=0;i<nizInputaZaFormu.length;i++){
        if(nizInputaZaFormu[i]=='captcha'){
            ispis+=`
            <div class="form-group ">
            <div class="col-md-2 col-sm-5">
                <label for="generCaptcha" class="bukFormaLabela">Captcha</label>
                <input type="text" id="generisanaCaptcha" class="form-control bukForma unutar"/>
              

                
            </div>
        </div>
            
            <div class="form-group ">
            <div class="col-md-3 col-sm-7">
                <label for="${idElemenata[i]}" class="bukFormaLabela">${nizTekstaZaLabelu[i]}</label>
                <input type="text" id="${idElemenata[i]}" class="form-control bukForma unutar"/>
                <span id="${idElemenata[i]}Greska"></span>

                
            </div>
        </div>`;
        }else if(nizInputaZaFormu[i]=='button'){
            ispis+=`
            <div class="form-group">
        <div class="col-md-12 col-sm-12 ">
        <label for="${idElemenata[i]}" class="bukFormaLabela">${nizTekstaZaLabelu[i]}</label>
            <input type="${nizInputaZaFormu[i]}" id="${idElemenata[i]}" class="form-control bukForma" value="Book"/>
            <span id="${idElemenata[i]}Greska"></span>

        </div>
    </div>`;
        }
        else if(nizInputaZaFormu[i]=='ddl'){
            ispis+=`<div class="form-group ">
            <div class="col-md-4 col-sm-12 ">
                <label for="${idElemenata[i]}" class="bukFormaLabela">${nizTekstaZaLabelu[i]}</label>
                <select id="${idElemenata[i]}" class="form-control bukForma">
                ${napraviOpcijeZaDDL()}
                </select>
                <span id="${idElemenata[i]}Greska"></span>

            </div>
        </div>`;
        }
        else{
        ispis+=`<div class="form-group">
        <div class="col-md-4 col-sm-12">
            <label for="${idElemenata[i]}" class="bukFormaLabela">${nizTekstaZaLabelu[i]}</label>
            <input type="${nizInputaZaFormu[i]}" id="${idElemenata[i]}" class="form-control bukForma"/>
            <span id="${idElemenata[i]}Greska"></span>

        </div>
    </div>`;
        }
    }
   

    forma.innerHTML=ispis;

}
 function napraviOpcijeZaDDL(){
        var rez="";
        for(let i=0;i<destinations.length;i++){
            rez+=`<option value="${destinations[i]}">${destinations[i]}</option>`
        }
            return rez;
    }


function napraviKontaktFormu(){
    var parent=document.querySelector("#kontaktForma");
    var forma=document.createElement("form");
    forma.setAttribute("method","GET");
    forma.setAttribute("id","kontaktForm");
    parent.appendChild(forma);
     var nizInputa=['text','text'];
     var labele=['Your name','Email'];
     var id=['nameContact','emailContact'];
    var ispis="";
    for(let i=0;i<nizInputa.length;i++){
        ispis+=` <div class="row form-group">
        <div class="col-md-12">
            <label for="${id[i]}"class="labK">${labele[i]}</label>
            <input type="${nizInputa[i]}" id="${id[i]}" class="form-control kontF">
            <span id="${id[i]}Error"></span>
        </div>
    </div>`;
    }
    ispis+=`<div class="row form-group">
    <div class="col-md-12">
        <label for="taKontakt" class="labK">Message</label>
        <textarea id="taKontakt" class="form-control kontF"cols="20" rows="10"></textarea>
    </div>
</div>
<div class="form-group">
        <div class="col-md-4 col-sm-12 ">
        <label for="btnKontakt"></label>
            <input type="button" id="btnKontakt" class="form-control kontF" value="Send"/>
        </div>
    </div>
`;
    forma.innerHTML=ispis;


}

function napraviPZaKontaktInformacije(){
    var parent=document.querySelector("#kInformacije");
    var nizFafaIkonica=['<i class="fas fa-map-marker-alt"></i>','<i class="fas fa-phone-alt"></i>','<i class="fas fa-envelope"></i>'];
    var nizTekstova=['California, USA','+2 392 3929210','info@travel.com'];
    var ispis="<ul class='col-md-12'>";
    for(let i=0;i<nizFafaIkonica.length;i++){
        ispis+=`<li class=""><a href="#"><span class="faIkonica">${nizFafaIkonica[i]}</span><span>${nizTekstova[i]}</span></a></li>`;
    }
    ispis+="</ul>"
    parent.innerHTML+=ispis;
}

$(window).scroll(function(){
    if($(this).scrollTop()>50){
        $("#zaglavlje").addClass('spustanjeMenija');
        $("#meni ul li a").addClass('beliTekst');
    }
    else{
        $("#zaglavlje").removeClass('spustanjeMenija');
        $("#meni ul li a").removeClass('beliTekst');
    }
    if($(this).scrollTop() > 700){
        $(".strelica").removeClass("neVidiSe");
        $(".strelica").addClass("vidiSe");
    }
    else{
       
       
        $(".strelica").removeClass("vidiSe");
        $(".strelica").addClass("neVidiSe");


    }
});

$(".hamb").on('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    $('#meni ul').slideToggle();
});

//Regularni Izrazi

function proveraProracunForme(){
    var ime,destinacija,brojOdraslih,brojDece,datumDolaska,datumOdlaska;
    var imeG,brOdG,brDecG,destG,datumDolG,datumOdlG;
    imeG= document.querySelector("#fullnameTBGreske");
    brOdG=document.querySelector("#numbAdultsGreske");
    brDecG=document.querySelector("#numbChidlrenGreske");
    destG=document.querySelector("#destinationDDlGreske");
    datumDolG=document.querySelector("#dateAGreske");
    datumOdlG=document.querySelector("#dateDGreske");
    var dobro=true;

     ime=document.getElementById("fullnameTB").value;
     var reIme=/^[A-ZŠĐŽĆČ][a-z]{2,20}(\s[A-Z][a-z]{2,20})*\s[A-ZŠĐŽĆČ][a-z]{2,30}(\s[A-ZŠĐŽĆČ][a-z]{2,30})*$/;
     brojOdraslih=document.querySelector("#numbAdults").value;
     brojDece=document.querySelector("#numbChidlren").value;
     reBrojOdraslihiDece=/^[0-9][\d]*$/;
     
     destinacija=document.querySelector("#destinationDDl").value;
    
     datumDolaska=document.querySelector("#dateA").value;
     datumOdlaska=document.querySelector("#dateD").value;
    
     if(ime==""){
     imeG.innerHTML="Required field!";
     dobro=false;
     
     }
     else{
         if(reIme.test(ime)){
            imeG.innerHTML='';
            dobro=true;

            
         }
         else{
            imeG.innerHTML='Invaild format!';
            dobro=false;

         }
     }
     if(destinacija=='Choose destination'){
        destG.innerHTML="You need to choose some destination!";
        dobro=false;
    }
        else{
            destG.innerHTML="";
            dobro=true;

        }
     
    if(brojOdraslih ==""){
        brOdG.innerHTML="Required!"
        dobro=false;
    }
    else{
        if(reBrojOdraslihiDece.test(brojOdraslih)){
        brOdG.innerHTML='';
        dobro=true;

        
        }
        else{
        brOdG.innerHTML='Invalid format';
        dobro=false;
        }


    }
            
    if(brojDece ==""){
        brDecG.innerHTML="Required!"
        dobro=false;

    }
    else{
        if(reBrojOdraslihiDece.test(brojDece))
        {
            brDecG.innerHTML='';
            dobro=true;

        }
        else{
        brDecG.innerHTML='Invalid format';
        dobro=false;}
    }
    if(datumDolaska==""){
        datumDolG.innerHTML="Required field";
        dobro=false;
    }
    else{
        datumDolG.innerHTML="";
        if(datumDolaska>datumOdlaska){
            datumDolG.innerHTML="Date of arrival cant be greater than date of departure!";
            datumOdlG.innerHTML="Date of departure cant be less than date of arrival!";
            dobro=false;
            }
            else{
               datumDolG.innerHTML="";
               datumOdlG.innerHTML="";
               dobro=true;

            }

    }
    if(datumOdlaska==""){
        datumOdlG.innerHTML="Required field";
        dobro=false;
    }
    else{
        datumOdlG.innerHTML="";
        if(datumDolaska>datumOdlaska){
            datumDolG.innerHTML="Date of arrival cant be greater than date of departure!";
            datumOdlG.innerHTML="Date of departure cant be less than date of arrival!";
            dobro=false;
            }
            else{
               datumDolG.innerHTML="";
               datumOdlG.innerHTML="";
               dobro=true;

            }
    }
    if(dobro){
      
        document.querySelector("#cenaPutovanja").innerHTML="Total cost of the trip:"+ izracunaj()+"$";
        

    }
    
        

    function izracunaj(){
        var destinacija=document.querySelector("#destinationDDl").value;
        var brOdr=brojOdraslih;
        var brDece=brojDece;
        var datumd=new Date(datumDolaska);
        var datumo=new Date(datumOdlaska);
        var brojDana=datumo.getDate()-datumd.getDate();
        var destinacije=['Hawaii','London','Tokyo','Paris','Maldives','Sydney'];
        var cenePoNocenjuZaOdrasle=[400,220,120,180,250,280];
        var cenePoNocenjuZaDecu=[180,100,80,95,140,190];

        var cena=0;

        for(let i=0;i<destinacije.length;i++){
            if(destinacija==destinacije[i]){
                cena=brojDana*((brOdr*cenePoNocenjuZaOdrasle[i])+(brDece*cenePoNocenjuZaDecu[i]))
            }
        }
        return cena;
       
        
        
    }

}
function proveraBukForme(){

    var fname,lname,email,destination,dateA,dateD,captcha;
    var fnameG,lnameG,emailG,destinationG,dateAG,dateDG,captchaG;

    fname=document.querySelector("#fName").value;
    lname=document.querySelector("#lName").value;
    email=document.querySelector("#emailAdd").value;
    destination=document.querySelector("#destDDL").value;
    dateA=document.querySelector("#dateAB").value;
    dateD=document.querySelector("#dateDB").value;
    captcha=document.querySelector("#verification").value;

    fnameG=document.querySelector("#fNameGreska");
    lnameG=document.querySelector("#lNameGreska");
    emailG=document.querySelector("#emailAddGreska");
    destinationG=document.querySelector("#destDDLGreska");
    dateAG=document.querySelector("#dateABGreska");
    dateDG=document.querySelector("#dateDBGreska");
    captchaG=document.querySelector("#verificationGreska");

    reFnameLname=/^[A-ZŠĐŽČĆ][a-zšđžćč]{2,20}(\s[A-ZŠĐŽČĆ][a-zšđžćč]{2,20})*$/;
    if(fname=="")
    {
        fnameG.innerHTML="Required field";
    }
    else{
        fnameG.innerHTML="";
        if(reFnameLname.test(fname)){
            fnameG.innerHTML="";

        }
        else{
            fnameG.innerHTML="Invalid format";

        }


    }

   if(lname==""){
    lnameG.innerHTML="Required field";

   }
   else{
    lnameG.innerHTML="";
    if(reFnameLname.test(lname)){
        lnameG.innerHTML="";

    }
    else{
        lnameG.innerHTML="Invalid format";

    }
   }
   reEmail=/^[\w\-\.]+\@[a-z]{3,7}\.[a-z]{2,4}$/;
   if(email=="")
   {
       emailG.innerHTML="Required field";
   }
   else{
    emailG.innerHTML="";
    if(reEmail.test(email)){
        emailG.innerHTML="";

    }
    else{
        emailG.innerHTML="Invalid format";

    }
    
   }
   if(destination=="Choose destination"){
       destinationG.innerHTML="Required field";
   }
   else{
    destinationG.innerHTML="";
       
   }
   if(dateA==""){
       dateAG.innerHTML="Required field";
   }
   else{
    dateAG.innerHTML="";

       if(dateA>dateD)
       {
           dateAG.innerHTML=" Arrival date cant be > than date of departure!";
       }
       else{
        dateAG.innerHTML="";
       }
   }
   if(dateD==""){
    dateDG.innerHTML="Required field";
}
else{
    dateDG.innerHTML="";

    if(dateD<dateA)
    {
        dateDG.innerHTML=" Departure date cant be < than date of arrival!";
    }
    else{
        dateDG.innerHTML="";
    }
}

if(captcha==""){
    captchaG.innerHTML="Verification is required";
}
else{
    if(captcha==kapca)
    captchaG.innerHTML="";
    else{
        captchaG.innerHTML="Type correct captcha";
    }

}

    



}
var kapca;
function generisiCaptachu(){
   var nizMalihSlova=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   var nizVelikihSlova=[];
   

   for(let i=0;i<nizMalihSlova.length;i++){
       nizVelikihSlova[i]=nizMalihSlova[i].toUpperCase();
   }
   var rez="";
   for(let i=0;i<2;i++){
    var slucBrojMslova=Math.ceil(Math.random()*26);
    var slucBrojVslova=Math.ceil(Math.random()*26);
    var slucBroj=Math.ceil(Math.random()*10);

        rez+=nizVelikihSlova[slucBrojVslova]+nizMalihSlova[slucBrojMslova]+slucBroj;
   }
   document.getElementById("generisanaCaptcha").value=rez;
   kapca=rez;

}

function proveraKontaktForme(){
    var imePrezime,email,poruka;
    var imePrezimeG,emailG,porukaG;

    imePrezime=document.querySelector("#nameContact").value;
    email=document.querySelector("#emailContact").value;
    poruka=document.querySelector("#taKontakt").value;

    imePrezimeG=document.querySelector("#nameContactError");
    emailG=document.querySelector("#emailContactError");

    var reImePrezime=/^[A-ZŠĐŽĆČ][a-zšđžčć]{2,20}(\s[A-ZŠĐŽĆČ][a-zšđžčć]{2,20})*\s[A-ZŠĐŽĆČ][a-zšđžčć]{2,30}(\s[A-ZŠĐŽĆČ][a-zšđžčć]{2,30})*$/;
     var reEmail=/^[\w\-\.]+\@[a-z]{3,7}\.[a-z]{2,4}$/;
     if(imePrezime==""){
        imePrezimeG.innerHTML="Required field";
     }
     else{
        if(reImePrezime.test(imePrezime)){
            imePrezimeG.innerHTML="";

        }
        else{
            imePrezimeG.innerHTML="";

        }
     }
     if(email==""){
        emailG.innerHTML="Required field";

     }
     else{
         if(reEmail.test(email)){
            emailG.innerHTML="";

         }
         else{
            emailG.innerHTML="Invalid format";

         }
     }


}



