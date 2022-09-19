---
tags: [" #medroot"]
aliases: []
roots: [laps-]
forms: [combining]
alphabet:: L
definition: [slide, slip]
---
>[!Note] DEFINITION of laps-
>slide, slip
>*see also: [[lab-]]*
_____
>[!info]+ ETYMOLOGY of laps-
>#latin labi, lapsus
_____
>[!example]+ RELATED TERMS to laps-
>
_____
>[!tip]+ DERIVATIONS of laps-
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