const purgeHTML = (templateString)=>{
    const regex = /<\/?[^>]+(>|$)/gmi;
    const purgedString = templateString.replace(regex,"");
    return purgedString;
}

export {purgeHTML};