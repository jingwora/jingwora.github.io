---
tags: [" #medroot"]
aliases: [-staxis]
roots: [-staxia, -staxis]
forms: [combining]
alphabet:: S
definition: [dripping, oozing]
---
>[!Note] DEFINITION of -staxia
>dripping, oozing (of blood)
>*see also: [[-rrhea]]*
_____
>[!info]+ ETYMOLOGY of -staxia
>#greek staxis
_____
>[!example]+ RELATED TERMS to -staxia
>
_____
>[!tip]+ DERIVATIONS of -staxia
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]