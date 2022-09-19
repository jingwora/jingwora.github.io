---
tags: [" #medroot"]
aliases: [thorax-]
roots: [thorac-, thorax-]
forms: [combining]
alphabet:: T
definition: [chest cavity, pleural cavity]
---
>[!Note] DEFINITION of thorac-
> chest cavity, [[pleur-]]al cavity
>*see also: [[stern-]], [[steth-]] (chest)*
_____
>[!info]+ ETYMOLOGY of thorac-
>#greek thorax, thorakos
_____
>[!example]+ RELATED TERMS to thorac-
>
_____
>[!tip]+ DERIVATIONS of thorac-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]