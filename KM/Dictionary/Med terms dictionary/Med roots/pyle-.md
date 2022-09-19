---
tags: [" #medroot"]
aliases: []
roots: [pyle-]
forms: [combining]
alphabet:: P
definition: [portal vein]
---
>[!Note] DEFINITION of pyle-
>portal vein
>*see also: [[pylor-]] (pylorus)*
_____
>[!info]+ ETYMOLOGY of pyle-
>#greek pyle
_____
>[!example]+ RELATED TERMS to pyle-
>
_____
>[!tip]+ DERIVATIONS of pyle-
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