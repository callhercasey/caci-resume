window.onload=()=>{
    let link= document.createElement("a");
    link.href= "https://my.indeed.com/resume?hl=en&co=US&from=gnav-homepage&_ga=2.123791247.406406944.1646152916-460640292.1645889041";
    let indeedLogo = document.getElementById("indeedLogo");
    let parent= indeedLogo.parentNode;
    parent.replaceChild(link,indeedLogo);
    link.appendChild (indeedLogo);
}


