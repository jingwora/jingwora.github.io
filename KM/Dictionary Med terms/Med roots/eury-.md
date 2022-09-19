---
tags: [" #medroot"]
aliases: [euryn-]
roots: [eury-, euryn-]
forms: [combining]
alphabet:: E
definition: [widen, dilate]
---
>[!Note] DEFINITION of eury-
>widen, dilate
_____
>[!info]+ ETYMOLOGY of eury-
>#greek eurynein
_____
>[!example]+ RELATED TERMS to eury-
>
_____
>[!tip]+ DERIVATIONS of eury-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]