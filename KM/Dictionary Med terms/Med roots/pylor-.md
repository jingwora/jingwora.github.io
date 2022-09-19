---
tags: [" #medroot"]
aliases: []
roots: [pylor-]
forms: [combining]
alphabet:: P
definition: [pylorus]
---
>[!Note] DEFINITION of pylor-
>pylorus
>*see also: [[pyle-]]*
_____
>[!info]+ ETYMOLOGY of pylor-
>#greek pylorus (gate)
_____
>[!example]+ RELATED TERMS to pylor-
>
_____
>[!tip]+ DERIVATIONS of pylor-
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