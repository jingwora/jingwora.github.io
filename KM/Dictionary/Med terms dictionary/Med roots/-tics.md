---
tags: [" #medroot"]
aliases: [-ics]
roots: [-tics]
forms: [suffix, noun]
alphabet:: T
definition: [science (of), study of]
---
>[!Note] DEFINITION of -tics
>forms nouns: science or study of
>*see also: [[-logy]]*
_____
>[!info]+ ETYMOLOGY of -tics
>#greek
_____
>[!example]+ RELATED TERMS to -tics
>
_____
>[!tip]+ DERIVATIONS of -tics
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