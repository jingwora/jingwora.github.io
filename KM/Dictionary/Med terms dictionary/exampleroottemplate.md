---
tags: [" #medroot"]
aliases: []
roots: [{{Title}}]
forms: []
alphabet:: 
definition: []
---
>[!Note] DEFINITION of {{Title}}
>
_____
>[!info]+ ETYMOLOGY of {{Title}}
>
_____
>[!example]+ RELATED TERMS to {{Title}}
>
_____
>[!tip]+ DERIVATIONS of {{Title}}
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name !=[[]].file.name
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