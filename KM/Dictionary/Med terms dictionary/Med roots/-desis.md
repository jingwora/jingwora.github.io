---
tags: [" #medroot"]
aliases: []
roots: [-desis]
forms: [combining]
alphabet:: D
definition: [binding]
---
>[!Note] DEFINITION of -desis
>binding
_____
>[!info]+ ETYMOLOGY of -desis
>#greek desis
_____
>[!example]+ RELATED TERMS to -desis
_____
>[!tip]+ DERIVATIONS of -desis
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]