---
tags: [" #medroot"]
aliases: []
roots: [-logist]
forms: [suffix form, noun]
alphabet:: L
definition: [one who specializes in a certain study or science]
---
>[!Note] DEFINITION of -logist
>[[log-]][[-ist]] - one who specializes in a certain study or science
>*see also: [[-ist]], [[-ian]]*
_____
>[!info]+ ETYMOLOGY of -logist
>
_____
>[!example]+ RELATED TERMS to -logist
>
_____
>[!tip]+ DERIVATIONS of -logist
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