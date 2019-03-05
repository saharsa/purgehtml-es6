const regex = /<\/?[^>]+(>|$)/gmi;

const purgeHTML = (templateString,...expressions) => {
    let finalPurgedString = '';
    if(Array.isArray(templateString)){
        templateString.forEach((element,index) => {
            finalPurgedString = finalPurgedString.concat(element.replace(regex, ""));
            if(expressions[index]!=undefined){
                finalPurgedString = finalPurgedString.concat(expressions[index].replace(regex, ""));
            }
        });
    }else{
        finalPurgedString = templateString.replace(regex, "");
    }
    
    return finalPurgedString;
  };

export {purgeHTML};