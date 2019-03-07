const regex = /<\/?[^>]+(>|$)/gmi;

const purgeHTML = (templateString,...expressions) => {
    if(Array.isArray(templateString)){
        templateString = templateString.reduce((prev,next,i)=>{
            return `${prev}${(expressions[i-1]||'')}${next}`
        });
    }else{
        templateString = templateString.concat(expressions.join(''));  
    }
    return replaceByRegex(templateString);
  };

  const replaceByRegex = (stringToConvert) => {
      return stringToConvert.replace(regex,"");
  }

export {purgeHTML};