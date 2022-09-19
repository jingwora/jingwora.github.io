---
tags: [" #medroot"]
aliases: []
roots: [lab-]
forms: [combining]
alphabet:: L
definition: [slide, slip]
---
>[!Note] DEFINITION of lab-
>slide, slip
>*see also: [[laps-]]*
_____
>[!info]+ ETYMOLOGY of lab-
>#latin labi, lapsus
_____
>[!example]+ RELATED TERMS to lab-
>
_____
>[!tip]+ DERIVATIONS of lab-
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